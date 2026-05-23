import React from "react";

const Banner = ({
  bgColor,
  discount,
  title,
  date,
  image,
  title2,
  title3,
  title4,
}) => {
  return (
    <section className={`py-12 flex items-center justify-center min-h-[550px]`} >
      <div className="container">
        <div className="grid grid-cols-1 relative md:grid-cols-3 gap-6 text-white rounded-3xl" style={{ background: bgColor }}>
          {/* first col  */}
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-sm">{discount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">{title}</h1>
            <p className="text-sm">{date}</p>
          </div>
          {/* second col  */}
          <div className="flex justify-end">
            <img src={image} className="absolute bottom-[75px] md:bottom-[-30px] w-[280px] md:w-[340px] drop-shadow-[-4px_6px_10px_rgba(0,0,0,0.7)] " alt="" />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{title}</p>
            <h1 className="text-3xl sm:text-5xl font-bold">{title3}</h1>
            <p className="text-sm">{title4}</p>
            <div>
                <button style={{color: bgColor}} className="bg-white py-2 px-4 rounded">
                    Shop Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
