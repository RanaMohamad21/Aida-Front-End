import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { useForm } from "react-hook-form";
import CreditCard from "../UI/CreditCard";
import axios from "axios";
import { useUser } from './UserContext';

function AccountInfo() {
  const { user, setUser } = useUser();
  //wait for user to be fetched
  if (!user) {
    return <div>Loading...</div>;
  }
  const { register, handleSubmit, reset } = useForm();
  const [allowEdit, setAllowEdit] = useState(false);
  const [address, setAddress] = useState(user.address || {});
  const [street, setStreet] = useState(user.address.street || "");
  const [city, setCity] = useState(user.address.city || "");
  const [apartmentNo, setApartmentNo] = useState(user.address.apartmentNo || "");
  const [buildingNo, setBuildingNo] = useState(user.address.buildingNo || "");
  const [phone, setPhone] = useState(user.phoneNumber || "");
  const [currentPoints, setCurrentPoints] = useState(user.points || 0);
  const [addCard, setAddCard] = useState(false);
  //const [cards, setCards] = useState(user.cards || []);
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

  /*useEffect(() => {

    setAddress(user.address || {});
    setStreet(user.address.street || "");
    setCity(user.address.city || "");
    setApartmentNo(user.address.apartmentNo || "");
    setBuildingNo(user.address.buildingNo || "");
    setPhone(user.phoneNumber || "");
    setCurrentPoints(user.points || 0);
    //setCards(user.cards || []);
    

  }, [user]); */

  function handleUpdateData() {
    const updatedData = {
      phone,
      address: {
        street,
        city,
        apartmentNo,
        buildingNo,
      },
    };

    axios.post("http://localhost:8081/api/v1/customer/update_info", updatedData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setUser({ ...user, ...updatedData });
      setAllowEdit(false);
    })
    .catch(error => {
      console.error("Error updating user data:", error);
    });
  }

 /* function handleAddCard(data) {
    const updatedCards = [...cards, data];
    setCards(updatedCards);

    axios.put("http://localhost:8081/api/v1/customer/cards", { cards: updatedCards }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setUser({ ...user, cards: updatedCards });
      setAddCard(false);
      reset();
    })
    .catch(error => {
      console.error("Error adding card:", error);
    });
  }

  function handleCancelAddCard() {
    setAddCard(false);
    reset();
  } */

  return (
    <div className="w-full mt-3 pr-3 mb-16 flex-col sm:items-center md:items-start pl-2 pb-16">
      <div className="w-full mb-8 pb-8 border-b-[3px] border-b-shadowTeal border-opacity-35 flex-col sm:items-center">
        <h1 className="text-[30px] text-FlamingoPink font-semibold text-center md:text-left">
          Personal Information
        </h1>

        <div className="md:flex justify-between items-center">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center w-max lg:items-start mx-auto md:mx-1">
              <label htmlFor="street" className="text-teal text-[21px]">
                Street
              </label>
              <input
                type="text"
                id="street"
                disabled={!allowEdit}
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-[70%]`}
              />
            </div>
            <div className="flex flex-col items-center w-max lg:items-start mx-auto md:mx-1">
              <label htmlFor="city" className="text-teal text-[21px]">
                City
              </label>
              <input
                type="text"
                id="city"
                disabled={!allowEdit}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-[50%]`}
              />
            </div>
            <div className="flex flex-col items-center w-max lg:items-start mx-auto md:mx-1">
              <label htmlFor="apartmentNo" className="text-teal text-[21px]">
                Apartment No
              </label>
              <input
                type="text"
                id="apartmentNo"
                disabled={!allowEdit}
                value={apartmentNo}
                onChange={(e) => setApartmentNo(e.target.value)}
                className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-[50%]`}
              />
            </div>
            <div className="flex flex-col items-center w-max lg:items-start mx-auto md:mx-1">
              <label htmlFor="buildingNo" className="text-teal text-[21px]">
                Building No
              </label>
              <input
                type="text"
                id="buildingNo"
                disabled={!allowEdit}
                value={buildingNo}
                onChange={(e) => setBuildingNo(e.target.value)}
                className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-[50%]`}
              />
            </div>
          </div>
          {/* phone number*/}
          <div className="flex flex-col items-center w-max lg:items-start mx-auto md:mx-1">
            <label htmlFor="phone" className="text-teal text-[21px]">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              disabled={!allowEdit}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`${allowEdit ? "border border-solid border-teal" : ""} pl-2 rounded-xl w-[50%]`}
            />
          </div>
          {/* update button*/}


          <div className="w-max ml-[80%] md:ml-0 mt-1">
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
                className="text-teal cursor-pointer hover:text-shadowTeal"
                onClick={() => setAllowEdit(!allowEdit)}
              >
                <FaPen style={{ fontSize: "25px" }} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-max mx-auto md:mx-0">
        <h1 className="text-[30px] text-FlamingoPink font-semibold text-center md:text-left">
          Card Information
        </h1>

        <div className={`px-6 py-5 ${addCard ? "ml-20" : "md:flex md:gap-5 lg:justify-between"}`}>
          <div className="rounded-xl w-max">
            <div className="">
              <CreditCard cards={cards} setCards={setCards} />

              {!addCard && (
                <div
                  className="bg-teal py-1 px-2 rounded-xl text-white w-max cursor-pointer hover:bg-shadowTeal uppercase"
                  onClick={() => setAddCard(!addCard)}
                >
                  Add Card
                </div>
              )}

              {addCard && (
                <form onSubmit={handleSubmit(handleAddCard)}>
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 mt-7 w-max mx-auto md:mx-0">
                    <input
                      required
                      type="text"
                      placeholder="Bank name"
                      {...register("bankName")}
                      className="mx-2 px-1 border-2 border-solid border-FlamingoPink w-[230px]"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Card number"
                      {...register("cardNumber")}
                      className="mx-2 px-1 border-2 border-solid border-FlamingoPink w-[230px]"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Card holder"
                      {...register("cardHolder")}
                      className="mx-2 px-1 border-2 border-solid border-FlamingoPink w-[230px]"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Expiration date"
                      {...register("expiration")}
                      className="mx-2 px-1 border-2 border-solid border-FlamingoPink w-[230px]"
                    />
                    <div className="flex justify-between w-[238px] pl-2 pt-2">
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
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className={`w-max mx-auto md:mx-0`}>
            <div className="text-teal flex flex-col gap-2 items-center justify-center mt-8">
              <p className="font-semibold text-center">Current points</p>
              <h1 className="text-29xl">{currentPoints}</h1>
              <p className="text-center font-light">
                Buy products during discounts or <br /> immediately after restock to gain more points
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
