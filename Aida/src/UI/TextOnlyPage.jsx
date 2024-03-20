import { Link } from "react-router-dom";

import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";

{
  /*
    Reusable component, for Unavailable and vendor review request pages.
*/
}
// eslint-disable-next-line react/prop-types
function TextOnlyPage({ children, route, buttonName, backgroundImage }) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-full w-full  sm:bg-contain "
    >
      <div className="sm:w-3/5 md:w-[30%]  h-full flex flex-col mx-auto items-center bg-teal text-white bg-cover bg-center p-3 px-8">
        <img src={logoWhiteTxtAida} alt="Logo" />
        <div className=" sm:my-[72px] md:mt-[40px]">
          {children}
          <div className="mt-7  justify-center    flex">
            <Link
              to={route}
              className={`border-[1px] p-2  rounded-xl bg-IceBlue text-teal cursor pointer  hover:bg-opacity-20 hover:bg-IceBlue hover:text-white `}
            >
              {buttonName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextOnlyPage;
