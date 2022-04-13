import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HoaDonType } from "../../../TypeState/HoaDonType";



export default function AddHoaDon() {
  const params = useParams();
  const initState = {
    id: "",
    name: "",
    totalprice: "",
    date: "",
    phonenumber: "",
    address: "",
  };
  const [hoaDon, sethoaDon] = useState<HoaDonType>();
  const navigate = useNavigate();


  const gethoaDon = async () => {
    try {
      const res = await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/HoaDon`
      );
      sethoaDon(res.data);
      console.log(hoaDon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gethoaDon();
  }, []);
  const [data, setData] = useState(initState);
  const {
    id,
    name,
    totalprice,
    date,
    phonenumber,
    address, 
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
      if (data.id === "" || data.name === "" || data.totalprice === "" ||  
      data.date === "" || data.phonenumber === "" ||  data.address === "" ) 
      {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
        const res = await axios.post(
          `https://6238109d0a54d2ceab702909.mockapi.io/HoaDon`,
          data
        );
        sethoaDon(res.data);
        setData({
            id: "",
            name: "",
            totalprice: "",
            date: "",
            phonenumber: "",
            address: "",
        });
        alert("Thêm mới thành công");
        navigate(
          `/Admin/QuanLyHoaDon`
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
          Thêm Hóa Đơn Mới
        </h2>
        <table className="m-[20px] border-separate border border-slate-400 w-5/6 table table-hover leading-[40px] ">
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tên Hóa Đơn</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="name"
                placeholder="Vui lòng nhập tên hóa đơn"
                value={name}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Tổng Tiền</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="totalprice"
                placeholder="Vui lòng nhập tổng tiền"
                value={totalprice}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Ngày đặt hàng</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="date"
                value={date}
                placeholder="Vui lòng nhập ngày đặt hàng"
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Số điện thoại</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="phonenumber"
                value={phonenumber}
                placeholder="Vui lòng nhập số điện thoại"
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border border-slate-300">
              <label htmlFor="">Địa chỉ giao hàng</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Vui lòng nhập địa chỉ"
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
                placeholder="Vui lòng nhập ID"
                value={id}
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

