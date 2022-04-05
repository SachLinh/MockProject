import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface listTTSpType {
    id: string;
    name: string;
    avatar: string;
    cost: string;
    capacity: number;
    description: string;
    color: string;
    promotion: number;
    oldCost: string;
    endow: string;
    kichThuoc: string;
    doPhangiai: string;
    congNghemanhinh: string;
    chatLieu: string;
    thoiLuongpin: number;
    thoiGiansac: number;
    loaiCpu: string;
    tinhNangnoibat: string;
    cameraSau: string;
    cameraTruoc: string;
    RAM: string;
    ROM: string;
    SIM: string;
    heDieuHanh: string;
    LoaiId: string;
}
interface TypeID {
    id: any;
}

export default function LoaiSanPham(props: TypeID) {
    useEffect(() => {
        getLoaiSp();
    }, []);
    const [similar, setSimilar] = useState<listTTSpType[]>([]);
    const getLoaiSp = async () => {
        try {
            const res = await axios.get(
                `https://6232e62e6de3467dbac2a7d6.mockapi.io/SanPham`
            );
            setSimilar(res.data);
            console.log(similar);

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex justify-center ">
            <div className="w-[1200px]  grid grid-cols-5 gap-5">
                {similar.map(item => {
                    if (item.LoaiId === props.id) {
                        return (
                            <div
                                key={item.id}
                                className="text-left bg-white mt-3 w-[230px] pl-[5px] mr-[10px] h-[340px] rounded-lg re cursor-pointer duration-500 shadow-[0_0px_4px_4px_#EAEAEA] hover:shadow-[0_0px_8px_8px_#CECECE]"
                            >
                                <Link to={`/product-detail/${item.id}`}>
                                    <p className="bg-red-600 h-[30px] w-[100px] mb-2 text-center rounded-lg leading-[30px] text-white font-bold right-2 bottom-1 ">
                                        Giảm <span>{item.promotion}%</span>
                                    </p>
                                    <img
                                        alt=""
                                        src={item.avatar}
                                        className="w-[160px] h-[160px] text-center m-auto mt-[15px]"
                                    ></img>
                                    <h4 className="font-bold m-[5px] text-gray-800">{item.name}</h4>
                                    <div className="flex">
                                        <p className="text-red-600 font-bold  m-1 ">
                                            {item.cost}
                                            <span>đ</span>
                                        </p>
                                        <p className="mt-1 ml-2 line-through text-gray-500">
                                            {item.oldCost}
                                            <span>đ</span>
                                        </p>
                                    </div>
                                    <div className="text-black my-1 mr-1 bg-gray-200 rounded-md">
                                        <p className="p-2 text-[12px]">{item.endow}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>

        </div>
    )
}