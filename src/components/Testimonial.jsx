import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Hannif Alkahfy",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    rating: 5
  },
  {
    name: "Aisyah Rahma",
    review: "This juice tastes amazing! Fresh and healthy. Will order again for sure.",
    rating: 5
  },
  {
    name: "Budi Santoso",
    review: "Harga terjangkau dan rasa luar biasa. Highly recommended.",
    rating: 4
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="w-full h-screen bg-[#EAF7FF] flex flex-col justify-center items-center px-6">
      <div className="text-center mb-12">
        <p className="text-[#53BDFF] font-medium">Testimonial</p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#314161]">
          What Our Customer Are Saying
        </h2>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-6xl">
        {/* Tombol Kiri */}
        <button
          onClick={prev}
          className="absolute left-0 sm:left-[-60px] bg-white border-2 border-[#53BDFF] text-[#53BDFF] hover:bg-[#53BDFF] hover:text-white p-4 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Konten Testimoni */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl text-center mx-10">
          <p className="text-[#1c1c1c] mb-6">{testimonial.review}</p>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <p className="text-[#314161] font-extrabold">{testimonial.name}</p>
        </div>

        {/* Tombol Kanan */}
        <button
          onClick={next}
          className="absolute right-0 sm:right-[-60px] bg-white border-2 border-[#53BDFF] text-[#53BDFF] hover:bg-[#53BDFF] hover:text-white p-4 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
