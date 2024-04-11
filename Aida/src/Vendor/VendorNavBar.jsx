// import orderActive from "../assets/vendor/navBar/orderActive.png"
import orderInActive from "../assets/vendor/navBar/orderInActive.png"
// import analyticsActive from "../assets/vendor/navBar/analyticsActive.png"
import analyticsInActive from "../assets/vendor/navBar/analyticsInActive.png"
// import newOrderActive from "../assets/vendor/navBar/newOrderActive.png"
import newOrderInActive from "../assets/vendor/navBar/newOrderInActive.png"
import myStoreInActive from "../assets/vendor/navBar/myStoreInActive.png"
// import myStoreActive from "../assets/vendor/navBar/myStoreActive.png"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo/LogoWhiteTextAida.svg"
function VendorNavBar({storeName}) {
    return (
        <>
        <dev className = "grid grid-cols-[1fr,auto,auto,3fr,auto] py-2 px-3 border-b-[3px] border-teal gap-3 ">
            <dev className = " rounded-lg">
            <img src={logo} alt="Logo" className="w-16" />
            </dev>
            <dev className = " flex gap-1 mx-2 hover:cursor-pointer">
                <dev><img src={myStoreInActive} alt="my Store" className="w-8" /></dev>
                <dev className="text-teal mt-2 text-xs">My Store</dev>
            </dev>
            <dev className = "flex gap-1 mx-2 hover:cursor-pointer ">
            <dev><img src={orderInActive} alt="orders" className="w-8 mt-1" /></dev>
                <dev className="text-teal mt-2 text-xs">Orders</dev>
            </dev>
            <dev >
            <dev className="flex hover:cursor-pointer ">
            <img src={analyticsInActive} alt="Analytics" className="w-8 h-8" />
                <dev className="text-teal mt-2 text-xs">My Store</dev>
            </dev>
            </dev>
            <dev className = "  flex gap-2 hover:cursor-pointer">
                <dev className="text-teal mt-3 text-xs">storeName</dev>
                <img src={newOrderInActive} alt="Analytics" className="w-5 h-5 mt-2" />
            </dev>
            </dev>
        
       
        </>
    )
}

export default VendorNavBar;
