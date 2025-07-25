import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#53BDFF] text-black px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-8">
        {/* Logo & Deskripsi - tampil di semua ukuran */}
        <div>
          <h2 className="text-xl font-bold mb-3">FRUTYLICIOUS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>

        <div className="hidden sm:block">
          <h3 className="font-bold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="hidden sm:block">
          <h3 className="font-bold mb-3">SHOP</h3>
          <ul className="space-y-2 text-sm">
            <li>Juice</li>
            <li>Supplements</li>
            <li>Products</li>
            <li>Milkshakes</li>
            <li>Health Drink</li>
          </ul>
        </div>

        <div className="hidden sm:block">
          <h3 className="font-bold mb-3">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>History</li>
            <li>Payment</li>
            <li>Search</li>
            <li>Privacy Policy</li>
            <li>Term And Conditioins</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">CONTACT US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-base" /> frutylicious@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-base" /> (62) 812 991 110 566
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-base" /> Sleman, Yogyakarta 55881
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8">
        &copy; 2025 Frutylicious. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
