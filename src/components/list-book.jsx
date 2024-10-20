import books from "../const/books";
import { CardBook } from "./card/card-book";

const ListBook = () => {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start w-fit sm:w-full gap-10 mx-auto md:mx-0'>
      {books.length > 0 ? (
        books.map((book) => <CardBook data={book} key={book.ID} />)
      ) : (
        <p>No books found.</p>
      )}
    </ul>
  );
};

export default ListBook;
