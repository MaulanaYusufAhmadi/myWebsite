const Navbar = () => {
  return (
    <nav className="bg-blue-50">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
        <a href="">
          <span className="text-2xl text-semibold">Logo</span>
        </a>
        <div className="">
          <ul className="font-medium flex flex-row gap-4">
            <li >
              <a href="#" className="block py-2 px-4 rounded hover:bg-green-900 text-green-900 hover:text-green-400">Home</a>
            </li>
            <li >
              <a href="#" className="block py-2 px-4 rounded hover:bg-green-900 text-green-900 hover:text-green-400">About</a>
            </li>
            <li >
              <a href="#" className="block py-2 px-4 rounded hover:bg-green-900 text-green-900 hover:text-green-400">Projects</a>
            </li>
            <li >
              <a href="#" className="block py-2 px-4 rounded hover:bg-green-900 text-green-900 hover:text-green-400">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-sm text-white bg-blue-600 rounded-md p-2">
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
