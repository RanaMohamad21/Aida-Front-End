import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";
import microphone from "/src/assets/home/microphoneWhite.png";
import search from "/src/assets/home/search.png";
import Cart from "../assets/icons/Cart";
import UserProfile from "../assets/icons/UserProfile";
import { useAuthentication } from "../Contexts/AuthenticationContext";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../Contexts/ShoppingCartProvider";
import { useUser } from "../Customer/UserContext";
import { useVendor } from "../Vendor/VendorContext";


// The isProfilePage parameter makes the user name and icon conditionally visible in the UI based on the type of page that the user is in
function Searchbar({isProfilePage = false}) {
  const { vendor, setVendor } = useVendor();
  const { user, setUser } = useUser();

  let isAuthenticated = true
  const { getTotalQuantity } = useShoppingCart(); 
  const cartItemCount = getTotalQuantity();
  return (
    <nav className="w-full  px-20 my-[4px] flex justify-between   ">
      {/* Search Bar Section */}

      {/*Logo start*/}
      <NavLink className="  " to="/">
        <img
          src={logoWhiteTxtAida}
          alt="Logo"
          className="h-[40px] mt-[2px]  "
        />
      </NavLink>
      {/* Logo end */}
      {/* Search start */}
      <div>
        <form action="">
          <div className="w-max flex items-center p-[1px]  rounded-2xl">
            <span className="bg-teal py-2 px-1 rounded-tl-2xl rounded-bl-2xl h-[40px]">
              <img
                src={microphone}
                alt="microphone"
                className="h-full   object-contain w-[30px] "
              />
            </span>
            <input
              type="search"
              placeholder="Search"
              className="mx-[8px] outline-none border-none hover:ring-2 hover:ring-teal hover:px-1  transition-all duration-600 rounded focus:outline-none h-[30px] hover:w-[300px] ease-in-out"
            />
            <span className="bg-teal p-1 rounded-tr-2xl rounded-br-2xl h-[40px]">
              <img
                src={search}
                alt="search"
                className="   object-contain    p-[6px]  "
              />
            </span>
          </div>
        </form>
      </div>
      {/* Search end */}

      {/* Right part */}

      <div className="flex gap-2 justify-center items-center px-24 text-gray">
        {isAuthenticated ? (
          <>
            <Link to="/shoppingcart">
             <div className="relative">
              <Cart color="#25b5ba" style="w-10 h-8" />
           
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-FlamingoPink text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {Number(cartItemCount)}
              </span>
            )}
          </div>
          </Link>
          {isProfilePage ? (
        ""
      ) : (
        <div className="flex items-center space-x-4">
          {vendor ? (
            <div className="flex items-center space-x-3">
              <span>{vendor.fname + " " + vendor.lname}</span>
              <Link to="/vendorInfo">
                <UserProfile style={{ width: '40px', height: '40px' }} color="#25b5ba" />
              </Link>
              {/* logout */}
              <button
                onClick={() => {
                  setVendor(null);
                  localStorage.removeItem("token");
                  isAuthenticated = false;
                  window.location.reload();
                }}> Logout </button>
            </div>
          ) : user ? (
            <div className="flex items-center space-x-2">
              <span>{user.fname + " " + user.lname}</span>
              <Link to="/customerprofile">
                <UserProfile style={{ width: '40px', height: '40px' }} color="#25b5ba" />
              </Link>
              {/* logout */}
              <button
                onClick={() => {
                  setUser(null);
                  localStorage.removeItem("token");
                  isAuthenticated = false;
                  window.location.reload();
                }}> Logout </button>
            </div>
          ) : (
            <Link to="/login" className="pl-4">
              Login
            </Link>
          )}
        </div>
      )}
          </>
        ) : (
         <div className=" pr-8">
           <Link to="/login" >
            Login
          </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Searchbar;

// {/* <div className="w-[300px] mx-9  ">
//   {/*Search Section*/}
//   <div className="flex  w-fit p-[5px]    justify-between h-[40px] gap-1">
//     <div className="h-full w-[30px] bg-teal rounded-tl-2xl rounded-bl-2xl p-[6px] ">
//       {/* Voice search */}
//       <img
//         src={microphone}
//         alt="microphone"
//         className="h-full   object-contain w-[30px] "
//       />
//     </div>

//     <div className=" flex gap-1  ">
//       <div>
//         <input
//           type="text"
//           placeholder="Search..."
//           className=" h-full mt-[1px] border-none md:w-[400px]   hover:ring-2 hover:ring-teal hover:px-1  transition-all duration-200 rounded focus:outline-none "
//         />
//       </div>
//       <div className="h-full w-[30px] bg-teal rounded-tr-xl rounded-br-xl">
//         <button>
//           <img
//             src={search}
//             alt="search"
//             className="   object-contain    p-[6px]  "
//           />
//         </button>
//       </div>
//     </div>
//   </div>
// </div>; */}

