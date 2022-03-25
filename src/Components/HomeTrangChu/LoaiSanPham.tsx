import axios from "axios";
import React, { Component, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ThongTinSp from "./ThongTinSp";
interface listLoaiSpType {
        name: string;
        id: string;
        DanhMucId: string;
    }
    interface TypeID{
        id: string,
    }

export default function LoaiSanPham (props:TypeID) {
    useEffect(()=>{
        getLoaiSp();
    },[])
    const[listLoaiSp, setListLoaiSp] = useState<listLoaiSpType[]>([]) ;
    const getLoaiSp= async()=>{
        const res=await axios.get(`https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${props.id}/Loai`);
        setListLoaiSp(res.data);
    }
    const ShowLoaiSP = listLoaiSp.map((itemLoai, indexLoai)=>{
            return(
                <li className="m-1 p-2 list-none no-underline inline-block bg-slate-100 rounded-lg">
                  <Link to="#">{itemLoai.name}</Link>
                </li>
        );
    });
    const ShowTTSP = listLoaiSp.map((itemLoai, indexLoai)=>{
        return(
            <div className="m-2">
              <ThongTinSp iddm = {props.id} id={itemLoai.id}/>
            </div>
        );
    });
    return (
      <div className="">
          {ShowLoaiSP}
         <div className="inline w-[1200px]">
            {ShowTTSP}
         </div>
      </div>
    )
}

