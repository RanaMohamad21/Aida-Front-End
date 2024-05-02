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
    businessName: "",
    dateOfBirth: "",
    city: "",
    street: "",
    BuildingNo: "",
    apartmentNo: "",
    registrationDocument: "",
    listOfPartnersDocument: "",
    partnershipAgreementDocument: "",
    tradeLicense: "",
    user_type: "vendor",
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
