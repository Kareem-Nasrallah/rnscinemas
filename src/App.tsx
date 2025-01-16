import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cinemas from "./Pages/Cinemas/Cinemas";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
const App = () => {
  return (
    <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cinemas" element={<Cinemas/>} />
          <Route path="/coming-soon" element={<ComingSoon/>} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
