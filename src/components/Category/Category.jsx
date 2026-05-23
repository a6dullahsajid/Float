import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../shared/Button";

const Category = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* col1  */}
          <div className="py-10 pl-5 bg-gradient-to-br flex items-end relative h-[320px] from-black/90 to-black/70 text-white rounded-3xl">
            <div>
              <div className="mb-2">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="mb-[2px] font-semibold text-2xl">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-20">
                  Earphone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[320px] absolute bottom-0 z-40"
            />
          </div>
          {/* {col2 } */}
          <div className="py-10 pl-5 bg-gradient-to-br flex items-end relative h-[320px] from-brandYellow to-brandYellow/70 text-white rounded-3xl">
            <div>
              <div className="mb-2">
                <p className="mb-[2px] text-yellow-200">Enjoy</p>
                <p className="mb-[2px] font-semibold text-2xl">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-20">
                  Gadget
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-yellow-500"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[330px] absolute -right-[80px] bottom-4 z-40"
            />
          </div>
          {/* col3  */}
          <div className="py-10 pl-5 bg-gradient-to-br flex lg:col-start-3 lg:col-end-5 sm:col-start-1 sm:col-end-3 items-end relative h-[320px] from-red-600/90 to-red-600/70 text-white rounded-3xl">
            <div>
              <div className="mb-2">
                <p className="mb-[2px] text-red-200">Enjoy</p>
                <p className="mb-[2px] font-semibold text-2xl">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-20">
                  Laptop
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-red-600"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[300px] sm:w-[360px] absolute -right-8 -bottom-10 z-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
