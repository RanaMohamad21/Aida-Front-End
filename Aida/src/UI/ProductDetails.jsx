import selectedImage from "../assets/dummy/Samsung - Copy.png";
import PropTypes from 'prop-types';
// This component is used in the product view page
// for both the customer and the vendor 
function ProductDetails({product}) {
    return (
        <div className="  w-full h-full flex flex-col items-center pt-16  ">
          <div className="  bg-white  w-[85%] border-t-[3px]  border-teal border-opacity-[20%]  border-l-[3px]  px-8 space-y-5 space-x-1 pb-7  py-8 flex flex-col rounded-lg items-center">
            {/* Images */}
            <div className="grid grid-cols-[3fr,1fr]">
              <div className=" flex items-center justify-end pr-3  h-[300px]">
                <img src={selectedImage} className="h-full  contain " />
                {/* <img src={product.selectedImage} className="h-full  contain " /> */}
              </div>
              {/* minimized images */}
              {/* <div className="flex items-center justify-center "></div> */}
            </div>
            {/* Product Details */}
            <p className=" font-semibold text-2xl mx-auto  w-[70%]">
              {product.title}:{product.briefDescription}
            </p>
            <p>{product.description}</p>
            {/* List of main features */}
            <h1 className=" font-semibold text-xl">Main features</h1>
            <ol className=" list-decimal" start="1">
              {/* {product.features?.map((feature, index) => {
                return (
                  <li className=" text-black" key={index}>
                    {feature}
                  </li>
                );
              })} */}
            </ol>
            {/*end: List of main features */}

            {/* start: Specifications */}
            <h1 className=" font-semibold text-xl">Specifications</h1>
            <div className=" md:w-full lg:w-[60%]">
              <table className=" grid grid-cols-2 gap-3 w-[100%] ">
                {product.specifications?.map((specification, index) => {
                  return (
                    <tr key={index}>
                      <th className=" bg-IceBlue w-1/2 px-3">
                        {specification.name}
                      </th>
                      <td className="  px-3">{specification.value}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            {/* end: Specifications */}
            {/* Prodct details end */}
          </div>
        </div>
    )
}

ProductDetails.propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      briefDescription: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      specifications: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ).isRequired,
      // Add more PropTypes for other properties if needed
    }).isRequired,
  };

export default ProductDetails;
