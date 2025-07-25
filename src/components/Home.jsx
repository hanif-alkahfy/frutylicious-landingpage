import { motion } from "framer-motion";
import fruitImage from '../assets/fruit.png';

const Home = () => {
  return (
    <section id='home' className="w-full min-h-screen bg-gradient-to-br from-blue-200 via-teal-100 to-blue-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image */}
        <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="py-8 flex-1 flex justify-center order-1 lg:order-2">
          <img
          src={fruitImage}
          alt="Fruit"
          className="w-full max-w-[500px] h-auto object-contain"
        />
        </motion.div>

        {/* Text */}
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-extrabold text-[#435578] text-3xl sm:text-4xl lg:text-5xl leading-snug mb-4 font-jost">
            Minuman Sehat Kini Hadir <br className="hidden lg:block" />dan Lebih Modern Untuk Anda
          </h1>
          <p className="text-[#435578] font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-jost">
            "Di Fruitylicious, kami percaya bahwa minuman terbaik adalah yang paling segar dan alami. 
            Setiap botol kami dibuat dengan penuh cinta, menggunakan 100% bahan alami tanpa tambahan apapun. 
            Tujuan kami sederhana: memberikan nutrisi terbaik untuk tubuhmu dan menyegarkan semangatmu seteguk demi seteguk."
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full sm:w-[150px] h-[50px] sm:h-[50px] bg-[#53BDFF] text-[#FDFDFD] font-extrabold text-base sm:text-xs rounded-[28px] hover:brightness-110 transition"
              onClick={() => {
                const menuSection = document.getElementById("menu");
                menuSection?.scrollIntoView({ behavior: "smooth" });
              }}>
              LIHAT MENU
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full sm:w-[150px] h-50px] sm:h-[50px] bg-[#FDFDFD] text-[#53BDFF] font-extrabold text-base sm:text-xs rounded-[28px] hover:bg-[#e5f4ff] transition border-2 border-[#53BDFF]"
              onClick={() => {
                window.open(
                  "https://wa.me/6281226467574?text=Halo%20Frutylicious!%20Saya%20ingin%20memesan%20jus%20segar%20dari%20menu%20kalian.%20Mohon%20informasinya%20ya!",
                  "_blank"
                );
              }}>
              PESAN SEKARANG
            </motion.button>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Home;
