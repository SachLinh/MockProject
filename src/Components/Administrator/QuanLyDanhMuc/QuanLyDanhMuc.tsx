import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DanhMucType } from "../../../TypeState/DanhMucType";

export default function QuanLyDanhMuc() {
  useEffect(() => {
    getListCata();
  }, []);
  const [listCatas, setListCatas] = useState<DanhMucType[]>([]);
  const getListCata = async () => {
    try {
      const res = await axios.get(
        "https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc"
      );
      setListCatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getListDanhMuc = listCatas.map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-slate-400 text-center">{item.id}</td>
        <td className="border border-slate-400">{item.name}</td>
        <td className="border border-slate-400  w-[170px] text-center">
          <Link to={`/Admin/Update/${item.id}`}>
            <button type="button" className="btn btn-info">
              Update
            </button>
          </Link>
        </td>
        <td className="border border-slate-400 w-[170px] text-center">
        <Link to={`/Admin/Delete/${item.id}`}>
        <button type="button" className="btn btn-warning">
            Delete
          </button>
          </Link>
        </td>
        <td className="border border-slate-400  w-[170px] text-center">
          <Link to={`${item.id}/QuanLyLoaiSP`}>
            <button className="btn btn-outline-dark">Chi tiết Danh Mục</button>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="w-full">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
        QUẢN LÝ DANH MỤC
      </h1>
      <Link to="/Admin/AddNewDanhMuc">
        <button className="btn btn-outline-success mx-[20px] my-4">Thêm mới danh mục</button>
      </Link>
      <table className="table table-hover leading-[40px]">
        <thead>
          <tr className="text-center">
            <th className="border border-slate-400">Mã ID</th>
            <th className="border border-slate-400">Tên Danh Mục</th>
            <th className="border border-slate-400">Sửa</th>
            <th className="border border-slate-400">Xóa</th>
            <th className="border border-slate-400">Chi tiết</th>
          </tr>
        </thead>
        <tbody className="font-Roboto font-[500px]">{getListDanhMuc}</tbody>
      </table>
    </div>
  );
}
