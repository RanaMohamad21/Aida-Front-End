// import orderActive from "../assets/vendor/navBar/orderActive.png"
import orderInActive from "../assets/vendor/navBar/orderInActive.png";
// import analyticsActive from "../assets/vendor/navBar/analyticsActive.png"
import analyticsInActive from "../assets/vendor/navBar/analyticsInActive.png";
// import newOrderActive from "../assets/vendor/navBar/newOrderActive.png"
import newOrderInActive from "../assets/vendor/navBar/newOrderInActive.png";
import myStoreInActive from "../assets/vendor/navBar/myStoreInActive.png";
// import myStoreActive from "../assets/vendor/navBar/myStoreActive.png"
// import { NavLink } from "react-router-dom"
import logo from "../assets/logo/LogoWhiteTextAida.svg";
import { BarChartFill } from "react-bootstrap-icons";
import { SiSimpleanalytics } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { GiReceiveMoney } from "react-icons/gi";
import { IoStorefront } from "react-icons/io5";
import { HiInboxArrowDown } from "react-icons/hi2";
function VendorNavBar({ storeName }) {
  return (
    <>
      <div className="grid grid-cols-[1fr,auto,auto,3fr,auto] py-2 px-3 border-b-[3px] border-teal gap-3 ">
        <Link to="/" className=" rounded-lg">
          <img src={logo} alt="Logo" className="w-16" />
        </Link>
        <NavLink className={({ isActive }) => 
          isActive ?" flex gap-1 mx-2 hover:cursor-pointer text-teal mt-2 ":" flex gap-1 mx-2 hover:cursor-pointer text-FlamingoPink mt-2 "}>
          <span >
            <IoStorefront style={{ fontSize: '23px'}}/>
          </span>
          <p className="">My Store</p>

        </NavLink>
        <NavLink className={({ isActive }) => 
          isActive ?"flex gap-1 mx-3 text-teal ":"flex gap-1 mx-3 text-FlamingoPink "}>
          <span className=" mt-2"><GiReceiveMoney style={{ fontSize: '23px' }}/></span>
          
          <p className="text-teal mt-2 text-xs">Orders</p>
        </NavLink>
        <div>
          <div className="flex ">
            <NavLink className={({ isActive }) => 
          isActive ? 'text-teal mt-2 flex gap-2' : ' text-FlamingoPink mt-2 flex gap-2'}>
            <span className=" mt-1"><SiSimpleanalytics  /></span> <span>Analytics</span></NavLink>
            
          </div>
        </div>
        <div className="  flex gap-2 text-teal mt-3 ">
          <p>storeName</p>
          <NavLink title="New orders"><HiInboxArrowDown style={{ fontSize: '23px'}}/></NavLink>
        </div>
      </div>
    </>
  );
}

export default VendorNavBar;
