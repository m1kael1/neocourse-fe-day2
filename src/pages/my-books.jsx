import AddBookForm from "../components/form/add-book-form";
import MyBooksTable from "../components/table/my-books-table";
import useAuth from "../hooks/use-auth";
import { useBook } from "../hooks/use-book";

const MyBooks = () => {
  const {
    bookQuery: { data: books },
  } = useBook();
  const { data: authData } = useAuth();

  const myBooks =
    books?.data?.filter((book) => book.StoredBy === authData?.user?.ID) || [];

  return (
    <div className='container mx-8 sm:mx-auto w-full my-8'>
      <AddBookForm />
      <MyBooksTable books={myBooks} />
    </div>
  );
};

export default MyBooks;
