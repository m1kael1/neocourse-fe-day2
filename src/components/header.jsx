import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = [
    {
      name: "Books",
      link: "/books",
    },
    {
      name: "Booking",
      link: "/booking",
    },
  ];
  const activeMenu = "Books";
  const [inScroll, setInScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setInScroll(true);
    } else {
      setInScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`bg-white sticky z-50 w-full transition-all ease-in-out duration-500 delay-200 ${
        inScroll ? "shadow-lg bg-white sticky top-0 " : "-top-96"
      }`}
    >
      <div className='container mx-auto flex justify-between items-center py-5 max-w-7xl'>
        <h2 className='text-3xl'>Neobook</h2>
        <ul className='flex gap-5'>
          {menu.map(({ name, link }) => (
            <li
              key={name}
              className={`text-black 
                ${activeMenu === name && `font-bold border-b-4 border-black`}`}
            >
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
