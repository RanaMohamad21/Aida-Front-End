import Searchbar from "../UI/Searchbar";
import Navbar from "../UI/Navbar";
import UpperFooter from "../UI/UpperFooter";
// import { useAuthentication } from "../Authentication/AuthenticationContext";
function HomePage() {
    // const {user} = useAuthentication();
    return (
        <div className="grid grid-rows-[auto,1fr,auto] h-screen">
        <div>
        <Searchbar />
        <Navbar />
        </div>
        <div >Home Page</div>
        <UpperFooter/>
        </div>
    )
}

export default HomePage;
