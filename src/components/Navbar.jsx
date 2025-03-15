import React, { useEffect } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-[30px] bg-white sticky top-0 flex justify-between items-center shadow-md">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <ul className="flex gap-4">
        <li>
          <a className="link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="link" href="/about">
            About
          </a>
        </li>
        <li className="relative dropdown">
          <button className="link" onClick={toggleDropdown}>
            Destination
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-white shadow-md mt-2">
              <li>
                <a className="link block px-4 py-2" href="/shimla">
                  Shimla
                </a>
              </li>
              <li>
                <a className="link block px-4 py-2" href="/kashmir">
                  Kashmir
                </a>
              </li>
              <li>
                <a className="link block px-4 py-2" href="/manali">
                  Manali
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a className="link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex gap-4">
        {/* <button className="btn">Sign In</button>
        <button className="btn bg-blue-500 p-4 text-white cursor-pointer rounded-[40px]">
          Sign Up
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
