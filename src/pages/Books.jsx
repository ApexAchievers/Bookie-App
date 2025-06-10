import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import Bornacrime from '../assets/images/Bornacrime.jpg';
import everythingunevahad from '../assets/images/everythingunevahad.jpg';
import malcomx from '../assets/images/malcomx.jpg'




export default function Books() {
  return (
    <>
      <section>
        <Navbar />

        <div className='grid grid-cols-4 gap-4 m-10'>
          <BookCard image={Bornacrime} />
          <BookCard image={everythingunevahad} />
          <BookCard image={malcomx} />
          <BookCard image={Bornacrime} />
          <BookCard image={Bornacrime} />
          <BookCard image={Bornacrime} />
          <BookCard image={Bornacrime} />
          <BookCard image={Bornacrime} />
        </div>

        <Footer />

      </section>

    </>


  );
}



