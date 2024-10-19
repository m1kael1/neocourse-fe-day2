import { Pencil, Trash } from "lucide-react";
import React from "react";

const MyBooksTable = ({ books }) => {
  return (
    <div className='container mx-auto py-4'>
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
            {books?.map((book, index) => (
              <tr key={index} className='border-b hover:bg-gray-50'>
                <td className='p-4 border-r'>
                  <img
                    src={book.ImageURI}
                    alt={book.Title}
                    className='w-12object-cover rounded'
                  />
                </td>
                <td className='p-4 border-r'>{book.Title}</td>
                <td className='p-4 border-r'>{book.Description}</td>
                <td className='p-4 border-r'>{book.Year}</td>
                <td className='p-4 border-r'>{book.Genre}</td>
                <td className='p-4 '>
                  <div className='flex gap-2'>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                      <Pencil size={20} />
                    </button>
                    <button className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
                      <Trash size={20} />
                    </button>
                  </div>
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
