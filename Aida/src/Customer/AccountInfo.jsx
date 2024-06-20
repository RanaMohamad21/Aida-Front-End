// Optimized for mobile viewport
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { useForm } from "react-hook-form";
import CreditCard from "../UI/CreditCard";
import axios from "axios";

function AccountInfo() {
  
  const { register, handleSubmit, reset } = useForm();
  const [allowEdit, setAllowEdit] = useState(false);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [CurrentPoints, setCurrentPoints] = useState(0);

  const [addCard, setAddCard] = useState(false);
  const [cards, setCards] = useState([
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

  const token = localStorage.getItem("token");
  // Fetch user data when the component mounts
  useEffect(() => {
    
    axios.get("http://localhost:8081/api/v1/customer/info", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      const userData = response.data;
      setAddress(userData.address);
      setPhone(userData.phoneNumber);
      setCurrentPoints(userData.points);
      //setCards(userData.cards);
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
  }, []);
  

  function handleUpdateData() {
    console.log("Updated Address:", address); //*
    console.log("Updated Phone:", phoneNumber); //*
   

    //? Update user data on the backend
    // axios.put("/api/user", { address, phone })
    // .then(response => {
    //   console.log("User data updated successfully");
    //   setAllowEdit(false);
    // })
    // .catch(error => {
    //   console.error("Error updating user data:", error);
    // });
  }

  function handleAddCard(data) {
    setCards((prevCards) => [...prevCards, data]);
    setAddCard(false);
    reset();

    //? Update the cards on the backend
    // axios.put("/api/user/cards", { cards: [...cards, data] })
    // .then(response => {
    //   console.log("Card added successfully");
    // })
    // .catch(error => {
    //   console.error("Error adding card:", error);
    // });
  }
  function handleCancelAddCard() {
    setAddCard(false);
    reset();
  }

  return (
    <div className="w-full mt-3 pr-3 mb-16 flex-col sm:items-center md:items-start pl-2 pb-16   ">
      {/* Address and Phone number */}
      <div className="w-full mb-8 pb-8 border-b-[3px] border-b-shadowTeal border-opacity-35 flex-col sm:items-center ">
        <h1 className="text-[30px] text-FlamingoPink font-semibold text-center md:text-left">
          Personal Information
        </h1>

        <div className="md:flex justify-between items-center">
          <div className="grid md:grid-cols-2 gap-4 ">
            <div className="flex flex-col   items-center w-max lg:items-start mx-auto md:mx-1 ">
              <label htmlFor="address" className="text-teal text-[21px]">
                Address
              </label>
              <input
                type="text"
                id="address"
                disabled={!allowEdit}
                value={address.street}
                onChange={(e) => setAddress(e.target.value)}
                className={`${
                  allowEdit ? "border border-solid border-teal" : ""
                } pl-2 rounded-xl w-[70%]`}
              />
            </div>
            <div className="flex flex-col  items-center w-max lg:items-start mx-auto md:mx-1 ">
              <label htmlFor="phone" className="text-teal text-[21px]">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                disabled={!allowEdit}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`${
                  allowEdit ? "border border-solid border-teal" : ""
                } pl-2 rounded-xl w-[50%]`}
              />
            </div>
          </div>

          <div className="  w-max ml-[80%] md:ml-0 mt-1 ">
            {allowEdit ? (
              <p
                className="text-white p-1 bg-teal hover:bg-shadowTeal cursor-pointer px-2 rounded-xl"
                onClick={handleUpdateData}
              >
                Update
              </p>
            ) : (
              <div
                title="Edit"
                className="text-teal cursor-pointer hover:text-shadowTeal "
                onClick={() => setAllowEdit(!allowEdit)}
              >
                <FaPen style={{ fontSize: "25px" }} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" w-max mx-auto md:mx-0">
        <h1 className="text-[30px] text-FlamingoPink font-semibold text-center md:text-left">
          Card Information
        </h1>

        <div
          className={`px-6 py-5  ${
            addCard ? " ml-20" : "md:flex md:gap-5 lg:justify-between"
          }`}
        >
          <div className="  rounded-xl w-max ">
            <div className="">
              {/* The card */}
              <CreditCard cards={cards} setCards={setCards} />

              {!addCard && (
                <div
                  className="bg-teal py-1 px-2  rounded-xl text-white w-max cursor-pointer hover:bg-shadowTeal uppercase"
                  onClick={() => setAddCard(!addCard)}
                >
                  Add Card
                </div>
              )}

              {addCard && (
                <form onSubmit={handleSubmit(handleAddCard)}>
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 mt-7  w-max mx-auto md:mx-0">
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
          </div>
          {/* User points count */}
          <div className={` w-max mx-auto md:mx-0`}>
            <div className=" text-teal flex flex-col gap-2 items-center justify-center mt-8 ">
              <p className=" font-semibold text-center">Current points</p>
              <h1 className=" text-29xl">{CurrentPoints}</h1>
              <p className=" text-center font-light">
                By products during discounts or <br /> immediately after restock
                to gain more points
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
