import { apiClient } from "../api/client";
import { useSearchParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubmitButton from "../components/SubmitButton";


const EditBook = () => {
  const navigate = useNavigate();

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

  const putBook = async (data) => {
    // Post Data To Api
   try {
      const response = await apiClient
        .put(`/api/v1/books/${id}`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      console.log(response);
      navigate(-1);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="  bg-[url('./assets/images/Book-ab14.jpg')] bg-cover bg-no-repeat bg-[center_10px] pt-16 pb-20 px-6">
      <div className="absolute insert-0 bg-black/50"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-start justify-between rounded-xl p-6 md:p-8 max-w-6xl w-full gap-6">
            {/* Left Side - Heading */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start min-h-[300px] px-4 md:px-8 text-center md:text-left">
              <div>
                <h1 className="font-bold text-4xl md:text-6xl text-brown whitespace-nowrap">
                  Edit Book <br />
                  Libraries
                </h1>
                <p className="mt-4 text-brown font-bold text-3xl">
                  Quickly update a <br /> book  to <br /> your preference.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <form action={putBook} className="w-full md:w-1/2 flex flex-wrap gap-4 justify-start items-start bg-[#ddd9d7] rounded-xl px-4 py-6 mt-5">
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
                  className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-1 focus:ring-brown"
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
                  className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-1 focus:ring-brown"
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
                  className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-1 focus:ring-brown"
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
                  className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-1 focus:ring-brown"
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
                  className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-1 focus:ring-brown"
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
                  className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-1 focus:ring-brown"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <SubmitButton
                title={"Update"}
                className="w-full sm:w-auto px-10 py-2 bg-[#2C1C0C] text-white font-semibold rounded>-md hover:bg-gray-600 transition duration-300"
                />
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
