import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DanhMucType } from "../../../TypeState/DanhMucType";

const initState = {
  id: "",
  name: "",
};
export default function AddNewDanhMuc() {
  const [listCatas, setListCatas] = useState<DanhMucType[]>([]);
  const navigate = useNavigate();
  const getListCata = async () => {
    try {
      const res = await axios.get(
        "https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc"
      );
      setListCatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState(initState);
  const { id, name } = data;
  const onChangeText = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (data.id === "" || data.name === "") {
        alert("Vui lòng nhập Id, Name cần thêm mới");
      } else {
        const res = await axios.post(
          `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc`,
          data
        );
        setListCatas(res.data);
        setData({
          id: "",
          name: "",
        });
        alert("Thêm mới thành công");
        navigate("/Admin/QuanLyDanhMuc");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Thêm Danh Mục Mới
        </h2>
        <form className="flex flex-row justify-between items-center p-[50px]">
          <label htmlFor="">Mã ID</label>
          <input
            type="text"
            name="id"
            placeholder="Vui lòng nhập Id"
            value={id}
            className="border p-[10px] mr-[20px] outline-none"
            onChange={onChangeText}
          />
          <label htmlFor="">Tên Danh Mục</label>
          <input
            type="text"
            name="name"
            placeholder="Vui lòng nhập tên DM"
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
