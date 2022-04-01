import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TypeID {
  id: any;
  iddm: any;
}
interface listTTSpType {
  name: string;
  avatar: string;
  cost: string;
  capacity: number;
  description: string;
  color: string;
  promotion: number;
  id: string;
  LoaiId: string;
}

export default function ThongTinSpCon(props: TypeID) {
  useEffect(() => {
    getLoaiSp();
  }, []);
  const [listTTSp, setListTTSp] = useState<listTTSpType[]>([]);
  const getLoaiSp = async () => {
    try {
      const res = await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${props.iddm}/Loai/${props.id}/SanPham`
      );
      setListTTSp(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Giá trị sắp xếp
  const SORT = {
    upPrice: "1",
    downPrice: "2",
    upname: "3",
    downName: "4",
  };
  const [sortId, setSortId] = useState(SORT.upPrice);
  // Chuyển đổi giá trị sắp xếp
  const handleSort = (value: any) => {
    setSortId(value);
  };

  // sắp xếp
  const funcSort = function (list: any[]) {
    let res: any[] = [...list];
    if (sortId === "1") {
      res.sort((a, b) => (parseInt(a.cost) > parseInt(b.cost) ? 1 : -1));
    } else {
      if (sortId === "2") {
        res.sort((a, b) => (parseInt(a.cost) < parseInt(b.cost) ? 1 : -1));
      } else {
        if (sortId === "3") {
          res.sort((a, b) => (a.name > b.name ? 1 : -1));
        } else {
          if (sortId === "4") {
            res.sort((a, b) => (a.name < b.name ? 1 : -1));
          }
        }
      }
    }
    return res;
  };
  const ShowLoaiSP = funcSort(listTTSp).map((itemSP, indexSP) => {
    return (
      <div
        key={indexSP}
        className="text-left bg-white mt-3 w-[230px] pl-[5px] mr-[10px] h-[340px] rounded-lg re cursor-pointer duration-500 shadow-[0_0px_4px_4px_#b6b5b5] hover:shadow-[0_0px_8px_8px_#868585]"
      >
        <Link
          to={`/product-detail/${props.iddm}/Loai/${props.id}/SanPham/${itemSP.id}`}
        >
          <p className="bg-gradient-to-r from-cyan-500 m-[-5px] to-blue-500 h-[30px] w-[100px] pl-1 rounded-br-lg leading-[30px] ">
            Giảm <span>{itemSP.promotion}%</span>
          </p>
          <img
            alt=""
            src={itemSP.avatar}
            className="w-[160px] h-[160px] text-center m-auto mt-[15px]"
          ></img>
          <h4 className="font-bold m-[5px]">{itemSP.name}</h4>
          <p className="text-red-600 font-bold  m-1">{itemSP.cost}</p>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <div className="mt-[30px]">
        <h2 className="mb-[20px] text-[30px] font-Roboto font-[400]">
          Sắp xếp theo
        </h2>
        <div className="w-[40%] flex flex-row justify-between items-start">
          <button
            type="button"
            className="btn btn-primary btn-sm text-[#fc3737] rounded-xl"
            onClick={() => {
              handleSort(SORT.upPrice);
            }}
          >
            <i className="fa-solid fa-arrow-up-wide-short mr-[5px] text-black"></i>
            Giá tăng dần
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm text-[#fc3737]  rounded-xl"
            onClick={() => {
              handleSort(SORT.downPrice);
            }}
          >
            <i className="fa-solid fa-arrow-down-short-wide mr-[5px] text-black"></i>
            Giá thấp dần
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm text-[#fc3737]  rounded-xl"
            onClick={() => {
              handleSort(SORT.upname);
            }}
          >
            <i className="fa-solid fa-arrow-down-a-z  mr-[5px] text-black"></i>
            Tên A - Z
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm  text-[#fc3737]  rounded-xl"
            onClick={() => {
              handleSort(SORT.downName);
            }}
          >
            <i className="fa-solid fa-arrow-down-z-a mr-[5px] text-black"></i>
            Tên Z - A
          </button>
        </div>
      </div>
      <span className="flex flex-row w-auto flex-wrap">{ShowLoaiSP}</span>
    </div>
  );
}
