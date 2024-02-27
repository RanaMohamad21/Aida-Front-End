import { Link, useNavigate } from "react-router-dom";
import LogoTealText from "../assets/logo/LogoTealText.svg";
import categories from "../UI/SignupCategories";
const inputStyle = "border-solid border-2 border-gray px-2 py-1  mt-2 mb-4 ";
const labelStyle = "font-semibold mx-2  ";
const radioLabel = "text-gray hover:cursor-pointer";


function Signup() {

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    navigate("/login");
  }
  function handleChecked(e) {
    console.log(e.targed.value);
  }
  return (
    <>
      <div className="flex   h-screan">
        <div className=" w-3/12  ">
          <img
            src="/src/assets/Authentication/SidebarSignup.jpeg"
            alt="Side Bar"
            className="w-full h-full object-cover  lg:h-[1200px]"
          />
        </div>
        <div className=" bg-IceBlue sm:w-full md:w-8/12  lg:w-6/12 mx-auto px-14 sm:pb-[60px] ">
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
                    type="text "
                    placeholder="Ahmad"
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className={labelStyle}>Email</label>
                  <br />
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className={labelStyle}>Address</label>
                  <br />
                  <input
                    type="text"
                    placeholder="ElMoqatam, Cairo, Egypt"
                    className={inputStyle}
                  />
                  <p className="font-thin text-xs ">
                    This will be the delivery address
                  </p>
                </div>
                <div className="mt-4">
                  <label className={labelStyle}>Date of birth</label>
                  <br />
                  <input type="date" className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>Account</label>
                  <br />
                  <div>
                    <input
                      type="radio"
                      id="Shopping"
                      value="Shopping"
                      name="account"
                      className={`${radioLabel} `}
                      checked
                    />
                    <label className={`${radioLabel} `} htmlFor="Shopping">
                      Shopping
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="selling"
                      value="Selling"
                      name="account"
                    />{" "}
                    <label className={`${radioLabel} `} htmlFor="selling">
                      Selling
                    </label>
                  </div>
                  <p className="text-FlamingoPink">
                    This cannot be changed later
                  </p>
                </div>
              </div>
              <div className="w-1/2 ">
                <div>
                  <label className={labelStyle}>Second Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Taha"
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className={labelStyle}>Password</label>
                  <br />
                  <input type="password" className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>Phone</label>
                  <br />
                  <input
                    type="tel"
                    placeholder="+201232453123"
                    className={inputStyle}
                  />
                </div>
                <div className="mt-[50px] lg:mt-[38px]">
                  <label className={labelStyle}>Gender</label>
                  <br />
                  <div>
                    <input
                      type="radio"
                      id="male"
                      value="Male"
                      name="gender"
                      checked
                    />{" "}
                    <label className={`${radioLabel} `} htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="Female"
                      name="gender"
                      value="Female"
                    />
                    <label htmlFor="Female" className={`${radioLabel} `}>
                      Female
                    </label>
                  </div>
                </div>
              </div>
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
                      className="mr-2 mb-3  "
                      onChange={handleChecked}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="items-center flex justify-center w-full ">
              <input
                className="text-white bg-FlamingoPink w-1/2  rounded-md h-8 uppercase my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all "
                type="submit"
                value="Signup"
              />
            </div>
          </form>
          <hr className="bg-gray mb-2 border-none h-[1px]" />
          <div className=" text-center">
            <span>Already have an account?</span>{" "}
            <Link
              to="/login"
              className="text-gray hover:italic  transition-all"
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
