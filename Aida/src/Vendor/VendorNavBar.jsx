import React from 'react';
// import orderActive from "../assets/vendor/navBar/orderActive.png"
import orderInActive from "../assets/vendor/navBar/orderInActive.png";
// import analyticsActive from "../assets/vendor/navBar/analyticsActive.png"
import analyticsInActive from "../assets/vendor/navBar/analyticsInActive.png";
// import newOrderActive from "../assets/vendor/navBar/newOrderActive.png"
// import myStoreActive from "../assets/vendor/navBar/myStoreActive.png"
// import { NavLink } from "react-router-dom"
import { BarChartFill, GearFill } from "react-bootstrap-icons";
import { SiSimpleanalytics } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { IoStorefront } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { HiInboxArrowDown } from "react-icons/hi2";
import logo from "../assets/logo/LogoWhiteTextAida.svg";
import {useVendor} from "./VendorContext";


function VendorNavBar() {
  const {vendor, setVendor} = useVendor();
  return (
      <div className="grid grid-cols-[1fr,auto,auto,3fr,auto] py-2 px-3 border-b-[3px] border-teal gap-3 ">
        <Link to="/" className=" rounded-lg">
          <img src={logo} alt="Logo" className="w-16" />
        </Link>
        <Link
          to="/VendorShelves"
          className={
            " flex gap-1 mx-2 hover:cursor-pointer text-FlamingoPink mt-2 "
          }
        >
          <span>
            <IoStorefront style={{ fontSize: "23px" }} />
          </span>
          <p className="">My Store</p>
        </Link>
        <Link
          to="/VendorOrders"
          className={"flex gap-1 mx-3 text-FlamingoPink "}
        >
          <span className=" mt-2">
            <GiReceiveMoney style={{ fontSize: "23px", color: "" }} />
          </span>
          <p className=" mt-2 text-xs">Orders</p>
        </Link>
        <div className=" flex gap-2">
          <div className="flex ">
            <Link
              to="/VendorAnalytics"
              className={" text-FlamingoPink mt-2 flex gap-2"}
            >
              <span className=" mt-1">
                <SiSimpleanalytics />
              </span>{" "}
              <span>Analytics</span>
            </Link>
          </div>
          <div className="flex ">
            <Link
              to="/VendorSettings"
              className={" text-FlamingoPink mt-2 flex gap-2"}
            >
              <span className=" mt-1">
                <GearFill />
              </span>{" "}
              <span>Settings</span>
            </Link>
          </div>
        </div>
        <div className="  flex gap-2 text-teal mt-3 ">
          <p>storeName</p>
          <Link title="My account" to="/vendorInfo">
            <HiInboxArrowDown style={{ fontSize: "23px" }} />
          </Link>
        </div>
    </div>
  );
}

export default VendorNavBar;
