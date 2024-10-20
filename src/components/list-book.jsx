import { useEffect, useState } from "react";
import { CardBook } from "./card/card-book";
import { useBook } from "../hooks/use-book";
import { useAtom } from "jotai";
import { searchBookAtom } from "../lib/atoms";

const ListBook = () => {
  const [search] = useAtom(searchBookAtom);
  const {
    bookQuery: { data, isLoading },
  } = useBook();

  const filteredBooks = data?.data?.filter((book) => {
    return book.Title.toLowerCase().includes(search);
  });

  console.log(filteredBooks);

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start w-fit sm:w-full gap-10 mx-auto md:mx-0'>
      {isLoading && <p>Loading...</p>}
      {!isLoading && filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <CardBook data={book} key={book.ID} />)
      ) : (
        <p>No books found.</p>
      )}
    </ul>
  );
};

export default ListBook;
