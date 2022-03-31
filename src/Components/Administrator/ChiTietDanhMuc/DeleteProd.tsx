import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { SanPhamType } from '../../../TypeState/SanPhamType';

export default function DeleteProd() {
  const params = useParams();
  const [sanPham, setSanPham] = useState<SanPhamType>();
  const navigate = useNavigate();
  const getSanPham = async ()=>{
    try{
      const res= await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai/${params.idLoai}/SanPham/${params.idSanPham}`
      );
      setSanPham(res.data);
    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    getSanPham();
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai/${params.idLoai}/SanPham/${sanPham?.id}`
      );
      setSanPham(res.data);
      alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLyDanhMuc/${params.idDM}/QuanLyLoaiSP/${params.idLoai}/ListSanPham`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Delete Sản phẩm
        </h2>
        <form className="flex flex-row justify-between items-center p-[50px]">
          <label htmlFor="">Mã ID</label>
          <input
            type="text"
            name="id"
            placeholder={sanPham?.id}
            value={sanPham?.id}
            className="border p-[10px] mr-[20px] outline-none"
          />
          <label htmlFor="">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            placeholder={sanPham?.name}
            value={sanPham?.name}
            className="border p-[10px] mr-[20px] outline-none"
          />
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={onSubmit}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
