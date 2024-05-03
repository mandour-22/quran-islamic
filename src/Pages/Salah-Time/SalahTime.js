import React, { useState, useEffect } from "react";

import axios from "axios";
import moment from "moment";
import "moment/locale/ar-dz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

moment.locale("ar-dz");
const SalahTime = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    Asr: "16:28",
    Dhuhr: "12:52",
    Fajr: "04:39",
    Isha: "20:55",
    Maghrib: "20:30",
  });

  const [hajr, setHajr] = useState({
    date: "20-10-1445",
    format: "DD-MM-YYYY",
    day: "20",
    designation: { abbreviated: "AH", expanded: "Anno Hegirae" },
    month: { number: 10, en: "Shawwāl", ar: "شَوّال" },
    weekday: { en: "Al Athnayn", ar: "الاثنين" },
    year: "1445",
  });

  const [selectCity, setSelectCity] = useState({
    en: "Cairo",
    ar: "القاهره",
  });

  const city = [
    { en: "Cairo", ar: "القاهره" },
    { en: "RedSea", ar: "البحر الاحمر" },
    { en: "Giza", ar: "الجيزه" },
    { en: "Suez", ar: "السويس" },
    { en: "Alexandria", ar: "الاسكندرية" },
    { en: "Damietta", ar: "دمياط" },
    { en: "Luxor", ar: "الاقصر" },
    { en: "Aswan", ar: "أسوان" },
    { en: "Sohag", ar: "سوهاج" },
    { en: "Beheira", ar: "البحيرة" },
    { en: "PortSaid", ar: "بورسعيد" },
    { en: "SouthSinai", ar: "جنوب سيناء" },
    { en: "NorthSinai", ar: "شمال سيناء" },
  ];

  const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm a"));

  // select city change
  const cityChangeHandler = (e) => {
    const cityObject = city.find((ee) => {
      return ee.en === e.target.value;
    });
    if (!cityObject) {
      console.log("Please select city");
    } else {
      setSelectCity(cityObject);
    }
  };

  const getTime = async () => {
    const option = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?country=EG&city=${selectCity.en}`
    );
    setPrayerTimes(option.data.data.timings);
    setHajr(option.data.data.date.hijri);
  };
  // console.log(hajr);
  useEffect(() => {
    getTime();
  }, [selectCity]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = moment();
      setDate(newDate.format("MMMM Do YYYY, h:mm a"));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-y-auto p-5 h-section flex sm:flex-col sm:items-center sm:justify-center place-items-center">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-rakkas text-bold text-center w-fit mx-auto text-5xl text-gray-300 border-b-2 border-yellow-700 mb-7">
          أوقات الصلاه
        </h1>
        <Link to={"/home"} className="p-4 relative">
          <button className="bg-primary hover:bg-red-600 absolute -right-5 -top-5 text-white mb-5 px-5 pt-1 pb-1 rounded-md hover:bg-opacity-80">
            <FontAwesomeIcon icon={faClose} />
          </button>
        </Link>
        <div className="">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="font-serif font-extrabold text-white text-5xl ">
              {selectCity.ar}
            </span>
            <span className="max-sm:block font-sans font-bold text-white max-sm:text-gray-300 max-sm:mt-2">
              {date}
            </span>
          </div>
        </div>
        <hr className="h-px my-8 bg-primary border-0 bg-opacity-50" />
        <div className="flex justify-center md:justify-between select-none items-center gap-5 mt-10 flex-wrap mb-10">
          <div className="text-center bg-primary bg-opacity-50 p-3 rounded-lg text-white">
            <h2>الفجر</h2>
            <span className="text-2xl font-semibold">{prayerTimes.Fajr}</span>
          </div>
          <div className="text-center bg-primary bg-opacity-50 p-3 rounded-lg text-white">
            <h2>الظهر</h2>
            <span className="text-2xl font-semibold">{prayerTimes.Dhuhr}</span>
          </div>
          <div className="text-center bg-primary bg-opacity-50 p-3 rounded-lg text-white">
            <h2>العصر</h2>
            <span className="text-2xl font-semibold">{prayerTimes.Asr}</span>
          </div>
          <div className="text-center bg-primary bg-opacity-50 p-3 rounded-lg text-white">
            <h2>المغرب</h2>
            <span className="text-2xl font-semibold">
              {prayerTimes.Maghrib}
            </span>
          </div>
          <div className="text-center bg-primary bg-opacity-50 p-3 rounded-lg text-white">
            <h2>العشاء</h2>
            <span className="text-2xl font-semibold">{prayerTimes.Isha}</span>
          </div>
        </div>

        <form className="max-w-sm mx-auto">
          <label className="block mb-2 text-sm font-bold tracking-widest text-gray-100 ">
            اختار المدينه
          </label>
          <select
            id="counteries"
            onChange={cityChangeHandler}
            className="bg-primary outline-none bg-opacity-90 text-gray-100 text-sm rounded-lg block w-full p-2.5">
            {city.map((items, index) => {
              return (
                <option key={index} value={items.en}>
                  {items.ar}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </section>
  );
};

export default SalahTime;
