// import { Link } from "react-router - dom";


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between mt-10 px-8">
            <h1 className="text-2xl font-bold flex gap-2">
                <span>Bookie</span>
                <span className="text-purple-800">App</span>
            </h1>

            <div className="flex items-center gap-8">
                <ul className="flex flex-row gap-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/" className="hover:underline">Books</a></li>
                    <li><a href="/" className="hover:underline">View Book</a></li>
                    <li><a href="/" className="hover:underline">Add Book</a></li>
                    <li><a href="/" className="hover:underline">Edit Book</a></li>
                </ul>
                <button className="cursor-pointer border py-2 px-6 bg-purple-800 text-white rounded">
                    Get Started
                </button>
            </div>
        </nav>

    );
}