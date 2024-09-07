import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[70px] bg-gray-700 flex justify-between items-center pl-[30px] pr-[30px] text-3xl text-white">
      求人検索アプリ
      <div>
        <Link to="/" className="ml-[30px] text-white text-base">
          求人検索
        </Link>
        <Link to="/Post" className="ml-[30px] text-white text-base">
          求人投稿
        </Link>
      </div>
    </div>
  );
};

export default Header;
