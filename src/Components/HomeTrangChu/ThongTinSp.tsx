import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TypeID {
  id: string;
  iddm: string;
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

export default function ThongTinSp(props: TypeID) {
  useEffect(() => {
    getLoaiSp();
  }, []);
  const [listTTSp, setListTTSp] = useState<listTTSpType[]>([]);
  const getLoaiSp = async () => {
    const res = await axios.get(
      `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${props.iddm}/Loai/${props.id}/SanPham`
    );
    setListTTSp(res.data);
  };
  const ShowLoaiSP = listTTSp.map((itemSP, indexSP) => {
    return (
      <div className="text-left bg-white b w-[230px]  h-[340px] ml-[5px]  rounded-lg re cursor-pointer duration-500 shadow-[0_0px_4px_4px_#b6b5b5] hover:shadow-[0_0px_8px_8px_#868585]">
        <p className="bg-gradient-to-r from-cyan-500 m-[5px] to-blue-500 h-[30px] w-[100px] pl-1 rounded-r-lg leading-[30px] ">
          Giảm <span>{itemSP.promotion}%</span>
        </p>
        <img
          alt=""
          src={itemSP.avatar}
          className="w-[160px] h-[160px] text-center m-auto mt-[15px]"
        ></img>
        <h4 className="font-bold m-[5px]">{itemSP.name}</h4>
        <p className="text-red-600 font-bold  m-1">{itemSP.cost}</p>
      </div>
    );
  });
  return <span className="flex flex-row w-auto inline">{ShowLoaiSP}</span>;
}
