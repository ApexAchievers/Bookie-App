import BornaCrime from '../assets/images/BornaCrime.jpg';

export default function ViewBook() {
  return (
    <section>
      <h1 className='text-4xl text-center font-bold'>Viewbook</h1>

      <div className='flex flex-row mt-4 gap-4'>

        <div className='w-full bg-gray-400'>
          <img src={BornaCrime} alt="Single Book" />
          </div>
        <p>
          <span className='text-3xl text-center'>Synopsis</span> <br />
          THE #1 NEW YORK TIMES BESTSELLER FROM THE AUTHOR OF THE MARTIAN • Soon to be a major motion picture starring Ryan Gosling, directed by Phil Lord and Christopher Miller, with a screenplay by Drew Goddard

          **From the author of The Martian, a lone astronaut must save the earth from disaster in this “propulsive” (Entertainment Weekly), cinematic thriller full of suspense, humor, and fascinating science.

          HUGO AWARD FINALIST • ONE OF THE YEAR’S BEST BOOKS: Bill Gates, GatesNotes, New York Public Library, Parade, Newsweek, Polygon, Shelf Awareness, She Reads, Kirkus Reviews, Library Journal • New York Times Readers Pick: 100 Best Books of the 21st Century
        </p>
      </div>
    </section>

  );

}
