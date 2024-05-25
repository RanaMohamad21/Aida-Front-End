import React from 'react';

function Pagination({ totalPages, currentPage, paginate }) {
  const pageNumbers = [];

  // Define the range of page numbers to show
  const showPages = 5; // Number of pages to show in the pagination control
  const startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
  const endPage = Math.min(totalPages, startPage + showPages - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-5 py-2 leading-tight text-white bg-teal border border-gray-500 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            style={{ minWidth: '100px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#25b5ba"
              className="w-5 h-5 mr-2 bg-white rounded-full p-1"
            >
              <path fillRule="evenodd" d="M15.78 8.22a.75.75 0 00-1.06-1.06L9 12.94l5.72 5.72a.75.75 0 001.06-1.06L10.81 12l4.97-4.97z" clipRule="evenodd" />
            </svg>
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`flex items-center justify-center px-5 py-2 leading-tight border ${
                currentPage === number
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`}
              style={{ minWidth: '40px' }}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-5 py-2 leading-tight text-white bg-teal border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            style={{ minWidth: '100px' }}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#25b5ba"
              className="w-5 h-5 ml-2 bg-white rounded-full p-1"
            >
              <path fillRule="evenodd" d="M8.22 8.22a.75.75 0 011.06 0L14 12.94 9.28 17.66a.75.75 0 11-1.06-1.06L13.19 12 8.22 8.22z" clipRule="evenodd" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
