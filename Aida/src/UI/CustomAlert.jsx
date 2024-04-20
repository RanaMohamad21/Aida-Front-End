function CustomAlert({ message, onClose }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 bg-FlamingoPink mr-2"
          onClick={onClose}
        >
          Ok
        </button>
        </div>
      </div>
    </div>
  );
}

export default CustomAlert;
