import { Link, useNavigate } from "react-router-dom";
import LogoTealText from "../assets/logo/LogoTealText.svg";
import categories from "../UI/SignupCategories";
import { useState } from "react";
import Sidebar from "../assets/Authentication/SidebarSignup.png"

const inputStyle = "border-solid border-2 border-gray px-2 py-1  mt-2 mb-4 ";
const labelStyle = "font-semibold mx-2  ";
const radioLabel = "text-gray hover:cursor-pointer";

function Signup() {
  const [checkedCategories, setCheckedCategories] = useState(
    new Array(categories.length).fill(false)
  );
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    city: "",
    street: "",
    buildingNumber: "",
    apartmentNumber: "",
    categories: [],
    termsChecked: false,
  });

  const navigate = useNavigate();
  function handleChange(e) {
    if (e.target.type === "checkbox") {
      setFormData((prevFormDate) => ({
        ...prevFormDate,
        termsChecked: e.target.checked,
      }));
    } else {
      const { name, value } = e.target;
      setFormData((prevFormDate) => ({ ...prevFormDate, [name]: value }));
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      ...formData,
      categories: checkedCategories,
    };
    console.log(userData);
    navigate("/login");
  }

  // Sets an array of booleans for the categories
  function handleChecked(position) {
    const updatedCheckedCategories = checkedCategories.map((catState, index) =>
      index === position ? !catState : catState
    );
    console.log(updatedCheckedCategories);
    setCheckedCategories(updatedCheckedCategories);
  }
  return (
    <>
      <div className="flex   h-screan">
        <div className=" w-3/12  ">
          <img
            src={Sidebar}
            alt="Side Bar"
            className="w-full h-full object-cover  lg:h-[1200px]"
          />
        </div>
        <div className="  sm:w-full md:w-8/12  lg:w-6/12 mx-auto px-14 sm:pb-[60px] ">
          <img
            src={LogoTealText}
            alt="Logo"
            className="w-[410px] mx-auto my-10  "
          />
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="flex justify-around  w-2/3 relative h-3/4 mx-auto gap-[70px] font-sans">
              <div className="w-1/2 flex flex-col ">
                <div>
                  <label className={labelStyle}>First Name</label> <br />
                  <input
                    name="firstName"
                    type="text "
                    placeholder="Ahmad"
                    className={inputStyle}
                    required
                    maxLength="50"
                    onChange={handleChange}
                  />
                </div>
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
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className={labelStyle}>Date of birth</label>
                  <br />
                  <input
                    type="date"
                    className={inputStyle}
                    name="dateOfBirth"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-1/2 ">
                <div>
                  <label className={labelStyle}>Second Name</label>
                  <br />
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
                <div>
                  <label className={labelStyle}>Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    className={inputStyle}
                    maxLength="50"
                    onChange={handleChange}
                    required
                  />
                </div>
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
            <div className="">
              <label className={`${labelStyle} pl-16`}>Billing Address</label>
              <br />
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
                <input
                  type="text"
                  placeholder="Street address"
                  name="street"
                  value={formData.street}
                  className={`${inputStyle}  mx-2`}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Building number"
                  name="buildingNumber"
                  value={formData.buildingNumber}
                  className={`${inputStyle}w-32 mx-2 `}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Apartment number"
                  name="apartmentNumber"
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
                value={formData.termsChecked}
                name="termsChecked"
                onChange={handleChange}
                className="mr-2 mb-3  "
              />
              <p className="inline">
                I accept{" "}
                <span className="cursor-pointer text-teal underline italic ">
                  Terms of services
                </span>{" "}
                and{" "}
                <span className="cursor-pointer text-teal underline italic ">
                  Privacy Policy
                </span>.
              </p>
            </div>
            <div className="items-center flex justify-center w-full ">
              <input
                className="text-white bg-FlamingoPink w-1/2  rounded-md h-8 uppercase my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all "
                type="submit"
                value="Signup"
                disabled={!formData.termsChecked}
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
