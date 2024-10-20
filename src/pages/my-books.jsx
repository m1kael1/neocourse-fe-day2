import AddBookForm from "../components/form/add-book-form";
import MyBooksTable from "../components/table/my-books-table";

const MyBooks = () => {
  const myBooks = [];

  return (
    <div className='container mx-8 sm:mx-auto w-full my-8'>
      <AddBookForm />
      <MyBooksTable books={myBooks} />
    </div>
  );
};

export default MyBooks;
