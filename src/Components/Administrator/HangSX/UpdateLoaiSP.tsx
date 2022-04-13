import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DanhMucType } from "../../../TypeState/DanhMucType";


export default function UpdateLoaiSP() {
    const params = useParams();
    const [editLoaiSP, setEditLoaiSP] = useState<DanhMucType>();
    const navigate = useNavigate();
    const getDanhMuc = async () => {
        try {
            const res = await axios.get(
                `https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai/${params.idLoai}`
            );
            setEditLoaiSP(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getDanhMuc();
    }, []);
    const initState = {
        id: "",
        name: "",
    };
    const [data, setData] = useState(initState);
    const { id, name } = data;
    const onChangeText = (e: any) => {
        setData({
            id: editLoaiSP?.id,
            name:e.target.value
        });
    };
    const onSubmit = async (e: any) => {
        e.preventDefault();

        try {
            if (data.name === "") {
                alert("Vui lòng nhập tên cần thay đổi");
            } else {
                const res = await axios.put(
                    `https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai/${params.idLoai}`,
                    data
                );
                setEditLoaiSP(res.data);
                setData({
                    id: "",
                    name: "",
                });
                alert("Thay đổi thành công");
                navigate(`/Admin/QuanLyHangSX`);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="">
            <div className="">
                <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
                    Update Hãng Sản Xuất
                </h2>
                <form className="flex justify-between items-center p-[50px]">
                    <label htmlFor="">ID Hãng</label>
                    <input
                        type="text"
                        name="danhMucId"
                        placeholder={editLoaiSP?.id}
                        value={editLoaiSP?.id}
                        disabled
                        className="border p-[10px] mr-[20px] outline-none"
                    />

                    <label htmlFor="">Tên Hãng</label>
                    <input
                        type="text"
                        name="name"
                        placeholder={editLoaiSP?.name}
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
