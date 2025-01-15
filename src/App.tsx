import SwiperCom from "./SwiperCom/SwiperCom";
import "./App.css";
import Header from "./Components/Header/Header";
import Ad from "./Components/Ad/Ad";
import axios from "axios";
import { useEffect, useState } from "react";
import NowShowing from './NowShowing/NowShowing'
import Cinemas from "./Pages/Cinemas/Cinemas";
import Footer from "./Components/Footer/Footer";

function App() {
  const [moviesImg, setMoviesImg] = useState([]);

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
      <Header />
      <SwiperCom moviesImg={moviesImg}/>
      <Ad />
      <NowShowing moviesImg={moviesImg}/>
      <Cinemas/>
      <Footer/>
    </>
  );
}

export default App;
