import React from "react";
import { CardBook } from "./card/card-book";

const ListBook = () => {
  return (
    <ul className='grid grid-cols1 sm:grid-cols-2 lg:grid-cols-4 justify-start w-fit gap-10 mx-auto'>
      {Array(8)
        .fill(0)
        .map((item, index) => (
          <CardBook key={index} />
        ))}
    </ul>
  );
};

export default ListBook;
