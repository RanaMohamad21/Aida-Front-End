import { createContext, useContext, useState } from "react";

const SignUpContext = createContext();
// eslint-disable-next-line react/prop-types
function VendorSignUpProvider({ children }) {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneNumber: "",
    businessInfo: "",
    dateOfBirth: "",
    address: {
        city: "",
        street: "",
        BuildingNo: "",
        apartmentNo: "",
    },
    registrationDocument: "",
    listOfPartnersDocument: "",
    partnershipAgreementDocument: "",
    ownership: "",
    tradeLicense: "",
    vendorThoughts: "",
    User_type: "vendor",
    termsChecked: false,
  };
  const [formData, setFormData] = useState(initialState);
  return (
    <SignUpContext.Provider value={{ formData, setFormData }}>
      {children}
    </SignUpContext.Provider>
  );
}

function useVendor() {
  const context = useContext(SignUpContext);
  if (context === undefined)
    throw new Error("VendorContext was used outside VendorProvider");
  return context;
}

export { VendorSignUpProvider, useVendor };
