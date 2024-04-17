import { Link, useNavigate } from "react-router-dom";
import LogoTealText from "../assets/logo/LogoTealText.svg";
import categories from "../UI/SignupCategories";
import { useState } from "react";
import Sidebar from "../assets/Authentication/SidebarSignup2.png";
import axios from "axios";

// Styles
const inputStyle = "border-solid border-2 border-gray px-2 py-1  mt-2 mb-4 ";
const labelStyle = "font-semibold mx-2  ";
const radioLabel = "text-gray hover:cursor-pointer";

function Signup() {
  // State
  const [checkedCategories, setCheckedCategories] = useState(
    new Array(categories.length).fill(false)
  );
  const [termsChecked, setTermsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    birthdate: "",
    gender: "",
    city: "",
    street: "",
    BuildingNo: "",
    apartmentNo: "",
    User_type: "customer",
  });

  // Router navigation
  const navigate = useNavigate();

  // Form change handlers
  function handleChange(e) {
    if (e.target.type === "checkbox") {
      setTermsChecked(e.target.checked);
    } else {
      const { name, value } = e.target;
      setFormData((prevFormDate) => ({ ...prevFormDate, [name]: value }));
    }
  }

  /**
   * Handles form submission for the signup page.
   * Validates form data, sends a POST request to the server with the user data,
   * and navigates to the login page upon successful signup.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  async function handleSubmit(e) {
    e.preventDefault();
    const { city, street, BuildingNo, apartmentNo, ...formDataWithoutAddress } = formData;

  const address = {
    city,
    street,
    BuildingNo,
    apartmentNo
  };

  
    // Validate email format
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password format
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!passwordRegex.test(formData.password)) {
      alert("Please enter a valid password format.");
      return;
    }
    const userData = {
      ...formDataWithoutAddress,
      address, 
    };

    // Clear form data
    setFormData({
      fname: "",
      lname: "",
      email: "",
      password: "",
      phone: "",
      birthdate: "",
      gender: "",
      
        city: "",
        street: "",
        BuildingNo: "",
        apartmentNo: "",
      User_type: "customer",
    });

    console.log(userData);

    ///Send data to the server
    try {
      console.log("User data:", userData);
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/signup",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.status === 200) {
        throw new Error("Signup failed");
      }

      console.log("Signup successful", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup error", error);
      // Handle error
    }

    //navigate("/login");
  }

  // Handle category checkbox changes
  function handleChecked(position) {
    const updatedCheckedCategories = checkedCategories.map((catState, index) =>
      index === position ? !catState : catState
    );
    console.log(updatedCheckedCategories);
    setCheckedCategories(updatedCheckedCategories);
  }
  return (
    <>
      {/* Sidebar */}
      <div className="flex   h-screan">
        {/* Sidebar */}
        <div className=" w-3/12  ">
          <img
            src={Sidebar}
            alt="Side Bar"
            className="w-full h-full object-cover  lg:h-[1200px]"
          />
        </div>
        {/* Signup Form */}
        <div className="  sm:w-full md:w-8/12  lg:w-6/12 mx-auto px-14 sm:pb-[60px] ">
          <img
            src={LogoTealText}
            alt="Logo"
            className="w-[410px] mx-auto my-10  "
          />

          {/* Form */}
          <form className="mb-3" onSubmit={handleSubmit}>
            {/* Form fields */}
            {/* Personal Information */}
            <div className="flex justify-around  w-2/3 relative h-3/4 mx-auto gap-[70px] font-sans">
              {/* Left Column */}
              <div className="w-1/2 flex flex-col ">
                {/* First Name */}
                <div>
                  <label className={labelStyle}>First Name</label> <br />
                  <input
                    name="fname"
                    type="text "
                    placeholder="Ahmad"
                    className={inputStyle}
                    required
                    maxLength="50"
                    onChange={handleChange}
                  />
                </div>
                {/* Email */}
                <div>
                  <label className={labelStyle}>Email</label>
                  <br />
                  <input
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    className={inputStyle}
                    maxLength="100"
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                </div>
                {/* Date of Birth */}
                <div className="mt-4">
                  <label className={labelStyle}>Date of birth</label>
                  <br />
                  <input
                    type="date"
                    className={inputStyle}
                    name="birthdate"
                    onChange={handleChange}
                    min="1900-01-01"
                    max="2008-12-31"
                  />
                </div>
              </div>
              {/* Right Column */}
              <div className="w-1/2 ">
                {/* Second Name */}
                <div>
                  <label className={labelStyle}>Second Name</label>
                  <br />
                  <input
                    name="lname"
                    type="text"
                    placeholder="Taha"
                    className={inputStyle}
                    maxLength="50"
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Password */}
                <div>
                  <label className={labelStyle}>Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    className={inputStyle}
                    maxLength="50"
                    onChange={handleChange}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                </div>
                {/* Phone */}
                <div>
                  <label className={labelStyle}>Phone</label>
                  <br />
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
              </div>
            </div>
            {/* Gender */}
            <div className="mt-6 lg:mt-[38px]  mb-5 pl-16">
              <label className={labelStyle}>Gender</label>
              <br />
              <div className="flex">
                <div>
                  <input
                    type="radio"
                    id="male"
                    value="Male"
                    name="gender"
                    onChange={handleChange}
                  />{" "}
                  <label className={`${radioLabel} `} htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="ml-4">
                  <input
                    type="radio"
                    id="Female"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />
                  <label htmlFor="Female" className={`${radioLabel}  `}>
                    Female
                  </label>
                </div>
              </div>
            </div>
            {/* Billing Address */}
            <div className="">
              <label className={`${labelStyle} pl-16`}>Billing Address</label>
              <br />
              {/* City */}
              <div className="md:flex">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  className={`${inputStyle} w-32 mx-2  `}
                  onChange={handleChange}
                  required
                />
                {/* Street Address */}
                <input
                  type="text"
                  placeholder="Street address"
                  name="street"
                  value={formData.street}
                  className={`${inputStyle}  mx-2`}
                  onChange={handleChange}
                  required
                />
                {/* Building Number */}
                <input
                  type="text"
                  placeholder="Building number"
                  name="BuildingNo"
                  value={formData.buildingNumber}
                  className={`${inputStyle}w-32 mx-2 `}
                  onChange={handleChange}
                />
                {/* Apartment Number */}
                <input
                  type="text"
                  placeholder="Apartment number"
                  name="apartmentNo"
                  value={formData.apartmentNumber}
                  className={`${inputStyle}  mx-2 w-40`}
                  onChange={handleChange}
                />
              </div>
              <p className="font-thin text-xs ">
                This will be the delivery address
              </p>
            </div>
            <p className="font-bold mx-10 my-4 ">
              Select categories that you might be interested in
            </p>
            <div className="text-center w-4/5 mx-auto grid grid-cols-[repeat(3,auto)] gap-1 lg:w-[75%] ">
              {categories.map((cat, index) => (
                <div
                  className="bg-cover bg-center rounded-lg h-24 relative"
                  key={index}
                  style={{ backgroundImage: `url(${cat.link})` }}
                >
                  <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center ">
                    <span className="text-white font-semibold text-xs ">
                      {cat.name}
                    </span>
                    <input
                      type="checkbox"
                      value={cat.name}
                      className="mr-2 mb-3  "
                      onChange={() => handleChecked(index)}
                      checked={checkedCategories[index]}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="checkbox"
                value={termsChecked}
                name="termsChecked"
                onChange={handleChange}
                className="mr-2 mb-3  "
                required
              />
              <p className="inline">
                I accept{" "}
                <span className="cursor-pointer text-teal underline italic ">
                  Terms of services
                </span>{" "}
                and{" "}
                <span className="cursor-pointer text-teal underline italic ">
                  Privacy Policy
                </span>
                .
              </p>
            </div>
            <div className="items-center flex justify-center w-full ">
              <input
                className="text-white bg-FlamingoPink w-1/2  rounded-md h-8 uppercase my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all "
                type="submit"
                value="Signup"
                disabled={!termsChecked}
                onChange={handleSubmit}
                required
              />
            </div>
          </form>
          <hr className="bg-gray mb-2 border-none h-[1px]" />
          <div className=" text-center">
            <span>Already have an account?</span>{" "}
            <Link
              to="/login"
              className="text-gray font-semibold hover:italic  transition-all"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

/* 
@TODO: 
Change the background of the radio button to be gray
*/
