import { useState } from "react";
import ProductViewPage from "../Store/ProductViewPage";
import { useParams } from "react-router-dom";
import Loader from "../UI/Loader";
function VendorProductViewPage() {
  const { orderId } = useParams();
  const [product, setproduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {

  //     // Function to fetch product data

  //     const fetchProduct = async () => {
  //         try {
  //             const response = await axios.get(`/api/products/${orderId}`); // Replace with your API endpoint
  //             setProduct(response.data);
  //         } catch (error) {
  //             console.error('Error fetching product data:', error);
  //         }
  //     };

  //     // Fetch product data if orderId is available
  //     if (orderId) {
  //         fetchProduct();
  //     }
  //   setIsLoading(false);
  // }, [orderId]); // The effect runs when orderId changes

  if (isLoading) {
    return <Loader />;
  }
  return <ProductViewPage isVendor={true} vendorProduct={product} />;
}

export default VendorProductViewPage;
