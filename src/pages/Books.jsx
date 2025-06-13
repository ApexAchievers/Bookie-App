
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { useEffect, useState } from 'react';
import { apiClient } from '../api/client';



// // const [Bookss, setBookss] = useState([]);

// //   const getBooks = () => {
// //     apiClient.get('/book')
// //       .then((response) => {
// //         console.log(response.data);
// //         setBooks(response.data);

// //       })
// //       .catch((error) => {
// //         console.log(error)
// //       })
// //   }

//   useEffect(getBooks, []);



export default function Books() {

  const [books, setBooks] = useState([]);

  const getBooks = () => {
    apiClient.get('/api/v1/books')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })

      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(getBooks, []);

  //  const deleteBook = () => {
  //     apiClient.delete(`//api/v1/books/68488ae08a88b225c466a15f${book.id}`)
  //       .then((response) => {
  //         console.log(response);

  //         location.reload();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   }

  // onClick={deleteBook}



  return (
    <>
      <section className='bg-gray-200 bg-[url(https://i.pinimg.com/736x/cb/da/dc/cbdadc2b4887666906e3279c1189e4de.jpg)] px-4 sm:px-8'>

        <Navbar />

        <div className='pb-4'>
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-21 mb-8 w-full'>
            <input
              type="text"
              placeholder="Search by title, year, author"
              name="searchbar"
              className="border-2 border-secondary px-4 py-2 rounded-md w-full sm:w-[300px] focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-600 text-white px-6 py-2 rounded-md w-full sm:w-auto hover:bg-amber-700">
              Search
            </button>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-6 mb-8">
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700" disabled>
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-orange-600">1</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-orange-600">2</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-orange-600">3</button>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 text-gray-700">Next</button>
          </div>
        </div>

        <Footer />

      </section>


    </>


  );
}



