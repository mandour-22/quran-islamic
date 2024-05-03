import {
  faArrowRight,
  faArrowUp,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const DoaaAnbya = () => {
  const [azkarMorning, setAzkarMorning] = useState([]);
  const [showPopupUp, setShowPopupUp] = useState(false);

  const azkarApi =
    "https://raw.githubusercontent.com/nawafalqari/ayah/main/src/data/adkar.json";
  const FetchAzkar = () => {
    fetch(azkarApi)
      .then((res) => res.json())
      .then((d) => {
        setAzkarMorning(d["أدعية الأنبياء"]);
      })
      .catch((err) => console.log("Failed to fetch data", err));
  };

  FetchAzkar();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowPopupUp = () => {
    if (window.scrollY >= 100) {
      setShowPopupUp(true);
    } else {
      setShowPopupUp(false);
    }
  };
  window.addEventListener("scroll", handleShowPopupUp);
  return (
    <section className="h-full">
      <div className="max-w-screen-xl mx-auto pt-5 pb-5">
        <h1 className="font-rakkas text-bold text-center w-fit mx-auto text-5xl text-gray-300 border-b-2 border-color1 mb-10">
          أدعية الأنبياء
        </h1>

        <Link to={"/azkar"} className="p-4">
          <button className="bg-primary text-white mb-5 px-5 pt-1 pb-1 rounded-md hover:bg-opacity-80">
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            الرجوع الي الورد
          </button>
        </Link>

        {azkarMorning.map((azkar, i) => (
          <div
            key={i}
            className="border-2 text-border p-8 bg-primary bg-opacity-60 rounded-xl mb-5 mx-3 text-center leading-9">
            <h2 className="font-semibold text-white text-xl mb-4 leading-8">
              {azkar.content}
            </h2>
            <p className="text-gray-300 text-xl">{azkar.description}</p>
          </div>
        ))}

        <div className="flex justify-between select-none items-center gap-5 p-3 mt-10">
          <Link
            to={"/doaa-ayahs"}
            className="bg-priamry bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
              الرجوع الى ادعيه قرائنيه
            </span>
          </Link>
          <Link
            to={"/donation"}
            className="bg-primary bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              الانتقال الى قسم التبرع
              <FontAwesomeIcon className="mx-2" icon={faArrowLeft} />
            </span>
          </Link>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`${
          showPopupUp === true ? "bottom-3" : "-bottom-96"
        } fixed right-4 bg-primary text-white w-10 h-10 max-sm:bg-opacity-50 rounded-full`}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </section>
  );
};

export default DoaaAnbya;
