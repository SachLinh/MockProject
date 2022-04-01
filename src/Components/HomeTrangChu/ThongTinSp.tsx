import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TypeID {
  id: any;
  iddm: any
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
  oldCost: string
  endow: string
}

export default function ThongTinSp(props: TypeID) {
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
      <div
        key={indexSP}
        className="text-left bg-white mt-3 w-[230px] pl-[5px] mr-[10px] h-[340px] rounded-lg re cursor-pointer duration-500 shadow-[0_0px_4px_4px_#EAEAEA] hover:shadow-[0_0px_8px_8px_#CECECE]"
      >
        <Link
          to={`/product-detail/${props.iddm}/Loai/${props.id}/SanPham/${itemSP.id}`}
        >
          <p className="bg-red-600 h-[30px] w-[100px] mb-2 text-center rounded-lg leading-[30px] text-white font-bold right-2 bottom-1 relative ">
            Giảm <span>{itemSP.promotion}%</span>
          </p>
          <img
            alt=""
            src={itemSP.avatar}
            className="w-[160px] h-[160px] text-center m-auto mt-[15px]"
          ></img>
          <h4 className="font-bold m-[5px] text-gray-800">{itemSP.name}</h4>
          <div className="flex">
            <p className="text-red-600 font-bold  m-1 ">{itemSP.cost}<span>đ</span></p>
            <p className="mt-1 ml-2 line-through text-gray-500">{itemSP.oldCost}<span>đ</span></p>
          </div>
          <div className="text-black my-1 mr-1 bg-gray-200 rounded-md">
            <p className="p-2 text-[12px]">{itemSP.endow}</p>
          </div>
        </Link>
      </div>
    );
  });
  return(
  <div>
    <span className="flex flex-row w-auto flex-wrap">{ShowLoaiSP}</span>
  </div>)
  
}
