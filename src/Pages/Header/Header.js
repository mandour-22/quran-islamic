import React, { useState, useEffect } from "react";
import Favicon from "react-favicon";
import Img1 from "../../img/hero-1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const itemsIslamic = [
    {
      id: 3,
      title: "الاحاديث",
      link: "/hadis",
    },
    {
      id: 4,
      title: "الورد",
      link: "/azkar",
    },
    {
      id: 6,
      title: "التبرع",
      link: "/donation",
    },
    {
      id: 7,
      title: "التواصل معى",
      link: "/comunication",
    },
    {
      id: 8,
      title: "اوقات الصلاه",
      link: "/prayer-times",
    },
  ];

  const [fav, setFav] = useState("../../img/moon.png");

  useEffect(() => {}, []);

  return (
    <header
      className="grid place-content-center conatiner mx-auto h-section bg-cover bg-center w-full relative"
      style={{ backgroundImage: `url(${Img1})` }}>
      <Favicon url={fav} />;
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <h1 className="font-rakkas text-5xl font-light max-sm:text-center max-sm:text-3xl mt-10 mb-5 text-gray-100 md:text-4xl">
          اهلا بك في موقع <span className="font-mono">Islamic</span>
        </h1>
        <Link
          to="/quran"
          className="bg-primary px-5 pt-2 pb-2 rounded-lg mb-3 text-gray-200 bg-opacity-80 hover:bg-opacity-100">
          <button>انتقل الى قسم القرأن الكريم</button>
        </Link>

        <h3 className="text-white mt-3 mb-5 flex items-center justify-center bg-secondary rounded px-4 pt-1 pb-1 hover:bg-opacity-100 bg-opacity-70 cursor-default ">
          الاقسام الاخرى <FontAwesomeIcon className="mx-2" icon={faArrowDown} />
        </h3>
        <div className="flex items-center justify-center flex-wrap text-center ">
          {itemsIslamic.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="text-center m-2 inline-block bg-primary px-5 pt-2 pb-2 rounded-lg text-gray-200 bg-opacity-80 hover:bg-opacity-100">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
