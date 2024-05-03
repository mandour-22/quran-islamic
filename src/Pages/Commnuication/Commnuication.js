import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUp,
  faArrowLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Commnuication = () => {
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
  return (
    <section className="p-5 grid sm:place-items-center max-sm:overflow-y-auto h-section">
      <div className="max-w-screen-xl mx-auto pt-5 pb-5 grid sm:place-items-center md:h-full">
        <h1 className="title text-bold text-center w-fit mx-auto text-5xl text-gray-300 border-b-2 border-color1 mb-10">
          تواصل معى
        </h1>

        <h4 className="title text-bold text-center w-fit mx-auto text-2xl text-gray-300 border-b-2 max-sm:text-xl border-color1 mb-10">
          في حاله حدوث خطا فى المعلومات او اي شئ يمكنك التواصل معي عن طريق
        </h4>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1  pt-4 pb-4">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/omar-mandour/"
            className="flex items-center gap-4 border border-transparent shadow-md hover:border-gray-600 p-5 rounded-lg">
            <span>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-gray-300"
              />
            </span>
            <div className="flex flex-col">
              <h3 className="font-bold">لينكداين</h3>
              <Link
                href="https://www.linkedin.com/in/omar-mandour/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-blue-400 hover:underline">
                omar-mandour
              </Link>
            </div>
          </Link>
          <Link
            target="_blank"
            to="https://www.facebook.com/omarh.mandour"
            className="flex items-center gap-4 border border-transparent shadow-md hover:border-gray-600 p-5 rounded-lg">
            <span>
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl text-gray-300"
              />
            </span>
            <div className="flex flex-col">
              <h3 className="font-bold">فيس بوك</h3>
              <Link
                to="https://www.facebook.com/omarh.mandour"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-blue-400 hover:underline">
                omar_mandour
              </Link>
            </div>
          </Link>
          <Link
            target="_blank"
            to="mailto: omarhassa321@gamil.com"
            className="flex items-center gap-4 border border-transparent col-span-2 max-sm:col-span-1 shadow-md hover:border-gray-600 p-5 rounded-lg">
            <span>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl text-gray-300"
              />
            </span>
            <div className="flex flex-col">
              <h3 className="font-bold">ايميل</h3>
              <Link
                to="mailto: omarhassa321@gamil.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 text-sm  hover:text-blue-400 hover:underline">
                omarhassa321@gamil.com
              </Link>
            </div>
          </Link>
        </div>

        <div className="flex justify-between select-none items-center gap-5 p-3 mt-10">
          <Link
            to={"/donation"}
            className="bg-yellow-900 bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
              الرجوع الى التبرع
            </span>
          </Link>
          <Link
            to={"/"}
            className="bg-yellow-900 bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              الانتقال الى الصفحة الرئيسية
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

export default Commnuication;
