import { Link } from "react-router";
import ezliblogo from "../assets/images/ezlib.png"


export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 h-20 px-8 bg-gray-300 flex items-center justify-between">
            <h1 className="text-2xl font-bold flex gap-2">
                <img src={ezliblogo} className="h-40 w-auto object-contain"/>
                EZLib
            </h1>

            <div className="flex items-center gap-8">
                <ul className="flex flex-row gap-4">
                    <li><Link to="/" className="hover:underline">Dashboard</Link></li>
                    <li><Link to="/books" className="hover:underline">Books</Link></li>
                    <li><Link to="/add-book" className="hover:underline">Add Book</Link></li>
                    <li><Link to="//view-book" className="hover:underline">View Book</Link></li>
                    {/* <li><Link to="/edit-book" className="hover:underline">Edit Book</Link></li> */}
                </ul>
                <button className="cursor-pointer border py-4 px-4 bg-brown text-white rounded-full font-bold text-xs ">
                    Get Started
                </button>
            </div>
        </nav>
    );
}