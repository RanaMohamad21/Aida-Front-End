// Import statements
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { IoStorefront } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { SiSimpleanalytics } from "react-icons/si";
import { HiInboxArrowDown } from "react-icons/hi2";
import logo from "../assets/logo/LogoWhiteTextAida.svg";
import {useVendor} from "./VendorContext";


function VendorNavBar() {
  const {vendor, setVendor} = useVendor();
  return (
    
    <div className="grid grid-cols-[1fr,auto,auto,3fr,auto] py-2 px-3 border-b-[3px] border-teal gap-3">
      <Link to="/" className="rounded-lg">
        <img src={logo} alt="Logo" className="w-16" />
      </Link>

      <NavLink 
        to="/vendorInfo" 
        className={({ isActive }) => 
          isActive ? "flex gap-1 mx-2 hover:cursor-pointer text-teal mt-2" : "flex gap-1 mx-2 hover:cursor-pointer text-FlamingoPink mt-2"}>
        <IoStorefront style={{ fontSize: '23px' }} />
        <p>My Store</p>
      </NavLink>

      <NavLink 
        to="/vendorOrders" 
        className={({ isActive }) => 
          isActive ? "flex gap-1 mx-3 text-teal" : "flex gap-1 mx-3 text-FlamingoPink"}>
        <GiReceiveMoney style={{ fontSize: '23px' }} />
        <p className="mt-2 text-xs">Orders</p>
      </NavLink>

      <div>
        <NavLink 
          to="/vendorAnalytics" 
          className={({ isActive }) => 
            isActive ? 'text-teal mt-2 flex gap-2' : 'text-FlamingoPink mt-2 flex gap-2'}>
          <SiSimpleanalytics />
          <span>Analytics</span>
        </NavLink>
      </div>

      <div className="flex gap-2 text-teal mt-3">
        <p>{vendor.businessInfo.businessName}</p>
        <NavLink to="/new-orders" title="New orders">
          <HiInboxArrowDown style={{ fontSize: '23px' }} />
        </NavLink>
      </div>
    </div>
  );
}

export default VendorNavBar;
