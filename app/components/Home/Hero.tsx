import Image from 'next/image';
import React from 'react';


const books = [
    {
        id: 1,          
        img: "/book1.jpg",
        rotate: "rotate-6",
        featured: true
    },
    {
        id: 2,
        img: "/book2.jpg",
        rotate: "rotate-3",
        featured: false
    },
    {
        id: 3,
        img: "/book3.jpg",
        rotate: "-rotate-3",
        featured: false
    },
    {
        id: 4,
        img: "/book4.jpg",
        rotate: "-rotate-6",
        featured: false
    }
];

const Hero = () => {
    return (
        <div>
              <section>
                <h1 className='text-5xl font-semibold'>Your Personal Reading Journey Starts Here</h1>
                <p>Discover new books, track your reading progress, and connect with a community of book lovers. BookWorm makes reading more enjoyable and organized.</p>
                <div>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Explore Book</button>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Create Account</button>
                </div>

              </section> 


              <section>

               

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {books.map((book) => (
            <div
              key={book.id}
              className={`relative w-[220px] md:w-[260px] h-[320px] md:h-[360px]
                rounded-2xl overflow-hidden shadow-xl transition-transform duration-300
                ${book.rotate}
                ${book.featured ? "scale-110 z-10" : "scale-100"}
              `}
            >
              <Image
                src={book.img}
                alt="Book"
                fill
                className="object-cover"
              />

              {/* Glow for center card */}
              {book.featured && (
                <div className="absolute inset-0 bg-yellow-400/30 blur-2xl -z-10 rounded-2xl" />
              )}
            </div>
          ))}
        </div>
      

              </section>


            
        </div>
    );
};

export default Hero;