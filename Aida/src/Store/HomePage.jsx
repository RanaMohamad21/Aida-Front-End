import Searchbar from "../UI/Searchbar";
import Navbar from "../UI/Navbar";
import UpperFooter from "../UI/UpperFooter";
import { Link } from "react-router-dom";
// import { useAuthentication } from "../Authentication/AuthenticationContext";
function HomePage() {
    // const {user} = useAuthentication();
    return (
        <div className="grid grid-rows-[auto,1fr,auto] h-screen">
        <div>
        <Searchbar />
        <Navbar />
        </div>
        <div className=" flex flex-col">
        <div  className=" p-4 font-semibold flex flex-col gap-2">
            <h1 className=" text-2xl text-FlamingoPink font-semibold">Most of the links are here for now</h1>
            <Link to="/productviewpage">
                Product View Page
            </Link>
            <Link to="/VendorProductViewPage">
                Vendor Product View Page
            </Link>
            <Link to="/dummyPage">
                DummyPage
            </Link>
            <Link to="/searchpage">
                Search Page
            </Link>
            <Link to="/login">
               Login
            </Link>
            <Link to="/signup">
               user Sign up
            </Link>
            <Link to="/SignUpVendor1">
               vendor Sign up
            </Link>
            <Link to="/VendorShelves">
               vendor shelves
            </Link>
            <Link to="/deletedacount">
               Delete accont
            </Link>
            <Link to="/SettingsDeleteAccount">
               Settings Delete accont
            </Link>
            <Link to="/gtgtgt">
               Unavailable Page
            </Link>
        
        </div>
        </div>
        <UpperFooter/>
        </div>
    )
}

export default HomePage;
