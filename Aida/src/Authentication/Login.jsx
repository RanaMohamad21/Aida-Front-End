import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthentication } from "./AuthenticationContext";
import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";
import LoginImg from "../assets/Authentication/login.png";

function Login() {
  // Use the useNavigate hook to navigate to a different page
  const navigate = useNavigate();

 // Set up state for email and password
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("");

   // Get the login function, isAuthenticated, and error properties from the useAuthentication hook
  const { login, isAuthenticated, error } = useAuthentication();

  // Reset the input fields
  function resetInputs() {
    setEmail(" ");
    setPassword(" ");
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
    resetInputs();
  }

  // Use the useEffect hook to navigate to the home page if the user is authenticated
  useEffect(
    function () {
      // User can't navigate back to the login page after login is completed
      if (isAuthenticated) navigate("/", { replace: true });
      else {
        console.log(error);
      }
    },
    [isAuthenticated, navigate, error]
  );
  return (
    <div className=" h-screen w-full flex items-start pb-10 ">
      {/* Display the login image */}
      <div className="relative w-3/5 h-full flex flex-col ">
        <img
          src={LoginImg}
          alt="Login Page"
          className="w-full h-full object-cover "
        />
      </div>
      {/* Display the login form */}
      <div className="font-sans w-2/5 h-full bg-teal text-white pb-10  flex flex-col justify-between border-solid border-l-[1px] border-l-gray">
        <img src={logoWhiteTxtAida} alt="Logo" className="h-1/2 " />
        <form
          className="font-semibold  justify-center items-center w-3/4 mx-auto "
          method="POST"
          action=""
          onSubmit={handleSubmit}
        >
          {/* Display the email input field */}
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
           {/* Display the password input field */}
          <div className="py-4">
            <label className="text-xl">Password</label>
            <input
              type="password"
              
              className="w-full text-black bg-none px-2 py-1 mt-1 font-thin"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Display a link to reset the password */}
          {/*/TODO: Make it a link*/}
          <p className="font-thin text-IceBlue text-xs">
            forgot your password?
          </p>

          {/* Display the login button */}
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
