import React from "react";

const MyBooksTable = ({ books, onUpdate, onDelete }) => {
  return (
    <div className='container mx-auto p-4'>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead>
            <tr className='bg-gray-100 border-b'>
              <th className='text-left p-4 border-r'>Image</th>
              <th className='text-left p-4 border-r'>Title</th>
              <th className='text-left p-4 border-r'>Description</th>
              <th className='text-left p-4 border-r'>Year</th>
              <th className='text-left p-4 border-r'>Genre</th>
              <th className='text-center p-4'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className='border-b hover:bg-gray-50'>
                <td className='p-4 border-r'>
                  <img
                    src={book.image}
                    alt={book.title}
                    className='w-12 h-12 object-cover rounded'
                  />
                </td>
                <td className='p-4 border-r'>{book.title}</td>
                <td className='p-4 border-r'>{book.description}</td>
                <td className='p-4 border-r'>{book.year}</td>
                <td className='p-4 border-r'>{book.genre}</td>
                <td className='p-4 text-center space-x-2'>
                  <button
                    className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                    onClick={() => onUpdate(book)}
                  >
                    Update
                  </button>
                  <button
                    className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                    onClick={() => onDelete(book)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooksTable;
