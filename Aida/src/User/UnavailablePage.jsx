import unavailablepage from "../assets/User/unavailablepage.jpg";
import { Link } from "react-router-dom";
import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";

const margin = "m-[8px]";

function UnavailablePage() {
  return (
    <div
      style={{ backgroundImage: `url(${unavailablepage})` }}
      className="h-screen w-full bg-cover"
    >
      <div className="sm:w-2/5 md:w-1/3  h-full flex flex-col mx-auto items-center bg-teal text-white bg-cover bg-center p-3">
        <img src={logoWhiteTxtAida} alt="Logo" />
        <div className=" items-center justify-center text-center sm:my-[72px] md:mt-[40px]">
        <p className={`text-xl ${margin}`}>404</p>
        <p className={`text-xs text-IceBlue ${margin} capitalize`}>
          oops this page is unavailable!{" "}
        </p>
        <p className={`text-l capitalize text-center font-semibold mb-[16px]`}>
          but the shopping doesn&apos;t stop
        </p>
        <Link
          to="/"
          className={`border-[1px] p-2  rounded-xl border-IceBlue cursor pointer text-[35px] hover:bg-opacity-20 hover:bg-IceBlue to="/home"`}
        >
          Shop!
        </Link>
        </div>
      </div>
    </div>
  );
}

export default UnavailablePage;