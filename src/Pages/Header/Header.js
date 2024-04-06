import React, { useState, useEffect } from "react";
import Favicon from "react-favicon";
import Img1 from "../../img/hero-1.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [fav, setFav] = useState("../../img/moon.png");

  useEffect(() => {}, []);

  return (
    <header
      className="grid place-content-center conatiner mx-auto h-section bg-cover bg-center w-full "
      style={{ backgroundImage: `url(${Img1})` }}>
      <Favicon url={fav} />;
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title text-5xl font-light max-sm:text-center max-sm:text-3xl mt-10 mb-5 text-gray-100 md:text-4xl">
          اهلا بك في موقع <span>Islamic</span>
        </h1>
        <Link
          to="/quran"
          className="bg-yellow-800 px-5 pt-2 pb-2 rounded-lg text-gray-200 bg-opacity-80 hover:bg-opacity-100">
          <button>انتقل الى قسم القرأن الكريم</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
