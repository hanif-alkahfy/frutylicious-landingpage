import fruitImage from '../assets/fruit.png';

const HomeSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-200 via-teal-100 to-blue-300 pt-20">
      <section className="flex justify-center items-center px-4 sm:px-8 pt-24 pb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-10">
          
          {/* Kiri: Teks & Tombol */}
          <div className="w-full max-w-xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b2f4e] font-jost leading-tight mb-6">
              Minuman Sehat Kini<br />
              Hadir dan Lebih<br />
              Modern Untuk Anda !!
            </h1>
            <p className="text-[#374151] font-light text-sm sm:text-base font-jost leading-relaxed">
              "Di Fruitylicious, kami percaya bahwa minuman terbaik adalah yang paling segar dan alami.
              Setiap botol kami dibuat dengan penuh cinta, menggunakan 100% bahan alami tanpa tambahan apapun.
              Tujuan kami sederhana: memberikan nutrisi terbaik untuk tubuhmu dan menyegarkan semangatmu seteguk demi seteguk."
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <button className="bg-[#3CB5FF] text-white font-jost font-medium text-sm px-6 py-3 rounded-full shadow-md hover:brightness-110 transition w-full sm:w-auto">
                LIHAT MENU
              </button>
              <button className="bg-white text-[#3CB5FF] font-jost font-medium text-sm px-6 py-3 rounded-full shadow-md hover:bg-[#e6f6ff] transition w-full sm:w-auto">
                PESAN SEKARANG
              </button>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg mx-auto lg:mx-0 lg:ml-8">
            <img
              src={fruitImage}
              alt="Gambar Jus Buah"
              className="w-full h-auto object-contain transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeSection;
