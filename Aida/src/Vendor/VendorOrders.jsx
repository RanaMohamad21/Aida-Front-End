import React, { useState, useEffect } from 'react';
import VendorNavBar from './VendorNavBar'; 
import Pagination from '../Store/Pagination';
import Footer from '../UI/Footer';

function VendorOrders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    // Fetch orders data from API
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://api.example.com/orders'); // PlaceHolder for now
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // Calculate pagination
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <VendorNavBar />
      <div className="p-6">
        <div className="bg-teal flex justify-around mb-6">
          <div className="text-center">
            <div className=" text-white text-2xl font-bold">5</div>
            <div className="text-white">Unseen</div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">10</div>
            <div className="text-white">Pending</div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">7</div>
            <div className="text-white">Shipped</div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">12</div>
            <div className="text-white text-gray-500">Arrived</div>
          </div>
        </div>

        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Order</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.date}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      order.status === 'Unseen'
                        ? 'bg-gray-300 text-gray-700'
                        : order.status === 'Pending'
                        ? 'bg-yellow-300 text-yellow-700'
                        : order.status === 'Shipped'
                        ? 'bg-blue-300 text-blue-700'
                        : 'bg-green-300 text-green-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">${order.revenue.toFixed(2)}</td>
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
      <Footer />
    </div>
  );
}

export default VendorOrders;
