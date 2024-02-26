import unavailablepage from "../assets/User/unavailablepage.jpg";
import { Link } from "react-router-dom";
import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";

const margin = "m-[8px]";

function UnavailablePage() {
  return (
    <div
      style={{ backgroundImage: `url(${unavailablepage})` }}
      className="w-full sm:h-full  md:bg-cover"
    >
      <div className="w-1/3  h-screan flex flex-col mx-auto items-center bg-teal text-white bg-cover bg-center p-3">
        <img src={logoWhiteTxtAida} alt="Logo" />
        <p className={`text-xl ${margin}`}>404</p>
        <p className={`text-xs text-IceBlue ${margin} capitalize`}>
          oops this page is unavailable!{" "}
        </p>
        <p className={`text-l capitalize text-center font-semibold ${margin}`}>
          but the shopping doesn&apos;t stop
        </p>
        <Link
          to="/"
          className={`border-[1px] p-2 ${margin} rounded-xl border-IceBlue cursor pointer text-[35px] hover:bg-opacity-20 hover:bg-IceBlue" to="/home"`}
        >
          Shop!
        </Link>
      </div>
    </div>
  );
}

export default UnavailablePage;
