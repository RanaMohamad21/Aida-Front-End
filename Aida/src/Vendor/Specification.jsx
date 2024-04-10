/* eslint-disable react/prop-types */
function Specification({ name, specification }) {
  return (
    <div className="  capitalize border-t-[3px] border-t-gray border-l-gray  border-l-[3px] p-3  rounded-3xl ml-1 text-teal   ">
      <p>specification name</p>
      <input
        type="text"
        placeholder={name}
        name={name}
        className="specificationInput"
      />
      <p>specification value</p>
      <input
        type="text"
        placeholder={specification}
        name={specification}
        className="specificationInput"
      />
    </div>
  );
}

export default Specification;
