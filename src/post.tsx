import React from "react";
import Header from "./components/Header";

const post = () => {
  return (
    <div>
      <Header />
      <div className="font-bold text-2xl mt-3 ml-12">求人投稿</div>
      <div className="pl-12">
        <div className="mt-5">
          <div className="text-lg">求人カテゴリ選択</div>
          <select className="border-[1px] border-solid border-gray-400 rounded-sm w-[300px] h-[40px]">
            <option selected>カテゴリを選択</option>
            <option>事務</option>
            <option>エンジニア</option>
            <option>営業</option>
            <option>デザイン</option>
            <option>マーケティング</option>
            <option>財務・経理</option>
            <option>人事</option>
            <option>カスタマーサポート</option>
            <option>製造</option>
            <option>医療・介護</option>
          </select>
        </div>
        <div className="mt-3">
          <div className="text-lg">年収(万円)</div>
          <input
            type="number"
            className="border-gray-400 border-[1px] border-solid  w-[300px] h-[40px]"
          />
        </div>
        <div className="mt-3">
          <div className="text-lg">求人タイトル</div>
          <input
            type="text"
            className="border-gray-400 border-[1px] border-solid w-[700px] h-[40px]"
          />
        </div>
        <div className="mt-10">
          <button className="text-white bg-sky-600 w-[400px] h-[50px] rounded-md font-bold">
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};

export default post;
