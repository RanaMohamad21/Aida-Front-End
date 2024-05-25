import Searchbar from "../UI/Searchbar";
import CustomerNavBar from "./CustomerNavBar";
import CustomerOrdersHistory from "./CustomerOrdersHistory";
import OrderInfo from "./OrderInfo";

function CustomerProfilePage() {
  return (
    <div className="grid grid-rows-[auto,1fr]">
      <Searchbar />
      <div className=" grid sm:grid-cols-[30%,3fr] lg:grid-cols-[20%,3fr] gap-3 h-screen ">
        <CustomerNavBar />
        <OrderInfo/>
      </div>
    </div>
  );
}

export default CustomerProfilePage;
