import React from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <h1 className=" text-orange-500 font-bold text-2xl text-center py-2 ">
      Top Picks
      <div className="hidden lg:flex max-width[1520px] m-auto py-4 px-4">
        <Splide
          options={{ perPage: 5, gap: "0.9rem", grag: "free", arrows: false }}
        >
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white  text-start ">
                    <p className="pl-3 font-bold text-2xl pt-4 text-start">
                      {item.title}
                    </p>
                    <p className="pl-3 text-start ">{item.price}</p>
                    <button className="border-dotted border-white text-white p-2 absolute bottom-4 left-3">
                      Add To Cart
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </h1>
  );
};

export default TopPicks;
