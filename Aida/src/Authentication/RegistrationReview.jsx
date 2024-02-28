import TextOnlyPage from "../UI/TextOnlyPage";
import tempUnavailablepage from "../assets/User/unavailablepage.jpg";
// This page is the final step in the vendor registration
function RegistrationReview() {
    return (
        <TextOnlyPage route = {"/"} buttonName={`lets go back`} backgroundImage = {tempUnavailablepage}>
                <h1>Vendor Application Processing Notice</h1>
                <p>Thank you for your intrest in becoming a vendor on our platform. We appreciate your application and the opportunity to collaborate. Here&apos;s what you can expect during the review process.</p>

                <h1>Application Review:</h1>
                <ol>
                    <li>
                        Our team will carefully assess the information provided in your application.
                    </li>
                    <li>
                        We evaluate the factors such as business legitimacy, compliance with regulations, and alignment with our platform&apos;s guidelines.
                    </li>
                </ol>

                <h1>Decision Timeline:</h1>
                <ol>
                    <li>
                        While processing times may vary, we aim to provide timely responses.
                    </li>
                    <li>
                        Please allow us sufficient time to thoroughly review your application.
                    </li>
                </ol>

                <h1>ِAcceptance or Decline:</h1>
                <ol>
                    <li>
                        Based on our evaluation, we will either accept your application or notify you if it does not meet our criteria.
                    </li>
                    <li>
                       If accepted, we will guide you through the next steps to onboard as a vendor.
                    </li>
                </ol>

                <h1>Questions or Clarifications:</h1>
                <ol>
                    <li>
                        If you have any questions or need further clarification, fell free to reach out to our support team.
                    </li>
                </ol>
                <p >Thank you for choosing to partner with us. We look forward to potentially welcoing you to our platform!</p>
                <p>Best regards</p>

        </TextOnlyPage>
    )
}

export default RegistrationReview;
