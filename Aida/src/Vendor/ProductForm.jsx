import React, { useEffect, useState } from "react";
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
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import PropTypes from "prop-types";
import CustomAlert from "../UI/CustomAlert";
import axios from "axios";

const maxImagesAllowed = 5;

function ProductForm({
  pDescription,
  pTags,
  pSpecifications,
  pImages,
  pHasDiscount = false,
  initialProduct
}) {
  const [showAlert, setShowAlert] = useState(false);
  const { register, handleSubmit, control, getValues, setValue, watch } = useForm({
    defaultValues: initialProduct || {},
  });

  const [images, setImages] = useState(pImages || []);
  const [previewImages, setPreviewImages] = useState(pImages || []);
  const [tags, setTags] = useState(pTags || ["Add tags here"]);
  const [newTag, setNewTag] = useState("");
  const [description, setDescription] = useState(pDescription || "");
  const [specifications, setSpecifications] = useState(pSpecifications || [{ name: "", specification: "" }]);

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

  const createProduct = async (productData, authToken) => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/product', productData, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > maxImagesAllowed) {
        setShowAlert(true);
        e.value = "";
      } else {
        const newImages = [...images];
        for (let i = 0; i < e.target.files.length && i < 5; i++) {
          newImages.push(e.target.files[i]);
        }
        setImages(newImages);
      }
    }
  };

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

    return () => {
      newPreviewImages.forEach(URL.revokeObjectURL);
    };
  }, [images, setPreviewImages]);

  const onSubmit = async (data) => {
    const authToken = localStorage.getItem("token");
    const productData = {
      ...data,
      description,
      tags: tags.map((tag, index) => ({
        tagName: tag
      })),
      specifications,
      images, // Assuming you handle images upload separately or include image URLs here
    };

    try {
      const response = await createProduct(productData, authToken);
      console.log("Product created successfully:", response);
      // Handle success (e.g., redirect to product list, show success message, etc.)
    } catch (error) {
      console.error("Error creating product:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <VendorNavBar />
      <form className="mb-10" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="grid-rows-[auto,1fr] mb-14">
          {showAlert && (
            <CustomAlert
              message={`You can only select up to ${maxImagesAllowed} images.`}
              onClose={() => setShowAlert(false)}
            />
          )}
          <div className={`h-[500px] relative border-t-[8px] border-t-white`} style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              {previewImages && (
                <div className="grid-cols-5 grid gap-3 px-1">
                  {previewImages.map((pic, index) => (
                    <div key={index} className="p-4 border-gray border-solid border text-center">
                      <p onClick={() => handleDeleteImage(index)} className="cursor-pointer mb-1">
                        X
                      </p>
                      <img src={pic} className="" />
                    </div>
                  ))}
                </div>
              )}
              <div>
                <label htmlFor="uploadImageInput" className="cursor-pointer">
                  <input
                    id="uploadImageInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    {...register("images[]")}
                    onChange={handleImageChange}
                    multiple
                  />
                  <div className="bg-white text-teal p-4 text-3xl mb-2 rounded-lg">
                    Upload Image
                  </div>
                  <p className="text-xs text-center">
                    Thumbnail image size 240*320<br /> Hero image size 550*600 px <br /> You can add up to 5 images
                  </p>
                </label>
              </div>
            </div>
          </div>

          <InfoAndPricing register={register} watch={watch} setValue={setValue} getValues={getValues} pHasDiscount={pHasDiscount} />
          <SpecificationsCollection specifications={specifications} setSpecifications={setSpecifications} />

          <TitleAndLogo imgURL={tag}>Tags</TitleAndLogo>
          <div className="pl-4">
            <div className="capitalize border-t-[3px] border-t-gray border-l-gray border-l-[3px] p-3 rounded-3xl ml-1 text-teal w-fit">
              <div className="sm:flex gap-2">
                {tags.map((tag, index) => (
                  <Tag key={index} onClick={() => handleDeleteTag(index)}>
                    {tag}
                  </Tag>
                ))}
              </div>
              <div className="flex mt-2 gap-1">
                <input
                  type="text"
                  placeholder="Tag name"
                  name="TagName"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="border border-solid border-black text-black px-1 h-7"
                />
                <span>
                  <img src={add} className="h-7 cursor-pointer" onClick={handleAddTag} />
                </span>
              </div>
            </div>
          </div>

          <p className="text-teal mt-2 pl-4">
            Tags help customers find your product when searching, you can add up to five tags so make sure they best describe your product.
          </p>

          <TitleAndLogo imgURL={descriptionTag} style="mt-10">
            Description
          </TitleAndLogo>
          <TextEditor value={description} setValue={setDescription} />
        </div>

        <div className="flex mb-10">
          <input
            type="submit"
            value="Create"
            className="bg-FlamingoPink text-white w-1/3 rounded-md h-8 uppercase my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center justify-center pt-1 mx-auto"
          />
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default ProductForm;

ProductForm.propTypes = {
  pDescription: PropTypes.string,
  pHasDiscount: PropTypes.bool,
  pTags: PropTypes.arrayOf(PropTypes.string),
  pSpecifications: PropTypes.arrayOf(PropTypes.shape({
    attributeName: PropTypes.string.isRequired,
    attributeValue: PropTypes.string.isRequired
  })),
  pImages: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })),
  initialProduct: PropTypes.object.isRequired,
};
