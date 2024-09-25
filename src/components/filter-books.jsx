import React, { useState } from "react";

const FilterBooks = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const genres = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Sci-Fi",
    "Fantasy",
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div className='flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-100 rounded-lg'>
      <div className='w-full sm:w-1/2'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search books...'
          className='w-full p-2 border border-gray-300 rounded-md'
        />
      </div>

      <div className='w-full sm:w-1/2'>
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className='w-full p-2 border border-gray-300 rounded-md'
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBooks;
