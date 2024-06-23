import { useState } from "react";
import Pagination from "../Store/Pagination";
import { useUser } from './UserContext';

function CustomerSubscriptions() {
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const subscriptions = user.subscriptions || [];
  
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentSubscriptions = subscriptions.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(subscriptions.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full pb-16">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4">Item</th>
            <th className="py-2 px-4">Status</th>
          </tr>
          <tr className="h-1 bg-teal">
            <td colSpan="2"></td>
          </tr>
        </thead>
        <tbody>
          {currentSubscriptions.map((subscription, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{subscription.product_id}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`px-2 py-1 rounded ${
                    subscription.status === 'OnSale'
                      ? 'bg-green-300 text-green-700'
                      : 'bg-gray-300 text-gray-700'
                  }`}
                >
                  {subscription.status}
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
  );
}

export default CustomerSubscriptions;
