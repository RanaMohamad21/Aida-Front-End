import { Link, useNavigate } from "react-router-dom";
import LogoTealText from "../assets/logo/LogoTealText.svg";
import categories from "../UI/SignupCategories";
const inputStyle = "border-solid border-2 border-gray px-2 py-1  mt-2 mb-4 ";
const labelStyle = "font-semibold mx-2  ";

function Signup() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    navigate("/login");
  }
  return (
    <>
      <div className="flex mb-[100px]">
        <div className=" w-3/12 ">
          <img
            src="/src/assets/Authentication/SidebarSignup.jpeg"
            alt="Side Bar"
            className="w-full object-cover"
          />
        </div>
        <div className=" w-9/12 px-14">
          <img
            src={LogoTealText}
            alt="Logo"
            className="w-[410px]  ml-auto mr-auto "
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
                  <label className={labelStyle}>Adress</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Qesm ElMoqatam, Cairo, Egypt"
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
                  <input type="radio" value="Shopping" className={inputStyle} />
                  <label className={labelStyle}>Shopping</label>
                  <input type="radio" value="Selling" /> <label>Selling</label>
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
                <div className="mt-8">
                  <label className={labelStyle}>Gender</label>
                  <br />
                  <input type="radio" value="Male" /> <label>Male</label>
                  <input type="radio" value="Female" />{" "}
                  <label className={labelStyle}>Female</label>
                </div>
              </div>
            </div>
            <p className="bold ">
              Select categories that you might be interested in
            </p>
            <div className="text-center w-4/5 mx-auto grid grid-cols-[repeat(3,auto)] gap-1">
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
                    <input type="checkbox" className="mr-2 mb-3  " />
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
