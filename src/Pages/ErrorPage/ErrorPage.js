import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="h-section grid place-content-center">
      <div className="container mx-auto">
        <div>
          <h1 className="text-center">
            <FontAwesomeIcon icon={faBan} className="text-9xl text-red-600" />
          </h1>
          <h1 className="text-5xl font-bold text-center mt-4 text-red-600">
            Error 404
          </h1>
          <p className="text-center text-xl mb-3 mt-2 text-gray-300 font-semibold">
            اعتذر علي حدوث هذا العطل
          </p>
          <p className="text-center text-xl mb-3 mt-2 text-gray-300 font-semibold">
            سوف يتم التعامل معه في اقرب وقت
          </p>
        </div>
        <Link to={"/home"}>
          <button className="block w-fit mx-auto select-none hover:underline bg-primary bg-opacity-50 text-gray-200 hover:bg-opacity-70 px-5 pt-1 pb-1 rounded mt-5 mb-5">
            الرجوع الي الصفحه الرئيسية
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
