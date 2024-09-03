import { useState, useEffect } from "react";
import React from "react";
import Header from "./components/Header";
import Data from "./components/data.json";

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(Data);
  const [salalyData, setSalalyData] = useState(Data);
  const [salaly, setSalaly] = useState<number>(300);

  useEffect(() => {
    setFilteredData(
      Data.filter((item) =>
        selectedCategories.length > 0
          ? selectedCategories.includes(item.category)
          : true
      )
    );
  }, [selectedCategories, salaly]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleSalaly = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSalaly(Number(event.target.value));
    // setFilteredData(filteredData.filter((item) => item.earnings >= salaly));
  };

  useEffect(() => {
    setSalalyData(Data.filter((item) => item.earnings >= salaly));
  }, [salaly]);

  type Item = {
    id: number;
    title: string;
    category: string;
    earnings: number;
  };

  const getCommonElements = (
    filteredData: Item[],
    salalyData: Item[]
  ): Item[] => {
    return filteredData.filter((item1) =>
      salalyData.some((item2) => item1.id === item2.id)
    );
  };

  const commonElements = getCommonElements(filteredData, salalyData);

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-[300px] bg-gray-200 max-h-screen">
          <div className="text-[20px] pl-4 pt-3">求人カテゴリ</div>
          <div className="pl-4 mt-2">
            <label>
              <input
                type="checkbox"
                value="事務"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              事務
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="エンジニア"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              エンジニア
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="営業"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              営業
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="デザイン"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              デザイン
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="マーケティング"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              マーケティング
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="財務・経理"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              財務・経理
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="人事"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              人事
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="カスタマーサポート"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              カスタマーサポート
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="製造"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              製造
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                value="医療・介護"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              医療・介護
              <br />
            </label>
          </div>
          <div className="font-bold ml-3 mt-3">年収</div>
          <div className="w-full flex justify-center">
            <select
              className="h-[30px] w-[80%] text-lg mt-2"
              onChange={handleSalaly}
            >
              <option value="300">300万円以上</option>
              <option value="400">400万円以上</option>
              <option value="500">500万円以上</option>
              <option value="600">600万円以上</option>
              <option value="700">700万円以上</option>
            </select>
          </div>
        </div>
        <div className="w-[90%] bg-white h-screen">
          <div className="font-bold text-lg ml-3 mt-2">求人一覧</div>
          <div className="text-base ml-3">
            該当件数
            {commonElements.length}件
          </div>
          <ul>
            {commonElements.map((item) => (
              <li
                key={item.id}
                className="border-2 border-solid border-gray-300 pl-4 pt-2 m-3 rounded-lg pb-10 max-w-[700px]"
              >
                <div className="font-bold">{item.title}</div>
                <div className="mt-1">カテゴリ：{item.category}</div>
                <div className="mt-1">年収：{item.earnings}万円</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
