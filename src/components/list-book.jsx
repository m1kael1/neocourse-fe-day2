import { CardBook } from "./card/card-book";
import { books } from "../const/books";
import { useBook } from "../hooks/use-book";

const ListBook = () => {
  const {
    bookQuery: { data, isLoading },
  } = useBook();

  console.log(data);
  console.log(isLoading);

  return (
    <ul className='grid grid-cols1 sm:grid-cols-2 lg:grid-cols-4 justify-start w-fit sm:w-full gap-10 mx-auto md:mx-0 '>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        data?.data?.map((book) => <CardBook data={book} key={book.ID} />)}
    </ul>
  );
};

export default ListBook;
