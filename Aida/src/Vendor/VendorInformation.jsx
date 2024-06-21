import { FaPen } from "react-icons/fa6";
import VendorNavBar from "./VendorNavBar";
import { useState } from "react";
import { Label } from "recharts";
import { IoCard, IoCheckmarkDone } from "react-icons/io5";
import CreditCard from "../UI/CreditCard";
import vendorStore from "../assets/vendor/VendorStore.png";
import { useForm } from "react-hook-form";
import {useVendor} from "./VendorContext";

function VendorInformation() {
  const {vendor, setVendor} = useVendor();
  if (!vendor) {
    //wait for the data to be fetched
    return <div>Loading...</div>;
  }

  const [allowEdit, setAllowEdit] = useState(false);
  const [funds,setFunds] = useState("300,000.00");
  const [addCard, setAddCard] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  //   const [currentFundes, setCurrentFunds] = useState(0)
  const [creditCards, setCreditCards] = useState([
    {
      bankName: "QNB Bank",
      cardNumber: "1232456512341234",
      cardHolder: "Adam Badran",
      expiration: "08/26",
    },
    {
      bankName: "ABC Bank",
      cardNumber: "5678123456781234",
      cardHolder: "Ammar Mansour",
      expiration: "09/27",
    },
  ]);
  const [address, setAddress] = useState(vendor.address || {});
  const [street, setStreet] = useState(vendor.address.street || "");
  const [city, setCity] = useState(vendor.address.city || "");
  const [apartmentNo, setApartmentNo] = useState(vendor.address.apartmentNo || "");
  const [buildingNo, setBuildingNo] = useState(vendor.address.buildingNo || "");
  const [phone, setPhone] = useState(vendor.phoneNumber || "");
  const [storeName, setStoreName] = useState(vendor.businessInfo.businessName);

  async function handleUpdateData() {
   
    // Create the payload for the request
    const payload = {
      "storeName": storeName, 
      "address": {
        "apartmentNo": address.apartmentNo,
        "buildingNo": address.buildingNo,
        "city": address.city,
        "street": address.street
      },
      "phone": phone
    };
  
    try {
      // Send the updated data to the server
      const response = await fetch('http://localhost:8081/api/v1/vendor/update_info', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`

        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Server Response:", data);
  
      // If successful, disable editing
      setAllowEdit(false);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }
  
  
  function handleAddCard(data) {
    setCreditCards((prevCards) => [...prevCards, data]);
    setAddCard(false);
    reset();
  }

  function handleCancelAddCard(){
    setAddCard(false);
    reset();
  }

  return (
    <div className=" grid grid-rows-[auto,1fr] mb-28">
      <VendorNavBar />
      <div className=" w-full px-8 pt-7 ">
      <div >
        <h1 className=" text-FlamingoPink text-[30px] mb-4">My Store</h1>
        {/* Store details */}
        <div className=" grid grid-cols-[1fr,auto] bg-seeFoamBlue">
          <div className="flex justify-between items-center">
            <div className=" flex flex-col gap-4 pl-8 py-8">
              {/* Store name */}
              <div className="  ">
                <p className="text-lgi text-white mb-1 ">Name</p>
                <input
                  type="text"
                  disabled={!allowEdit}
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className={`${
                    allowEdit ? "border border-solid border-teal" : ""
                  } pl-2 rounded-xl`}
                />
              </div>

              {/* Address Form */}
<div className="address-form">
  <p className="block text-white text-lg mb-2">Address</p>
  <div className="mb-4">
    <label className="block text-white text-lgi mb-1" htmlFor="apartmentNo">Apartment No</label>
    <input
      type="text"
      id="apartmentNo"
      disabled={!allowEdit}
      value={address.apartmentNo}
      onChange={(e) => setAddress({ ...address, apartmentNo: e.target.value })}
      className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-full`}
    />
  </div>
  <div className="mb-4">
    <label className="block text-white text-lgi mb-1" htmlFor="buildingNo">Building No</label>
    <input
      type="text"
      id="buildingNo"
      disabled={!allowEdit}
      value={address.buildingNo}
      onChange={(e) => setAddress({ ...address, buildingNo: e.target.value })}
      className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-full`}
    />
  </div>
  <div className="mb-4">
    <label className="block text-white text-lgi mb-1" htmlFor="city">City</label>
    <input
      type="text"
      id="city"
      disabled={!allowEdit}
      value={address.city}
      onChange={(e) => setAddress({ ...address, city: e.target.value })}
      className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-full`}
    />
  </div>
  <div className="mb-4">
    <label className="block text-white text-lgi mb-1" htmlFor="street">Street</label>
    <input
      type="text"
      id="street"
      disabled={!allowEdit}
      value={address.street}
      onChange={(e) => setAddress({ ...address, street: e.target.value })}
      className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-full`}
    />
  </div>
</div>


              {/* Store number */}
              <div>
                <p className=" block text-white text-lgi mb-1">Phone</p>

                <input
                  type="text"
                  disabled={!allowEdit}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`${
                    allowEdit ? "border border-solid border-teal" : ""
                  } pl-2 rounded-xl`}
                />
              </div>
            </div>
            <div className="  h-full mt-[198px] lg:mr-[720px]">
              {allowEdit ? (
                    
                <span className=" text-white cursor-pointer text-13xl hover:text-shadowTeal" title="Save changes"
                onClick={handleUpdateData}>
                   ✔
                </span>
              ) : (
                <span
                  title="Edit"
                  className="text-white cursor-pointer hover:text-shadowTeal  "
                  onClick={() => setAllowEdit(!allowEdit)}
                >
                  <FaPen style={{ fontSize: "25px" }} />
                </span>
              )}
            </div>
          </div>

          {/* Image */}
          <div>
            <img src = {vendorStore}/>
          </div>
        </div>
      </div>
     
      <div className=" pt-8 ">
        <h1 className=" text-FlamingoPink mb-4 text-[30px]">Card Information</h1>

        <div className=" grid grid-cols-2 ">
          <div>
            <CreditCard cards={creditCards} setCards={setCreditCards} />

            {!addCard && <div
          className="bg-teal py-2 px-2 w-[120px] rounded-xl text-white text-center  cursor-pointer hover:bg-shadowTeal uppercase"
          onClick={() => setAddCard(!addCard)}
        >
          Add Card
        </div>}

        {addCard && (
          <form onSubmit={handleSubmit(handleAddCard)}>
            <div className="flex sm:flex-col lg:grid lg:grid-cols-2 gap-2 mt-7">
              <input
              required
                type="text"
                placeholder="Bank name"
                {...register("bankName")}
                className="mx-2 px-1 border-2 border-solid border-FlamingoPink  w-[230px]"
              />
              <input
              required
                type="text"
                placeholder="Card number"
                {...register("cardNumber")}
                className="mx-2 px-1 border-2 border-solid border-FlamingoPink  w-[230px]"
              />
              <input
              required
                type="text"
                placeholder="Card holder"
                {...register("cardHolder")}
                className="mx-2 px-1 border-2 border-solid border-FlamingoPink  w-[230px]"
              />
              <input
              required
                type="text"
                placeholder="Expiration date"
                {...register("expiration")}
                className="mx-2 px-1 border-2 border-solid border-FlamingoPink  w-[230px]"
              />
             <div className=" flex justify-between w-[238px] pl-2 pt-2">
             <button
                type="submit"
                className="py-2 px-2 w-[100px] bg-teal hover:bg-shadowTeal text-white uppercase"
              >
                Add
              </button>
             <button
                onClick={handleCancelAddCard}
                className="py-2 px-2 w-[100px] bg-salmon hover:bg-indianred text-white uppercase"
              >
                cancel
              </button>
             </div>
            </div>
          </form>
        )}
          </div>

          <div className=" flex flex-col justify-start ml-14   items-center">
            <div className=" flex flex-col gap-2 text-teal items-center">
                <p>Current funds</p>
                <div className=" flex">
                <p ><span className=" text-17xl">{funds}</span>  </p><div className=" flex items-center">
                <span className=" uppercase text-xl font-semibold ml-2">egp</span>
                </div>
                </div>
               
               <button className=" bg-FlamingoPink text-white hover:bg-indianred capitalize rounded-xl text-center flex items-center justify-center px-5 py-2 text-5xl  ">Transfer <span className=" text-white ml-2"><IoCard style={{ fontSize: "25px" }} /></span></button>
               
                <p className=" text-center"> Transactional fees will be subtracted from the sum</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default VendorInformation;