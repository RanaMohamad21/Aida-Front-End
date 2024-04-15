// import orderActive from "../assets/vendor/navBar/orderActive.png"
import orderInActive from "../assets/vendor/navBar/orderInActive.png"
// import analyticsActive from "../assets/vendor/navBar/analyticsActive.png"
import analyticsInActive from "../assets/vendor/navBar/analyticsInActive.png"
// import newOrderActive from "../assets/vendor/navBar/newOrderActive.png"
import newOrderInActive from "../assets/vendor/navBar/newOrderInActive.png"
import myStoreInActive from "../assets/vendor/navBar/myStoreInActive.png"
// import myStoreActive from "../assets/vendor/navBar/myStoreActive.png"
// import { NavLink } from "react-router-dom"
import logo from "../assets/logo/LogoWhiteTextAida.svg"
function VendorNavBar({storeName}) {
    return (
        <>
        <div className = "grid grid-cols-[1fr,auto,auto,3fr,auto] py-2 px-3 border-b-[3px] border-teal gap-3 ">
            <div className = " rounded-lg">
            <img src={logo} alt="Logo" className="w-16" />
            </div>
            <div className = " flex gap-1 mx-2 hover:cursor-pointer">
                <div><img src={myStoreInActive} alt="my Store" className="w-8" /></div>
                <div className="text-teal mt-2 text-xs">My Store</div>
            </div>
            <div className = "flex gap-1 mx-2 hover:cursor-pointer ">
            <div><img src={orderInActive} alt="orders" className="w-8 mt-1" /></div>
                <div className="text-teal mt-2 text-xs">Orders</div>
            </div>
            <div >
            <div className="flex hover:cursor-pointer ">
            <img src={analyticsInActive} alt="Analytics" className="w-8 h-8" />
                <div className="text-teal mt-2 text-xs">My Store</div>
            </div>
            </div>
            <div className = "  flex gap-2 hover:cursor-pointer">
                <div className="text-teal mt-3 text-xs">storeName</div>
                <img src={newOrderInActive} alt="Analytics" className="w-5 h-5 mt-2" />
            </div>
            </div>
        
       
        </>
    )
}

export default VendorNavBar;
