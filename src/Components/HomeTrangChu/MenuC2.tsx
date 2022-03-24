import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoaiSPType } from '../../TypeState/LoaiSP';
interface TypeID{
    id:string
  }
export default function MenuC2(props:TypeID) {
    useEffect(() => {
     getLoaiSP();
    },[]);
    const [listLoaiSP, setLoaiSP] = useState<LoaiSPType[]>([]);
    const getLoaiSP = async () => {
    try {
      const res = await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${props.id}/Loai`
      );
      setLoaiSP(res.data);
	  
    } catch (error) {
      console.log(error);
    }
  };
  console.log(props);
  const showLoaiSP = listLoaiSP.map((itemLoai, indexLoai) =>{
	return (
	  <li className="hover:bg-[#fab6b6]  p-[6px] pl-[10px]" key={indexLoai}>
		<Link className="w-full pl-[20px]" to="/product-detail">
		  {itemLoai.name}
		</Link>
	  </li>
	);
  });
    return (
        <div>
            {showLoaiSP}
        </div>
    )
}
