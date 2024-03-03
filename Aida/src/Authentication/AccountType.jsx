import Button from "../UI/Button";
import LoginPrompt from "../UI/LoginPrompt";
import Background from "../assets/Authentication/MixedVendorCustomer.png";
import Logo from "../assets/logo/LogoWhiteTransparent.svg";

function AccountType() {
  return (
    <div className="relative grid grid-[1fr,auto] h-screen w-full">
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
            <img src={Logo} className="h-[100px] mt-4 w-full" />
          </div>
          <div className="bg-teal text-center py-3">
            <p className="font-semibold text-xl">Choose account type</p>
            <p className="font-thin text-sm">This cannot be changed later</p>
          </div>
          <div className="flex items-center justify-center text-center pt-28 pb-[74px]">
            <div className="w-[50%]">
              <p>
                Effortlessly reach customers with our <br/> streamlined platform,
                where trust and modernity <br/> meet
              </p>
              <Button route="/vendorgeneralinfo" background="FlamingoPink" width="w-[80%]">
                Vendor
              </Button>
            </div>
            <div className="w-[50%]">
              <p>
                Experience hassle-free shopping with our <br/> intuitive platform,
                designed for your convenience <br/> and trust
              </p>
              <Button
                route="/signup"
                background="FlamingoPink"
                width="w-[80%]"
               
              >
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




// import Button from "../UI/Button";
// import LoginPrompt from "../UI/LoginPrompt";
// import Background from "../assets/Authentication/MixedVendorCustomer.png";
// import Logo from "../assets/logo/LogoWhiteTransparent.svg";
// function AccountType() {
//   return (
//     <div className="grid  grid-[1fr,auto] h-screen  w-full ">
         
//       <div
//         className="w-full grid grid-rows-[auto,auto,1fr] text-white  "
//         style={{ backgroundImage: `url(${Background})` }}
//       >
//         <div>
//         <img src={Logo} className="h-[70%] mt-4 w-full"/>
//         </div>
//         <div className="bg-teal text-center py-3 ">
//           <p className="font-semibold text-xl">Choose account type</p>
//           <p className="font-thin text-sm">This cannot be changed later</p>
//         </div>
//         <div className="flex items-center justify-center text-center ">
//           <div>
//             <p>
//               Effortlessly reach customers with our streamlined platform, where
//               trust and modernity meet
//             </p>
//             <Button route="" background="FlamingoPink" width="w-[80%]">
//               Vendor
//             </Button>
//           </div>
//           <div >
//             <p>
//               Experience hassle-free shopping with our intuitive platform,
//               designed for your convenience and trust
//             </p>
//             <Button route="" background="FlamingoPink" width="w-[80%]
//             " style="mt-[42px]">
//               Customer
//             </Button>
//           </div>
//         </div>
//       </div>

//       <LoginPrompt />
//     </div>
//   );
// }

// export default AccountType;
