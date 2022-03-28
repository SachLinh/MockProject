import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SanPhamType } from "../../../TypeState/SanPhamType";

const initState = {
    id: "",
    name: "",
  };

export default function UpdateProd() {
  const [sanPham, setsanPham] = useState<SanPhamType>();

  const navigate = useNavigate();
  const params = useParams();
  
    const getsanPham = async () => {
      try {
        const res = await axios.get(
            `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/1/Loai/1/SanPham/${params.idSP}`
        );
        setsanPham(res.data);
      } catch (error) {
        console.log(error);
      }
    };



    useEffect(() => {
      getsanPham();
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
          alert("Vui lòng nhập thay đổi");
        } else {
          const res = await axios.put(
            `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${data.id}/Loai/${data.id}/SanPham`,
            data
          );
          setsanPham(res.data);
          setData({
            id: "",
            name: "",
          });
          alert("Thay đổi thành công");
          navigate("/Admin/QuanLysanPham");
        }
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="">
        <div className="">
          <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
            Update Sản Phẩm
          </h2>
          <form className="flex flex-row justify-between items-center p-[50px]">
            <label htmlFor="">Mã ID</label>
            <input
              type="text"
              name="id"
              placeholder={sanPham?.id}
              value={id}
              className="border p-[10px] mr-[20px] outline-none"
              onChange={onChangeText}
            />
            <label htmlFor="">Tên Sản Phẩm</label>
            <input
              type="text"
              name="name"
              placeholder={sanPham?.name}
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
