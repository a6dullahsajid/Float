import React from "react";
import SliderPkg from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/hero/watch.png";
import Button from "../shared/Button";

const Slider = SliderPkg.default || SliderPkg;

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptates placeat! Officia culpa voluptates ea, temporibus cumque aut quis porro earum dolorem reiciendis. Aliquam accusamus expedita ratione pariatur, vitae magni possimus odio nam natus? Doloremque aliquam voluptatem quis necessitatibus reprehenderit blanditiis accusamus earum, ad enim ullam. Enim voluptatem excepturi earum!",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Sports Wand",
    title: "Wireless",
    title2: "Wrist Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptates placeat! Officia culpa voluptates ea, temporibus cumque aut quis porro earum dolorem reiciendis. Aliquam accusamus expedita ratione pariatur, vitae magni possimus odio nam natus? Doloremque aliquam voluptatem quis necessitatibus reprehenderit blanditiis accusamus earum, ad enim ullam. Enim voluptatem excepturi earum!",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container">
      <div className="overflow-hidden mt-2 hero-bg-color rounded-3xl min-h-[550] sm:min-h-[650px] flex justify-center items-center dark:">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings} className="w-full">
            {HeroData.map((data, index) => {
              return (
                <div key={data.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content  */}
                    <div className="flex flex-col justify-center g-4 sm:pl-3 pt-12 pl-8 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                      <h1 className="text-2xl sm:text-5xl lg:text-4xl font-bold">
                        {data.subtitle}
                      </h1>
                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative text-white">
                        {data.title}
                      </h1>
                      <h1 className="text-5xl uppercase text-white dark:text-white/30 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                        {data.title2}
                      </h1>
                      <div className="w-fit text-white px-2 text-sm">
                        <Button
                          text={"Shop By Category"}
                          bgColor={"bg-primary"}
                          textColor={"text-white"}
                        />
                      </div>
                    </div>
                    {/* Image  */}
                    <div className="order-1 sm:order-2">
                      <div>
                        <img
                          src={data.img}
                          alt={data.title2}
                          className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] md:scale-105 lg:scale-120 relative z-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
