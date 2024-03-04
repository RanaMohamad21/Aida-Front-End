import { Link } from "react-router-dom";
import LogoTealText from "../assets/logo/LogoTealText.svg";

// eslint-disable-next-line react/prop-types
function SignUpTemplate({ children, imgSrc }) {
  return (
    <div className="flex pr-2 ">
      <div className=" w-[30%] bg-cover" style={{backgroundImage: `url(${imgSrc})`}}>
      </div>
      <div className="grid  mx-auto md:pl-14 w-full grid-rows-[auto,1fr,100px]">
        {/* Logo */}
        <div className=" ">
          <img
            src={LogoTealText}
            alt="Logo"
            className="w-[410px] mx-auto mt-2  "
          />
        </div>
        {/* Required data */}
        <div className=" pl-8 pt-16 ">{children}</div>

        {/* Login prompt */}
        <div className=" text-center  pt-2  ">
            <hr className="w-[80%] mx-auto mb-2"/>
          <span>Already have an account?</span>
          <Link
            to="/login"
            className="text-gray font-semibold pl-2 hover:italic  transition-all"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpTemplate;
