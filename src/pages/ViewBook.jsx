import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { apiClient } from '../api/client';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { BookOpen, BookOpenCheck, PenLine, BadgeInfo, CalendarDays, Captions, Eye } from "lucide-react";

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
    <section className='bg-gray-100 pb-4 bg-[url(https://i.pinimg.com/736x/cb/da/dc/cbdadc2b4887666906e3279c1189e4de.jpg)]'>
      <Navbar />

      <h1 className='text-3xl text-white text-center font-bold mt-18 mb-12 leading-normal'>Viewbook</h1>

      <h2 className='text-lg font-semibold text-center mb-6 text-white underline'>SYNOPSIS</h2>

      <div className='flex flex-col lg:flex-row items-start justify-center px-4 lg:px-12 py-6 gap-6'>

        {/* Left Panel: Book Info */}
        <div className='bg-white rounded-lg shadow-2xl overflow-hidden w-full lg:w-1/2 mb-8'>
          {/* Book Image and Meta */}
          <div className='flex flex-col sm:flex-row gap-4 p-4'>
            {/* Book Image */}
            <div className='sm:w-1/2 w-full'>
              <img src={book.ImageUrl} alt="Single Book" className="object-cover w-full h-full rounded" />
            </div>

            {/* Book Metadata */}
            <div className='flex flex-col gap-2 sm:w-1/2'>

              <div>
                <p className='text-gray-800 font-bold text-lg mx-1'>{book.Title}</p>
              </div>
              <div>
                <BookOpen />
                <p className='text-gray-600'>{book.Author}</p>
              </div>

              <div>

              </div>
              <BadgeInfo />
              <p className='flex items-center gap-2 text-green-600 font-semibold'>{book.Category}</p>
              <div>
                <CalendarDays />
                <p className='text-gray-600'>{book.yearPublished}</p>

              </div>

              <div className='flex gap-2 mt-4'>
                <Link to={`/edit-book?id=${id}`}>
                  <button className='bg-brown px-6 py-2 rounded-lg text-white cursor-pointer'>Edit</button>
                </Link>
                <button className='bg-brown px-6 py-2 rounded-lg text-white'>Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 text-justify text-white text-base leading-relaxed px-2'>
          <p>{book.Description}</p>
        </div>
      </div>

      <Footer />
    </section>





  );

}


