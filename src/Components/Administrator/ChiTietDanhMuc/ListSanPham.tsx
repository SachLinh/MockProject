import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SanPhamType } from "../../../TypeState/SanPhamType";

export default function ListSanPham() {
    useEffect(() => {
        getListCata();
      }, []);
      const [listProd, setListProd] = useState<SanPhamType[]>([]);
      const params = useParams();
      const getListCata = async () => {
        try {
          const resProd = await axios.get(
            `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/1/Loai/1/SanPham`
          );
          setListProd(resProd.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getListSanPham = listProd.map((item, index) => {
        return (
          <tr key={index}>
            <td className="border border-slate-400 text-center">{item.id}</td>
            <td className="border border-slate-400">{item.name}</td>
            <td className="border border-slate-400  w-[170px] text-center">
              <Link to={`/Admin/UpdateProd`}>
                <button type="button" className="btn btn-info">
                  Update
                </button>
              </Link>
            </td>
            <td className="border border-slate-400 w-[170px] text-center">
            <Link to={""}>
            <button type="button" className="btn btn-warning">
                Delete
              </button>
              </Link>
            </td>
            <td className="border border-slate-400 w-[170px] text-center">
                <Link to={""}>
                <button className="btn btn-outline-success">Thêm</button>
                </Link>
            </td>
            <td className="border border-slate-400  w-[170px] text-center">
              <Link to={""} >
              <button className="btn btn-outline-dark">Chi Tiết Sản Phẩm</button>
              </Link>
            </td>
          </tr>
        );
      });
      return (
        <div className="w-full">
          <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
            QUẢN LÝ SẢN PHẨM
          </h1>
          <table className="table table-hover leading-[40px]">
            <thead>
              <tr className="text-center">
                <th className="border border-slate-400">Mã ID</th>
                <th className="border border-slate-400">Tên Sản Phẩm</th>
                <th className="border border-slate-400">Sửa</th>
                <th className="border border-slate-400">Xóa</th>
                <th className="border border-slate-400">Thêm</th>
                <th className="border border-slate-400">Chi tiết</th>
              </tr>
            </thead>
            <tbody className="font-Roboto font-[500px]">{getListSanPham}</tbody>
          </table>
        </div>
      );
}
