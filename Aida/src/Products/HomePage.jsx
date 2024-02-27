import Searchbar from "../UI/Searchbar";
import Navbar from "../UI/Navbar";
import UpperFooter from "../UI/UpperFooter";
// import { useAuthentication } from "../Authentication/AuthenticationContext";
function HomePage() {
    // const {user} = useAuthentication();
    return (
        <>
        <Searchbar />
        <Navbar />
        <UpperFooter/>
        </>
    )
}

export default HomePage;
