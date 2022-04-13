import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DanhMucType } from "../../../TypeState/DanhMucType";

export default function DeleteLoaiSP() {
    const params = useParams();
    const [deleteLoaiSP, setDeleteLoaiSP] = useState<DanhMucType>();
    const navigate = useNavigate();
    const getDanhMuc = async () => {
        try {
            const res = await axios.get(
                `https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai/${params.idLoai}`
            );
            setDeleteLoaiSP(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getDanhMuc();
    }, []);

    const onSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await axios.delete(
                `https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai/${params.idLoai}`
            );
            setDeleteLoaiSP(res.data);
            alert("Xóa thành công thành công");
            navigate(`/Admin/QuanLyHangSX`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="">
            <div className="">
                <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
                    Delete Hãng Sản Xuất
                </h2>
                <form className="flex flex-row justify-between items-center p-[50px]">
                    <label htmlFor="">ID Hãng</label>
                    <input
                        type="text"
                        name="id"
                        placeholder={deleteLoaiSP?.id}
                        value={deleteLoaiSP?.id}
                        className="border p-[10px] mr-[20px] outline-none"
                    />
                    <label htmlFor="">Tên Hãng</label>
                    <input
                        type="text"
                        name="name"
                        placeholder={deleteLoaiSP?.name}
                        value={deleteLoaiSP?.name}
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
