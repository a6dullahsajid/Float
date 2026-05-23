import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../shared/Button";

const Category2 = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* col1  */}
          <div className="py-10 pl-5 sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-3 bg-gradient-to-br flex items-end relative h-[320px] from-slate-600/80 to-slate-600/40 text-white rounded-3xl">
            <div>
              <div className="mb-2">
                <p className="mb-[2px] text-slate-300">Enjoy</p>
                <p className="mb-[2px] font-semibold text-2xl">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-40">
                  Gaming
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
              className="w-[200px] sm:w-[240px] absolute bottom-8 right-0 z-40"
            />
          </div>
          {/* {col2 } */}
          <div className="py-10 pl-5 bg-gradient-to-br flex items-end relative h-[320px] from-green-500/90 to-green-500/60 text-white rounded-3xl">
            <div>
              <div className="mb-2">
                <p className="mb-[2px] text-green-200">Enjoy</p>
                <p className="mb-[2px] font-semibold text-2xl">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-40">
                  VR Glasses
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-green-500"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[230px] absolute -right-5 bottom-0 z-40"
            />
          </div>
          {/* col3  */}
          <div className="py-10 pl-5 bg-gradient-to-br flex items-end relative h-[320px] from-blue-600/90 to-blue-600/60 text-white rounded-3xl">
            <div>
              <div className="mb-2">
                <p className="mb-[2px] text-red-200">Enjoy</p>
                <p className="mb-[2px] font-semibold text-2xl">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-20">
                  Speaker
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
              className="w-[230px] absolute -right-10 -bottom-10 z-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category2;
