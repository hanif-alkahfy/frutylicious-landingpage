import React from 'react';
import kiwiImg from '../assets/kiwi juice.png';
import mangoImg from '../assets/mango.png';
import melonImg from '../assets/melon juice.png';
import strawberryImg from '../assets/strawberry juice.png';
import tomatoImg from '../assets/tomato juice.png';
import watermelonImg from '../assets/watermelon juice.png';
import pineappleImg from '../assets/pineapple smoothie.png';
import smoothieImg from '../assets/smoothies.png';

const menus = [
  { title: 'Jus Kiwi', image: kiwiImg, price: 25000 },
  { title: 'Jus Mangga', image: mangoImg, price: 20000 },
  { title: 'Jus Melon', image: melonImg, price: 20000 },
  { title: 'Jus Strawberry', image: strawberryImg, price: 25000 },
  { title: 'Jus Tomat', image: tomatoImg, price: 20000 },
  { title: 'Jus Semangka', image: watermelonImg, price: 20000 },
  { title: 'Jus Nanas', image: pineappleImg, price: 25000 },
  { title: 'Mango Smoothie', image: smoothieImg, price: 25000 },
];

const Menu = () => {
  return (
    <section id='menu' className="w-full bg-[#EAF7FF] py-20 ">
        <div className="max-w-7xl mx-auto text-center mb-10">
            <p className="text-[#5A96E3] font-medium mb-3">our product</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#314161]">The Most Popular Juices</h2>
        </div>

        {/* Grid Container dibatasi lebar total dan card */}
        <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {menus.map((menu, index) => (
                <div
                key={index}
                className="bg-[#E6F4FE] rounded-md p-4 flex flex-col items-center shadow-md sm:h-[250px] sm:w-[170px]"
                >
                <img src={menu.image} alt={menu.title} className="w-24 h-24 object-contain mb-4" />
                <p className="font-semibold text-[#314161] mb-1">{menu.title}</p>
                <p className="text-[#314161] text-sm font-medium mb-4">
                    {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    }).format(menu.price)}
                </p>
                <button
                    onClick={() => {
                        const number = '6281234567890'; // ganti ke nomor admin kamu
                        const message = `Halo Frutylicious! Saya ingin memesan ${menu.title} seharga Rp ${menu.price.toLocaleString('id-ID')}.`;
                        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-[#55B9F3] hover:bg-[#3aa5e5] text-white text-sm px-6 py-2 rounded-full shadow-md font-jost font-extrabold"
                    >
                    order now
                </button>
                </div>
            ))}
            </div>
        </div>
    </section>
    );
};

export default Menu;
