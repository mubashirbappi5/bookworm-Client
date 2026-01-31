import Image from "next/image";
import React from "react";

const books = [
  { id: 1, img: "/book1.jpg", rotate: "rotate-[-8deg]" },
  { id: 2, img: "/book2.jpg", rotate: "rotate-0 scale-110 z-20" },
  { id: 3, img: "/book3.jpg", rotate: "rotate-[8deg]" },
];

const Hero = () => {
  return (
    <section className="bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl grid grid-cols-12 items-center gap-10 py-24 px-6 lg:px-12">
        
        {/* LEFT CONTENT */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2b1e16]">
            Your Personal <br />
            <span className="text-[#2f5d3f]">Reading</span> Journey <br />
            Starts Here
          </h1>

          <p className="max-w-lg text-gray-600 text-base leading-relaxed">
            Discover new books, track your reading progress, and connect with a
            community of book lovers. BookWorm makes reading more enjoyable and
            organized.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button className="flex items-center gap-2 rounded-xl bg-[#2f5d3f] px-6 py-3 text-sm font-medium text-white hover:bg-[#244a32] transition">
              📖 Explore Books
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-[#d6d3ce] px-6 py-3 text-sm font-medium text-[#2b1e16] hover:bg-white transition">
              Create Account →
            </button>
          </div>
        </div>

        {/* RIGHT BOOK STACK */}
        <div className="col-span-12 lg:col-span-6 flex justify-center">
          <div className="relative h-[420px] w-[360px]">
            {books.map((book, index) => (
              <div
                key={book.id}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${book.rotate}`}
                style={{ marginLeft: `${(index - 1) * 110}px` }}
              >
                <div className="relative h-[320px] w-[220px] rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src={book.img}
                    alt="Book cover"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
