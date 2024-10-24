import React from "react";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header className="h-[70px] shadow-md bg-white fixed w-full z-40">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Link to={"/"}>
          <img src={Logo} width={75} alt="Logo"/>
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-500 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>
          <div className="text-2xl relative">
            <Link to={"/cart"}>
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-red-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">0</p>
              </div>
            </Link>
          </div>
          <div>
            <button className="px-3 py-1 rounded-full text-white bg-red-500 hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
