/* eslint-disable react/prop-types */
import Specification from "./Specification";
import Tags from "../assets/vendor/products/tag.png";
import add from "../assets/UI/addition.png";
function SpecificationsCollection({ specifications, setSpecifications }) {
  function handleAddSpec(e) {
    e.preventDefault();
    setSpecifications((prevSpec) => [
      ...prevSpec,
      { name: "", specification: "" },
    ]);
  }
  return (
    <>
      <div className=" flex gap-3 my-2 text-FlamingoPink font-semibold text-lg">
        <span>
          <img src={Tags} />
        </span>
        <p >
          Specification
        </p>
      </div>
      <div className="grid sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-10 mx-2">
        {specifications.map((spec, index) => {
          return (
            <Specification
              name={spec.name}
              specification={spec.specification}
              key={index}
            />
          );
        })}
      </div>
      <button
        className=" bg-teal flex p-2 gap-2 text-white font-semibold my-4 ml-3"
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
