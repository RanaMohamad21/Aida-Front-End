import { useEffect, useState } from "react";
import Pagination from "../Store/Pagination";
import { useUser } from './UserContext';
import axios from "axios";
import { Link } from "react-router-dom";

function CustomerOrdersHistory() {
   const { user, setUser } = useUser();
   const [orders, setOrders] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(10);

   useEffect(() => {
      // Fetch orders data from API
      const fetchOrdersHistory = async () => {
         try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8081/api/v1/order/user', {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            });

            // Transform the data to include only delivered orders and map to expected format
            const deliveredOrders = response.data
               .filter(order => order.orderItems.some(item => item.status === 'delivered'))
               .map((order, index) => ({
                  counter: index + 1,
                  id: order._id,
                  date: new Date(order.createdAt).toLocaleDateString(),
                  price: order.orderItems.reduce((acc, item) => acc + item.productPrice + item.taxes - item.discountPrice, 0) + order.shipmentPrice,
               }));

            setOrders(deliveredOrders);
         } catch (error) {
            console.error('Error fetching orders:', error);
         }
      };

      fetchOrdersHistory();
   }, []);

   const indexOfLastOrder = currentPage * itemsPerPage;
   const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
   const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
   const totalPages = Math.ceil(orders.length / itemsPerPage);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <div className="w-full pb-16">
         <table className="min-w-full bg-white">
            <thead>
               <tr>
                  <th className="py-2 px-4 text-left">Order #</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Total Price</th>
               </tr>
               <tr className="h-1 bg-lightTeal">
                  <td colSpan="3"></td>
               </tr>
            </thead>
            <tbody>
               {currentOrders.map((order, index) => (
                  <tr key={order.id}>
                    <Link to={`/CustomerProfile/orderDetails/${order.id}`}> <td className="py-2 px-4 border-b"><Link to={`/order/${order.id}`}>{index + 1}</Link></td>
                     <td className="py-2 px-4 border-b">{order.date}</td>
                     <td className="py-2 px-4 border-b">${order.price.toFixed(2)}</td></Link>
                  </tr>
               ))}
            </tbody>
         </table>
         <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
         />
      </div>
   );
}

export default CustomerOrdersHistory;
