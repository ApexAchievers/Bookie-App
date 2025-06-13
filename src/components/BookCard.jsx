import { Link } from "react-router";
import { BookOpen, BookOpenCheck, PenLine, BadgeInfo, CalendarDays, Captions, Eye } from "lucide-react";


export default function BookCard({ book }) {
    return (



        <div className="rounded-md shadow-lg w-full bg-gray-100 p-6 space-y- overflow-hidden h-[400px]">
            <div>
                <img src={book.ImageUrl} alt="image cover" className="w-full h-[200px]" />
            </div>

            <h1 className="flex items-center gap-2 font-bold text-amber-700">
            </h1> {book.Title}

            {/* Author */}
            <div className="flex items-center gap-2 text-gray-600 italic font-medium">
                <BookOpen className="w-4 h-4" /> {book.Author}
            </div>

            {/* Description */}
            {/* <div className="flex items-center gap-2 text-gray-400">
                    <PenLine className="w-4 h-4" /> {book.Description}
                </div> */}

            <div className="flex items-center gap-2 text-black">
                <CalendarDays className="w-4 h-4" /> {book.yearPublished}
            </div>

            <div className="flex items-center gap-2 text-green-600 font-semibold">
                <BadgeInfo className="w-4 h-4" /> {book.Category}
            </div>

            <Link to={`/view-book?id=${book.id}`}>
                <button className=" flex flex-row border px-2 mr- rounded-md bg-gray-200 gap-2 cursor-pointer">
                    <Eye className="w-4 text-amber-700" />
                    Viewbook
                </button>
            </Link>

        </div>



    );
}

