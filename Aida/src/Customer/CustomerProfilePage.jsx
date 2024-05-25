import Searchbar from "../UI/Searchbar";
import CustomerNavBar from "./CustomerNavBar";
// import CustomerOrdersHistory from "./CustomerOrdersHistory";
// import OrderInfo from "./OrderInfo";
// import PendingOrders from "./PendingOrders";
import SettingsPage from "./SettingsPage";

function CustomerProfilePage() {
  return (
    <div className="grid grid-rows-[auto,1fr]">
      <Searchbar  isProfilePage={true}/>
      <div className=" grid sm:grid-cols-[30%,3fr] lg:grid-cols-[20%,3fr] gap-3 h-screen ">
        <CustomerNavBar />
        <SettingsPage/>
      </div>
    </div>
  );
}

export default CustomerProfilePage;
