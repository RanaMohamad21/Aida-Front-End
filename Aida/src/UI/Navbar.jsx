import { NavLink } from "react-router-dom";
import CreateShopIcon from "../assets/icons/CreateShopIcon";

// Alhamdulillah Done
const NavbarLinks = [
  { name: "Fashion", link: "/fashion" },
  { name: "Electronics", link: "/electronics" },
  { name: "Sports", link: "/sports" },
  { name: "Health & wellness", link: "/health" },
  { name: "Pet supplies", link: "/pets" },
  { name: "Books", link: "/books" },
  { name: "Home essentials", link: "/homeessentials" },
  { name: "Office supplies", link: "/officesupplies" },
];

function Navbar() {
  return (
    <nav className="w-[100%] bg-teal mt-1 h-10  ">
      <div className="   text-white font-sans  w-full h-full  ">
        {/*Menu items*/}
        <ul className="flex justify-between text-nowrap items-center gap-12 h-full pr-3">
          <li className="bg-FlamingoPink h-full px-2 ">
            <NavLink
              to="/signupvendor1"
              className="inline-block hover:text-IceBlue  duration-200"
            >
              <div className=" flex items-center justify-center gap-2 pt-2 "> 
              <span >
              <CreateShopIcon/>
              </span>
              Create your shop today!
              </div>
            </NavLink>
          </li>
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.link}
                className="inline-block hover:text-IceBlue hover:bg-[#03bbbf] duration-200"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
