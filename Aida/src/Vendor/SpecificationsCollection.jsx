/* eslint-disable react/prop-types */
import Specification from "./Specification";
import Tags from "../assets/vendor/products/filter.png";
import add from "../assets/UI/addition.png";
import TitleAndLogo from "../UI/TitleAndLogo";
function SpecificationsCollection({ specifications, setSpecifications }) {
  const handleAddSpec = (e) => {
    e.preventDefault();
    setSpecifications((prevSpec) => [
      ...prevSpec,
      { name: "", specification: "" },
    ]);
  };

  const handleDeleteSpecification = (index) => {
    setSpecifications((prevSpec) => {
      const updatedSpecs = prevSpec.filter((spec, idx) => idx !== index);
      return updatedSpecs;
    });
  };

  const updateSpecification = (index, name, value) => {
    setSpecifications((prevSpec) => {
      const updatedSpecs = [...prevSpec];
      updatedSpecs[index][name] = value;
      return updatedSpecs;
    });
  };
  // function handleDeleteSpec( index) {
  //   setSpecifications(prev=>prev.filter((specIndex)=>{return index !== specIndex})

  // }
  return (
    <>
      <TitleAndLogo imgURL={Tags}>Specification</TitleAndLogo>
      <div className="grid sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-10 mx-2">
        {specifications.map((spec, index) => {
          return (
            <Specification
              key={index}
              index={index}
              spec={spec}
              handleDeleteSpecification={() => handleDeleteSpecification(index)}
              updateSpecification={updateSpecification}
            />
          );
        })}
      </div>
      <button
        className=" bg-teal flex p-2 gap-2 text-white font-semibold mt-4 ml-3 mb-10 "
        onClick={handleAddSpec}
      >
        {" "}
        add specification{" "}
        <span>
          <img src={add} className=" w-4 mt-1" />
        </span>
      </button>
    </>
  );
}

export default SpecificationsCollection;
