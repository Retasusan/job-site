import React from "react";
import Header from "./components/Header";
import { useState } from "react";

const Post = () => {
  const [category, setCategory] = useState("selectCategory");
  const [salary, setSalary] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [job, setJob] = useState([
    {
      category: "",
      salary: 0,
      title: "",
    },
  ]);

  const categoryChage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const salaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(parseInt(e.target.value));
  };
  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addJob = () => {
    if (category === "selectCategory" || title === "" || salary === null) {
      alert("未入力の項目があります");
      return;
    } else if (salary ? salary % 50 !== 0 : false) {
      alert("年収は50万円単位で入力してください");
      return;
    }

    const newJob = {
      category: category,
      salary: salary,
      title: title,
    };

    setJob([...job, newJob]);
    setCategory("selectCategory");
    setSalary(0);
    setTitle("");
    alert("求人が投稿されました");
  };

  return (
    <div>
      <Header />
      <div className="font-bold text-2xl mt-3 ml-12">求人投稿</div>
      <div className="pl-12">
        <div className="mt-5">
          <div className="text-lg">求人カテゴリ選択</div>
          <select
            className="border-[1px] border-solid border-gray-400 rounded-sm w-[300px] h-[40px]"
            required
            value={category}
            onChange={categoryChage}
          >
            <option value="selectCategory">カテゴリを選択</option>
            <option value="officeWork">事務</option>
            <option value="engineer">エンジニア</option>
            <option value="sales">営業</option>
            <option value="disign">デザイン</option>
            <option value="marketing">マーケティング</option>
            <option value="finance">財務・経理</option>
            <option value="humanResources">人事</option>
            <option value="customerSupport">カスタマーサポート</option>
            <option value="manufacture">製造</option>
            <option value="medical">医療・介護</option>
          </select>
        </div>
        <div className="mt-3">
          <div className="text-lg">年収(万円)</div>
          <input
            type="text"
            className="border-gray-400 border-[1px] border-solid  w-[300px] h-[40px] px-2"
            value={salary ? salary : 0}
            onChange={salaryChange}
          />
        </div>
        <div className="mt-3">
          <div className="text-lg">求人タイトル</div>
          <input
            type="text"
            required
            className="border-gray-400 border-[1px] border-solid w-[700px] h-[40px] px-2"
            value={title}
            onChange={titleChange}
          />
        </div>
        <div className="mt-10">
          <button
            className="text-white bg-sky-600 w-[400px] h-[50px] rounded-md font-bold"
            onClick={addJob}
          >
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
