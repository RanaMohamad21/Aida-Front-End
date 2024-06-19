import { NavLink } from "react-router-dom";
import NavbarImage from "../assets/User/userNavbar.jpeg";
import dummy from "../assets/User/DummyDanny.jpg";
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { TbBellPlusFilled } from "react-icons/tb";

import { useUser } from './UserContext';


function CustomerNavBar() {

  const { user, setUser } = useUser();
  console.log("user", user);
  

  return (
    <div className="h-full bg-lightTeal mt-3 md:w-max ">
      <div className="grid grid-rows-[auto,1fr,auto] h-full">
        {/* Customer personal information section */}
        <div className="p-4 sm:flex-col flex md:flex-row md:gap-2 sm:items-center sm:justify-center">
          {/* Customer avatar */}
          <img src={dummy} className="rounded-full w-24 h-24 mr-1" alt="User Avatar" />
          {/* Customer name and username */}
          <div className="flex flex-col ">
            <span className="text-xl text-white">{user.fname+ " "+user.lname}</span>
            <span className="text-darkslategray ">{user.email}</span>
          </div>
        </div>

        {/* Navigation links */}
        <div className="w-full grid grid-rows-5 text-white font-medium text-lg">
          {/* Customer account link */}
          <NavLink
            to="account"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2"
                : "flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4 py-2"
            }
          >
            <div className="w-full flex items-center justify-center hover:text-IceBlue">
              <div className="inline-block mr-2">
                <IoMdPerson style={{ fontSize: "24px" }} />
              </div>
              <p>My account</p>
            </div>
          </NavLink>

          {/* Order history link */}
          <NavLink
            to="ordersHistory"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2"
                : "flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4 py-2"
            }
          >
            <div className="w-full flex items-center justify-center hover:text-IceBlue">
              <div className="inline-block mr-2">
                <GiBackwardTime style={{ fontSize: "22px" }} />
              </div>
              <p>Order history</p>
            </div>
          </NavLink>

          {/* Pending orders link */}
          <NavLink
            to="pendingOrders"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2"
                : "flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4 py-2"
            }
          >
            <div className="w-full flex items-center justify-center hover:text-IceBlue">
              <div className="inline-block mr-2">
                <FaTruckFast style={{ fontSize: "22px" }} />
              </div>
              <p>Pending orders</p>
            </div>
          </NavLink>

          {/* Subscription link */}
          <NavLink
            to="subscription"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2"
                : "flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4 py-2"
            }
          >
            <div className="w-full flex items-center justify-center hover:text-IceBlue">
              <div className="inline-block mr-2">
                <TbBellPlusFilled style={{ fontSize: "22px" }} />
              </div>
              <p>Subscription</p>
            </div>
          </NavLink>

          {/* Settings link */}
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive
                ? "w-full px-3 flex items-center justify-center bg-FlamingoPink py-2"
                : "flex items-center justify-center border-b-[3px] w-full border-shadowTeal px-4 py-2"
            }
          >
            <div className="w-full flex items-center justify-center hover:text-IceBlue">
              <div className="inline-block mr-2">
                <IoMdSettings style={{ fontSize: "21px" }} />
              </div>
              <p>Settings</p>
            </div>
          </NavLink>
        </div>

        {/* Background image section */}
        <div
          className="bg-salmon h-[400px] w-full opacity-80"
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
