import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { apiClient } from "../api/client";

const AddBook = () => {
  const postBook = (event) => {
    event.preventDefault();

    // collect form input
    const data = new FormData(event.target);

    // Post Data To Api
    apiClient
      .post("/api/v1/books", data, {
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
    <div className="flex flex-col min-h-screen">
  <Navbar />

  {/* Main Content */}
  <main className="relative flex-grow bg-[url('./assets/images/Book-ab5.jpg')] bg-cover bg-no-repeat bg-[center_10px] pt-16 pb-20 px-6">
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-12 rounded-xl">
      
      {/* Heading Section - Responsive order */}
      <div className="order-1 md:order-1 text-center md:text-right w-full md:w-1/2 mt-6 md:mt-0">
        <div className="overflow-hidden">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md mb-6 leading-tight">
            <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.2s_both]">
              Organize
            </span>
            <br />
            <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.4s_both]">
              Library To Your Preference
            </span>
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={postBook}
        className="order-2 md:order-2 flex flex-col gap-6 w-full md:w-1/2 p-6 bg-white rounded-lg  mt-10 ">

        {/* Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-semibold text-black mb-1 ">
            Title
          </label>
          <input
            type="text"
            name="Title"
            required
            placeholder="e.g., The Great Gatsby"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
          />
        </div>

        {/* Author */}
        <div className="flex flex-col">
          <label htmlFor="author" className="text-sm font-semibold text-black mb-1">
            Author
          </label>
          <input
            type="text"
            name="Author"
            required
            placeholder="e.g., F. Scott Fitzgerald"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
          />
        </div>

        {/* Year */}
        <div className="flex flex-col">
          <label htmlFor="publicationYear" className="text-sm font-semibold text-black mb-1">
            Year of Publication
          </label>
          <input
            type="number"
            name="yearPublished"
            required
            placeholder="e.g., 1925"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-semibold text-black mb-1">
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
            <option value="Biogragphy">Biography</option>
            <option value="History">History</option>
            <option value="Children">Children's</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Image URL */}
        <div className="flex flex-col">
          <label htmlFor="imageUrl" className="text-sm font-semibold text-black mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="ImageUrl"
            required
            placeholder="https://example.com/image.jpg"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-semibold text-black mb-1">
            Description
          </label>
          <input
            type="text"
            name="Description"
            required
            placeholder="Brief summary of the book"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 p-3 bg-primary text-black font-semibold rounded-md hover:bg-secondary transition duration-300"
        >
          Add Book
        </button>
      </form>
    </div>
  </main>

  <Footer />
</div>

  );
};

export default AddBook;
