import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";
function Login() {
  return (
    <div className=" h-screen grid grid-cols-2 gap-4">
      <div className=" col-start-1 col-end-2 width-full">
        <img src="/src/assets/login.jpeg" alt="Login Page" />
      </div>
      <div className="width-full bg-teal text-white col-start-2 col-end-3">
        <img src={logoWhiteTxtAida} alt="Logo" className="h-2/4" />
        <form className="" method="POST" action="" >
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              required

            />
          </div>
          <div>
            <label>Password</label>
            <input type="password" required />
          </div>
          <a href="/">forgot your password?</a>
          <input className="bg-FlamingoPink" type="submit" value="Login" />
          <hr />
          <span>New here?</span>
          <a href="/">Sign up</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
