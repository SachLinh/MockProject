import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HoaDonType } from "./HoaDonType";

const initState = {
    id: "",
    name: "",
    totalprice: "",
    date: "",
    phonenumber: "",
    address: "",
};

export default function UpdateHoaDon() {
  const [hoaDon, sethoaDon] = useState<HoaDonType>();
  const navigate = useNavigate();
  const params = useParams();

  const gethoaDon = async () => {
    try {
      const res = await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/HoaDon/${params.idhoaDon}`
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
      if (data.name === "") {
        if (data.totalprice === "") {
          alert("Vui lòng nhập thay đổi");
        }
        if (data.date === "") {
          alert("Vui lòng nhập thay đổi");
        }
        if (data.phonenumber === "") {
          alert("Vui lòng nhập thay đổi");
        }
        if (data.address === "") {
            alert("Vui lòng nhập thay đổi");
        }
        alert("Vui lòng nhập thay đổi");
      } else {
        const res = await axios.put(
          `https://6238109d0a54d2ceab702909.mockapi.io/HoaDon/${params.idhoaDon}`,
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
        alert("Thay đổi thành công");
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
          Update Hóa Đơn
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
                placeholder={hoaDon?.name}
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
                placeholder={hoaDon?.totalprice}
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
                placeholder={hoaDon?.date}
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
                placeholder={hoaDon?.phonenumber}
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
                placeholder={hoaDon?.address}
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
                placeholder={hoaDon?.id}
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
          Update
        </button>
      </div>
    </div>
  );
}
