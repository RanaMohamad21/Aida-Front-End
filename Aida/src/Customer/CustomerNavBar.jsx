import { NavLink } from "react-router-dom";
import NavbarImage from "../assets/User/userNavbar.jpeg";
import dummy from "../assets/User/DummyDanny.jpg";
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { TbBellPlusFilled } from "react-icons/tb";

function CustomerNavBar() {
  return (
    <div className=" h-full bg-lightTeal mt-3 ">
      <div className=" grid grid-rows-[auto,1fr,1fr] h-full">
        {/* Cutomer personal information */}
        <div className=" p-4  sm:flex-col flex md:flex-row md:gap-2 sm:items-center sm:justify-center  ">
          <img src={dummy} className=" rounded-full w-24 h-24 mr-1" />
          <div className=" flex flex-col ">
            {/* Full name */}
            <span className=" text-xl text-white">Danny the gost</span>

            {/* user name */}
            <span className=" text-darkslategray">@gostDany_404</span>
          </div>
        </div>

        {/* Navlinks */}
        <div className="  w-full  grid grid-rows-5 text-white font-medium text-lgi px-5 ">
          <div className="  flex items-center justify-center border-b-[3px] border-shadowTeal ">
            <NavLink className={({ isActive }) => (isActive ? "   " : " ")}>
              {" "}
              <div className=" flex  ">
                <div className=" inline-block mr-2  ">
                  <IoMdPerson style={{ fontSize: "24px" }} />
                </div>
                <p>My account</p>
              </div>
            </NavLink>
          </div>
          <div className="  flex items-center justify-center border-b-[3px] border-shadowTeal">
            <NavLink>
              {" "}
              <div className=" flex">
              <span className=" inline-block mr-2 mt-1 ">
                <GiBackwardTime style={{ fontSize: "22px" }} />
              </span>
              <span>Order history</span>
              </div>
            </NavLink>
          </div>
          <div className="  flex items-center justify-center border-b-[3px] border-shadowTeal">
            <NavLink>
              <div className=" flex">
              <span className=" inline-block mr-2 mt-[2px]">
                <FaTruckFast style={{ fontSize: "22px" }} />
              </span>
              <span>Pending orders</span>
              </div>
            </NavLink>
          </div>
          <div className="  flex items-center justify-center border-b-[3px] border-shadowTeal">
            <NavLink>
              <div className=" flex">
              <span className=" inline-block mr-2 mt-1">
                <TbBellPlusFilled style={{ fontSize: "22px" }}/>
              </span>
              <span>Subscription</span>
              </div>
            </NavLink>
          </div>
          <div className="  flex items-center justify-center  ">
            <NavLink>
             <div className=" flex">  <span className=" mt-1 inline-block mr-2 ">
                <IoMdSettings style={{ fontSize: "21px" }} />
              </span>
              Settings</div>
            </NavLink>
          </div>
        </div>

        {/* Image */}
        <div
          className=" bg-salmon  w-full opacity-80"
          style={{
            backgroundImage: `url(${NavbarImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default CustomerNavBar;
