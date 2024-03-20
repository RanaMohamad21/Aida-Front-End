/* eslint-disable react/prop-types */
import {  useState } from "react";
import upload from "../assets/icons/upload.png";

// eslint-disable-next-line react/prop-types
function Uploader({ name, setFile}) {
  const [fileStatus, setFileStatus] = useState("No file chosen");
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setFileStatus(file.name);
  //   onFileChange(name, file);
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setFileStatus(file.name)
    
  
}

  return (
    <div className="relative mt-4 flex">
      <label className={`flex appearance-button text-white  hover:bg-blue-700 py-1 px-4 rounded-lg cursor-pointer ${fileStatus === "No file chosen" ?'w-[148px] bg-teal':'w-[180px] bg-FlamingoPink'}`}>
        <span className="pt-[5px] pr-2">
          <img src={upload} alt="Upload" />
        </span>{" "}
        {fileStatus === "No file chosen" ?  "Choose file": "Choose another"}
        <input
          type="file"
          name={name}
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      <span className="my-auto pl-3 text-FlamingoPink">{fileStatus}</span>
    </div>
  );
}

export default Uploader;
// eslint-disable-next-line react/prop-types
// function Uploader({ name, onFileChange }) {
//   const [fileStatus,setFileStatus] = useState("No file chosen");
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFileStatus(file.name);
//     onFileChange(name, file);
//   };

//   return (
//     <div className="relative mt-4 flex">
//       <label className="flex appearance-button text-white bg-teal hover:bg-blue-700 py-1 px-4 rounded-lg cursor-pointer w-[148px]">
//         <span className="pt-[5px] pr-2">
//           <img src={upload} alt="Upload" />
//         </span>{" "}
//         Choose file
//         <input
//           type="file"
//           name={name}
//           onChange={handleFileChange}
//           accept=".pdf"
//           className="hidden"
//         />
//       </label>
//       <span>{fileStatus}</span>
//     </div>
//   );
// }

// export default Uploader;
