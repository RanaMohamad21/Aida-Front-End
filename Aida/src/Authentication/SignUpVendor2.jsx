import { useVendor } from "../Contexts/VendorSignUpProvider";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import SignUpTemplate from "./SignUpTemplate";
import SideBar from "../assets/Authentication/SideBarVendor.jpg";
import Uploader from "../UI/Uploader";
import { useEffect, useState } from "react";
//import { useState } from "react";

function SignUpVendor2() {
  const { formData, setFormData } = useVendor();
  const { register, handleSubmit } = useForm();

  const [registrationDocument, setRegistrationDocument] = useState(null);
  const [listOfPartnersDocument, setListOfPartnersDocument] = useState(null);
  const [partnershipAgreementDocument, setPartnershipAgreementDocument] =
    useState(null);
  const [tradeLicense, setTradeLicense] = useState(null);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        registrationDocument: registrationDocument,
        listOfPartnersDocument: listOfPartnersDocument,
        partnershipAgreementDocument: partnershipAgreementDocument,
        tradeLicense: tradeLicense,
        ...data,
      };
    });
    navigate("/SignUpVendor3");
  };
  useEffect(() => {
    console.log("Updated FormData:", formData);
  }, [formData]);

  function handleChange(e) {
    if (e.target.type === "checkbox") {
      setFormData((prevFormDate) => ({
        ...prevFormDate,
        termsChecked: e.target.checked,
      }));
    }
  }

  // const [registration, setRegistration] = useState("No file choosen");
  // const [partnersList, setPartnersList] = useState("No file choosen");
  // const [partnershipAgreement, setPartnershipAgreement] = useState("No file choosen");
  // const [tradeLicense, setTradeLicense] = useState("No file choosen");

  // const handleFileChange = (event) => {
  //   if (event.target && event.target.files && event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         const fileContent = e.target.result;
  //         console.log("File Content:", fileContent); // Log the file content (ArrayBuffer)
  //         // Include file content, name, and size in the data object
  //         register("registration", {
  //           value: fileContent,
  //           name: file.name,
  //           size: file.size,
  //           type: file.type,
  //         });
  //       };
  //       reader.readAsArrayBuffer(file); // Read file content as ArrayBuffer
  //     }
  //   }
  // };

  return (
    <SignUpTemplate imgSrc={SideBar}>
      <form className="capitalize " onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-20">
          <h1 className="text-teal text-xl font-semibold py-3">
            bussiness info
          </h1>
          <p>tell us more about your bussiness, your application</p>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className=" text-xl font-semibold py-3">
              bussiness registration document
            </h1>

            <p>please upload your bussiness registration document.</p>

            <p>
              this should include: commercial registry certificate, tax
              identification number (TIN), articles of association (AoA)
            </p>

            <Uploader
              name="registrationDocument"
              register={register}
              setFile={setRegistrationDocument}
            />
          </div>

          <div>
            <h1 className=" text-xl font-semibold py-3">
              legal structure and ownership
            </h1>
            <div className="lg:flex mb-5 lg:gap-4">
              <div>
                <input
                  type="radio"
                  id="sole proprietorship"
                  value="sole proprietorship"
                  name="ownership"
                  {...register("ownership")}
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
                  {...register("ownership")}
                />
                <label htmlFor="partnership">partnership</label>
              </div>
              <div className="">
                <input
                  type="radio"
                  id="limited liability company"
                  name="ownership"
                  value="limited liability company"
                  {...register("ownership")}
                />
                <label htmlFor="limited liability company">
                  limited liability company (LLC)
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  id="corporation"
                  name="ownership"
                  value="corporation"
                  {...register("ownership")}
                />
                <label htmlFor="corporation">corporation</label>
              </div>
            </div>
          </div>

          <div>
            <p>
              please upload a file that contains a list of partners and
              percentage of ownership for each
            </p>
            <Uploader
              name="listOfPartnersDocument"
              register={register}
              setFile={setListOfPartnersDocument}
            />
          </div>

          <div>
            <h1 className=" text-xl font-semibold pt-4">
              partnership agreement document
            </h1>
            <Uploader
              name="partnershipAgreementDocument"
              register={register}
              setFile={setPartnershipAgreementDocument}
            />
          </div>

          <div>
            <h1 className=" text-xl font-semibold pt-4">trade license</h1>
            <Uploader
              name="tradeLicense"
              register={register}
              setFile={setTradeLicense}
            />
          </div>
        </div>
        <div className="my-8">
          <p>is there anything else you&apos;d like to share with us?</p>
          <input
            type="text"
            name="vendorThoughts"
            {...register("vendorThoughts")}
            placeholder="leave a comment"
            className="h-20 border mt-2 text-darkGray border-solid px-3 pb-12 w-full md:w-[70%] "
          />
        </div>
        <div className="mt-4">
          <input
            type="checkbox"
            onChange={handleChange}
            value={formData.termsChecked}
            name="termsChecked"
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
            </span>
            .
          </p>
        </div>

        <div className="items-center flex justify-center w-full ">
          <input
            className="text-white bg-FlamingoPink w-1/2  rounded-md h-8 uppercase my-5 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all "
            type="submit"
            value="Signup"
            disabled={!formData.termsChecked}
            required
          />
        </div>
      </form>
    </SignUpTemplate>
  );
}

export default SignUpVendor2;
