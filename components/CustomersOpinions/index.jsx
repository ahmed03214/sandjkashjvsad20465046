import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Opinion from "./Opinion";

const CustomersOpinions = ({ opinions = [] }) => {
  return (
    <Swiper
      className="d-block m-auto cu-grab"
      spaceBetween={50}
      slidesPerView={4}
    >
      {opinions.map((opinion, idx) => (
        <SwiperSlide className="select-none" key={idx}>
          <Opinion opinion={opinion} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomersOpinions;
