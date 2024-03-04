import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";
import LoginImg from "../assets/Authentication/login.png";
import { useAuthentication } from "./AuthenticationContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated, error } = useAuthentication();

  function resetInputs() {
    setEmail(" ");
    setPassword(" ");
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
    resetInputs();
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/", { replace: true });
      else {
        console.log(error);
      }
    },
    [isAuthenticated, navigate, error]
  );
  return (
    <div className=" h-screen w-full flex items-start pb-10 ">
      <div className="relative w-3/5 h-full flex flex-col ">
        <img
          src={LoginImg}
          alt="Login Page"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="font-sans w-2/5 h-full bg-teal text-white pb-10  flex flex-col justify-between border-solid border-l-[1px] border-l-gray">
        <img src={logoWhiteTxtAida} alt="Logo" className="h-1/2 " />
        <form
          className="font-semibold  justify-center items-center w-3/4 mx-auto "
          method="POST"
          action=""
          onSubmit={handleSubmit}
        >
          <div className="py-4">
            <label className="text-xl">Email</label>
            <input
              type="email"
              placeholder={email}
              className="w-full text-black bg-none px-2 py-1 mt-1 font-thin "
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="py-4">
            <label className="text-xl">Password</label>
            <input
              type="password"
              
              className="w-full text-black bg-none px-2 py-1 mt-1 font-thin"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="font-thin text-IceBlue text-xs">
            forgot your password?
          </p>
          <button className="bg-FlamingoPink w-full rounded-md h-8 my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase">
            Login
          </button>
          {!isAuthenticated && <p className="text-black mb-4">{error}</p>}
        </form>
        <div className=" justify-center items-center w-3/4 mx-auto text-center">
          <hr className="mb-1" />
          <span className="px-2 text-xs">New here?</span>
          <Link
            to="/accounttype"
            className=" hover:italic hover:text-IceBlue transition-all  text-s underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
