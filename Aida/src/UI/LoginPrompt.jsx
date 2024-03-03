import { Link } from "react-router-dom";

function LoginPrompt() {
    return (
        <div className="bg-teal w-full text-center text-white h-10 pt-1">
            <p>Already have an account? <Link className="underline" to = "/login">Log in</Link></p>
        </div>
    )
}

export default LoginPrompt;
