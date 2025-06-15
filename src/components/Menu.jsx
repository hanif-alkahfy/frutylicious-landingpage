import React from 'react';
import smoothiesImage from '../assets/smoothies.png'; // sementara pakai gambar ini

const menus = new Array(8).fill({
    title: 'Mango Smoothie',
    image: smoothiesImage,
    price: 25000,
});

const Menu = () => {
  return (
    <section className="w-full bg-[#EAF7FF] py-20 px-1">
        <div className="max-w-7xl mx-auto text-center mb-12">
            <p className="text-[#5A96E3] font-medium">our product</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#314161]">The Most Popular Juices</h2>
        </div>

        {/* Grid Container dibatasi lebar total dan card */}
        <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {menus.map((menu, index) => (
                <div
                key={index}
                className="bg-[#E6F4FE] rounded-md p-4 flex flex-col items-center shadow-md sm:w-[160px]"
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
                <button className="bg-[#55B9F3] hover:bg-[#3aa5e5] text-white text-sm px-6 py-2 rounded-full shadow-md font-jost font-extrabold">
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
