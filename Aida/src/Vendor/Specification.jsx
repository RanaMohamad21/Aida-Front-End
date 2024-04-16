/* eslint-disable react/prop-types */function Specification({ index, register, handleRemoveSpec }) {
  return (
    <div className="  capitalize border-t-[3px] border-t-gray border-l-gray  border-l-[3px] p-3  rounded-3xl ml-1 text-teal   ">
      <p>specification name</p>
      <input
        type="text"
        placeholder="Color"
        {...register(`specifications[${index}].name`)}
      />
      <p>specification value</p>
      <input
        type="text"
        placeholder= "Red"
        {...register(`specifications[${index}].specification`)}
      />
      <button
        className="bg-red-500 p-1 text-white rounded-md"
        onClick={() => handleRemoveSpec(index)}
      >
        Remove
      </button>
    </div>
  );
}

export default Specification;
