import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EditBook = () => {
  return (
    <>
    <Navbar />
    <div className="bg-[url(./assets/images/Book-ab4.jpg)] bg-cover bg-no-repeat min-h-screen p-8">
  <div className="text-center mb-8">
    <h1 className="font-bold text-4xl text-violet-800 ">Edit Book Libraries</h1>
  </div>

  <form className="flex flex-wrap justify-center items-center gap-6 bg-white p-6 rounded-xl shadow-md max-w-5xl mx-auto h-[50vh]">
    <div className="flex flex-col w-64">
      <label htmlFor="title" className="text-md font-semibold text-gray-800 mb-1">
        Title
      </label>
      <input
        type="text"
        id="title"
        required
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>

    <div className="flex flex-col w-64">
      <label htmlFor="author" className="text-md font-semibold text-gray-800 mb-1">
        Author
      </label>
      <input
        type="text"
        id="author"
        required
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>

    <div className="flex flex-col w-64">
      <label htmlFor="publicationYear" className="text-md font-semibold text-gray-800 mb-1">
        Year of Publication
      </label>
      <input
        type="number"
        id="publicationYear"
        required
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>

    <div className="flex flex-col w-64">
      <label htmlFor="genre" className="text-md font-semibold text-gray-800 mb-1">
        Category
      </label>
      <select
        name="genre"
        id="genre"
        required
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
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

    <div className="flex flex-col w-64">
      <label htmlFor="description" className="text-md font-semibold text-gray-800 mb-1">
        Description
      </label>
      <input
        type="text"
        id="description"
        required
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>

    <button
      type="submit"
      className="w-full sm:w-64 mt-4 p-3 bg-violet-700 text-white font-semibold rounded-md hover:bg-violet-800 transition duration-300"
    >
      Edit Book
    </button>
  </form>
</div>
    <Footer />
    </>

  )
}

export default EditBook
