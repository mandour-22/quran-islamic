import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hadis = () => {
  const [Hadis, setHadis] = useState([]);
  const [hadisIndex, setHadisIndex] = useState(0);

  const hadis = "https://api.hadith.gading.dev/books/muslim?range=1-300";

  const fetchDataHadis = () => {
    fetch(hadis)
      .then((res) => res.json())
      .then((d) => setHadis(d.data.hadiths))
      .catch((err) => console.log("Failed to fetch data hadSTDOUT", err));
  };

  fetchDataHadis();

  const changeHadis = () => {
    setHadisIndex((prevIndex) => {
      if (prevIndex === 299) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <section className="overflow-y-auto p-5 h-section flex sm:flex-col sm:items-center sm:justify-center">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="title text-bold text-center w-fit mx-auto text-5xl text-gray-300 border-b-2 border-yellow-700 mb-7">
          الآحاديث
        </h1>

        <div className="border-2 border-orange-200 rounded-lg ">
          <div className="p-4 max-h-max">
            {Hadis.length > 0 && (
              <p className="text-center leading-8 tracking-wide text-gray-100">
                {Hadis[hadisIndex].arab}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={changeHadis}
          className="block w-fit mx-auto select-none bg-orange-300 text-gray-200 hover:bg-orange-400 px-5 pt-1 pb-1 rounded mt-5 mb-5">
          تغير الحديث
        </button>

        <div className="flex justify-between select-none items-center gap-5 p-3 mt-10">
          <Link
            to={"/quran"}
            className="bg-yellow-900 bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
              الرجوع الى القرأن الكريم
            </span>
          </Link>
          <Link
            to={"/azkar"}
            className="bg-yellow-900 bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              الانتقال الى الآذكار
              <FontAwesomeIcon className="mx-2" icon={faArrowLeft} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hadis;
