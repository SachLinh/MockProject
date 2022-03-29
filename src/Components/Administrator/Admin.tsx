
import React, { Component } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavbarAdmin from "./NavbarAdmin";
import AddNewDanhMuc from "./QuanLyDanhMuc/AddNewDanhMuc";
import DeleteDanhMuc from "./QuanLyDanhMuc/DeleteDanhMuc";
import QuanLyDanhMuc from "./QuanLyDanhMuc/QuanLyDanhMuc";
import UpdateDanhMuc from "./QuanLyDanhMuc/UpdateDanhMuc";

import ListSanPham from "./ChiTietDanhMuc/ListSanPham";
import UpdateProd from "./ChiTietDanhMuc/UpdateProd";
import AddNewLoaiSP from "./QuanLyLoaiSP/AddNewLoaiSP";
import DeleteLoaiSP from "./QuanLyLoaiSP/DeleteLoaiSP";
import QuanLyLoaiSp from "./QuanLyLoaiSP/QuanLyLoaiSP";
import UpdateLoaiSP from "./QuanLyLoaiSP/UpdateLoaiSP";
import AddProd from "./ChiTietDanhMuc/AddProd";
import DeleteProd from "./ChiTietDanhMuc/DeleteProd";
import QLThongTinSp from "./ThongSoSanPham/QLThongTinSp";
import SuaThongTinSP from "./ThongSoSanPham/SuaThongTinSP";


export default function Admin() {
  return (
    <div className="mt-[30px] w-full flex flex-col justify-center items-center">
      <div className="w-[1200px] flex flex-row justify-between items-start">
        <NavbarAdmin />
        <div className="w-[78%] rounded-xl shadow-[0_0px_14px_1px_#80bfff] ">
          {/* <QuanLyDanhMuc /> */}
          {Outlet}
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            {/* // Danh muc */}
            <Route path="/QuanLyDanhMuc" element={<QuanLyDanhMuc />}></Route>
            <Route path="/AddNewDanhMuc" element={<AddNewDanhMuc />}></Route>
            <Route path="/Update/:idDM" element={<UpdateDanhMuc />}></Route>
            <Route path="/Delete/:idDM" element={<DeleteDanhMuc />}></Route>
            {/* // SanPham */}
            <Route path="/ListSanPham" element={<ListSanPham />} ></Route>
            <Route path="/UpdateProd" element={<UpdateProd />}></Route>
            {/* Loai Sp */}
            <Route path="QuanLyDanhMuc/:idDM/QuanLyLoaiSP" element={<QuanLyLoaiSp />}></Route>
            <Route path="/AddNewLoaiSP/:idDM" element={<AddNewLoaiSP />}></Route>
            <Route path="/Update/:idDM/Loai/:idLoai" element={<UpdateLoaiSP />}></Route>
            <Route path="/Delete/:idDM/Loai/:idLoai" element={<DeleteLoaiSP />}></Route>
            {/* List sản phẩm */}
            <Route path="QuanLyDanhMuc/:idDM/QuanLyLoaiSP/:idLoai/ListSanPham" element={<ListSanPham />}></Route>
            <Route path="/AddProd/:idDM/Loai/:idLoai" element={<AddProd />}></Route>
            <Route path="/Update/:idDM/Loai/:idLoai/SanPham/:idSanPham" element={<UpdateProd />}></Route>
            <Route path="/Delete/:idDM/Loai/:idLoai/SanPham/:idSanPham" element={<DeleteProd />}></Route>
            {/* Thông số sản phẩm */}
            <Route path="QuanLyDanhMuc/:idDM/QuanLyLoaiSP/:idLoai/ListSanPham/:idSanPham/QLThongTinSp" element={<QLThongTinSp />}></Route>
            <Route path="/Update/:idDM/Loai/:idLoai/SanPham/:idSanPham/QLThongTinSp/:idThongTin" element={<SuaThongTinSP />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
