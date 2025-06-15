import React from 'react';
import smoothiesImage from '../assets/smoothies.png';
import shapeImage from '../assets/shape.png';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';

const Features = () => {
  return (
    <section className="w-full min-h-screen bg-[#EAF7FF] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative">

        {/* MOBILE: Atas */}
        <div className="flex flex-col gap-6 items-center lg:hidden">
          <FeatureItem icon={icon1} title="Greenfield Smoothies" text="It is a long established fact that a reader will be distracted by" align="center" />
          <FeatureItem icon={icon2} title="Greenfield Smoothies" text="It is a long established fact that a reader will be distracted by" align="center" />
          <FeatureItem icon={icon3} title="Greenfield Smoothies" text="It is a long established fact that a reader will be distracted by" align="center" />
        </div>

        {/* Gambar Tengah - Tetap di Tengah di Desktop */}
        <div className="order-first lg:order-none relative flex justify-center items-center z-10 min-w-[300px]">
          {/* Shape belakang */}
          <img
            src={shapeImage}
            alt="Shape"
            className="absolute w-40 sm:w-60 lg:w-[350px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          {/* Smoothies */}
          <img
            src={smoothiesImage}
            alt="Smoothies"
            className="w-[150px] sm:w-[200px] lg:w-[350px] h-auto object-contain z-10"
          />
        </div>

        {/* DESKTOP: KIRI */}
        <div className="hidden lg:flex flex-col gap-8 items-start text-left">
          <FeatureItem icon={icon1} title="Greenfield Smoothies" text="It is a long established fact that a reader will be distracted by" align="left" />
          <FeatureItem icon={icon2} title="Greenfield Smoothies" text="It is a long established fact that a reader will be distracted by" align="left" />
          <FeatureItem icon={icon3} title="Greenfield Smoothies" text="It is a long established fact that a reader will be distracted by" align="left" />
        </div>

        {/* DESKTOP: KANAN */}
        <div className="hidden lg:flex flex-col gap-8 items-end text-right">
          <FeatureItem icon={icon3} title="Take a leap for juice" text="It is a long established fact that a reader will be distracted by" align="right" />
          <FeatureItem icon={icon2} title="Take a leap for juice" text="It is a long established fact that a reader will be distracted by" align="right" />
          <FeatureItem icon={icon1} title="Take a leap for juice" text="It is a long established fact that a reader will be distracted by" align="right" />
        </div>

        {/* MOBILE: Bawah */}
        <div className="flex flex-col gap-6 items-center mt-8 lg:hidden">
          <FeatureItem icon={icon3} title="Take a leap for juice" text="It is a long established fact that a reader will be distracted by" align="center" />
          <FeatureItem icon={icon2} title="Take a leap for juice" text="It is a long established fact that a reader will be distracted by" align="center" />
          <FeatureItem icon={icon1} title="Take a leap for juice" text="It is a long established fact that a reader will be distracted by" align="center" />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, text, align = 'left' }) => {
  const alignment =
    align === 'right'
      ? 'flex-row-reverse text-right items-end'
      : align === 'center'
      ? 'flex-col text-center items-center'
      : 'text-left items-start';

  return (
    <div className={`flex gap-4 ${alignment}`}>
      <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      <div>
        <h4 className="font-bold text-[#314161] text-sm sm:text-xl">{title}</h4>
        <p className="text-[#314161] text-sm leading-relaxed line-clamp-2 max-w-xs">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Features;
