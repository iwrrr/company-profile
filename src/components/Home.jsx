import React from "react";
import { Carousel } from "flowbite-react";

import japan1 from "../assets/japan_1.jpeg";

const Home = () => {
  return (
    <div className="bg-neutral-silver">
      <div className="max-w-screen-4xl mx-auto min-h-screen h-screen">
        <Carousel
          className="w-full mx-auto"
          draggable={false}
          theme={{
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
              snap: "snap-x",
            },
          }}
        >
          <img src={japan1} alt="" className="w-full" />
          <img src={japan1} alt="" className="w-full" />
          <img src={japan1} alt="" className="w-full" />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
