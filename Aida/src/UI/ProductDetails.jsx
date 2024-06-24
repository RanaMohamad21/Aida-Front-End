import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductDetails({  }) {
  const product = {images:[]}
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="w-full h-full flex flex-col items-center pt-16">
            <div className="bg-white w-[85%] border-t-[3px] border-teal border-opacity-[20%] border-l-[3px] px-8 space-y-5 space-x-1 pb-7 py-8 flex flex-col rounded-lg items-center">
                {/* Images */}
                <div className="w-full h-[300px] flex items-center justify-center relative">
                    <button 
                        onClick={handlePrevClick}
                        className=" hover:bg-lightTeal hover:text-white absolute left-0 bg-gray-300 p-2 rounded-full"
                    >
                        {"<"}
                    </button>
                    <img 
                        src={product.images[currentImageIndex]} 
                        className="h-full object-contain" 
                        alt={`Product image ${currentImageIndex + 1}`} 
                    />
                    <button 
                        onClick={handleNextClick}
                        className=" hover:bg-lightTeal hover:text-white  absolute right-0 bg-gray-300 p-2 rounded-full"
                    >
                        {">"}
                    </button>
                </div>
                {/* Product Details */}
                <p className="font-semibold text-2xl mx-auto w-[70%]">
                    {product.title}: {product.briefDescription}
                </p>
                <p>{product.description}</p>
                {/* List of main features */}
                <h1 className="font-semibold text-xl">Main features</h1>
                <ol className="list-decimal" start="1">
                    {product.features?.map((feature, index) => (
                        <li className="text-black" key={index}>
                            {feature}
                        </li>
                    ))}
                </ol>
                {/* Specifications */}
                <h1 className="font-semibold text-xl">Specifications</h1>
                <div className="md:w-full lg:w-[60%]">
                    <table className="grid grid-cols-2 gap-3 w-[100%]">
                        {product.specifications?.map((specification, index) => (
                            <tr key={index}>
                                <th className="bg-IceBlue w-1/2 px-3">
                                    {specification.name}
                                </th>
                                <td className="px-3">{specification.value}</td>
                            </tr>
                        ))}
                    </table>
                </div>
                {/* Product details end */}
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        briefDescription: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
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
