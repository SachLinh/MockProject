import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listLoaiSpType } from "./listLoaiSpType";

const initState = {
    danhMucId: "",
    id: "",
    name: "",
};
export default function UpdateDanhMuc() {
    const params = useParams();
    const [editLoaiSP, setEditLoaiSP] = useState<listLoaiSpType>();
    const navigate = useNavigate();
    const getDanhMuc = async () => {
        try {
            const res = await axios.get(
                `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai/${params.idLoai}`
            );
            setEditLoaiSP(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getDanhMuc();
    }, []);
    const [data, setData] = useState(initState);
    const { id, name, danhMucId } = data;
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
                alert("Vui lòng nhập tên cần thay đổi");
            } else {
                const res = await axios.put(
                    `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai/${params.idLoai}`,
                    data
                );
                setEditLoaiSP(res.data);
                setData({
                    danhMucId: "",
                    id: "",
                    name: "",
                });
                alert("Thay đổi thành công");
                navigate(`/Admin/QuanLyDanhMuc/${params.idDM}/QuanLyLoaiSP`);
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
                <form className="flex justify-between items-center p-[50px]">
                    <label htmlFor="">ID DM</label>
                    <input
                        type="text"
                        name="danhMucId"
                        placeholder={editLoaiSP?.DanhMucId}
                        value={editLoaiSP?.DanhMucId}
                        className="border p-[10px] mr-[20px] outline-none"
                        onChange={onChangeText}
                    />
                    <label htmlFor="">ID Loại</label>
                    <input
                        type="text"
                        name="id"
                        placeholder={editLoaiSP?.id}
                        value={editLoaiSP?.id}
                        className="border p-[10px] mr-[20px] outline-none"
                        onChange={onChangeText}
                    />
                    <label htmlFor="">Loại SP</label>
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
