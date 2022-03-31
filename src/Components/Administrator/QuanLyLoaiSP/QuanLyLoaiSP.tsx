import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { listLoaiSpType } from "./listLoaiSpType";

export default function LoaiSP() {
  useEffect(() => {
    getLoaiSP()
  }, []);
  const params = useParams();
  const [loaiSP, setLoaiSP] = useState<listLoaiSpType[]>([])

  const getLoaiSP = async () => {
    try {
      const res = await axios.get(
        `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai`
      );
      setLoaiSP(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getListLoaiSP = loaiSP.map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-slate-400 text-center">{item.id}</td>
        <td className="border border-slate-400">{item.name}</td>
        <td className="border border-slate-400  w-[170px] text-center">
          <Link to={`/Admin/Update/${item.DanhMucId}/Loai/${item.id}`}>
            <button type="button" className="btn btn-info">
              Update
            </button>
          </Link>
        </td>
        <td className="border border-slate-400 w-[170px] text-center">
          <Link to={`/Admin/Delete/${item.DanhMucId}/Loai/${item.id}`}>
            <button type="button" className="btn btn-warning">
              Delete
            </button>
          </Link>
        </td>
        <td className="border border-slate-400  w-[170px] text-center">

          <button className="btn btn-outline-dark">Chi tiết Loại SP</button>

        </td>
      </tr>
    );
  });
  return (
    <div className="w-full">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
        QUẢN LÝ Loại Sản Phẩm
      </h1>
      <Link to={`/Admin/AddNewLoaiSP/${params.idDM}`}>

        <button className="btn btn-outline-success mx-[20px] my-4">Thêm mới Loại Sản Phẩm</button>

      </Link>
      <table className="table table-hover leading-[40px]">
        <thead>
          <tr className="text-center">
            <th className="border border-slate-400">Mã ID</th>
            <th className="border border-slate-400">Tên Loại SP</th>
            <th className="border border-slate-400">Sửa</th>
            <th className="border border-slate-400">Xóa</th>
            <th className="border border-slate-400">Chi tiết</th>
          </tr>
        </thead>
        <tbody className="font-Roboto font-[500px]">{getListLoaiSP}</tbody>
      </table>
    </div>
  );

}

