import { Link } from "react-router"


export default function BookCard({ image }) {
    return (

        <Link to='/view-book'>
            <div className="bg-gray-300 rounded-md w-full">
                <div><img src={image} alt="Born a Crime" /></div>
                <h2>Author</h2>
                <h2>Best Seller</h2>
                <button>Edit</button>
                <button>Delete</button>
            </div>

        </Link>

    );
}