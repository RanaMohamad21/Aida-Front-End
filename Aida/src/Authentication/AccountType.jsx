import Button from "../UI/Button";
import LoginPrompt from "../UI/LoginPrompt";
import Background from "../assets/Authentication/MixedVendorCustomer.png";
import Logo from "../assets/logo/wordmark_white.png";

function AccountType() {
  return (
    <div className="relative grid grid-[1fr,auto] h-screen w-full ">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content container */}
        <div className="relative z-10 text-white">
          <div className="pb-10">
            <img src={Logo} className="h-[100px] mt-4 mx-auto" />
          </div>
          <div className="bg-teal text-center py-3 pb-5 border border-black border-opacity-30 ">
            <p className="font-semibold text-xl">Choose account type</p>
            <p className="font-thin text-sm">This cannot be changed later</p>
          </div>
          <div className="flex items-center justify-center text-center pt-28 pb-[74px]">
            <div className="w-[50%]">
              <p>
                Effortlessly reach customers with our <br /> streamlined
                platform, where trust and modernity <br /> meet
              </p>
              <Button
                route="/SignUpVendor1"
                background="FlamingoPink"
                width="w-[80%]"
              >
                Vendor
              </Button>
            </div>
            <div className="w-[50%]">
              <p>
                Experience hassle-free shopping with our <br /> intuitive
                platform, designed for your convenience <br /> and trust
              </p>
              <Button route="/signup" background="FlamingoPink" width="w-[80%]">
                Customer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LoginPrompt />
    </div>
  );
}

export default AccountType;
