import { BookMarked, X } from "lucide-react";
import React, { useState } from "react";

export const BorrowedList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sample data for books, with borrow status
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      is_borrowed: true,
      borrowed_by: "User1",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      is_borrowed: false,
      borrowed_by: "",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      is_borrowed: true,
      borrowed_by: "User2",
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      is_borrowed: true,
      borrowed_by: "User1",
    },
  ]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Function to return a book
  const handleReturn = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId
          ? { ...book, is_borrowed: false, borrowed_by: "" }
          : book
      )
    );
  };

  // Filter books that are borrowed by the current user (User1 in this case)
  const borrowedBooks = books.filter(
    (book) => book.is_borrowed && book.borrowed_by === "User1"
  );

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
            {borrowedBooks.length ? (
              borrowedBooks.map((book) => (
                <li
                  key={book.id}
                  className='p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors shadow-sm'
                >
                  <h4 className='text-md font-semibold'>{book.title}</h4>
                  <p className='text-sm text-gray-600'>{book.author}</p>

                  {/* Return Button */}
                  <button
                    className='mt-2 py-1 px-3 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors'
                    onClick={() => handleReturn(book.id)}
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
