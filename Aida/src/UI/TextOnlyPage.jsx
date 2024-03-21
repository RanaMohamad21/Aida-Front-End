

import logoWhiteTxtAida from "../assets/logo/wordmark_white.png";

{
  /*
    Reusable component, for Unavailable and vendor review request pages.
*/
}
// eslint-disable-next-line react/prop-types
function TextOnlyPage({ children, backgroundImage, height = "" , paddingTop = ""}) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={` w-full  ${height?height: "h-full"}  sm:bg-contain `}
    >
      <div className={`sm:w-3/5 md:w-[30%]  h-full  flex flex-col mx-auto items-center bg-teal text-white bg-cover bg-center  p px-8 py-5 ${paddingTop?paddingTop:""}`}>
        <img src={logoWhiteTxtAida} alt="Logo"  />
        <div className=" sm:my-[72px] md:mt-[40px] ">
          {children}
         
        </div>
      </div>
    </div>
  );
}

export default TextOnlyPage;
