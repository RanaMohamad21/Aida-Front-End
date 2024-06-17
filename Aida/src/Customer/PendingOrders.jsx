import { useEffect, useState } from "react";
import Pagination from "../Store/Pagination";
import { RxCross1 } from "react-icons/rx";


function PendingOrders() {
    const [pendingOrders, setPendingOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
  
    useEffect(() => {
      // Fetch orders data from API
      const fetchPendingOrders = async () => {
        try {
          const response = await fetch('https://api.example.com/orders'); // PlaceHolder for now
          const data = await response.json();
          setPendingOrders(data);
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

    function handleDeleteOrder(id){
        // Delete order logic
        console.log("Deleting the order with ID: ", id);
    }
  
    return (
        <div className=" w-full px-10 pb-16 ">
             <table className="min-w-full bg-white ">
          <thead>
            <tr>
              <th className="py-2 px-4 ">Order</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Revenue</th>
              <th className="py-2 px-4 text-white ">X</th>
            </tr>
            <tr className="h-[3px] bg-teal">
                <td colSpan="4"></td>
            </tr>

          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      order.status === 'shipped'
                        ? 'bg-gray-300 text-gray-700'
                        : order.status === 'Pending'
                        ? 'bg-yellow-300 text-yellow-700'
                        : order.status === 'arrived'
                        ? ' text-shadowTeal'
                        : 'bg-green-300 text-green-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">${order.revenue.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{order.status == 'pending'?<span className=" text-salmon" onClick={()=>handleDeleteOrder(order.id)}><RxCross1/></span>:""}</td>
                
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
    )
}



export default PendingOrders;
