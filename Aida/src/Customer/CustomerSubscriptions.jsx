import { useEffect, useState } from "react";
import Pagination from "../Store/Pagination";

function CustomerSubscriptions() {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
      // Fetch orders data from API
      const fetchSubscriptions = async () => {
        try {
          const response = await fetch('https://api.example.com/orders'); // PlaceHolder for now
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          console.error('Error fetching subscriptions:', error);
        }
      };
  
      fetchSubscriptions();
    }, []);

    const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className=" w-full">
             <table className="min-w-full bg-white ">
          <thead>
            <tr>
              <th className="py-2 px-4 ">Item</th>
              <th className="py-2 px-4">Status</th>

            </tr>
            <tr className="h-1 bg-teal">
                <td colSpan="2"></td>
            </tr>

          </thead>
          <tbody>
            {currentOrders.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      product.status === 'Unseen'
                        ? 'bg-gray-300 text-gray-700'
                        : product.status === 'Pending'
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
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
        />
            
        </div>
    )
}



export default CustomerSubscriptions;
