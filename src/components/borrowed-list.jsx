import { BookMarked, X } from "lucide-react";
import { useState } from "react";

export const BorrowedList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const borrowedBooksWithBookData = [];

  const handleReturn = (bookId) => {
    console.log("Returning book:", bookId);
  };

  return (
    <>
      <button onClick={toggleSidebar} className='flex items-center gap-1 group'>
        <BookMarked
          className={`text-gray-700 group-hover:text-blue-600 ${
            isSidebarOpen ? "text-blue-600" : ""
          }`}
        />
        <span
          className={`text-gray-700 hidden md:inline group-hover:text-blue-600 ${
            isSidebarOpen ? "text-blue-600" : ""
          }`}
        >
          Borrowed
        </span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
          onClick={toggleSidebar}
        >
          <X size={20} />
        </button>

        {/* Borrowed Book List Content */}
        <div className='p-4 overflow-y-auto h-full'>
          <h2 className='text-lg font-bold mb-4'>Your Borrowed Books</h2>
          <ul className='space-y-3'>
            {borrowedBooksWithBookData?.length ? (
              borrowedBooksWithBookData?.map((book) => (
                <li
                  key={book.ID}
                  className='p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors shadow-sm'
                >
                  <h4 className='text-md font-semibold'>{book.Title}</h4>
                  <p className='text-sm text-gray-600'>{book.Author}</p>

                  <button
                    className='mt-2 py-1 px-3 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors'
                    onClick={() => handleReturn(book.ID)}
                  >
                    Return
                  </button>
                </li>
              ))
            ) : (
              <p className='text-gray-500'>You have no borrowed books.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};
