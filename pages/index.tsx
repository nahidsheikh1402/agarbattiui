import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "react-slideshow-image/dist/styles.css";
import Wallpaper from "../components/wallpaper/wallpaper";
import Cards from "../components/cards/cards";
import ShoppingCard from "../components/shoppingcard/shoppingcard";

const Index = () => {
  return (
    <div>
      <Header />
      <Wallpaper />
      {/* <br></br>
      <br></br>
      <div className="container">
        <Cards />
      </div> */}

      <ShoppingCard />
      <Footer />
    </div>
  );
};
export default Index;
