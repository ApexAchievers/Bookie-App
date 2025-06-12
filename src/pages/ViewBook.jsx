import BornaCrime from '../assets/images/BornaCrime.jpg';

export default function ViewBook() {
  return (
    <section>
      <h1 className='text-4xl text-center font-bold'>Viewbook</h1>

      <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg'>

        <div className='flex flex-row justify-center'>
          <img src={BornaCrime} alt="Single Book" />
        </div>
        <p>
          <span className='text-3xl text-center'>Synopsis</span> <br />
          THE #1 NEW YORK TIMES BESTSELLER FROM THE AUTHOR OF THE MARTIAN • Soon to be a major motion picture starring Ryan Gosling, directed by Phil Lord and Christopher Miller, with a screenplay by Drew Goddard

          **From the author of The Martian, a lone astronaut must save the earth from disaster in this “propulsive” (Entertainment Weekly), cinematic thriller full of suspense, humor, and fascinating science.

          HUGO AWARD FINALIST • ONE OF THE YEAR’S BEST BOOKS: Bill Gates, GatesNotes, New York Public Library, Parade, Newsweek, Polygon, Shelf Awareness, She Reads, Kirkus Reviews, Library Journal • New York Times Readers Pick: 100 Best Books of the 21st Century
        </p>

        <div>
          <button className='bg-orange-400 px-6 rounded-lg flex flex-row justify-center items-center'>Edit</button>
          <button className='bg-orange-400 px-6 rounded-lg flex flex-row justify-center items-center'>Delete</button>
        </div>


      </div>
    </section>



  );

}


