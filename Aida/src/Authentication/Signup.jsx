import LogoTealText from "../assets/logo/LogoTealText.svg";
// import categories from "../UI/SignupCategories";
const inputStyle = "border-solid border-2 border-gray px-2 py-1 mx-2 mt-2 mb-4";
const labelStyle = "font-semibold mx-2  ";
import sport from "../assets/Authentication/Categories/sport1.jpeg";
import petSupplies from "../assets/Authentication/Categories/petsupplies.jpeg";
import officeSupplies from "../assets/Authentication/Categories/officesupplies.jpeg";
import fashion from "../assets/Authentication/Categories/fashion2.jpeg";
import healthCare from "../assets/Authentication/Categories/healthcare1.jpeg";
import electronics from "../assets/Authentication/Categories/Electronics2.jpeg";
import books from "../assets/Authentication/Categories/books2.jpeg";
import homeSupplies from "../assets/Authentication/Categories/homesupplies.jpeg";

const categories = [
  { name: "Fashion", link: fashion },
  { name: "Books", link: books },
  { name: "Electronic devices", link: electronics },
  { name: "Health & wellness", link: healthCare },
  { name: "Office Supplies", link: officeSupplies },
  { name: "Pet Supplies", link: petSupplies },
  { name: "Home supplies", link: homeSupplies },
  { name: "Sporting goods", link: sport },
];

function Signup() {
  return (
    <>
      <main className="flex ">
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
            className="w-[410px] h-[211px] ml-auto mr-auto"
          />
          <form className="mb-3">
            <div className="flex justify-around  w-2/3 relative h-3/4 mx-auto font-sans">
              <div className="w-1/2 ">
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
            <p className="bold text-center">
              Select categories that you might be interested in
            </p>
            <div className="text-center w-2/3 mx-auto grid grid-cols-[repeat(3,auto)] gap-1">
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
          </form>
          <hr className="bg-gray" />
          <div className=" text-center">
            <span>Already have an account?</span>{" "}
            <a href="/" className="text-gray">
              Log in
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
