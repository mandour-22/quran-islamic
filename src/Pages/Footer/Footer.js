import React from "react";
import { Link } from "react-router-dom";
import IconImg from "../../img/moon.png";

const Footer = () => {
  return (
    <footer className="pt-4 pb-4 max-sm:text-center bg-primary">
      <div className="container mx-auto flex justify-center items-center ">
        <h4 className="text-gray-100">
          جميع الحقوق محفوظه لدي "مندور "
          <span className="mr-2">© {new Date().getFullYear()}</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
