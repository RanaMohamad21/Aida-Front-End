import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { useForm } from "react-hook-form";
import CreditCard from "../UI/CreditCard";


function AccountInfo() {
  const [allowEdit, setAllowEdit] = useState(false);
  const [address, setAddress] = useState("Qesm Awal");
  const [phone, setPhone] = useState("+234532344");
 
  const [CurrentPoints, setCurrentPoints] = useState(0);
 
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
  

  function handleUpdateData() {
    console.log("Updated Address:", address);
    console.log("Updated Phone:", phone);
    setAllowEdit(false);
  }


  function handleAddCard(data) {
    setCards((prevCards) => [...prevCards, data]);
    setAddCard(false);
    reset();
  }
  function handleCancelAddCard(){
    setAddCard(false);
    reset();
  }

  


  return (
    <div className="w-full mt-3 pr-3 mb-16">
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
        <CreditCard cards={cards} setCards = {setCards}/>

        {!addCard && <div
          className="bg-teal py-1 px-2  rounded-xl text-white w-max cursor-pointer hover:bg-shadowTeal uppercase"
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
        </div>
        {/* User points count */}
        <div className=" flex sm:items-start ">
        <div  className=" text-teal flex flex-col gap-2 items-center justify-center mt-8 ">
          <p className=" font-semibold text-center">Current points</p>
          <h1 className=" text-29xl">{CurrentPoints}</h1>
          <p className=" text-center font-light">By products during discounts or <br/> immediately after restock to gain more  points</p>
          

        </div>
        </div>

        </div>
        
      </div>
    </div>
  );
}

export default AccountInfo;
