import React from 'react'


// const booksData = [
//   { id: 1, title: 'The Great Gatsby', author: 'F.Scott Fitzegeral', coverImage: './images/gatsby.jpg' },
//   { id: 2, title: 'The Great Gatsby', author: 'F.Scott Fitzegeral', coverImage: './images/gatsby.jpg' },
//   { id: 3, title: 'The Great Gatsby', author: 'F.Scott Fitzegeral', coverImage: './images/gatsby.jpg' }
// ];


// export default function Books() {
//   return (
    // <div>
    //   <h1 className='font-bold text-4xl text-center border'>Books Collection</h1>
    //   <div>
    //     <div>
    //       <button>Preview</button>
    //       <span>Add book</span>
    //     </div>
    //   </div>

    // </div>

const books = [
  {
    title: 'The Eye of the World',
    image: 'https://example.com/eye-of-world.jpg',
    buttonText: 'Preview Only'
  },
  {
    title: 'Grumpy Darling',
    image: 'https://example.com/grumpy-darling.jpg',
    buttonText: 'Locate'
  },
  {
    title: 'A Game of Thrones',
    image: 'https://example.com/game-of-thrones.jpg',
    buttonText: 'Preview Only'
  },
  {
    title: 'Fifty Shades of Grey',
    image: 'https://example.com/fifty-shades.jpg',
    buttonText: 'Preview Only'
  },
  {
    title: 'We Were Never Meant to Be',
    image: 'https://example.com/we-were-never.jpg',
    buttonText: 'Locate'
  },
  {
    title: "I Don't Love You Anymore",
    image: 'https://example.com/dont-love-you.jpg',
    buttonText: 'Locate'
  }
];

export default function Books() {
return (
    <div className="p-6 bg-[#f5f1e6]">
      <h2 className="text-2xl mb-4">
        <a href="#" className="text-blue-700 hover:underline">Trending Books</a>
      </h2>
      <div className="flex items-center">
        <button onClick={() => scroll(-1)} className="text-2xl px-3 py-2 bg-gray-300 rounded-full mr-2">←</button>
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-4"
        >
          {books.map((books, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-3 w-40 text-center">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-56 object-cover rounded-md"
              />
              <button className="mt-3 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                {book.buttonText}
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(1)} className="text-2xl px-3 py-2 bg-gray-300 rounded-full ml-2">→</button>
      </div>
    </div>
  );
}
//   const carouselRef = useRef(null);

//   const scroll = (direction) => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: direction * 200,
//         behavior: 'smooth'
//       });
//     }
//   };

  



