import { apiClient } from "../api/client";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditBook = () => {
  const [SearchParams] = useSearchParams();
  const id = SearchParams.get("id");

  const [book, setBook] = useState({});

  const getBook = () => {
    apiClient
      .get(`/api/v1/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getBook, []);

  const putBook = (event) => {
    event.preventDefault();

    // collect form input
    const data = new FormData(event.target);

    // Post Data To Api
    apiClient
      .put(`/api/v1/books/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="  min-h-screen pt-16 pb-28 px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-start justify-between rounded-xl p-6 md:p-8 max-w-6xl w-full gap-6">
            {/* Left Side - Heading */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start min-h-[300px] px-4 md:px-8 text-center md:text-left">
              <div>
                <h1 className="font-bold text-4xl md:text-6xl text-brown whitespace-nowrap">
                  Edit Book <br />
                  Libraries
                </h1>
                <p className="mt-4 text-black font-semibold">
                  Quickly update your book to your preference.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <form onSubmit={putBook} className="w-full md:w-1/2 flex flex-wrap gap-4 justify-start items-start bg-[#9b9998] rounded-xl px-4 py-6">
              {/* Title */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="title"
                  className="text-md font-semibold text-gray-800 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="Title"
                  placeholder="Enter book title"
                  required
                  defaultValue={book.Title}
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
                />
              </div>

              {/* Author */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="author"
                  className="text-md font-semibold text-gray-800 mb-1"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="Author"
                  placeholder="Enter author's name"
                  required
                  defaultValue={book.Author}
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
                />
              </div>

              {/* Year */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="yearPublished"
                  className="text-md font-semibold text-gray-800 mb-1"
                >
                  Year of Publication
                </label>
                <input
                  type="number"
                  name="yearPublished"
                  placeholder="e.g., 2023"
                  required
                  defaultValue={book.yearPublished}
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="category"
                  className="text-md font-semibold text-gray-800 mb-1"
                >
                  Category
                </label>
                <select
                  name="Category"
                  required
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
                >
                  <option value="">Select a category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-fiction">Non-Fiction</option>
                  <option value="Science-fiction">Science Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Biography">Biography</option>
                  <option value="History">History</option>
                  <option value="Children">Children's</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Image URL */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="imageUrl"
                  className="text-md font-semibold text-gray-800 mb-1"
                >
                  Image URL
                </label>
                <input
                  type="url"
                  name="ImageUrl"
                  placeholder="https://example.com/image.jpg"
                  required
                  defaultValue={book.ImageUrl}
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="description"
                  className="text-md font-semibold text-gray-800 mb-1"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="Description"
                  placeholder="Brief summary or notes"
                  required
                  defaultValue={book.Description}
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-2 bg-brown text-black font-semibold rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditBook;
