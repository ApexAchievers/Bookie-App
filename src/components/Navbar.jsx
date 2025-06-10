import { Link } from "react-router";


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between mt-10 px-8 ">
            <h1 className="text-2xl font-bold flex gap-2">
                <span>Bookie</span>
                <span className="text-brown">App</span>
            </h1>

            <div className="flex items-center gap-8">
                <ul className="flex flex-row gap-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/books" className="hover:underline">Books</Link></li>
                    <li><Link to="/add-book" className="hover:underline">View Book</Link></li>
                    <li><Link to="//view-book" className="hover:underline">Add Book</Link></li>
                    <li><Link to="/edit-book" className="hover:underline">Edit Book</Link></li>
                </ul>
                <button className="cursor-pointer border py-2 px-2 bg-brown text-white rounded-full font-bold-3003  ">
                    Get Started
                </button>
            </div>
        </nav>

    );
}