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
        <div  className=" p-4 font-semibold">
            <h1 className=" text-2xl text-FlamingoPink font-semibold">All links are here for now</h1>
            <Link to="/productviewpage">
                Product View Page
            </Link>
        </div>
        <UpperFooter/>
        </div>
    )
}

export default HomePage;
