// import { useShelves } from "../Contexts/VendorShelves";
import { useEffect, useState } from "react";
import InfoAndPricing from "./InfoAndPricing";
import SpecificationsCollection from "./SpecificationsCollection";
import VendorNavBar from "./VendorNavBar";
import tag from "../assets/vendor/products/tag.png";
import Tag from "./Tag";
import add from "../assets/vendor/products/add.png";
import descriptionTag from "../assets/vendor/products/pen.png";
import TitleAndLogo from "../UI/TitleAndLogo";
import TextEditor from "../UI/TextEditor";
import Background from "../assets/vendor/products/header.jpeg";
import Button from "../UI/Button";

/// 
function AddProductPage() {
  // const { updateShelves, shelfID } = useShelves();
  // function handleAddProduct() {}

  // console.log("Shelf ID: ", shelfID);
  const [specifications, setSpecifications] = useState([
    { name: "Color", specification: "Red" },
    { name: "Color", specification: "Red" },
    { name: "Color", specification: "Red" },
  ]);

  const [tags, setTags] = useState([
    "Electronic Devices",
    "Dual SIM",
    "Exclusive",
  ]);
  const [newTag, setNewTag] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  function handleDeleteImage(index) {
    setPreviewImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  }

  function handleDeleteTag(index) {
    setTags((prevTags) => {
      const newTags = [...prevTags];
      newTags.splice(index, 1);
      return newTags;
    });
  }
  function handleAddTag() {
    setTags((prev) => [...prev, newTag]);
    setNewTag("");
  }

  useEffect(() => {
    if (!images) return;

    const newPreviewImages = [];
    for (let i = 0; i < images.length && i < 5; i++) {
      const objectURL = URL.createObjectURL(images[i]);
      newPreviewImages.push(objectURL);
    }
    setPreviewImages(newPreviewImages);

    // Cleanup function
    return () => {
      newPreviewImages.forEach(URL.revokeObjectURL);
    };
  }, [images, setPreviewImages]);

  return (
    <>
      <VendorNavBar />
      <form className=" mb-10">
        <div className=" grid-rows-[auto,1fr] mb-14">
          {/* Upload Image  */}

          <div
            className={` h-[500px] relative border-t-[8px] border-t-white`}
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              {/* <div className="text-center">
              <button className="bg-white text-teal
              p-4 text-3xl  mb-2">Upload Image</button>
              
              </div> */}
              {previewImages && (
                // <div className="flex gap-2">
                <div className=" grid-cols-5 grid gap-3 px-1">
                  {previewImages.map((pic, index) => {
                    return (
                      <div
                        key={index}
                        className="p-4 border-gray border-solid border text-center  "
                      >
                        <p
                          onClick={() => handleDeleteImage(index)}
                          className=" cursor-pointer mb-1"
                        >
                          X
                        </p>
                        <img src={pic} className="" />
                      </div>
                    );
                  })}
                </div>
              )}
              <div>
                <label htmlFor="uploadImageInput" className="cursor-pointer">
                  <input
                    id="uploadImageInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      e.preventDefault();
                      if (e.target.files && e.target.files.length > 0) {
                        const newImages = [...images];
                        for (
                          let i = 0;
                          i < e.target.files.length &&
                          e.target.files.length &&
                          i < 5;
                          i++
                        ) {
                          newImages.push(e.target.files[i]);
                        }
                        setImages(newImages);
                      }
                    }}
                    multiple
                  />
                  <div className="bg-white text-teal p-4 text-3xl mb-2 rounded-lg">
                    Upload Image
                  </div>
                  <p className=" text-xs text-center ">
                    Thumbnail image size 240*320
                    <br /> Hero image size 550*600 px <br /> You can add up to 5
                    images
                  </p>
                </label>
              </div>
            </div>
          </div>

          {/* Item Information */}
          <InfoAndPricing />
          <SpecificationsCollection
            specifications={specifications}
            setSpecifications={setSpecifications}
          />

          {/* Tags */}
          <TitleAndLogo imgURL={tag}>Tags</TitleAndLogo>
          <div className="pl-4">
            <div className="  capitalize border-t-[3px] border-t-gray border-l-gray  border-l-[3px] p-3  rounded-3xl ml-1 text-teal w-fit  ">
              <div className="sm:flex gap-2">
                {tags.map((tag, index) => {
                  return (
                    <Tag key={index} onClick={() => handleDeleteTag(index)}>
                      {tag}
                    </Tag>
                  );
                })}
              </div>
              <div className=" flex mt-2 gap-1">
                <input
                  type="text"
                  placeholder="Tag name"
                  name="TagName"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="border border-solid border-black text-black px-1 h-7"
                />{" "}
                <span>
                  <img
                    src={add}
                    className=" h-7 cursor-pointer"
                    onClick={handleAddTag}
                  />
                </span>
              </div>
            </div>
          </div>

          <p className=" text-teal mt-2 pl-4">
            Tags help customers find your product when searching, you can add up
            to five tags so make sure they best describe your product.
          </p>

          {/* Description */}
          <TitleAndLogo imgURL={descriptionTag} style="mt-10">
            Description
          </TitleAndLogo>
          <TextEditor text={description} setText={setDescription} />
        </div>
        <Button background="FlamingoPink" width="w-1/3">
          Create
        </Button>
      </form>
    </>
  );
}

export default AddProductPage;
