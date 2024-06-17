// Optimized for mobile viewport 
import { useEffect, useState } from "react";
import Pagination from "../Store/Pagination";


function CustomerOrdersHistory() {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
      // Fetch orders data from API
      const fetchOrdersHistory = async () => {
        try {
          const response = await fetch('https://api.example.com/orders'); // PlaceHolder for now
          const data = await response.json();
          setOrders(data);
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
        <div className=" w-full pb-16 ">
             <table className="min-w-full bg-white ">
          <thead>
            <tr>
              <th className="py-2 px-4 ">Order</th>
              <th className="py-2 px-4 ">Date</th>
              <th className="py-2 px-4">Total price</th>
            </tr>
            <tr className="h-1 bg-lightTeal">
                <td colSpan="3"></td>
            </tr>

          </thead>
          <tbody>
            {currentOrders.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.date}</td>
               
                <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
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


export default CustomerOrdersHistory;
