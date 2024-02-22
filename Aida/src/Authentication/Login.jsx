import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";
import LoginImg from "/src/assets/Authentication/login.jpeg";
function Login() {
  return (
    // <div className=" min-h-screen w-full grid grid-cols-2 gap-4">
    <div className=" h-screen w-full flex items-start pb-10">
      <div className="relative w-3/5 h-full flex flex-col">
        <img
          src={LoginImg}
          alt="Login Page"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="font-sans w-2/5 h-full bg-teal text-white pb-10  flex flex-col justify-between border-solid border-l-[1px] border-IceBlue">
        <img src={logoWhiteTxtAida} alt="Logo" className="h-1/2 " />
        <form
          className="font-semibold  justify-center items-center w-3/4 mx-auto "
          method="POST"
          action=""
        >
          <div className="py-4">
            <label className="text-xl">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              className="w-full text-black bg-none px-2 py-1 mt-1 font-thin "
              required
            />
          </div>
          <div className="py-4">
            <label className="text-xl">Password</label>
            <input
              type="password"
              className="w-full text-black bg-none px-2 py-1 mt-1 font-thin"
              required
            />
          </div>
          <p className="font-thin text-IceBlue text-xs">
            forgot your password?
          </p>
          <input
            className="bg-FlamingoPink w-full rounded-md h-8 my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all "
            type="submit"
            value="Login"
          />
        </form>

        <div className=" justify-center items-center w-3/4 mx-auto text-center">
          <hr className="mb-1" />
          <span className="px-2 text-xs">New here?</span>
          <a
            href="/"
            className="hover:px-1 hover:italic hover:text-IceBlue transition-all  text-s underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
