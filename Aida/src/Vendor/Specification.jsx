/* eslint-disable react/prop-types */
function Specification({
  index,
  spec,
  handleDeleteSpecification,
  updateSpecification,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSpecification(index, name, value);
  };

  return (
    <div className="  capitalize border-t-[3px] border-t-gray border-l-gray  border-l-[3px] p-3  rounded-3xl ml-1 text-teal   ">
      <p>specification name</p>
      <input
        type="text"
        placeholder="Color"
        name="name"
        value={spec.name}
        className="specificationInput"
        onChange={handleChange}
      />
      <p>specification value</p>
      <input
        type="text"
        placeholder="Red"
        name="specification"
        value={spec.specification}
        className="specificationInput"
        onChange={handleChange}
      />
      <button
        className="bg-red-500 p-1 text-FlamingoPink rounded-md block"
        onClick={handleDeleteSpecification}
      >
        Remove
      </button>
    </div>
  );
}

export default Specification;

// /* eslint-disable react/prop-types */function Specification({ index, register, handleRemoveSpec }) {
//   return (
//     <div className="  capitalize border-t-[3px] border-t-gray border-l-gray  border-l-[3px] p-3  rounded-3xl ml-1 text-teal   ">
//       <p>specification name</p>
//       <input
//         type="text"
//         placeholder="Color"
//         {...register(`specifications[${index}].name`)}
//       />
//       <p>specification value</p>
//       <input
//         type="text"
//         placeholder= "Red"
//         {...register(`specifications[${index}].specification`)}
//       />
//       <button
//         className="bg-red-500 p-1 text-white rounded-md"
//         onClick={() => handleRemoveSpec(index)}
//       >
//         Remove
//       </button>
//     </div>
//   );
// }

// export default Specification;

const handleNameChange = (e) => {
  updateSpecifications((prevSpecs) => {
    const newSpecs = [...prevSpecs];
    if (newSpecs[index]) {
      // Check if newSpecs[index] exists
      newSpecs[index].name = e.target.value || "";
    }
    return newSpecs;
  });
};

const handleSpecificationChange = (e) => {
  updateSpecifications((prevSpecs) => {
    const newSpecs = [...prevSpecs];
    if (newSpecs[index]) {
      // Check if newSpecs[index] exists
      newSpecs[index].specification = e.target.value || "";
    }
    return newSpecs;
  });
};
