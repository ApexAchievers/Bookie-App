import { Link } from "react-router"


export default function BookCard({ book }) {
    return (

        <Link to={`/view-book?id=${book.id}`}>
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">

                <div className="">
                    <img src={book.ImageUrl} alt="Born a crime" className="w-full h-96 max-h-83" />
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-orange-500">{book.Title}</h2>
                </div>
                <p className="text-sm font-bold text-gray-500 italic">{book.Author}</p>
                <h3 className="text-lg font-semibold text-orange-600">{book.Description}</h3>
                {/* <h3 className="text-lg font-semibold text-gray-500">{book.status ? 'Available' : 'Not Available'}</h3> */}
                <p className="text-gray-600 mt-1">{book.yearPublished}</p>
                <p className="text-green-600 font-bold mt-2">{book.Category}</p>
                <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                    </div>
                    <span className="ml-2 text-gray-600">7,076</span>
                </div>
            </div>


        </Link>

    );
}
