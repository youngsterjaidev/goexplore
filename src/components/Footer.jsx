const Footer = () => {
  return (
    <footer className="bg-white p-[2rem_8rem]">
      <div className="flex justify-around items-center gap-8">
        <div>
          <h2 className="text-blue-400 font-bold text-4xl">Travel</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Destination</li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-400 font-bold text-4xl">Contact</h2>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>
              Email:
              <a href="mailto:" className="text-blue-400">
                info@gmail.com
              </a>
            </li>
            <li>Address: 123, Street Name, City Name</li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-400 font-bold text-4xl">Social</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="py-[3rem] flex justify-center items-center">
        <p className="text-blue-400 font-bold">
          © 2025 Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
