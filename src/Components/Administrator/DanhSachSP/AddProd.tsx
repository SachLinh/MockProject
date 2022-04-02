import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SanPhamType } from "../../../TypeState/SanPhamType";



export default function AddProd() {
  const params = useParams();
  const initState = {
    name: "",
    avatar: "",
    cost: "",
    capacity: "",
    description: "",
    color: "",
    promotion: "",
    id: "",
    idLoai: "",
  };
  const [sanPham, setsanPham] = useState<SanPhamType>();
  const navigate = useNavigate();


  const getsanPham = async () => {
    try {
      const res = await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai/${params.idLoai}/SanPham`
      );
      setsanPham(res.data);
      console.log(sanPham);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsanPham();
  }, []);
  const [data, setData] = useState(initState);
  const {
    name,
    avatar,
    cost,
    capacity,
    description,
    color,
    promotion,
    id,
    idLoai, 
  } = data;
  const onChangeText = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (data.name === "" || data.avatar=== "" ||  
      data.cost=== "" || data.capacity=== "" ||  data.description === "" || 
      data.color === "" || data.promotion=== "" || data.id=== ""|| data.idLoai=== "" ) {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
        const res = await axios.post(
          `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai/${params.idLoai}/SanPham`,
          data
        );
        setsanPham(res.data);
        setData({
          name: "",
          avatar: "",
          cost: "",
          capacity: "",
          description: "",
          color: "",
          promotion: "",
          id: "",
          idLoai: "",
        });
        alert("Thêm mới thành công");
        navigate(
          `/Admin/QuanLyDanhMuc/${params.idDM}/QuanLyLoaiSP/${params.idLoai}/ListSanPham`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Thêm Sản Phẩm mới
        </h2>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên Sản Phẩm</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="name"
                placeholder="Vui lòng nhập tên sản phẩm"
                value={name}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Hình ảnh</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="avatar"
                placeholder="Vui lòng nhập link hình ảnh"
                value={avatar}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Gía</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="cost"
                value={cost}
                placeholder="Vui lòng nhập giá"
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Dung lượng</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="capacity"
                value={capacity}
                placeholder="Nhập dung lượng"
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Mô tả</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="description"
                value={description}
                placeholder="Nhập mô tả"
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              {" "}
              <label htmlFor="">Màu sắc</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="color"
                value={color}
                placeholder="Vui lòng nhập màu sắc"
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Giảm giá</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="promotion"
                placeholder="Nhập giá giảm"
                value={promotion}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">ID</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="id"
                placeholder="Vui lòng nhập id"
                value={id}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">ID Loại</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="idLoai"
                placeholder={params.idLoai}
                value={idLoai}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
        </table>
        <button
          type="button"
          className="btn btn-outline-info text-center m-[10px] align-middle"
          onClick={onSubmit}
        >
          Thêm
        </button>
      </div>
    </div>
  );
}
