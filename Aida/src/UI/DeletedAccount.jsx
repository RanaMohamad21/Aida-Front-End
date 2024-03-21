import unavailablepage from "../assets/User/unavailablepage.jpg";
import TextOnlyPage from "../UI/TextOnlyPage";
function DeletedAccount() {
    return (
        <TextOnlyPage 
        backgroundImage={unavailablepage}
        >
            <div className="text-lg font-semibold">Thank you for being part of our story.</div>
        </TextOnlyPage>
    )
}

export default DeletedAccount;
