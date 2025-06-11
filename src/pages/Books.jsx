import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import Bornacrime from '../assets/images/Bornacrime.jpg';
import everythingunevahad from '../assets/images/everythingunevahad.jpg';
import malcomx from '../assets/images/malcomx.jpg'
import { useState } from 'react';



const books = [
  {
    id: 1,
    title: 'Born a Crime',
    author: 'Trevor Noah',
    status: false,
    image: Bornacrime,
    genre: 'Autobiography',
    yearPublished: 2016
  },
  {
    id: 2,
    title: 'Malcom X',
    author: 'Malcolm X, Alex Haley',
    status: true,
    image: malcomx,
    genre: 'Fiction',
    yearPublished: 1960
  },
  {
    id: 3,
    title: 'Everything',
    author: 'Sam Walker',
    status: false,
    image: everythingunevahad,
    genre: ' Fiction & Literature',
    yearPublished: 1949,
    rate: '⭐'
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    status: 'Reserved',
    image: 'https://i.pinimg.com/736x/a3/2c/9e/a32c9e83c7b51310e4733fa24bc2a008.jpg',
    genre: 'Classic',
    yearPublished: 1925
  },
  {
    id: 5,
    title: 'Native Son',
    author: 'Richard Wright',
    status: 'Available',
    image: 'https://i.pinimg.com/736x/73/5c/05/735c053c985612430d9f51d1a61ebab8.jpg',
    genre: 'Novel',
    yearPublished: 1813
  },
  {
    id: 6,
    title: 'The Partner',
    author: 'Joe Grisham',
    status: 'Available',
    image: 'https://i.pinimg.com/736x/5f/4c/d0/5f4cd01bd8c428ed0cc1bfe387d1a107.jpg',
    genre: 'Fiction',
    yearPublished: 1813
  },
  {
    id: 7,
    title: 'Angels and Demons',
    author: 'Dan Brown',
    status: 'Available',
    image: 'https://i.pinimg.com/736x/f1/63/21/f16321735c8b1d28d7388287f44fc614.jpg',
    genre: 'Romance',
    yearPublished: 1813
  },
  {
    id: 8,
    title: 'He Found Me',
    author: 'Joy Mullet',
    status: 'Available',
    image: 'https://i.pinimg.com/736x/15/86/48/158648f2f30af60e1d67b4b32d3e2a80.jpg',
    genre: 'Romance',
    yearPublished: 1813
  },
  {
    id: 9,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    status: 'Available',
    image: 'https://i.pinimg.com/736x/d9/6c/3a/d96c3a6cf03495a3a231a89400e61ccd.jpg',
    genre: 'Business',
    yearPublished: 1813
  },
  {
    id: 10,
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: 'Available',
    image: 'https://i.pinimg.com/736x/6b/e0/e0/6be0e004a5ff900dfb951bf6f125c7c2.jpg',
    genre: 'Biograpghy',
    yearPublished: 1813
  },
  {
    id: 11,
    title: 'Othello',
    author: 'William R. Shakespeare',
    status: 'Available',
    image: 'https://i.pinimg.com/736x/3d/f2/82/3df28278a6c4ef3d44b2cb3eac02f292.jpg',
    genre: 'Novel',
    yearPublished: 1813
  },
  {
    id: 12,
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'Available',
    image: 'https://i.pinimg.com/736x/20/d1/a6/20d1a65703a999cd0b39f87d7bb41c1d.jpg',
    genre: 'Habits',
    yearPublished: 1813
  },
];





export default function Books() {
  const [filteredBooks, setFilteredBooks] = useState(books);
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
          {filteredBooks.map(book => (

            <BookCard key={book.id} book={book} />
          )
          )}

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



