import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DanhMucType } from "../../../TypeState/DanhMucType";

const initState = {
  id: "",
  name: "",
};
export default function UpdateDanhMuc() {
  const params = useParams();
  const [danhMuc, setDanhmuc] = useState<DanhMucType>();
  const navigate = useNavigate();
  const getDanhMuc = async () => {
    try {
      const res = await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}`
      );
      setDanhmuc(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDanhMuc();
  }, []);
  const [data, setData] = useState(initState);
  const { id, name } = data;
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
        alert("Vui lòng nhập Name cần thay đổi");
      } else {
        const res = await axios.put(
          `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${data.id}`,
          data
        );
        setDanhmuc(res.data);
        setData({
          id: "",
          name: "",
        });
        alert("Thay đổi thành công");
        navigate("/Admin/QuanLyDanhMuc");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Update Danh Mục
        </h2>
        <form className="flex flex-row justify-between items-center p-[50px]">
          <label htmlFor="">Mã ID</label>
          <input
            type="text"
            name="id"
            placeholder={danhMuc?.id}
            value={id}
            className="border p-[10px] mr-[20px] outline-none"
            onChange={onChangeText}
          />
          <label htmlFor="">Tên Danh Mục</label>
          <input
            type="text"
            name="name"
            placeholder={danhMuc?.name}
            value={name}
            className="border p-[10px] mr-[20px] outline-none"
            onChange={onChangeText}
          />
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={onSubmit}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
