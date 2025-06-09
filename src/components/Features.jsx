import { Sparkles, MessageCircle, Box } from "lucide-react";
import { motion } from "framer-motion";
import Smoothies from '../assets/smoothie.png';

const features = [
  { title: "Take a leap for juice", icon: <Sparkles className="w-6 h-6 text-sky-400" />, desc: "It is a long established fact that a reader will be distracted by" },
  { title: "Greenfield Smoothies", icon: <MessageCircle className="w-6 h-6 text-sky-400" />, desc: "It is a long established fact that a reader will be distracted by" },
  { title: "The smootheory", icon: <Box className="w-6 h-6 text-sky-400" />, desc: "It is a long established fact that a reader will be distracted by" },
  { title: "The Smoothie Fairy", icon: <Sparkles className="w-6 h-6 text-sky-400" />, desc: "It is a long established fact that a reader will be distracted by" },
  { title: "FreshPress Juice", icon: <MessageCircle className="w-6 h-6 text-sky-400" />, desc: "It is a long established fact that a reader will be distracted by" },
  { title: "Smoothies Dreams", icon: <Box className="w-6 h-6 text-sky-400" />, desc: "It is a long established fact that a reader will be distracted by" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  return (
    <section className="bg-sky-100 py-16 w-full overflow-x-hidden">
      <motion.div
        className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center w-full px-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Kiri */}
        <div className="space-y-6 w-full flex flex-col items-end pr-10">
          {features.slice(0, 3).map((f, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-4 max-w-sm"
              variants={fadeIn}
              transition={{ delay: i * 0.2 }}
            >
              {f.icon}
              <div>
                <h4 className="text-black font-bold text-lg">{f.title}</h4>
                <p className="text-black text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tengah */}
        <motion.div
          className="flex justify-center"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <div className="relative w-[320px] h-auto bg-yellow-200 rounded-t-full p-6">
            <img src={Smoothies} alt="Mango Smoothie" className="z-10 relative" />
          </div>
        </motion.div>

        {/* Kanan */}
        <div className="space-y-6 w-full flex flex-col items-start pl-10">
          {features.slice(3, 6).map((f, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-4 max-w-sm"
              variants={fadeIn}
              transition={{ delay: (i + 3) * 0.2 }}
            >
              {f.icon}
              <div>
                <h4 className="text-black font-bold text-lg">{f.title}</h4>
                <p className="text-black text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
