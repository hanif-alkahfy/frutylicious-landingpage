import fruitImage from '../assets/fruit.png';

const HomeSection = () => {
  return (
    <section className="w-screen h-screen bg-gradient-to-br from-blue-200 via-teal-100 to-blue-300">
      <section className="w-full flex justify-center items-center px-8 pt-24">
        {/* Wrapper dua kolom */}
        <div className="flex flex-row items-center justify-between w-full max-w-7xl">
          
          {/* Kiri: Text dan Tombol */}
          <div className="max-w-[640px] ml-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2b2f4e] font-jost leading-tight mb-6">
              Minuman Sehat Kini<br />
              Hadir dan Lebih<br />
              Modern Untuk Anda !!
            </h1>
            <p className="text-[#374151] font-light text-base font-jost leading-relaxed">
              "Di Fruitylicious, kami percaya bahwa minuman terbaik adalah yang paling segar dan alami.
              Setiap botol kami dibuat dengan penuh cinta, menggunakan 100% bahan alami tanpa tambahan apapun.
              Tujuan kami sederhana: memberikan nutrisi terbaik untuk tubuhmu dan menyegarkan semangatmu seteguk demi seteguk."
            </p>
            <div className="mt-8 flex space-x-6">
                {/* Tombol 1: Lihat Menu */}
                <button className="bg-[#3CB5FF] text-white font-jost font-medium text-sm px-6 py-3 rounded-full shadow-md hover:brightness-110 transition min-w-[160px] text-center">
                    LIHAT MENU
                </button>

                {/* Tombol 2: Pesan Sekarang */}
                <button className="bg-white text-[#3CB5FF] font-jost font-medium text-sm px-6 py-3 rounded-full shadow-md hover:bg-[#e6f6ff] transition min-w-[160px] text-center">
                    PESAN SEKARANG
                </button>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div className="hidden lg:block max-w-[500px]">
            <img src={fruitImage} alt="Gambar Jus Buah" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeSection;
