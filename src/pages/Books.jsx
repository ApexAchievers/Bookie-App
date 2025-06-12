
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
  // onClick={deleteBook}
  //   }
  


  return (
    <>
      <section className='bg-gray-100'>
        <Navbar />

        <div>
          <input type="text" placeholder='Search by title,year, author' name='searchbar' className='border-2 border-amber-500 px-6 pb-1 rounded-md mt-2 ml-8 bg-white' />
          <button>
          </button>
        </div>



        <div className='grid grid-cols-4 gap-4 m-8'>
          {books.map(book => {
            return (
              <BookCard key={book.id} book={book} />
            );
          })}

        </div>

        <div className="flex justify-center items-center gap-2 mt-4 mb-8">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700" disabled>
            Previous
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            1
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100">
            3
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 text-gray-700">
            Next
          </button>
        </div>

        <Footer />

      </section>

    </>


  );
}



