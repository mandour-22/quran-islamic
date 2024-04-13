import React, { useState } from "react";
import IconImg from "../../img/moon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const itemsIslamic = [
    {
      id: 1,
      title: "الصفحة الرئيسية",
      link: "/home",
    },
    {
      id: 2,
      title: "القرأن الكريم",
      link: "/quran",
    },
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
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handlerShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl mx-2 font-semibold whitespace-nowrap text-white">
              Islamic
            </span>
            <img src={IconImg} className="w-8   h-8" alt="Logo" />
          </Link>
          <button
            onClick={handlerShowMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 hover:text-gray-200 rounded-lg md:hidden ">
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
          </button>
          <div
            className={`${
              showMenu ? "show" : "hidden"
            } w-full md:block md:w-auto`}>
            <ul className="flex flex-col font-medium mt-4 rounded-xl bg-gray-50  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {itemsIslamic.map((item) => {
                return (
                  <li key={item.id} onClick={() => setShowMenu(false)}>
                    <Link
                      to={item.link}
                      className="block py-2 md:mx-3 px-3 md:p-0 text-white ">
                      {item.title}
                    </Link>
                  </li>
                );
              })}

              {/* <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page">
                  Home
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
