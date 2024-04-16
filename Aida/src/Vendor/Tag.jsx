import deleteTag from "../assets/UI/cross.png";
function Tag({ children, index, onClick }) {
  return (
    <div className=" text-white w-fit p-1 flex bg-teal gap-1 rounded-md font-thin mb-2">
      {children}{" "}
      <span onClick={() => onClick()}>
        <img src={deleteTag} className="w-4 my-[5px] cursor-pointer" />
      </span>
    </div>
  );
}

export default Tag;
