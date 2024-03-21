import unavailablepage from "../assets/User/unavailablepage.jpg";
import TextOnlyPage from "../UI/TextOnlyPage";
function DeletedAccount() {
    return (
        <TextOnlyPage 
        height="h-lvh"
        paddingTop = "pt-[25%]"
        backgroundImage={unavailablepage}
        >
            <div className="text-lg font-semibold mt-1">Thank you for being part of our story.</div>
        </TextOnlyPage>
    )
}

export default DeletedAccount;
