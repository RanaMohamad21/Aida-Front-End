import { createContext, useContext, useState } from "react";

const SignUpContext = createContext();
// eslint-disable-next-line react/prop-types
function VendorSignUpProvider({ children }) {
  const initialState = {
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
    registrationDocument: "",
    listOfPartnersDocument: "",
    partnershipAgreementDocument: "",
    ownership: "",
    tradeLicense: "",
    vendorThoughts: "",
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
