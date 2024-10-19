import React, { useState } from "react";
import BookCover from "../../assets/example-book-cover.jpg";
import { useBook } from "../../hooks/use-book";
import { X } from "lucide-react";

export const CardBook = ({ data }) => {
  const { ID, Title, Description, Author, Year, ImageURI, Borrows } = data;
  const { borrowBookMutation } = useBook();

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [borrowStatus, setBorrowStatus] = useState(Borrows !== null);

  // Function to toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Function to handle borrow action
  const handleBorrow = () => {
    if (!borrowStatus) {
      setBorrowStatus(true);
      borrowBookMutation.mutate(ID, {
        onSuccess: () => {
          alert(`${Title} has been borrowed!`);
        },
      });
    }
  };

  return (
    <>
      {/* Book Card */}
      <div className='w-[300px] sm:w-full shadow-lg rounded-xl overflow-hidden bg-white cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl'>
        <div className='relative w-full h-72 bg-gradient-to-b from-green-400 to-blue-400 overflow-hidden'>
          <img
            src={ImageURI || BookCover}
            alt={Title}
            className='w-full h-full object-cover object-center rounded-t-xl'
          />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4'>
            <h4 className='text-white text-lg font-semibold line-clamp-1'>
              {Title}
            </h4>
            <p className='text-gray-300 text-sm'>{Author}</p>
          </div>
        </div>
        <div className='p-4 bg-white'>
          <p className='text-sm text-gray-500'>{Year}</p>
          <p className='text-gray-700 text-sm mb-4 line-clamp-2'>
            {Description}
          </p>
          <button
            className='w-full py-2 px-4 bg-blue-500 text-white rounded-md font-medium text-center hover:bg-blue-600 transition-colors'
            onClick={toggleModal}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative'>
            {/* Close button */}
            <button
              className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
              onClick={toggleModal}
            >
              <X size={20} />
            </button>

            {/* Book details */}
            <div className='flex items-start space-x-4'>
              <img
                src={ImageURI || BookCover}
                alt={Title}
                className='w-24 h-36 object-cover rounded-md shadow-md'
              />
              <div>
                <h4 className='text-xl font-semibold'>{Title}</h4>
                <p className='text-gray-500'>{Author}</p>
                <p className='text-gray-500'>{Year}</p>
                <p className='text-gray-700 mt-2'>
                  Status:{" "}
                  {borrowStatus ? (
                    <span className='text-red-500'>Borrowed</span>
                  ) : (
                    <span className='text-green-500'>Available</span>
                  )}
                </p>
                {borrowStatus && (
                  <p className='text-gray-500 mt-1 text-sm'>
                    Borrowed by: {Borrows ? Borrows.name : "Unknown"}
                  </p>
                )}
              </div>
            </div>

            <div className='mt-4'>
              <p className='text-gray-700'>{Description}</p>
            </div>

            <div className='mt-6 flex justify-end'>
              <button
                className={`py-2 px-4 rounded-md font-medium text-white transition-colors ${
                  borrowStatus
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                onClick={handleBorrow}
                disabled={borrowStatus}
              >
                {borrowStatus ? "Unavailable" : "Borrow"}
              </button>
              <button
                className='py-2 px-4 ml-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
