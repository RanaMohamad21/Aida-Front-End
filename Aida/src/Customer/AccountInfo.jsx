import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import CardBg from "../assets/User/bg2.png";
import { useForm } from "react-hook-form";
import { IoCheckmarkDone } from "react-icons/io5";

function AccountInfo() {
  const [allowEdit, setAllowEdit] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [address, setAddress] = useState("Qesm Awal");
  const [phone, setPhone] = useState("+234532344");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [CurrentPoints, setCurrentPoints] = useState(0);
  const [updateBankName, setUpdateBankName] = useState("");
  const [updateCardNumber, setUpdateCardNumber] = useState("");
  const [updateCardHolder, setUpdateCardHolder] = useState("");
  const [updateCardExpiry, setUpdateCardExpiry] = useState("");
  const { register, handleSubmit, reset } = useForm();
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
  const activeCard = cards[activeCardIndex];

  function handleUpdateData() {
    console.log("Updated Address:", address);
    console.log("Updated Phone:", phone);
    setAllowEdit(false);
  }

  function formatCardNumber(cardNumber) {
    const last4Digits = cardNumber.slice(-4);
    const maskedDigits = cardNumber.slice(0, -4).replace(/./g, "•");
    const combined = `${maskedDigits}${last4Digits}`;
    return combined.replace(/(.{4})/g, "$1 ");
  }

  function handleNextCard() {
    if (editCard) return;
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }

  function handlePreviousCard() {
    if (editCard) return;
    setActiveCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  }

  function handleAddCard(data) {
    setCards((prevCards) => [...prevCards, data]);
    setAddCard(false);
    reset();
  }

  function handleUpdateCard() {
    const updatedCard = {
      bankName: updateBankName || activeCard.bankName,
      cardNumber: updateCardNumber || activeCard.cardNumber,
      cardHolder: updateCardHolder || activeCard.cardHolder,
      expiration: updateCardExpiry || activeCard.expiration,
    };
    const updatedCards = cards.map((card, index) =>
      index === activeCardIndex ? updatedCard : card
    );
    setCards(updatedCards);
    setEditCard(false);
  }

  useEffect(() => {
    if (editCard) {
      setUpdateBankName(activeCard.bankName);
      setUpdateCardNumber(activeCard.cardNumber);
      setUpdateCardHolder(activeCard.cardHolder);
      setUpdateCardExpiry(activeCard.expiration);
    }
  }, [editCard, activeCard]);

  return (
    <div className="w-full mt-3 pr-3">
      {/* Address and Phone number */}
      <div className="w-full mb-8 pb-8 border-b-[3px] border-b-shadowTeal border-opacity-35">
        <h1 className="text-[30px] text-FlamingoPink font-semibold">
          Personal Information
        </h1>

        <div className="flex justify-between items-center">
          <table className="w-max">
            <thead>
              <tr>
                <th className="px-4 py-2 text-teal text-left text-[21px]">
                  Address
                </th>
                <th className="px-4 py-2 text-teal text-left text-[21px]">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    disabled={!allowEdit}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={`${
                      allowEdit ? "border border-solid border-teal" : ""
                    } pl-2 rounded-xl`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    disabled={!allowEdit}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`${
                      allowEdit ? "border border-solid border-teal" : ""
                    } pl-2 rounded-xl`}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            {allowEdit ? (
              <p
                className="text-white p-1 bg-teal hover:bg-shadowTeal cursor-pointer px-2 rounded-xl"
                onClick={handleUpdateData}
              >
                Update
              </p>
            ) : (
              <span
                title="Edit"
                className="text-teal cursor-pointer hover:text-shadowTeal"
                onClick={() => setAllowEdit(!allowEdit)}
              >
                <FaPen style={{ fontSize: "25px" }} />
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-[30px] text-FlamingoPink font-semibold">
          Card Information
        </h1>

        <div className="px-6 py-5 md:flex md:gap-5 lg:justify-between">
        <div className="  rounded-xl w-max ">
        <div  className="" >
          {/* The card */}
        <div className="flex ">
          <div className="flex   rounded-xl  ">
            <div
              className="bg-lightseagreen opacity-80 text-white flex items-center hover:bg-lightseagreen hover:opacity-50 cursor-pointer rounded-tl-xl rounded-bl-xl"
              onClick={handlePreviousCard}
            >
              <IoIosArrowBack style={{ fontSize: "25px" }} />
            </div>

           <div className="bg-tealCard border-x-2 border-tealCard">
           <div
              className="bg-salmon h-[197px] w-80 relative rounded-3xl "
              style={{
                backgroundImage: `url(${CardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Black overlay with 50% opacity */}
              {/* <div className="absolute inset-0 bg-lightTeal opacity-70 z-0"></div> */}

              <div className=" grid grid-rows-3 text-white px-2 ">
                <div className="my-1 flex w-[295px] items-center">
                  <input
                    type="text"
                    className={`text-[18px] font-[550] ${
                      editCard
                        ? "border-2 border-solid border-salmon border-opacity-85 pl-2"
                        : ""
                    } w-full`}
                    onChange={(e) => setUpdateBankName(e.target.value)}
                    value={editCard ? updateBankName : activeCard.bankName}
                    style={{ backgroundColor: "transparent" }}
                    disabled={!editCard}
                  />
                  {!editCard && (
                    <span
                      title="Edit"
                      className="cursor-pointer hover:text-IceBlue text-white"
                      onClick={() => setEditCard(!editCard)}
                    >
                      <FaPen style={{ fontSize: "25px" }} />
                    </span>
                  )}
                  {editCard && (
                    <span
                      title="Save"
                      className="cursor-pointer hover:text-IceBlue"
                      onClick={handleUpdateCard}
                    >
                      <IoCheckmarkDone
                        style={{
                          fontSize: "25px",
                          filter: "drop-shadow(0 0 1px currentColor)",
                        }}
                      />
                    </span>
                  )}
                </div>

                <div className="my-1">
                  <p className="font-semibold">Card number</p>
                  <input
                    type="text"
                    className={`text-[18px] font-[550] w-40 ${
                      editCard
                        ? "border-2 border-solid border-salmon border-opacity-85 pl-2"
                        : ""
                    }`}
                    value={
                      editCard
                        ? updateCardNumber
                        : formatCardNumber(activeCard.cardNumber)
                    }
                    onChange={(e) => setUpdateCardNumber(e.target.value)}
                    style={{ backgroundColor: "transparent" }}
                    disabled={!editCard}
                  />
                </div>

                <div className="flex justify-between items-center mt-1">
                  <div>
                    <p className="font-semibold">Card holder</p>
                    <input
                      type="text"
                      className={`text-[18px] font-[550] ${
                        editCard
                          ? "border-2 border-solid border-salmon border-opacity-85 w-52 pl-2"
                          : ""
                      }`}
                      value={
                        editCard ? updateCardHolder : activeCard.cardHolder
                      }
                      onChange={(e) => setUpdateCardHolder(e.target.value)}
                      style={{ backgroundColor: "transparent" }}
                      disabled={!editCard}
                    />
                  </div>

                  <div>
                    <p className="font-semibold">Expires</p>
                    <input
                      type="text"
                      onChange={(e) => setUpdateCardExpiry(e.target.value)}
                      className={`text-[18px] font-[550] ${
                        editCard
                          ? "border-2 border-solid border-salmon w-16 border-opacity-85 pl-2"
                          : ""
                      }`}
                      value={
                        editCard ? updateCardExpiry : activeCard.expiration
                      }
                      style={{ backgroundColor: "transparent" }}
                      disabled={!editCard}
                    />
                  </div>
                </div>
              </div>
            </div>
           </div>

            <div
              className="bg-lightseagreen opacity-80 text-white flex items-center hover:bg-lightseagreen hover:opacity-50 cursor-pointer rounded-tr-xl rounded-br-xl"
              onClick={handleNextCard}
            >
              <IoIosArrowForward style={{ fontSize: "25px" }} />
            </div>
          </div>
        </div>

        

        </div>
        </div>
        {/* User points count */}
        <div  className=" text-teal flex flex-col gap-2 items-center justify-center">
          <p className=" font-semibold text-center">Current points</p>
          <h1 className=" text-29xl">124</h1>
          <p className=" text-center font-light">By products during discounts or <br/> immediately after restock to gain more  points</p>
          

        </div>

        </div>
        <div
          className="bg-teal py-1 px-2 rounded-xl text-white w-max cursor-pointer hover:bg-shadowTeal uppercase"
          onClick={() => setAddCard(!addCard)}
        >
          Add Card
        </div>

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
              <button
                type="submit"
                className="py-1 px-2 bg-teal hover:bg-shadowTeal text-white uppercase"
              >
                Add
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AccountInfo;
