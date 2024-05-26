import { Outlet } from "react-router-dom";
import Searchbar from "../UI/Searchbar";
import CustomerNavBar from "./CustomerNavBar";


function CustomerProfilePage() {
  return (
    <div className="grid grid-rows-[auto,1fr]">
      <Searchbar  isProfilePage={true}/>
      <div className=" grid sm:grid-cols-[auto,3fr] lg:grid-cols-[20%,3fr] gap-3 h-screen ">
        <CustomerNavBar />
        <Outlet/>
      </div>
    </div>
  );
}

export default CustomerProfilePage;
