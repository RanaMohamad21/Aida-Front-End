import { Link } from "react-router-dom";
import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";


import {
  Activity,
  Android,
  BookFill,
  BuildingsFill,
  HandbagFill,
  HouseFill,
  Mouse2Fill,
} from "react-bootstrap-icons";
const iconList = [
  
    { 
      name: HandbagFill , alt: "fashion" },
    { name: Mouse2Fill, alt: "electronics" },
    { name: Activity, alt: "health" },
    { name: Android, alt: "pet" },
    { name: BookFill, alt: "books" },
    { name: BuildingsFill, alt: "office supplies" },
    { name: HouseFill, alt: "Home essencials" },
   
];
function UpperFooter() {
  const scrollToTop = () => {
    const scrollDuration = 1000; // Duration of the scroll in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scroll = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <div className="bg-teal  flex justify-between items-center pl-4 text-white  w-full pb-20 ">
      <div className="justify-self-start ">
        <img src={logoWhiteTxtAida} alt="logo" />
        <p className="font-semibold ">Developers</p>
        <ul className="">
          <li>Sara Ahmad Abdelrahim</li>
          <li>Omnia Ahmad El Desoky</li>
          <li>Mustafa Mahmoud Mohamad</li>
          <li>Rana Mohamad Ahmad</li>
          <li>Hanan Saeed Mohamad</li>
        </ul>
      </div>
      <div className="flex flex-col justify-around pr-28 ">
        <div className=" w-full flex pr-6 justify-end">
        <div className="border-2 w-[20px]  transition-all duration-200 hover:border-IceBlue flex items-center justify-center pb-1">
          <button onClick={scrollToTop}> &uarr;</button>
        </div>
        </div>
        <div className=" pr-20"> 
        <p className=" my-3">Categories</p>
          <div className="grid grid-cols-3 gap-2 w-52">
          {iconList.map((icon, index) => {
        const IconComponent = icon.name;
        return (
          <div key={index} title={icon.alt} className=" w-10 flex items-center justify-center bg-white rounded-full text-teal">
            <Link>
            <IconComponent aria-label={icon.alt} className="p-2 w-full h-full" />
            </Link>
          </div>
        );
      })}

          
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
