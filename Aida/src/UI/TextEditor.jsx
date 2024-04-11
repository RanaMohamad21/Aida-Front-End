import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
  ],
};

function TextEditor({ text, setText }) {
  const [isFocused, setIsFocused] = useState(false);
  const editorRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClickPlaceholder = () => {
    editorRef.current.focus();
  };

  return (
    <div
      className={`relative ${isFocused || text ? "" : "placeholder-text"} h-64 lg:w-1/2 pl-4 mr-2`}
    >
      <ReactQuill
        theme="snow"
        value={text}
        onChange={setText}
        modules={modules}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={editorRef}
        className=" h-full"
      >
        {/* <div style={toolbarStyles} /> */}
      </ReactQuill>
      {!text && !isFocused && (
        <div
          className="absolute top-[50px] left-3 text-gray cursor-text ml-4"
          onClick={handleClickPlaceholder}
        >
          Type your description here...
        </div>
      )}
    </div>
  );
}

export default TextEditor;
