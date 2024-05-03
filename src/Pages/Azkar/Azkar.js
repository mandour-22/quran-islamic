import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Doaa = () => {
  const itemListAzkar = [
    {
      name: "أذكار الصباح",
      link: "/azkar-morning",
    },
    {
      name: "أذكار المساء",
      link: "/azkar-elmasa",
    },
    {
      name: "اذكار بعد السلام من الصلاة المفروضة",
      link: "/azkar-shalah",
    },
    {
      name: "التسابيح",
      link: "/tasbeh",
    },
    {
      name: "اذكار النوم",
      link: "/azkar-nome",
    },
    {
      name: "اذكار الاستيقاظ",
      link: "/azkar-alastikaz",
    },
    {
      name: "ادعيه قرائنيه",
      link: "/doaa-ayahs",
    },
    {
      name: "ادعيه الانبياء",
      link: "/doaa-anbya",
    },
  ];
  return (
    <section className=" p-5 grid sm:place-content-center overflow-y-auto h-section">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-rakkas text-bold text-center w-fit mx-auto text-5xl text-gray-300 border-b-2 border-color1 max-sm:mb-7 mb-14">
          الورد
        </h1>
        <div>
          <div className="grid grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1  gap-5">
            {itemListAzkar.map((item, i) => (
              <div
                key={i}
                className="inline-block border-2 text-border bg-bgBtn bg-opacity-30 hover:bg-opacity-50 rounded-xl">
                <Link
                  to={item.link}
                  className="flex items-center justify-center p-5">
                  <h2 className="font-semibold text-white text-xl text-center ">
                    {item.name}
                  </h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between select-none items-center gap-5 p-3 mt-10">
          <Link
            to={"/hadis"}
            className="bg-primary bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
              الرجوع الى الآحاديث
            </span>
          </Link>
          <Link
            to={"/donation"}
            className="bg-primary bg-opacity-30 rounded-md p-2 max-sm:text-sm hover:bg-opacity-50 cursor-pointer text-gray-300 hover:underline hover:text-white">
            <span>
              الانتقال الى التبرع
              <FontAwesomeIcon className="mx-2" icon={faArrowLeft} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Doaa;
