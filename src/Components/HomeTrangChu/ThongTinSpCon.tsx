import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TypeID {
  idLoai: any
}
interface listTTSpType {
  // name: string;
  // avatar: string;
  // cost: string;
  // capacity: number;
  // description: string;
  // color: string;
  // promotion: number;
  // id: string;
  // LoaiId: string;
  // oldCost: string
  // endow: string
  id: string;
  name: string;
  avatar: string;
  cost: string;
  capacity: number;
  description: string;
  color: string;
  promotion: number;
  oldCost: string;
  endow: string;
  kichThuoc: string;
  doPhangiai: string;
  congNghemanhinh: string;
  chatLieu: string;
  thoiLuongpin: number;
  thoiGiansac: number;
  loaiCpu: string;
  tinhNangnoibat: string;
  cameraSau: string;
  cameraTruoc: string;
  RAM: string;
  ROM: string;
  SIM: string;
  heDieuHanh: string;
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
        `https://6232e62e6de3467dbac2a7d6.mockapi.io/SanPham`
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
    if(itemSP.LoaiId === props.idLoai){
      return (
        <div
          key={indexSP}
          className="text-left bg-white mt-3 w-[230px] pl-[5px] mr-[10px] h-[340px] rounded-lg re cursor-pointer duration-500 shadow-[0_0px_4px_4px_#b6b5b5] hover:shadow-[0_0px_8px_8px_#868585]"
        >
          <Link
            to={`/product-detail/${itemSP.id}`}
          >
           <p className="bg-red-600 h-[30px] w-[100px] mb-2 text-center rounded-lg leading-[30px] text-white font-bold right-2 bottom-1 ">
              Giảm <span>{itemSP.promotion}%</span>
            </p>
            <img
              alt=""
              src={itemSP.avatar}
              className="w-[160px] h-[160px] text-center m-auto mt-[15px]"
            ></img>
            <h4 className="font-bold m-[5px] text-gray-800">{itemSP.name}</h4>
            <div className="flex">
              <p className="text-red-600 font-bold  m-1 ">
                {itemSP.cost}
                <span>đ</span>
              </p>
              <p className="mt-1 ml-2 line-through text-gray-500">
                {itemSP.oldCost}
                <span>đ</span>
              </p>
            </div>
            <div className="text-black my-1 mr-1 bg-gray-200 rounded-md">
              <p className="p-2 text-[12px]">{itemSP.endow}</p>
            </div>
          </Link>
        </div>
      );
    }
    
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
      <span className="flex flex-row w-auto flex-wrap">
        {ShowLoaiSP}
      </span>
    </div>
  );
}
