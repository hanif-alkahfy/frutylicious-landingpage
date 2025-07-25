import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // install: `npm i react-icons`

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
        setShowNavbar(true); // Tampilkan navbar hanya saat posisi paling atas
    } else {
        setShowNavbar(false); // Sembunyikan di posisi lain
    }

    lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll);

    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex justify-between items-center">
        {/* Hamburger Button */}
        <div className="md:hidden">
            <button
            onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md bg-white/50 backdrop-blur-sm shadow-md border border-blue-200 text-blue-700 hover:bg-white transition"
                >
                {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-[100px] text-[#314161] text-base font-quicksand absolute left-1/2 transform -translate-x-1/2">
          <li><a className='text-[#314161]' href="#home">Home</a></li>
          <li><a className='text-[#314161]' href="#features">Features</a></li>
          <li><a className='text-[#314161]' href="#menu">Menu</a></li>
          <li><a className='text-[#314161]' href="#contact">Contact</a></li>
        </ul>
      </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white/60 backdrop-blur-md rounded-xl shadow-lg px-6 py-4 flex flex-col items-start gap-4 text-blue-800 font-[quicksand] text-base animate-fade-down">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#features" className="hover:text-blue-500 transition">Features</a>
            <a href="#menu" className="hover:text-blue-500 transition">Menu</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>
        )}
    </nav>
  );
};

export default Navbar;
