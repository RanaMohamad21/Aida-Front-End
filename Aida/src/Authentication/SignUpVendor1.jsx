import SignUpTemplate from "./SignUpTemplate";
import SideBar from "../assets/Authentication/SideBarVendor.jpg";
import { useNavigate } from "react-router-dom";
import { useVendor } from "../Contexts/VendorSignUpProvider";

// Define the input style for form inputs
const inputStyle =
  "border-solid border-2 border-gray px-2 py-1  mt-2 mb-4 sm:w-[80%] md:w-[300px]";

/**
 * Component for the first step of vendor sign up process.
 * Collects account information such as name, email, password, and address.
 */
function SignUpVendor1() {

// Navigate to the next step of the sign up process
  const navigate = useNavigate();

// Access and update the form data state through useVendor
  const { formData, setFormData } = useVendor();

  /**
   * Handles changes to form inputs and updates the form data state
   * @param {Object} e - The event object for the input change event
   */

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormDate) => ({ ...prevFormDate, [name]: value }));
  }

  /**
   * Handles form submission and navigates to the next step of the sign up process
   * @param {Object} e - The event object for the form submission event
   */
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    navigate("/signupvendor2");
  }
  return (
    <SignUpTemplate imgSrc={SideBar}>
       {/* Display the form for collecting account information */}
      <form className="capitalize font-semibold" onSubmit={handleSubmit}>
        {/* Display the account info header */}
        <h1 className="text-teal text-xl ">account info</h1>

        {/* Vendor details */}
        <div className="pt-10">
          {/* First name input */}
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
            {/* Second name input */}
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
          {/* Email input */}
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
            {/* Password input */}
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

          {/* Phone and Date of Birth inputs */}
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

              {/* Vendor must be at least 18  */}
              <input
                type="date"
                className={`${inputStyle} w-[185px]`}
                name="dateOfBirth"
                onChange={handleChange}
                min="1900-01-01"
                max="2008-12-31"
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
