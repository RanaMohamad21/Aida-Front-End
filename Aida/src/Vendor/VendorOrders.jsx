import React, { useState, useEffect } from 'react';
import VendorNavBar from './VendorNavBar'; 
import Pagination from '../Store/Pagination';
import Footer from '../UI/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faClock, faShippingFast, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useVendor } from './VendorContext';
import axios from 'axios';

function VendorOrders() {
  const { vendor, setVendor } = useVendor();
  if (!vendor) {
    // Wait for the data to be fetched
    return <div>Loading...</div>;
  }
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch orders data from API
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/order/vendor/1', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(response.data);
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

  // Calculate order statuses
  const statusCounts = {
    unseen: 0,
    pending: 0,
    shipped: 0,
    arrived: 0,
  };

  orders.forEach(order => {
    order.orderItems.forEach(item => {
      switch (item.status) {
        case 'unseen':
          statusCounts.unseen++;
          break;
        case 'pending':
          statusCounts.pending++;
          break;
        case 'shipped':
          statusCounts.shipped++;
          break;
        case 'arrived':
          statusCounts.arrived++;
          break;
        default:
          break;
      }
    });
  });

  return (
    <div>
      <VendorNavBar />
      <div className="p-6">
        <div className="bg-teal flex justify-around mb-6">
          <div className="text-center">
            <div className="text-white text-2xl font-bold">{statusCounts.unseen}</div>
            <div className="text-white">
              <FontAwesomeIcon icon={faEye} className="text-white text-2xl text-blue-500" /> Unseen
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">{statusCounts.pending}</div>
            <div className="text-white">
              <FontAwesomeIcon icon={faClock} className="text-white text-2xl text-blue-500" /> Pending
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">{statusCounts.shipped}</div>
            <div className="text-white">
              <FontAwesomeIcon icon={faShippingFast} className="text-white text-2xl text-blue-500" /> Shipped
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">{statusCounts.arrived}</div>
            <div className="text-white text-gray-500">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white text-2xl text-blue-500" /> Arrived
            </div>
          </div>
        </div>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Order</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Revenue</th>
            </tr>
            <tr className="h-1 bg-teal">
              <td colSpan="4"></td>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border-b">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td className="py-2 px-4 border-b">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      order.orderItems[0].status === 'pending'
                        ? 'bg-yellow-300 text-yellow-700'
                        : order.orderItems[0].status === 'shipped'
                        ? 'bg-blue-300 text-blue-700'
                        : 'bg-green-300 text-green-700'
                    }`}
                  >
                    {order.orderItems[0].status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">${(order.shipmentPrice + order.orderItems[0].productPrice - order.orderItems[0].discountPrice + order.orderItems[0].taxes).toFixed(2)}</td>
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
