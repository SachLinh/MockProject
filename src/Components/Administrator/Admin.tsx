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

export default function Admin() {
  return (
    <div className="mt-[30px] w-full flex flex-col justify-center items-center">
      <div className="w-[1200px] flex flex-row justify-between items-start">
        <NavbarAdmin />
        <div className="w-[78%] rounded-xl shadow-[0_0px_14px_1px_#80bfff] ">
          {/* <QuanLyDanhMuc /> */}
          {Outlet}
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/QuanLyDanhMuc" element={<QuanLyDanhMuc />}></Route>
            <Route path="/AddNewDanhMuc" element={<AddNewDanhMuc />}></Route>
            <Route path="/Update/:idDM" element={<UpdateDanhMuc />}></Route>
            <Route path="/Delete/:idDM" element={<DeleteDanhMuc />}></Route>
            <Route path="/ListSanPham" element={<ListSanPham />} ></Route>
            <Route path="/UpdateProd" element={<UpdateProd />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
