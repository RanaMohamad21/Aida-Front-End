import { useEffect, useState } from "react";

// import { useForm } from "react-hook-form";

const dummyProduct = {
    title: "Samsung A34",
    category:"Fashion",
    availableStockCount: 5,
    price: 500,
    taxes: 50,
    specification:[{ name: "Color", specification: "Red" },],
    tags:[
        "Electronic Devices",
        "Dual SIM",
        "Exclusive",
      ],
    description:"The best mobile To ever exist",
    hasDiscount:false,
    discountDurationType:"",
    enableSubscription:true,
    isUsed:true,
    discountPercentage:"",
    durationInDays:"",
    hasDiscountCode:""
};
function UpdateProduct() {
    const [product, setProduct] = useState(dummyProduct); 


    const handleInputChange = (event) => {
        setProduct({
          ...product,
          [event.target.name]: event.target.value,
        });
      };

    const MultiFileUploader = () => {
        const [files, setFiles] = useState(null);  
        const handleFileChange = (e) => {
          setFiles(e.target.files);
        };
      
        // ...
      };
    //* Integration with backend. 
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //       const response = await fetch(`/api/products/${productId}`);
    //       const data = await response.json();
    //       setProduct(data);
    //     };
      
    //     fetchProduct();
    //   }, [productId]);

    return (   
    );
}

export default UpdateProduct;
