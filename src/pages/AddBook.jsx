import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddBook = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow bg-[url('./assets/images/Book-ab7.jpg')] bg-cover bg-no-repeat bg-[center_20px] pt-16 pb-28 px-6">
        <div className="max-w-7xl mx-auto px-20 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 rounded-xl">

          {/* Heading Section - Right with Animation */}
          <div className="text-center md:text-right w-full md:w-1/2">
            {/* Main Heading with Staggered Animation */}
            <div className="overflow-hidden">
              <h1 className="text-5xl font-extrabold text-[#a05959] drop-shadow-md mb-6 leading-tight">
                <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.2s_both]">
                  Organize
                </span>
                <br />
                <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.4s_both]">
                  Your Library
                </span>
                <br />
                <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.6s_both]">
                  Like Never Before
                </span>
                <span className="inline-block animate-[bounceIn_1s_ease-out_1.2s_both] ml-2">
                  📚
                </span>
              </h1>
            </div>
            
            <p className="text-lg font-bold text-center text-black max-w-md mx-auto md:mx-0">
              Add a book to the collection.
            </p>
          </div>

          {/* Form Section - Left */}
          <form className="flex flex-col gap-6 w-full md:w-1/2 p-6 bg-brown rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Add a New Book</h2>

            {/* Title */}
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-semibold text-black mb-1">Title</label>
              <input
                type="text"
                id="title"
                required
                placeholder="e.g., The Great Gatsby"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Author */}
            <div className="flex flex-col">
              <label htmlFor="author" className="text-sm font-semibold text-black mb-1">Author</label>
              <input
                type="text"
                id="author"
                required
                placeholder="e.g., F. Scott Fitzgerald"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Year */}
            <div className="flex flex-col">
              <label htmlFor="publicationYear" className="text-sm font-semibold text-black mb-1">Year of Publication</label>
              <input
                type="number"
                id="publicationYear"
                required
                placeholder="e.g., 1925"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Genre */}
            <div className="flex flex-col">
              <label htmlFor="genre" className="text-sm font-semibold text-black mb-1">Category</label>
              <select
                name="genre"
                id="genre"
                required
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select a category</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="science-fiction">Science Fiction</option>
                <option value="fantasy">Fantasy</option>
                <option value="mystery">Mystery</option>
                <option value="thriller">Thriller</option>
                <option value="biography">Biography</option>
                <option value="history">History</option>
                <option value="children">Children's</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label htmlFor="description" className="text-sm font-semibold text-black mb-1">Description</label>
              <input
                type="text"
                id="description"
                required
                placeholder="Brief summary of the book"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 p-3 bg-primary text-black font-semibold rounded-md hover:bg-secondary transition duration-300"
            >
              Add Book
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddBook;