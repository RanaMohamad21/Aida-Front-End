import { Link } from "react-router-dom";

function LoginPrompt() {
  return (
    <div className="bg-teal w-full text-center text-white h-8 pt-2 border-t border-black border-opacity-30 ">
      <p>
        Already have an account?{" "}
        <Link className="underline hover:italic transition-all duration-100 hover:text-IceBlue" to="/login">
          Log in
        </Link>
      </p>
    </div>
  );
}

export default LoginPrompt;
