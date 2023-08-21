import React from 'react';
import { BsFillHeartPulseFill } from 'react-icons/bs';

const ProductPreview = (props) => {
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();

  return (
    <div className="w-1/2 min-w-[250px] relative">
      <img className="w-full" alt={props.title} src={props.image} />
      {props.btnCount === 0 ? (
        <div className="text-[#fff] text-[clamp(25px,3vw,50px)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{`${
          currentHours < 9 ? currentHours + '0' : currentHours
        }:${currentMinutes < 9 ? currentMinutes + '0' : currentMinutes}`}</div>
      ) : (
        <div className=" text-[#fff] flex flex-col justify-center items-center gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BsFillHeartPulseFill className="text-red-500 text-[clamp(20px,5vw,50px)] animate-heartbeat" />
          <h1 className="text-[clamp(25px,3vw,50px)] ">78</h1>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
