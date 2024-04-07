import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Quran = () => {
  const [surahs, setSurahs] = useState([]);
  const [ayahs, setAyahs] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    fetchSurahs();
  }, []);

  const fetchSurahs = () => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data))
      .catch((err) => console.error(err + "error"));
  };

  // const fetchSurahs = async () => {
  //   const response = await fetch("http://api.alquran.cloud/v1/surah");
  //   const data = await response.json();
  //   setSurahs(data.data);
  // };

  const fetchAyahs = async (index) => {
    const response = await fetch(`http://api.alquran.cloud/v1/surah/${index}`);
    const data = await response.json();
    setAyahs(data.data.ayahs);
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <section className="bg-yellow-950 bg-opacity-60 relative h-full overflow-y-auto pt-10">
      <div className="max-w-screen-xl mx-auto pt-10 pb-10">
        <h1 className="title text-bold text-center w-fit mx-auto text-5xl text-gray-300 border-b-2 border-yellow-700">
          القرأن الكريم
        </h1>

        <div className="md:grid  md:grid-cols-3 lg:grid-cols-5 w-full md:mx-auto  gap-2 pt-5 justify-center items-center">
          {surahs.map((item) => (
            <div
              key={item.number}
              onClick={() => fetchAyahs(item.number)}
              className="qur max-sm:m-4 p-3 text-center border-2 rounded-lg border-yellow-900 cursor-pointer bg-opacity-70 hover:bg-opacity-100 text-gray-200">
              <h3 id={item.number}>{item.name}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center gap-5 p-3 mt-10">
          <Link
            to={"/"}
            className="bg-yellow-900 bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
              الرجوع الى الصفحة الرئيسية
            </span>
          </Link>
          <Link
            to={"/hadis"}
            className="bg-yellow-900 bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              الانتقال الى قسم الاحاديث
              <FontAwesomeIcon className="mx-2" icon={faArrowLeft} />
            </span>
          </Link>
        </div>
      </div>

      {/* <button
        className={` ${
          ShowPopup ? "bottom-4" : "-bottom-96"
        } fixed right-6 w-10 h-10 rounded-full z-30 text-black`}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button> */}

      {popup && (
        <div className="popup-ayahs absolute top-0 right-0 h-full w-full bg-black bg-opacity-30 z-20">
          <div className="bg-yellow-900 w-full">
            <button
              className="text-white bg-red-500 text-lg px-5 cursor-pointer hover:bg-red-600 fixed inline-block top-16"
              onClick={closePopup}>
              <FontAwesomeIcon icon={faClose} />
            </button>

            {ayahs.map((ay, i) => (
              <div
                key={i}
                className="text-center leading-10 px-3 border-b-2 border-gray-100">
                <p className="font-serif text-xl mt-3 mb-3 text-gray-200">
                  {ay.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Quran;
