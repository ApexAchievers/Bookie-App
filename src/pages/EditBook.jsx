import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditBook = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url(./assets/images/Book-ab14.jpg)] bg-cover bg-no-repeat min-h-screen bg-[center_20px] pt-16 pb-28 px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-start justify-between  rounded-xl shadow-lg p-8 max-w-6xl w-full">
            {/* Left Side - Heading */}
            <div className="flex items-center min-h-screen px-8">
              <div>
                <h1 className="font-bold text-6xl text-brown whitespace-nowrap">
                  Edit Book Libraries
                </h1>
                <p className="mt-4 text-gray font-semibold">
                  Quickly update your book to your preference.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <form className="md:w-1/2 flex flex-wrap gap-4 justify-start items-start bg-[#8C5C34] rounded-xl w-48 pl-4 pr-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="title"
                  className="text-md font-semibold text-gray-800 mb-1 mt-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="Title"
                  placeholder="Enter book title"
                  required
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 "
                />
              </div>

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
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
                />
              </div>

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
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
                />
              </div>

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
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
                >
                  <option value="">Select a category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-fiction">Non-Fiction</option>
                  <option value="Science-fiction">Science Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                  <option value="thriller">Thriller</option>
                  <option value="Biogragphy">Biogragphy</option>
                  <option value="History">History</option>
                  <option value="Children">Children's</option>
                  <option value="Other">Other</option>
                </select>
              </div>

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
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="mt-4 mb-5 flex flex-col sm:flex-row gap-4 justify-center mx-auto  sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-1/2 px-8 py-2 bg-brown text-black font-semibold rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Edit Book
                </button>

                <button
                  type="button"
                  className="w-full sm:w-1/2 p-3 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 transition duration-300"
                >
                  Cancel
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
