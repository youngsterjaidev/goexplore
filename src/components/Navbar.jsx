import React from "react";

const Navbar = () => {
  return (
    <nav className="p-[30px] flex justify-between items-center shadow-md">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <ul className="flex gap-4">
        <li>
          <a className="link" href="">
            Home
          </a>
        </li>
        <li>
          <a className="link" href="">
            About
          </a>
        </li>
        <li>
          <a className="link" href="">
            Destination
          </a>
        </li>
        <li>
          <a className="link" href="">
            Blog
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
