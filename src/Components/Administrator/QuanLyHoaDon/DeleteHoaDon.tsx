import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { HoaDonType } from './HoaDonType';

export default function DeleteHoaDon() {
  const params = useParams();
  const [hoaDon, sethoaDon] = useState<HoaDonType>();
  const navigate = useNavigate();
  const gethoaDon = async ()=>{
    try{
      const res= await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/HoaDon/${params.idhoaDon}`
      );
      sethoaDon(res.data);
    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    gethoaDon();
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        `https://6238109d0a54d2ceab702909.mockapi.io/HoaDon/${hoaDon?.id}`
      );
      sethoaDon(res.data);
      alert("Xóa thành công thành công");
      navigate(`/Admin/QuanLyHoaDon`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Delete Hóa Đơn
        </h2>
        <form className="flex flex-row justify-between items-center p-[50px]">
          <label htmlFor="">Mã ID</label>
          <input
            type="text"
            name="id"
            placeholder={hoaDon?.id}
            value={hoaDon?.id}
            className="border p-[10px] mr-[20px] outline-none"
          />
          <label htmlFor="">Tên hóa đơn</label>
          <input
            type="text"
            name="name"
            placeholder={hoaDon?.name}
            value={hoaDon?.name}
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
