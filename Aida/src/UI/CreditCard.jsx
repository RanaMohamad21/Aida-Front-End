import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";

import CardBg from "../assets/User/bg2.png";
import { FaPen } from "react-icons/fa6";
function CreditCard({cards, setCards}) {

 const [activeCardIndex, setActiveCardIndex] = useState(0);
 const [updateBankName, setUpdateBankName] = useState("");
 const [updateCardNumber, setUpdateCardNumber] = useState("");
 const [updateCardHolder, setUpdateCardHolder] = useState("");
 const [updateCardExpiry, setUpdateCardExpiry] = useState("");
 const activeCard = cards[activeCardIndex];
 const [editCard, setEditCard] = useState(false);

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
        <div className="flex mb-4 ">
          <div className="flex   rounded-xl  ">
            <div
              className="bg-[#81dddf] opacity-80 text-white flex items-center hover:bg-lightseagreen hover:opacity-50 cursor-pointer rounded-tl-xl rounded-bl-xl"
              onClick={handlePreviousCard}
            >
              <IoIosArrowBack style={{ fontSize: "25px" }} />
            </div>

           
           <div className="bg-[#9ae4e5] border-x-2 border-[#9ae4e5]">
           <div
              className=" h-[197px] w-80 relative rounded-3xl "
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
                      className="cursor-pointer hover:text-seeFoamBlue text-white"
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
                      <span className=" text-white cursor-pointer text-13xl hover:text-seeFoamBlue pl-2 " title="Save changes"
                >
                   ✔
                </span>
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
              className="bg-[#81dddf] opacity-80 text-white flex items-center hover:bg-lightseagreen hover:opacity-50 cursor-pointer rounded-tr-xl rounded-br-xl"
              onClick={handleNextCard}
            >
              <IoIosArrowForward style={{ fontSize: "25px" }} />
            </div>
          </div>
        </div>
    )
}




CreditCard.propTypes = {
cards: PropTypes.shape({
    bankName: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    cardHolder: PropTypes.string.isRequired,
    expiration: PropTypes.string.isRequired,
    map: PropTypes.func,
    length: PropTypes.number
}),
setCards: PropTypes.func.isRequired,
};




export default CreditCard;
