import Footer from '../components/Footer';
import { apiClient } from '../api/client';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function ViewBook() {

  const [SearchParams] = useSearchParams();
  const id = SearchParams.get('id');

  const [book, setBook] = useState({});

  const getBook = () => {
    apiClient.get(`/api/v1/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook((response.data));
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(getBook, []);


  return (
    <section className='bg-gray-100 pb-3.5'>

      <h1 className='text-4xl text-center font-bold mt-6 mb-8 underline leading-normal'>Viewbook</h1>

      <div className=' p-6 bg-white rounded-lg max-w-sm mb-6 ml-8 shadow-2xl justify-start overflow-hidden'>

        <div className='flex flex-row justify-center'>
          <img src={book.ImageUrl} alt="Single Book" />
        </div>
        <p class="text-gray-600">{book.Title}</p>
        <p class="text-gray-600">{book.Author}</p>
        <p class="text-gray-600">{book.Description}</p>
        <p class="text-gray-600">{book.yearPublished}</p>
        <p class="text-gray-600">{book.Category}</p>

        <div className='flex flex-row gap-4 mt-2'>
          <Link to={`/edit-book?id=${id}`}>
            <button className='bg-brown px-8 rounded-lg justify-center items-center py-2 cursor-pointer text-white'>Edit</button>
          </Link>

          <button className='bg-brown px-6 rounded-lg justify-center items-center cursor-pointer text-white'>Delete</button>
        </div>

      </div>

      <div>
        <p>Description</p>
      </div>

      <Footer />
    </section>



  );

}


