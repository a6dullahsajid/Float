import React from "react";
import { FaCheckCircle, FaHeadphonesAlt, FaWallet } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-3xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-3xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-3xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-3xl md:text-5xl text-primary" />,
    title: "Seamless Experience",
    description: "3x Better quality",
  },
];

const Service = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 my-8">
        {ServiceData.map((data, index) => {
          return (
            <div className="flex flex-row gap-4" key={data.id}>
              <div>{data.icon}</div>
              <div className="flex flex-col">
                <h3 className="font-bold text-base lg:text-xl">{data.title}</h3>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
