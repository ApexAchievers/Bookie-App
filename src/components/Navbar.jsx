import { Link } from "react-router";
import ezliblogo from "../assets/images/ezlib.png"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (

        <nav className="fixed top-0 left-0 w-full z-50 h-20 px-8 bg-gray-300 flex items-center justify-between">
            <div className="flex items-center">
                <img src={ezliblogo} className="h-20 w-auto object-contain" alt="EZLib Logo" />
                <span className="text-4xl font-bold text-brown ml-2">EZLib</span>
            </div>

            <div className="lg:flex hidden items-center gap-8">
                <ul className="flex flex-row gap-4">
                    <li><Link to="/" className="hover:underline">Dashboard</Link></li>
                    <li><Link to="/books" className="hover:underline">Books</Link></li>
                    <li><Link to="/add-book" className="hover:underline">Add Book</Link></li>
                    <li><Link to="/view-book" className="hover:underline">View Book</Link></li>
                </ul>
                <button className="cursor-pointer border py-2 px-4 bg-brown text-white rounded-md font-bold text-xs">
                    Get Started
                </button>
            </div>

            {/* Mobile menu toggle button */}
            <div className="lg:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-gray-300 flex flex-col items-start px-8 py-4 gap-4 lg:hidden">
                    <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                    <Link to="/books" className="hover:underline" onClick={() => setMenuOpen(false)}>Books</Link>
                    <Link to="/add-book" className="hover:underline" onClick={() => setMenuOpen(false)}>Add Book</Link>
                    <Link to="/view-book" className="hover:underline" onClick={() => setMenuOpen(false)}>View Book</Link>
                    <button className="cursor-pointer border py-2 px-4 bg-brown text-white rounded-full font-bold text-xs">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}