
import { useState } from 'react';
import { useParams } from 'react-router-dom';
function OrderInfo() {
   const [orderInfo,setOrderInfo] = useState(null)
   const { orderId } = useParams();

  // Set order info: 


   function formatCardNumber(cardNumber) {
    
    const last4Digits = cardNumber.slice(-4);
    const maskedDigits = cardNumber.slice(0, -4).replace(/./g, '•');
    return `${maskedDigits}${last4Digits}`;
}
    
    return (
        <div className=' w-full grid grid-rows-[auto,1fr,auto] mb-11 md:pr-4 sm:pr-1 ml-2 ' >
           {/* Title */}
            <div className=' w-full text-[25px] font-semibold text-FlamingoPink py-3'>Order Information</div>
            
            {/* Order details */}
            <div>
            <table className="min-w-full  ">
          <thead>
            <tr>
              <th className="py-2 px-4 text-[18px] ">Product</th>
              <th className="py-2 px-4 text-[18px]">Quantity</th>
              <th className="py-2 px-4 text-[17px]">Total price</th>
              <th className="py-2 px-4 text-[18px]">status</th>
            </tr>
            <tr className="h-[2px] bg-shadowTeal opacity-35 ">
                <td colSpan="4"></td>
            </tr>

          </thead>
          <tbody>
            {orderInfo?.products?.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">
                    <div className='flex flex-col'>
                        <div className=' md:flex'>
                            <img src = {product.image} />
                            <p>{product.name}</p>
                        </div>
                        {product?.discount?<div className='px-2 py-1 bg-salmon text-white '>- { product.discount *100}%</div>:''}
                    </div>
                    </td>

                <td className="py-2 px-4 border-b"><div className=' bg-IceBlue px-3 py-1'>{product.Quatity}</div></td>

                <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      product.status === 'Pending'
                        ? 'bg-yellow-300 text-yellow-700'
                        : product.status === 'Shipped'
                        ? 'bg-blue-300 text-blue-700'
                        : 'bg-green-300 text-green-700'
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment Information */}
        <div>
            <p className=' text-2xl text-teal  font-semibold mb-4 mt-2 border-t-shadowTeal border-opacity-30 border-t-[3px] pt-4 text-[20px] '>Payment Information</p>
            <div className=' sm:flex justify-between'>
                {/* Address and payment method */}
                <div>
                    <p className=' font-semibold text-lgi'>Address</p>
                    <p>{orderInfo?.address}</p>

                    <p className=' font-semibold text-lgi mt-2 '>
                        Payment method
                    </p>
                    <div className=' flex '>
                        <span>{orderInfo?.bankName}</span>
                        {/* Card Number */}
                        {/* <span>{formatCardNumber(orderInfo?.CardNumber)}</span> */}
                        <span>{orderInfo?.CutomerName}</span>
                        <span>{orderInfo?.cardExpirationDate}</span>
                    </div>
                </div>

                {/* Price */}
                <div>
                <table className="  md:min-w-full divide-y ">
    <tbody className="bg-white  divide-gray-200">
        <tr>
            <td className="px-6  whitespace-nowrap">Total:</td>
            <td className="px-6 whitespace-nowrap"><span>{orderInfo?.total}</span> EGP</td>
        </tr>
        <tr>
            <td className="px-6  whitespace-nowrap">Shipping:</td>
            <td className="px-6  whitespace-nowrap">{orderInfo?.shipping}</td>
        </tr>
        <tr>
            <td className="px-6 pb-2 whitespace-nowrap">Points Discount:</td>
            <td className="px-6 pb-2 whitespace-nowrap">{orderInfo?.discountPoints}%</td>
        </tr>
    </tbody>
</table>
                    <div className =' border-t-shadowTeal border-opacity-35 border-t-2 pt-2 w-max px-2 ml-5'>
                        <span className=' text-teal text-xl '>Total:</span>  <span className=' px-1'>{orderInfo?.totalPrice}</span> EGP
                    </div>
                </div>

            </div>
        </div>
            </div>

            {/* Shipment confirmation */}
            <div className=' w-full pt-5 border-t-[3px] flex justify-between items-center px-5 border-t-shadowTeal border-opacity-35'>
                {/* Date and status */}
                <div className=' '>
                   <p> Date <span className=' pl-2'>{orderInfo?.date} </span> </p>
                  
                </div>
              
            </div>
            
        </div>
    )
}

OrderInfo.propTypes = {

};

export default OrderInfo;
