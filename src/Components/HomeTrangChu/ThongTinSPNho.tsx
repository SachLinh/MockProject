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

export default function ThongTinSpNho(props: TypeID) {
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
  const ShowLoaiSP = listTTSp.map((itemSP, indexSP) => {
    return (
      <Link key={indexSP}
        to={`/product-detail/${props.iddm}/Loai/${props.id}/SanPham/${itemSP.id}`}
      >
        <div className="w-1/10 mr-[15px] text-left bg-indigo-200 b w-[111px]  h-[127px] rounded-lg re cursor-pointer ">
          <p className="absolute p-[14px] font-bold text-white">
            {" "}
            {itemSP.name}
          </p>
          <img alt="" src={itemSP.avatar} className="w-[111px] h-[127px]"></img>
        </div>
      </Link>
    );
  });
  return <span className="flex flex-row w-auto">{ShowLoaiSP}</span>;
}
