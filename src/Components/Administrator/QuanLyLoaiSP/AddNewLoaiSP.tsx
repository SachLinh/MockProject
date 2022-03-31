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
  const params = useParams();
  const [data, setData] = useState(initState);
  const { id, name } = data;
  const onChangeText = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  console.log(addLoaiSP);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (data.id === "" || data.name === "") {
        alert("Vui lòng nhập Id, Name cần thêm mới");
      } else {
        const res = await axios.post(
            `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai`,
          data
        );
        setAddLoaiSP(res.data);
        setData({
          id: "",
          name: "",
        });
        
        
        alert("Thêm mới thành công");
        navigate(`/Admin/QuanLyDanhMuc/${data.id}/QuanLyLoaiSP`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Thêm Loại Sản Phẩm Mới
        </h2>
        <form className="flex flex-row justify-between items-center p-[50px]">
          <label htmlFor="">ID DM</label>
          <input
            type="text"
            name="id"
            placeholder="Vui lòng nhập ID"
            value={id}
            className="border p-[10px] mr-[20px] outline-none"
            onChange={onChangeText}
          />
          <label htmlFor="">Tên Loại SP</label>
          <input
            type="text"
            name="name"
            placeholder="Vui lòng nhập loại sp"
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
