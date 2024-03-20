import TextOnlyPage from "../UI/TextOnlyPage";
import tempUnavailablepage from "../assets/User/unavailablepage.jpg";
// This page is the final step in the vendor registration
function SignUpVendor3() {
  return (
    <TextOnlyPage
      route={"/"}
      buttonName={`lets go back`}
      backgroundImage={tempUnavailablepage}
    >
      <div className="flex flex-col gap-5">
        <div className="  text-center mb-5">
        <h1 className="inline font-semibold text-lg ">
          Vendor Application Processing Notice
        </h1>
        </div>
        <div>
        <p>
          Thank you for your intrest in becoming a vendor on our platform. We
          appreciate your application and the opportunity to collaborate.
          Here&apos;s what you can expect during the review process.
        </p>
        </div>

        <div>
        <h1 className="font-semibold mb-2">Application Review:</h1>
        <ul className="list-disc ml-10 ">
          <li>
            Our team will carefully assess the information provided in your
            application.
          </li>
          <li>
            We evaluate the factors such as business legitimacy, compliance with
            regulations, and alignment with our platform&apos;s guidelines.
          </li>
        </ul>
        </div>

        <div>
        <h1 className="font-semibold mb-2">Decision Timeline:</h1>
        <ul className="list-disc ml-10 ">
          <li>
            While processing times may vary, we aim to provide timely responses.
          </li>
          <li>
            Please allow us sufficient time to thoroughly review your
            application.
          </li>
        </ul>
        </div>

        <div>
        <h1 className="font-semibold mb-2">ِAcceptance or Decline:</h1>
        <ul className="list-disc ml-10 ">
          <li>
            Based on our evaluation, we will either accept your application or
            notify you if it does not meet our criteria.
          </li>
          <li>
            If accepted, we will guide you through the next steps to onboard as
            a vendor.
          </li>
        </ul>
        </div>

        <div>
        <h1 className="font-semibold mb-2">Questions or Clarifications:</h1>
        <ul className="list-disc ml-10 ">
          <li>
            If you have any questions or need further clarification, fell free
            to reach out to our support team.
          </li>
        </ul>
        </div>
        <div>
        <p>
          Thank you for choosing to partner with us. We look forward to
          potentially welcoing you to our platform!
        </p>
        <p>Best regards</p>
        </div>
      </div>
    </TextOnlyPage>
  );
}

export default SignUpVendor3;
