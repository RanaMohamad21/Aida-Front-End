import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthentication } from "../Contexts/AuthenticationContext";
import { useUser } from './UserContext';

function SettingsPage() {
  const { user, setUser } = useUser();
  //wait for user to be fetched
  if (!user) {
    return <div>Loading...</div>;
  }

  const [subscribedProducts, setSubscribedProducts] = useState(user.customerSettings.allowEmailSubscribed);
  const [cartReminders, setCartReminders] = useState(user.customerSettings.allowEmailCartRecovery);
  const [personalizedExperience, setPersonalizedExperience] = useState(user.customerSettings.allowInformationCollection);
  const { logout } = useAuthentication();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  


  const handleSaveSettings = () => {
    fetch("http://localhost:8081/api/v1/customer/update_settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
      
      "allowEmailSubscribed": subscribedProducts, 
      "allowEmailCartRecovery": cartReminders, 
      "allowInformationCollection": personalizedExperience,
      "allowDeactivated": true
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full pb-16">
        <div className="flex-1 flex flex-col items-start justify-between py-10 px-20 box-border min-h-[615px] mq750:py-[26px] mq750:px-10 mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] pb-10 border-b-shadowTeal border-b-[3px] border-opacity-35 ">
            <h2 className="m-0 relative font-bold text-[32px] text-salmon text-100xl">
              Email Notification
            </h2>
            <div className="self-stretch flex flex-row items-end justify-center text-3xl text-darkturquoise lg:gap-[174px] mq450:gap-[44px] mq750:gap-[87px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] ">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] ">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <h3 className="m-0 relative text-inherit font-semibold mq450:text-lgi">
                      Subscribed products
                    </h3>
                    <div
                      className={`relative w-12 h-7 rounded-full cursor-pointer ${
                        subscribedProducts
                          ? "bg-darkturquoise border border-teal "
                          : "bg-gray border border-darkGray border-opacity-35 "
                      }`}
                      onClick={() => setSubscribedProducts(!subscribedProducts)}
                    >
                      <div
                        className={`absolute top-[2px] ${
                          subscribedProducts ? "left-[24px]" : "left-[2px]"
                        } shadow-[0px_2px_4px_rgba(39,_39,_39,_0.1)] rounded-full bg-white w-6 h-6 transition-all`}
                      />
                    </div>
                  </div>
                  <div className="relative text-base text-black inline-block ">
                    You&apos;ll receive emails when there&apos;s a restock or when discounts are available
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[14px] mq400:flex-wrap">
                  <h3 className="m-0 relative text-inherit font-semibold mq450:text-lgi">
                    Cart reminders
                  </h3>
                  <div
                    className={`relative w-12 h-7 rounded-full cursor-pointer ${
                      cartReminders
                        ? "bg-darkturquoise border border-teal "
                        : "bg-gray border border-darkGray border-opacity-35 "
                    }`}
                    onClick={() => setCartReminders(!cartReminders)}
                  >
                    <div
                      className={`absolute top-[2px] ${
                        cartReminders ? "left-[24px]" : "left-[2px]"
                      } shadow-[0px_2px_4px_rgba(39,_39,_39,_0.1)] rounded-full bg-white w-6 h-6 transition-all`}
                    />
                  </div>
                </div>
                <div className="self-stretch relative text-xl font-light font-roboto whitespace-pre-wrap mq400:text-base">
                  If these settings are turned off, AIDA may still send you
                  messages regarding your account, required service
                  announcements, legal notifications, and privacy matters
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] pb-10   ">
            <h2 className="m-0 relative font-bold text-[32px] text-salmon text-100xl">
              My Data
            </h2>
            <div className="self-stretch flex flex-row items-end justify-center text-3xl text-darkturquoise lg:gap-[174px] mq450:gap-[44px] mq750:gap-[87px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] ">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] ">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <h3 className="m-0 relative text-inherit font-semibold mq450:text-lgi">
                      Allow personalized experience
                    </h3>
                    <div
                      className={`relative w-12 h-7 rounded-full cursor-pointer ${
                        personalizedExperience
                          ? "bg-darkturquoise border border-teal "
                          : "bg-gray border border-darkGray border-opacity-35"
                      }`}
                      onClick={() =>
                        setPersonalizedExperience(!personalizedExperience)
                      }
                    >
                      <div
                        className={`absolute top-[2px] ${
                          personalizedExperience ? "left-[24px]" : "left-[2px]"
                        } shadow-[0px_2px_4px_rgba(39,_39,_39,_0.1)] rounded-full bg-white  w-6 h-6 transition-all`}
                      />
                    </div>
                  </div>
                  <div className="relative text-base text-black inline-block ">
                    This allows us to recommend products you might like
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleSaveSettings}
            className="cursor-pointer [border:none] py-4 px-4 bg-salmon rounded-lg flex flex-row items-start justify-center whitespace-nowrap hover:bg-indianred my-6"
          >
            <b className="relative text-lgi font-body text-primary-base-white text-left text-white">
              Save my settings
            </b>
          </button>
          <div
            onClick={() => handleLogout()}
            className="cursor-pointer [border:none] py-4 px-4 bg-darkturquoise rounded-lg flex flex-row items-start justify-center whitespace-nowrap hover:bg-lightseagreen"
          >
            <b className="relative text-lgi inline-block font-body text-primary-base-white text-white">
              Log out
            </b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[20px] pb-0 pl-0 gap-[15px] text-xl text-darkturquoise  mt-5 font-roboto border-t-[1px] border-solid border-darkturquoise lg:pr-[419px] lg:box-border mq750:flex-wrap mq750:pl-5 mq750:pr-5 mq750:pb-5 mq750:box-border">
            <Link
              className="relative [text-decoration:underline] font-medium "
              to="/delete"
            >
              Delete My Account
            </Link>
            <div className="relative text-salmon">
              This action cannot be undone
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
