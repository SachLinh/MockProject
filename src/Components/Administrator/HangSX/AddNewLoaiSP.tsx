import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { listLoaiSpType } from "./listLoaiSpType";


const initState = {
    id: "",
    name: "",
};
export default function AddNewLoaiSP() {
    const [addLoaiSP, setAddLoaiSP] = useState<listLoaiSpType[]>([]);
    const navigate = useNavigate();
    const [data, setData] = useState(initState);
    const { id, name } = data;
    const onChangeText = (e: any) => {
        setData({
           id:"",
           name:e.target.value
        });
    };
    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (data.name === "") {
                alert("Vui lòng nhập Id, Name cần thêm mới");
            } else {
                const res = await axios.post(
                    `https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai`,
                    data
                );
                setAddLoaiSP(res.data);
                setData({
                    id: "",
                    name: "",
                });


                alert("Thêm mới thành công");
                navigate(`/Admin/QuanLyHangSX`);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className="">
                <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
                    Thêm Hãng Sản Xuất Mới
                </h2>
                <form className="flex flex-row justify-between items-center p-[50px]">
                   
                    <label htmlFor="">Tên Hãng</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Vui lòng nhập hãng"
                        value={name}
                        className="border p-[10px] mr-[20px] outline-none"
                        onChange={onChangeText}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={onSubmit}
                    >
                        Thêm Mới
                    </button>
                </form>
            </div>
        </div>
    );
}
