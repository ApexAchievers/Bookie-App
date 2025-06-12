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

      <h1 className='text-4xl text-center font-bold mt-6 mb-8 underline'>Viewbook</h1>

      <div className=' p-6 bg-white rounded-lg max-w-sm mb-6 ml-8 shadow-2xl justify-start overflow-hidden'>

        <div className='flex flex-row justify-center'>
          <img src={book.ImageUrl} alt="Single Book" />
        </div>
        <span className='text-3xl text-center'>Synopsis</span> <br />
        <p className='text-xs text-justify'>THE #1 NEW YORK TIMES BESTSELLER FROM THE AUTHOR OF THE MARTIAN • Soon to be a major motion picture starring Ryan Gosling, directed by Phil Lord and Christopher Miller, with a screenplay by Drew Goddard

          **From the author of The Martian, a lone astronaut must save the earth from disaster in this “propulsive” (Entertainment Weekly), cinematic thriller full of suspense, humor, and fascinating science.

          HUGO AWARD FINALIST • ONE OF THE YEAR’S BEST BOOKS: Bill Gates, GatesNotes, New York Public Library, Parade, Newsweek, Polygon, Shelf Awareness, She Reads, Kirkus Reviews, Library Journal • New York Times Readers Pick: 100 Best Books of the 21st Century
        </p>

        <div className='flex flex-row gap-4 mt-2'>
          <Link to={`/edit-book?id=${id}`}>
            <button className='bg-brown px-8 rounded-lg justify-center items-center py-2 cursor-pointer'>Edit</button>
          </Link>

          <button className='bg-brown px-6 rounded-lg justify-center items-center cursor-pointer'>Delete</button>
        </div>

      </div>

      <div>
        <p>Description</p>
      </div>

      <Footer />
    </section>



  );

}


