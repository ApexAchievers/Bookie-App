import { Link } from "react-router"


export default function BookCard({ book }) {
    return (

        <Link to={`/view-book?id=${book.id}`}>
            <div className="max-w-sm mt-12  rounded-lg shadow-lg overflow-hidden w-full h-150">

                <div className="">
                    <img src={book.ImageUrl} alt="Born a crime" className="w-full h-auto max-h-83" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-brown">{book.Title}</h2>
                    <p className="text-sm font-bold text-gray-500 italic">{book.Author}</p>
                    <p><h3 className="text-lg font-semibold text-secondary">{book.Description}</h3></p>
                    <p className=" mt-1">{book.yearPublished}</p>
                    <p className="text-green-600 font-bold mt-2">{book.Category}</p>
                </div>

            </div>


        </Link>

    );
}
