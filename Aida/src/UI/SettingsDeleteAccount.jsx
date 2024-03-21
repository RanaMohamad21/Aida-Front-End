import { Link } from "react-router-dom";
import TextOnlyPage from "../UI/TextOnlyPage";
function SettingsDeleteAccount() {
    return (
        <TextOnlyPage>
            <div className="flex flex-col gap-5">
                <div className="text-center">
                    <h1 className= "font-semibold text-lg">Where are you going?</h1>
                    <p className=" font-thin text-sm">There&apos;s still much shopping to do</p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                <div>
                <p>Before you proceed with deleting your account, we want to express our gratitude for being part of our community. Your presence has enriched our journey, and we appreciate the trust you&apos;ve placed in us.</p>
                </div>

                <div>
                <p>However, we understand that circumstances change, and sometimes paths diverge. If you still wish to proceed, we respect your decision. <span className="inline font-semibold">But before you take this step, consider the following:</span></p>
                </div>
                </div>
                <div>
                    <h1 className= "font-semibold mb-2">Your Data </h1>
                    <p className= "text-sm">Deleting your account will permanently remove all your personal information from our system. This includes order history, saved addresses, and payment details.</p>
                </div>
                <div>
                    <h1 className= "font-semibold mb-2">Lost benifits</h1>
                    <ul  className="list-disc ml-10  text-sm ">
                        <li>Order Tracking: You won&apos;t be able to track your orders or view their status.</li>
                        <li>Exclusive Offers: You&apos;ll miss out on special discounts, early access to sales, and personalized recommendations.</li>
                        <li>Saved Preferences: Any customized settings or preferences will be lost.</li>
                    </ul>
                </div>
                <div>
                    <h1 className= "font-semibold mb-2">Security and Privacy</h1>
                    <ul  className="list-disc ml-10  text-sm">
                        <li>We take your privacy seriously. Deleting your account ensures that your data won&apos;t be accessible by anyone.</li>
                        <li>If you have security concerns, consider changing your password or updating your account settings instead.</li>
                    </ul>
                </div>
                <div>
                    <h1 className= "font-semibold mb-2">Temporary Pause?</h1>
                    <ul  className="list-disc ml-10  text-sm ">
                        <li>We value your feedback! If there&apos;s anything we can improve, please let us know before you go.</li>
                        <li>Your insights help us enhance our services for other users.</li>
                        <div className="text-center my-3">
                        <p className="font-semibold mt-1 ">you can contact custommer support via this number</p>
                        <p className="mt-3">+20 109 545 1388</p>
                        </div>
                        <li>If you&apos;re unsure about permanently deleting your account, consider <span className="font-semibold">temporarily deactivating</span> it. You can reactivate it later if needed.</li>
                    </ul>
                </div>
                <div className="  justify-center    flex">
            <Link
              to=""
              className={`border-[1px] p-2  rounded-xl text-white  cursor pointer  hover:bg-opacity-20 hover:bg-IceBlue hover:text-white hover:border-teal `}
            >
              Deactivate my account
            </Link>
          </div>
                <div className="inline mt-28">
                    <ul  className="list-disc ml-10  text-sm">
                       <li>To proceed with account deletion, click the button below.
</li> 
                        <li>If you change your mind, simply log in within the next 30 days to cancel the deletion process.</li>
                    </ul>
                </div>
                <div className="flex gap-2  justify-center">
                <div className="mt-7  justify-center    flex">
                     <Link
              to=""
              className={`border-[1px] p-2  rounded-xl text-IceBlue bg-teal cursor pointer  hover:bg-opacity-20 hover:bg-IceBlue hover:text-white hover:border-teal`}
            >
              Delete
            </Link>
          </div>
          <div className="mt-7  justify-center    flex">
            <Link
              to=""
              className={`border-[1px] p-2  rounded-xl bg-IceBlue text-teal cursor pointer  hover:bg-opacity-20  hover:bg-IceBlue hover:text-white `}
            >
              Cancel
            </Link>
          </div>
                </div>
            </div>
        </TextOnlyPage>
    )
}

export default SettingsDeleteAccount;
