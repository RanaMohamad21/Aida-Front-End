import upload from "../assets/icons/upload.png";
function Uploader({ fileStatus }) {
  return (
    <div className="relative mt-4 flex">
      <label className="flex appearance-button text-white bg-teal  hover:bg-blue-700 py-1 px-4 rounded-lg cursor-pointer w-[148px]">
        <span className="pt-[5px] pr-2">
          <img src={upload} />
        </span>{" "}
        Choose file
        <input
          type="file"
          name="myfile"
          accept=".pdf"
          className="hidden
      "
        />
      </label>
      <span className="my-auto mx-2">{fileStatus}</span>
    </div>
  );
}

export default Uploader;
