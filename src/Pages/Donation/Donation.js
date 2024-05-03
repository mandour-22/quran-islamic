import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SaratanImg from "../../img/57357.png";
import Azhar from "../../img/azhar.jpg";
import FoodBank from "../../img/foodbank.jpg";
import Gaza from "../../img/gaza.png";

const Donation = () => {
  const [showPopupUp, setShowPopupUp] = useState(false);

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

  const itemDonation = [
    {
      name: "مستشفى سرطان الأطفال 57357",
      number: " رقم التواصل : 57357",
      link: "https://give.57357.org/?lang=ar",
      imgUrl: SaratanImg,
    },
    {
      name: "الأزهر الشريف – الصدقات – التبرعات",
      number: " رقم التواصل : 777779",
      link: "https://baitzakat.org.eg/donationChannels/?_gl=1*8tjq80*_ga*NjU1ODkwNzM1LjE3MTI0MzkyNDM.*_ga_DGZHPC5QM0*MTcxMjQzOTI0Mi4xLjAuMTcxMjQzOTI0Mi42MC4wLjA.",
      imgUrl: Azhar,
    },
    {
      name: "بنك الطعام",
      number: " رقم التواصل : 188777",
      link: "https://www.efb.eg/programs/2611/tbraa-aaam-llataaam",
      imgUrl: FoodBank,
    },
    {
      name: "الهيئة الخيرية الإسلامية العالمية",
      number: " رقم التواصل : +9651808300",
      link: "https://www.iico.org/ar/relife/product-136029.html",
      imgUrl: Gaza,
    },
  ];

  return (
    <section className="p-5 grid sm:place-items-center max-sm:overflow-y-auto h-full">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="title text-bold text-center w-fit mx-auto text-5xl text-gray-300 border-b-2 border-color1 mb-10">
          التبرع
        </h1>
        <h3 className="title text-bold text-center w-fit mx-auto text-3xl text-gray-300 border-b-2 border-color1 mb-10 mt-10">
          وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ
        </h3>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {itemDonation.map((item, i) => (
            <div
              key={i}
              style={{ backgroundColor: "rgba(0,0,0, 15%)" }}
              className="rounded-xl overflow-hidden hover:shadow-lg text-white">
              <img
                src={item.imgUrl}
                alt="57357"
                className="w-full mb-3 h-52 object-fill"
              />
              <div className="px-3 pt-4 pb-4">
                <h2 className="font-bold text-2xl mb-3">{item.name}</h2>
                <p className="text-xl mb-3 ">{item.number}</p>

                <a
                  className="text-black px-3 pt-2 pb-2 hover:bg-gray-100 bg-gray-300 rounded-md text-xl mb-2 inline-block hover:text-blue-600 hover:underline"
                  href={item.link}>
                  اتبرع الان من هنا
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 mb-10 bg-black bg-opacity-60 p-5 rounded-xl">
          <p className="text-white text-center text-2xl max-sm:text-xl leading-8">
            ويوجد كثير من المؤساسات الخيرية يمكن الوصول اليه عن طريق هذا
            <a
              target="_blank"
              href="https://aib.com.eg/ar/charities"
              className="mr-2 text-blue-400 underline hover:text-blue-600"
              rel="noreferrer">
              الرابط
            </a>
          </p>
        </div>

        <div className="flex justify-between select-none items-center gap-5 p-3 mt-10">
          <Link
            to={"/azkar"}
            className="bg-primary bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
              الرجوع الى الورد
            </span>
          </Link>
          <Link
            to={"/comunication"}
            className="bg-primary bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              الانتقال الى التواصل
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

export default Donation;
