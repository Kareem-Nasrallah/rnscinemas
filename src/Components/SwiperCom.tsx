import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useEffect, useState } from "react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type movies = {
  id : number;
  image: {
    medium: string
  }
}

const SwiperCom = () => {

  const [moviesImg, setMoviesImg] = useState<movies[]>([]);


  const axiosFunc = async () => {
    try {
      const response = await axios.get("http://api.tvmaze.com/shows");
      setMoviesImg(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axiosFunc();
  }, []);

  return (
    <>
    <div>
    <Swiper
      modules={[ Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {moviesImg?.slice(0,5).map(elImg=>(
        <SwiperSlide key={elImg.id}>
          <img src={elImg.image.medium} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </>
  );
};

export default SwiperCom;
