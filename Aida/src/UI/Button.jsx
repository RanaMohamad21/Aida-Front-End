import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, route, background, width ,style =""}) {
  return (
    <div
      className={`text-white bg-${background} ${width}  rounded-md h-8 uppercase my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center justify-center pt-1 mx-auto ${style}
          `}
    >
      <Link to={route}>{children}</Link>
    </div>
  );
}

export default Button;
