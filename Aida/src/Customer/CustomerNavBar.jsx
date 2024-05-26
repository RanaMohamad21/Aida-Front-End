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
      <div className=" grid grid-rows-[auto,1fr,auto] h-full">
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
        <div className="  w-full  grid grid-rows-5 text-white font-medium text-lgi  ">
          {/* Customer account Link */}
          <NavLink
            to="account"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2 "
                : "  flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4   py-2"
            }
          >
            <div className="w-full flex items-center justify-center  ">
              <div className=" inline-block mr-2  ">
                <IoMdPerson style={{ fontSize: "24px" }} />
              </div>
              <p>My account</p>
            </div>
          </NavLink>

          {/* Orders History link */}
          <NavLink
            to="ordersHistory"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2 "
                : "  flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4   py-2"
            }
          >
            <div className="w-full flex items-center justify-center  ">
              <div className=" inline-block mr-2  ">
                <GiBackwardTime style={{ fontSize: "22px" }} />
              </div>
              <p>Order history</p>
            </div>
          </NavLink>

          {/*Pending Orders link  */}
          <NavLink
            to="pendingOrders"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2 "
                : "  flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4   py-2"
            }
          >
            <div className="w-full flex items-center justify-center  ">
              <div className=" inline-block mr-2  ">
                <FaTruckFast style={{ fontSize: "22px" }} />
              </div>
              <p>Pending orders</p>
            </div>
          </NavLink>

          {/* Subscription Link */}
          <NavLink
            to="subscription"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2 "
                : "  flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4   py-2"
            }
          >
            <div className="w-full flex items-center justify-center  ">
              <div className=" inline-block mr-2  ">
                <TbBellPlusFilled style={{ fontSize: "22px" }} />
              </div>
              <p>Subscription</p>
            </div>
          </NavLink>

          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2 "
                : "  flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4   py-2"
            }
          >
            <div className="w-full flex items-center justify-center  ">
              <div className=" inline-block mr-2  ">
                <IoMdSettings style={{ fontSize: "21px" }} />
              </div>
              <p>Settings</p>
            </div>
          </NavLink>
        </div>

        {/* Image */}
        <div
          className=" bg-salmon h-[400px]  w-full opacity-80"
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
