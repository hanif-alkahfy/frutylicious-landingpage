import smoothiesImage from '../assets/smoothies.png';
import shapeImage from '../assets/shape.png';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';

const FeatureItem = ({ icon, title, text, align = 'left' }) => {
  const isRight = align === 'right';
  return (
    <div
      className={`flex items-start gap-4 ${
        isRight ? 'flex-row-reverse text-right' : 'text-left'
      } w-full max-w-xs`}
    >
      <img src={icon} alt={title} className="w-10 h-10 object-contain flex-shrink-0" />
      <div>
        <h4 className="font-bold text-[#314161] text-base sm:text-lg mb-1">{title}</h4>
        <p className="text-[#314161] text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="w-full bg-[#EAF7FF] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Kiri - fitur kiri */}
        <div className="flex flex-col gap-8 items-start text-left">
          <FeatureItem icon={icon1} title="Greenfield Smoothies" text="Lorem ipsum dolor sit amet consectetur." />
          <FeatureItem icon={icon2} title="Healthy & Fresh" text="Pellentesque habitant morbi tristique senectus." />
          <FeatureItem icon={icon3} title="No Preservatives" text="Nunc non blandit massa enim nec." />
        </div>

        {/* Gambar Tengah */}
        <div className="relative flex justify-center items-center z-10 py-8">
          {/* Shape */}
          <img
            src={shapeImage}
            alt="Shape"
            className="absolute w-40 sm:w-60 lg:w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          {/* Smoothie */}
          <img
            src={smoothiesImage}
            alt="Smoothies"
            className="relative z-10 w-[150px] sm:w-[220px] lg:w-[280px] h-auto object-contain"
          />
        </div>

        {/* Kanan - fitur kanan */}
        <div className="flex flex-col gap-8 items-end text-right">
          <FeatureItem icon={icon3} title="Fruit On Demand" text="Ut enim ad minim veniam, quis nostrud." align="right" />
          <FeatureItem icon={icon2} title="Affordable Juice" text="Duis aute irure dolor in reprehenderit." align="right" />
          <FeatureItem icon={icon1} title="Fast Delivery" text="Excepteur sint occaecat cupidatat non proident." align="right" />
        </div>
      </div>
    </section>
  );
};

export default Features;
