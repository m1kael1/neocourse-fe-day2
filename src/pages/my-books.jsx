import AddBookForm from "../components/form/add-book-form";
import MyBooksTable from "../components/table/my-books-table";
import { books } from "../const/books";

const MyBooks = () => {
  return (
    <div className='container mx-8 sm:mx-auto w-full my-8'>
      <AddBookForm />
      {/* Table to Display Books */}
      <MyBooksTable books={books} />
    </div>
  );
};

export default MyBooks;
