import Image from 'next/image';
import React from 'react';

const books = [
  { id: 1, img: "/book1.jpg", rotate: "rotate-6", featured: true },
  { id: 2, img: "/book2.jpg", rotate: "rotate-3", featured: false },
  { id: 3, img: "/book3.jpg", rotate: "-rotate-3", featured: false },
  { id: 4, img: "/book4.jpg", rotate: "-rotate-6", featured: false },
];

const Hero = () => {
  return (
    <div className="  mx-auto grid grid-cols-12 gap-4 py-20 px-6 md:px-20 lg:px-40">
      {/* Left Section */}
      <section className="col-span-12 md:col-span-6 flex flex-col justify-center gap-6">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Your Personal Reading Journey Starts Here
        </h1>
        <p className="text-gray-700">
          Discover new books, track your reading progress, and connect with a community of book lovers. BookWorm makes reading more enjoyable and organized.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Explore Books
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Create Account
          </button>
        </div>
      </section>

      {/* Right Section */}
      <section className="col-span-12 md:col-span-6 flex justify-center items-center relative">
        <div className="relative w-[280px] md:w-[360px] h-[400px] md:h-[480px]">
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`absolute top-0 left-1/2 -translate-x-1/2 transition-transform duration-300
                ${book.rotate} 
                ${book.featured ? "scale-110 z-20" : `scale-90 z-${index}`}
              `}
              style={{ marginLeft: `${(index - 1.5) * 60}px` }} // spread out books
            >
              <div className="relative w-[220px] md:w-[260px] h-[320px] md:h-[360px] rounded-2xl overflow-visible shadow-xl">
                <Image src={book.img} alt="Book" fill className="object-cover rounded-2xl" />

                {/* Glow effect for featured book */}
                {book.featured && (
                  <div className="absolute inset-0 bg-yellow-400/30 blur-3xl rounded-2xl -z-10" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
