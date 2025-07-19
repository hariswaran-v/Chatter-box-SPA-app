import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or use any icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-700 text-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gray-500 p-2 rounded-xl">
          🌐 Chatter_Box
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-xl font-bold">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/posts" className="hover:text-blue-400">
            Posts
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-52 rounded-md text-sm text-black"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-lg font-semibold">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/posts"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400"
          >
            Posts
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400"
          >
            About
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 rounded-md text-sm text-black outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
