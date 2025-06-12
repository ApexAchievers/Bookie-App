
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
    <section>
      <h1 className='text-4xl text-center font-bold'>Viewbook</h1>

      <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg'>

        <div className='flex flex-row justify-center'>
          <img src={book.ImageUrl} alt="Single Book" />
        </div>
        <p>
          <span className='text-3xl text-center'>Synopsis</span> <br />
          THE #1 NEW YORK TIMES BESTSELLER FROM THE AUTHOR OF THE MARTIAN • Soon to be a major motion picture starring Ryan Gosling, directed by Phil Lord and Christopher Miller, with a screenplay by Drew Goddard

          **From the author of The Martian, a lone astronaut must save the earth from disaster in this “propulsive” (Entertainment Weekly), cinematic thriller full of suspense, humor, and fascinating science.

          HUGO AWARD FINALIST • ONE OF THE YEAR’S BEST BOOKS: Bill Gates, GatesNotes, New York Public Library, Parade, Newsweek, Polygon, Shelf Awareness, She Reads, Kirkus Reviews, Library Journal • New York Times Readers Pick: 100 Best Books of the 21st Century
        </p>

        <div>
          <Link to={`/edit-book`}>
          <button className='bg-orange-400 px-6 rounded-lg flex flex-row justify-center items-center mb-4 mt-2 cursor-pointer'>Edit</button>
          </Link>
          
          <button className='bg-orange-400 px-6 rounded-lg flex flex-row justify-center items-center cursor-pointer'>Delete</button>
        </div>


      </div>
    </section>



  );

}


