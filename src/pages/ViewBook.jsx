import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { apiClient } from '../api/client';
import { useSearchParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { BookOpen, BookOpenCheck, PenLine, BadgeInfo, CalendarDays, Captions, Eye } from "lucide-react";

export default function ViewBook() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

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

  const deleteBook = () => {
    apiClient.delete(`/api/v1/books/${id}`)
    .then((response) => {
      console.log(response);
      navigate(-1);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  return (


    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* <h1 className="text-4xl text-center font-bold mb-6 font-serif">View Book</h1> */}
          <h2 className="text-xl font-semibold text-center mb-8 underline font-serif">Book Summary</h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Book Info Card */}
            <div className="bg-white shadow-xl rounded-xl overflow-hidden bg-cover bg-center bg-[url('https://i.pinimg.com/736x/cb/da/dc/cbdadc2b4887666906e3279c1189e4de.jpg')]">
              <div className="backdrop-blur-md bg-white/70 p-6 flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="sm:w-1/2">
                  <img
                    src={book.ImageUrl}
                    alt={book.Title}
                    className="rounded-lg object-cover w-full h-full max-h-80"
                  />
                </div>

                {/* Details */}
                <div className="sm:w-1/2 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">{book.Title}</h3>

                  <div className="flex items-center gap-2 text-gray-700">
                    <BookOpen className="w-5 h-5" />
                    <span>{book.Author}</span>
                  </div>

                  <div className="flex items-center gap-2 text-green-600">
                    <BadgeInfo className="w-5 h-5" />
                    <span>{book.Category}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <CalendarDays className="w-5 h-5" />
                    <span>{book.yearPublished}</span>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Link to={`/edit-book?id=${id}`}>
                      <button className="bg-amber-700 hover:bg-amber-800 px-4 py-2 rounded-lg text-white">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={deleteBook}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Description */}
            <div className="bg-white p-6 rounded-xl shadow-md text-justify font-serif text-lg leading-relaxed">
              <p>{book.Description}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>



  );

}


