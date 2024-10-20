import { Search } from "lucide-react";
import { useState } from "react";

const FilterBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className='relative w-full'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Search books...'
        className='w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
      />
      <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
        <Search />
      </span>
    </div>
  );
};

export default FilterBooks;
