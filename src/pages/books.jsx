import { CardBook } from "../components/card/card-book";
import FilterBooks from "../components/filter-books";
import Header from "../components/header";
import ListBook from "../components/list-book";

const Books = () => {
  return (
    <section>
      <Header />
      <div
        style={{
          backgroundImage:
            "url('https://cdn.mos.cms.futurecdn.net/RHRww9NMVmyaBrcV43kbkP-1200-80.jpg')",
        }}
        className='h-72 bg-cover bg-no-repeat bg-center bg-fixed relative'
      >
        <span className='absolute bg-black  w-full h-full opacity-50'></span>
      </div>
      <div className='container mx-auto w-fit my-8'>
        <br />
        <FilterBooks />
        <br />
        <ListBook />
      </div>
    </section>
  );
};

export default Books;
