import { useVendor } from "../Contexts/VendorSignUpProvider";
// import { useNavigate } from "react-router-dom";

import SignUpTemplate from "./SignUpTemplate";
import SideBar from "../assets/Authentication/SideBarVendor.jpg";
import Uploader from "../UI/Uploader";
import { useState } from "react";

function SignUpVendor2() {
  const { formData, setFormData } = useVendor();
  const [registration, setRegistration] = useState("No file choosen");
  const [partnersList, setPartnersList] = useState("No file choosen");
  const [partnershipAgreement, setPartnershipAgreement] = useState("No file choosen");
  const [tradeLicense, setTradeLicense] = useState("No file choosen");
  function handleSubmit(){}
  function handleChange(){}

  return (
    <SignUpTemplate imgSrc={SideBar}>
       <form className="capitalize " onSubmit={handleSubmit}>
        <div className="mb-20">
        <h1 className="text-teal text-xl font-semibold py-3">business info</h1>
        <p>tell us more about your business, your application</p>
        </div>

        <div className="flex flex-col gap-5">
        <div>
        <h1 className=" text-xl font-semibold py-3">business registration document</h1>

<p>please upload your business registration document.</p>

<p>this should include: commercial registry certificate, tax identification number(TIN), articles of association (AoA)</p>

<Uploader fileStatus={registration}/>
        </div>
        
        <div>
        <h1 className=" text-xl font-semibold py-3">legal structure and ownership</h1>
        <div className="md:flex mb-5">
                <div>
                  <input
                    type="radio"
                    id="sole proprietorship"
                    value="sole proprietorship"
                    name="ownership"
                    onChange={handleChange}
                  />{" "}
                  <label className={` `} htmlFor="sole proprietorship">
                    sole proprietorship
                  </label>
                </div>
                <div className="">
                  <input
                    type="radio"
                    id="partnership"
                    name="ownership"
                    value="partnership"
                    onChange={handleChange}
                  />
                  <label htmlFor="partnership" >
                    partnership
                  </label>
                </div>
                <div className="">
                  <input
                    type="radio"
                    id="limited liability company"
                    name="ownership"
                    value="limited liability company"
                    onChange={handleChange}
                  />
                  <label htmlFor="limited liability company" >
                    limited liability company (LLC)
                  </label>
                </div>
                <div className="">
                  <input
                    type="radio"
                    id="corporation"
                    name="ownership"
                    value="corporation"
                    onChange={handleChange}
                  />
                  <label htmlFor="corporation" >
                    corporation
                  </label>
                </div>
              </div>
        </div>

              
              <div>
                <p>please upload a file that contains a list of partners and percentage of ownership for each</p>

                <Uploader fileStatus={registration}/>
              </div>

              
              <div>
              <h1 className=" text-xl font-semibold pt-4">partnership agreement document</h1>
              <Uploader fileStatus={partnershipAgreement}/>
              </div>
          
              <div>
              <h1 className=" text-xl font-semibold pt-4">trade license</h1>
              <Uploader fileStatus={tradeLicense}/>
              </div>
              </div>
              <div className="my-8">
              <p>is there anything else you&apos;d like to share with us?</p>
              <input type ="text" placeholder="leave a comment" className="h-20 border border-solid px-3 pb-12 w-full md:w-[70%] "/>
              </div>
              <div className="mt-4">
              <input
                type="checkbox"
                value={formData.termsChecked}
                name="termsChecked"
                onChange={handleChange}
                className="mr-2 mb-3  "
              />
              <p className="inline">
                I accept{" "}
                <span className="cursor-pointer text-teal underline italic ">
                  Terms of services
                </span>{" "}
                and{" "}
                <span className="cursor-pointer text-teal underline italic ">
                  Privacy Policy
                </span>.
              </p>
            </div>

            <div className="items-center flex justify-center w-full ">
              <input
                className="text-white bg-FlamingoPink w-1/2  rounded-md h-8 uppercase my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all "
                type="submit"
                value="Signup"
                disabled={!formData.termsChecked}
                onChange={handleSubmit}
                required
              />
            </div>

       </form>
      
      
    </SignUpTemplate>
  );
}

export default SignUpVendor2;
