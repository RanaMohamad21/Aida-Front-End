import Searchbar from "../UI/Searchbar";
import Navbar from "../UI/Navbar";
import { Link } from "react-router-dom";
import { ChevronLeft, XLg } from "react-bootstrap-icons";
import cartImage from "../assets/Cart/another cart icon.png";

import Button from "../UI/Button";
function ShoppingCartPage() {
  function incrementItems() {}
  function decrementItems() {}
  return (
    <div className="grid grid-rows-[auto,1fr]">
      <div>
        <Searchbar />
        <Navbar />
      </div>
      <div className="grid grid-cols-[1fr,auto]  p-4  ">
        <div className=" flex flex-col justify-between  ">
          <div>
            <p className=" text-3xl text-teal ">Shopping Cart</p>
            <div
              className=" flex items-center justify-center  w-[70%] h-[200px] border-t-2
          border-b-2 border-t-IceBlue border-b-IceBlue  my-2"
            >
              Table of products
            </div>
            {/* Discounts */}
            <div>
              <p className=" text-3xl text-teal pt-2">Receive Discounts?</p>
              <div className="  w-[400px] flex flex-col justify-between pt-6">
                <div className="flex gap-4 ">
                  <input
                    type="text"
                    className=" border border-solid  border-gray px-2 w-[40px] h-max"
                    placeholder="00"
                    disabled
                  />
                  <p className=" text-FlamingoPink">Discount</p>
                  <span className=" text-xl text-FlamingoPink">00%</span>
                </div>

                <div>
                  <p className=" flex justify-end text-FlamingoPink gap-3 py-4">
                    points gained: <span>100</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/">
            <span className="flex text-xl text-teal pb-24    hover:ml-2 transition-all duration-1000 hover:text-FlamingoPink">
              <span className=" mt-1 pr-1 ">
                <ChevronLeft />
              </span>
              Missing something?
            </span>
          </Link>
        </div>

        {/* Right Sidebar */}
        <div className="  flex items-center justify-center  w-[350px]">
          <div className=" flex items-center justify-center  ">
            <div className=" border-l-[3px] border-t-[3px] border-t-teal border-l-teal border-opacity-20 rounded-xl flex flex-col items-center justify-center w-full gap-4 mb-24">
              <img
                src={cartImage}
                alt={"Cart image"}
                className=" w-full object-cover rounded-xl"
              />
              <div className=" w-full px-3">
                <p className=" text-2xl text-teal pb-3 ">Payment Info</p>
                <div className="grid grid-cols-2 leading-relaxed w-full mb-4">
                  {/* total price */}
                  <span>Total:</span>
                  <span>812.00 EGP</span>

                  {/* total taxes */}
                  <span>Total Taxes:</span>
                  <span>40.00 EGP</span>

                  {/* Shipping cost */}
                  <span>Shipping:</span>
                  <span>free</span>

                  {/* Discount points */}
                  <span>Points Discount:</span>
                  <span className=" ml-4">0%</span>
                </div>
                <div className=" flex gap-2 border-t-2 pt-3 border-solid border-t-teal border-opacity-35 ">
                  <p className="text-xl text-teal">Total Price: </p>
                  <span>909.44 EGP</span>
                </div>
              </div>

              <Button
                background={"FlamingoPink"}
                width={"w-[70%]"}
                style={" text-xl"}
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
