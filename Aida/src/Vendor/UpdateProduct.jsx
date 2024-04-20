import ProductForm from "./ProductForm";


// / How the Product form Expects the inputs to be
const pDescription  = "<h1>Oh </h1> Hello! <ul><li>Test</li><li>Two</li></ul>"
const pTags = ["Electronics", "Carbo","Dummy"];
const pSpecifications = [{name: "Carbon", specification:"Carbon bardo"},{name: "Carbon", specification:"Carbon bardo"}]
const pHasDiscount = true;
const initialProduct = {
  title: "Samsung",
  category: "electronics",
  availableStockCount: 6, 
  enableSubscription: true,
  isUsed:true, 
  price: 350,
  taxes: 10,
  discountPercentage: 54,
  discountDurationType: "number",
  durationInDays: 34,
  hasDiscountCode: true,
}
function UpdateProduct() {

    function handleUpdateProduct(pID,pShelf){
    
    }
  
  return (
    <ProductForm
    pDescription={pDescription}
    pTags={pTags}
    pSpecifications={pSpecifications}
    pImages={pImages}
    pHasDiscount={pHasDiscount}
    initialProduct={initialProduct}
    handleProduct = {handleUpdateProduct}
    />
    
    )
}

export default UpdateProduct;

























// const onSubmit = (data) => {
//   const formData = new FormData();
//   for (let i = 0; i < data.images.length; i++) {
//     formData.set(`images[${i}]`, data.images[i]);
//   }
//   formData.append("title", data.title);
//   formData.append("category", data.category);
//   formData.append("availableStockCount", availableStockCount);
//   formData.append("price", Number(price));
//   formData.append("taxes", Number(taxes));
//   formData.append("specifications", JSON.stringify(specifications));
//   formData.append("tags", tags.join(","));
//   formData.append("description", description);
//   formData.append("hasDiscount", hasDiscount);
//   formData.append("discountDurationType", discountDurationType);
//   formData.append("enableSubscription", data.enableSubscription);
//   formData.append("isUsed", data.isUsed);
//   formData.append("discountPercentage", data.discountPercentage);
//   formData.append("durationInDays", data.durationInDays);
//   formData.append("hasDiscountCode", data.hasDiscountCode);

//   // Send the form data to the server to update the product
//   fetch(`/api/products/${productId}`, {
//     method: "PUT",
//     body: formData,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Product updated successfully", data);
//       // Redirect the user to the product page or the vendor dashboard
//       // history.push(`/products/${productId}`);
//     })
//     .catch((error) => {
//       console.error("Error updating product", error);
//       // Show an error message to the user
//     });
// };
// function UpdateProductPage() {
//   const location = useLocation();
//   const {productDetails, productId, shelfID} = location.state;

//   // Get the initial product data from the server
//   const [product, setProduct] = useState(productDetails);

//   useEffect(() => {
//     fetch(`/api/products/${productId}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data));
//   }, [productId]);

//   // If the product data is not yet loaded, show a loading message
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   // Use the `updateProductPage` function to update the product data
//   return (
//     <AddProductPage
//       product={product}
//       onSubmit={(data) => updateProductPage(productId, data)}
//     />
//   );
// }

// export default UpdateProductPage;
