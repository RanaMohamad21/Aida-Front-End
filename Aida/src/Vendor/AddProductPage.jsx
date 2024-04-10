// import { useShelves } from "../Contexts/VendorShelves";
import { useState } from "react";
import InfoAndPricing from "./InfoAndPricing";
import SpecificationsCollection from "./SpecificationsCollection";
import VendorNavBar from "./VendorNavBar";
import tag from "../assets/vendor/products/tag.png";
import Tag from "./Tag";
import add from "../assets/vendor/products/add.png";

function AddProductPage() {
  // const { updateShelves, shelfID } = useShelves();
  // function handleAddProduct() {}

  // console.log("Shelf ID: ", shelfID);
  const [specifications, setSpecifications] = useState([
    { name: "Color", specification: "Red" },
    { name: "Color", specification: "Red" },
    { name: "Color", specification: "Red" },
  ]);

  const [tags, setTags] = useState(["Electronic Devices", "Dual SIM", "Exclusive"]);
  const [newTag, setNewTag] = useState("");
  function handleDeleteTag(index){
    setTags(prevTags => {
      const newTags = [...prevTags];
      newTags.splice(index, 1);
      return newTags;
    });
  }
  function handleAddTag(){
    setTags(prev=>[...prev, newTag]);
    setNewTag("");
  }

  
  
  return (
    <>
      <VendorNavBar />
      <form>
        <div className=" grid-rows-[auto,1fr] mb-20 ">
          {/* Upload Image  */}
          <div className="bg-black">Upload Image</div>

          {/* Item Information */}
          <div>
            <InfoAndPricing />
            <SpecificationsCollection
              specifications={specifications}
              setSpecifications={setSpecifications}
            />

            {/* Tags */}
            <div className=" flex gap-3 my-2  text-FlamingoPink font-semibold text-lg">
              <img src={tag} />
              <p>Tags</p>
            </div>
            <div>
              <div className="  capitalize border-t-[3px] border-t-gray border-l-gray  border-l-[3px] p-3  rounded-3xl ml-1 text-teal w-fit  ">
                <div className="sm:flex gap-2">
                {tags.map((tag,index)=>{
                  return <Tag key={index} onClick = {()=>handleDeleteTag(index)}>{tag}</Tag>
                })}
                </div>
                <div className=" flex mt-2 gap-1">

                <input type="text" placeholder="Tag name" name="TagName" value={newTag} onChange ={(e)=>setNewTag(e.target.value)} className="border border-solid border-black text-black px-1 h-7" />{" "}
                <span >
                  <img src={add} className=" h-7 cursor-pointer" onClick={handleAddTag}/>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProductPage;
