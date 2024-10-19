import FilterBooks from "../components/filter-books";
import ListBook from "../components/list-book";

const Library = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://cdn.mos.cms.futurecdn.net/RHRww9NMVmyaBrcV43kbkP-1200-80.jpg')",
        }}
        className='h-72 bg-cover bg-no-repeat bg-center bg-fixed relative flex items-center justify-center'
      >
        <span className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70'></span>
        <div className='relative z-10 text-center'>
          <h1 className='text-white text-4xl font-bold'>
            Explore Our Book Collection
          </h1>
          <p className='text-gray-200 text-lg mt-2'>
            Discover a variety of genres tailored to your taste
          </p>
          <div className='mt-4'>
            <FilterBooks />
          </div>
        </div>
      </div>

      <div className='container mx-auto w-full my-8'>
        <h2 className='text-2xl font-semibold'>List of Books</h2>
        <br />
        <ListBook />
      </div>
    </>
  );
};

export default Library;
