import Searchbar from "../UI/Searchbar";
import Navbar from "../UI/Navbar";
import checkoutImage from "../assets/Cart/checkout.jpeg";
import Button from "../UI/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ShippingAddress() {
  const [changeDeliveryAddress, setChangeDeliveryAddress] = useState(false);
  const { register, handleSubmit } = useForm();
  function handleChangeAddress() {
    setChangeDeliveryAddress((prev) => !prev);
  }

  function onSubmit(data) {
    handleChangeAddress();
    console.log(data);
  }
  return (
    <div className="grid grid-rows-[auto,1fr]">
      <div>
        <Searchbar />
        <Navbar />
      </div>
      <div className="grid grid-cols-[1fr,auto]  p-4  ">
        <div className=" flex flex-col justify-between  ">
          <div>
            <p className=" text-3xl text-teal ">Shipping Address</p>
            <div
              className="   w-[70%] h-[200px] border-t-2
          border-b-2 border-t-IceBlue border-b-IceBlue  my-2 leading-relaxed"
            >
              {changeDeliveryAddress ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=" flex">
                    <input
                      type="text"
                      placeholder="City"
                      {...register("city")}
                    />
                    <input
                      type="text"
                      placeholder="Street address"
                      {...register("streetAddress")}
                    />
                    <input
                      type="text"
                      placeholder="Building number"
                      {...register("buildingNumber")}
                    />
                    <input
                      type="text"
                      placeholder="Floor number"
                      {...register("floorNumber")}
                    />
                  </div>
                  <div className="w-full flex justify-end   text-white">
                    {" "}
                    <button className="w-max bg-teal px-3 py-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <div className=" pt-2">
                  <p>Address</p>
                  <span
                    className=" text-teal underline cursor-pointer hover:text-FlamingoPink hover:italic duration-1000 transition-all"
                    onClick={handleChangeAddress}
                  >
                    Deliver somewhere else?
                  </span>
                </div>
              )}
            </div>
            {/* Payment method */}
            <div>
              <p className=" text-3xl text-teal pt-2">Payment Method</p>
              <div className="  w-[400px] flex flex-col justify-between pt-6">
               

               
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className="  flex items-center justify-center  rounded-xl h-[80vh] w-[350px] mb-28 fla"
          style={{
            backgroundImage: `url(${checkoutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" w-full flex items-end pb-8 bg-black bg-opacity-20 rounded-xl h-full">
            <Button
              style={"font-semibold text-xl "}
              background={"white"}
              textColor="text-FlamingoPink"
              width="w-[80%]"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
