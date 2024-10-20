import { BookUser, Library, LogOutIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BorrowedList } from "./borrowed-list";

const Header = () => {
  const [inScroll, setInScroll] = useState(false);
  const currentPath = useLocation().pathname;
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setInScroll(true);
    } else {
      setInScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav
        className={`bg-white sticky z-50 w-full transition-all ease-in-out duration-500 delay-200 ${
          inScroll ? "shadow-lg bg-white top-0" : "-top-96"
        }`}
      >
        <div className='container mx-auto flex justify-between items-center py-5 max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-start space-x-4'>
            <span className='text-xl sm:text-2xl font-semibold text-gray-800'>
              Welcome, <strong>User!</strong>
            </span>
          </div>

          <ul className='flex gap-5 items-center'>
            <li>
              <Link
                to='/'
                className={`flex items-center gap-1 ${
                  location.pathname === "/" ? "text-blue-600" : "text-gray-700"
                } hover:text-blue-600 transition-colors duration-300`}
              >
                <Library className='cursor-pointer' />
                <span className='hidden md:inline'>Library</span>
              </Link>
            </li>

            <li>
              <Link
                to='/my-books'
                className={`flex items-center gap-1 ${
                  location.pathname === "/my-books"
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600 transition-colors duration-300`}
              >
                <BookUser className='cursor-pointer' />
                <span className='hidden md:inline'>My Books</span>
              </Link>
            </li>

            <li>
              <BorrowedList />
            </li>
          </ul>

          {/* Logout Icon */}
          <LogOutIcon className='cursor-pointer text-gray-700 hover:text-red-600 transition-colors duration-300' />
        </div>
      </nav>
    </>
  );
};

export default Header;
