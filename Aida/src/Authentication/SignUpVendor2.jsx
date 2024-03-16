import { useVendor } from "../Contexts/VendorSignUpProvider";

function SignUpVendor2() {
  const { formData } = useVendor();

  return (
    <>
      <h1>Hello</h1>
      <div>{formData.firstName}</div>
    </>
  );
}

export default SignUpVendor2;
