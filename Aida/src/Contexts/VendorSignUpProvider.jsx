import { createContext, useContext, useState } from "react";

const SignUpContext = createContext();
// eslint-disable-next-line react/prop-types
function VendorSignUpProvider({ children }) {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    city: "",
    street: "",
    buildingNumber: "",
    apartmentNumber: "",
    businessRgistrationDocument: "",
    legalStructure: "",
    listOfPartnersDocument: "",
    partnershipAgreementDocument: "",
    tradeLicense: "",
    vendorThoughts: "",
    termsChecked: false,
  });
  return (
    <SignUpContext.Provider value={{ formData, setFormData }}>
      {children}
    </SignUpContext.Provider>
  );
}

function useVendor() {
  const context = useContext(SignUpContext);
  if (context === undefined)
    throw new Error(
      "VendorContext was used outside VendorProvider"
    );
  return context;
}

export  {VendorSignUpProvider, useVendor};
