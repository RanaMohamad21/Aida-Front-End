import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Store/Pagination";
import { RxCross1 } from "react-icons/rx";
import { useUser } from './UserContext';
import { Link } from "react-router-dom";

function PendingOrders() {
   const { user, setUser } = useUser();
   const [pendingOrders, setPendingOrders] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(10);

   useEffect(() => {
      // Fetch orders data from API
      const fetchPendingOrders = async () => {
         try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8081/api/v1/order/user', {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            });

            // Transform the data to include only pending orders and map to expected format
            const pendingOrders = response.data
               .filter(order => order.orderItems.some(item => item.status === 'pending'))
               .map((order, index) => ({
                  counter: index + 1,
                  id: order._id,
                  status: 'Pending',
                  revenue: order.orderItems.reduce((acc, item) => acc + item.productPrice + item.taxes - item.discountPrice, 0) + order.shipmentPrice,
               }));

            setPendingOrders(pendingOrders);
         } catch (error) {
            console.error('Error fetching orders:', error);
         }
      };

      fetchPendingOrders();
   }, []);

   // Calculate pagination
   const indexOfLastOrder = currentPage * itemsPerPage;
   const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
   const currentOrders = pendingOrders.slice(indexOfFirstOrder, indexOfLastOrder);
   const totalPages = Math.ceil(pendingOrders.length / itemsPerPage);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const handleDeleteOrder = async (id) => {
      try {
         const token = localStorage.getItem('token');
         await axios.delete(`http://localhost:8081/api/v1/order/delete/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });

         // Remove the deleted order from the front-end state
         setPendingOrders(prevOrders => prevOrders.filter(order => order.id !== id));
      } catch (error) {
         console.error('Error deleting order:', error);
      }
   };

   return (
      <div className="w-full px-10 pb-16">
         <table className="min-w-full bg-white">
            <thead>
               <tr>
                  <th className="py-2 px-4 text-left">Order #</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Revenue</th>
                  <th className="py-2 px-4 text-left">X</th>
               </tr>
               <tr className="h-[3px] bg-teal">
                  <td colSpan="4"></td>
               </tr>
            </thead>
            <tbody>
               {currentOrders.map((order, index) => (
                  <tr key={order.id}>
                     <td className="py-2 px-4 border-b"><Link to={`/order/${order.id}`}>{index + 1}</Link></td>
                     <td className="py-2 px-4 border-b">
                        <span className="px-2 py-1 rounded bg-yellow-300 text-yellow-700">
                           {order.status}
                        </span>
                     </td>
                     <td className="py-2 px-4 border-b">${order.revenue.toFixed(2)}</td>
                     <td className="py-2 px-4 border-b">
                        {order.status === 'Pending' && (
                           <span className="text-salmon" onClick={() => handleDeleteOrder(order.id)}>
                              <RxCross1 />
                           </span>
                        )}
                     </td>
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

export default PendingOrders;
