import SignUpTemplate from "./SignUpTemplate";
import SideBar from "../assets/Authentication/SideBarVendor.jpg";
// import { useNavigate } from "react-router-dom";

import { useState } from "react";
const inputStyle =
  "border-solid border-2 border-gray px-2 py-1  mt-2 mb-4 sm:w-[80%] md:w-[300px]";

function SignUpVendor1() {
  const [formData, setFormData ] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    city: "",
    street: "",
    buildingNumber: "",
    apartmentNumber: "",
  });
//   const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormDate) => ({ ...prevFormDate, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // navigate("/signupvendor2");
  }
  return (
    <SignUpTemplate imgSrc={SideBar}>
      <form className="capitalize font-semibold" onSubmit={handleSubmit}>
        <h1 className="text-teal text-xl ">account info</h1>
        {/* Vendor details */}
        <div className="pt-10">
          <div className="md:flex md:gap-32 ">
            <div className="flex flex-col">
              <label>first name</label>
              <input
                name="firstName"
                type="text "
                placeholder="Ahmad"
                className={inputStyle}
                maxLength="50"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Second Name</label>
              <input
                name="secondName"
                type="text"
                placeholder="Taha"
                className={inputStyle}
                maxLength="50"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:flex md:gap-32">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="example@example.com"
                className={inputStyle}
                maxLength="100"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="">Password</label>
              <input
                type="password"
                name="password"
                className={inputStyle}
                maxLength="50"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:flex md:gap-32">
            <div className="flex flex-col">
              <label>Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="+201232453123"
                className={inputStyle}
                onChange={handleChange}
                maxLength="15"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="">Date of birth</label>

              <input
                type="date"
                className={`${inputStyle} w-[185px]`}
                name="dateOfBirth"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Store Name */}
        <div className="flex flex-col">
          <label>store name</label>
          <input
            name="storeName"
            type="text"
            placeholder="Example"
            className={`${inputStyle}  `}
            maxLength="50"
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div>
          <label>billing address</label>
          <div className="md:flex md:gap-2">
            <input
              type="text"
              placeholder="City"
              name="city"
              //   value=""
              className={`${inputStyle} md:w-[200px] `}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Street address"
              name="street"
              //   value=""
              className={`${inputStyle}  `}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Building number"
              name="buildingNumber"
              //   value=""
              className={`${inputStyle} md:w-[200px] `}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Apartment number"
              name="apartmentNumber"
              //   value=""
              className={`${inputStyle} md:w-[200px] `}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="items-center flex justify-center w-full ">
          <input
            className="text-white bg-FlamingoPink w-[45%]  rounded-md h-8 uppercase my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all "
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </SignUpTemplate>
  );
}

export default SignUpVendor1;
