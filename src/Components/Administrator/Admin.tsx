
import React, { Component } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavbarAdmin from "./NavbarAdmin";

import ListSanPham from "./DanhSachSP/ListSanPham";
import UpdateProd from "./DanhSachSP/UpdateProd";
import AddProd from "./DanhSachSP/AddProd";
import DeleteProd from "./DanhSachSP/DeleteProd";
import QLThongTinSp from "./ThongSoSanPham/QLThongTinSp";
import SuaThongTinSP from "./ThongSoSanPham/SuaThongTinSP";

import QuanLyHoaDon from "./QuanLyHoaDon/QuanLyHoaDon";
import UpdateHoaDon from "./QuanLyHoaDon/UpdateHoaDon";
import DeleteHoaDon from "./QuanLyHoaDon/DeleteHoaDon";
import AddHoaDon from "./QuanLyHoaDon/AddHoaDon";
import QuanLyLoaiSP from "./HangSX/QuanLyLoaiSP";
import AddNewLoaiSP from "./HangSX/AddNewLoaiSP";
import UpdateLoaiSP from "./HangSX/UpdateLoaiSP";
import DeleteLoaiSP from "./HangSX/DeleteLoaiSP";

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
            {/* Hãng Sản xuất */}
            <Route path="/QuanLyHangSX" element={<QuanLyLoaiSP />}></Route>
            <Route path="/QuanLyHangSX/AddNewLoaiSP" element={<AddNewLoaiSP />}></Route>
            <Route path="/QuanLyHangSX/Update/:idLoai" element={<UpdateLoaiSP />}></Route>
            <Route path="/QuanLyHangSX/Delete/:idLoai" element={<DeleteLoaiSP />}></Route>
            {/* List sản phẩm */}
            <Route path="/QuanLySanPham" element={<ListSanPham />}></Route>
            <Route path="/QuanLySanPham/AddProd" element={<AddProd />}></Route>
            <Route path="/Update/:idDM/Loai/:idLoai/SanPham/:idSanPham" element={<UpdateProd />}></Route>
            <Route path="/Delete/:idDM/Loai/:idLoai/SanPham/:idSanPham" element={<DeleteProd />}></Route>
            {/* Thông số sản phẩm */}
            <Route path="QuanLyDanhMuc/:idDM/QuanLyLoaiSP/:idLoai/ListSanPham/:idSanPham/QLThongTinSp" element={<QLThongTinSp />}></Route>
            <Route path="/Update/:idDM/Loai/:idLoai/SanPham/:idSanPham/QLThongTinSp/:idThongTin" element={<SuaThongTinSP />}></Route>

            {/* Hoa Don */}
            <Route path="/QuanLyHoaDon" element={<QuanLyHoaDon />}></Route>
            <Route path="/UpdateHoaDon/:idhoaDon" element={<UpdateHoaDon />}></Route>
            <Route path="/DeleteHoaDon/:idhoaDon" element={<DeleteHoaDon />}></Route>
            <Route path="/AddHoaDon" element={<AddHoaDon />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
