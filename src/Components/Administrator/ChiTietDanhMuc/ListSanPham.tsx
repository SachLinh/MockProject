import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SanPhamType } from "../../../TypeState/SanPhamType";
import PageProd from "./PageProd";

export default function ListSanPham() {
    useEffect(() => {
        getListCata();
      }, []);
      const [listProd, setListProd] = useState<SanPhamType[]>([]);
      const params = useParams();
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(6);
      const getListCata = async () => {
        try {
          const resProd = await axios.get(
            `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai/${params.idLoai}/SanPham`
          );
          setListProd(resProd.data);
        } catch (error) {
          console.log(error);
        }
      };

      const SORT = {
        up: "2",
        down: "3",
      };
      const [sortId, setSortId] = useState(SORT.up);
      const getSortAge = () => {
        if (sortId === SORT.down) {
          return "v";
        }
        if (sortId === SORT.up) {
          return "^";
        }
      };
      const handleSort = () => {
        if (sortId === SORT.down) {
          setSortId(SORT.up);
        } else {
          if (sortId === SORT.up) {
            setSortId(SORT.down);
          } 
        }
      };

    const [searchName, setSearchName] = useState("");
    const findName = function (list: SanPhamType[]) {
      let res: SanPhamType[] = [...list];
      if (searchName) {
        res = res.filter((el) =>
          el.name.toLowerCase().includes(searchName.toLowerCase())
        );
      }
      if (sortId !== SORT.down) {
        res.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));
      }
      else{
        res.sort((a, b) => (parseInt(a.id) < parseInt(b.id) ? 1 : -1));
      }
      return res;
    };

    // get ccurrent Page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = listProd.slice(indexOfFirstPost, indexOfLastPost);
    // function paginate
    const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

      const getListSanPham = findName(currentPosts).map((item, index) => {
        return (
          <tr key={index}>
            <td className="border border-slate-400 text-center">{item.id}</td>
            <td className="border border-slate-400">{item.name}</td>
            <td className="border border-slate-400"><img alt="" className="w-[100px]" src={item.avatar}></img></td>
            <td className="border border-slate-400">{item.cost}</td>
            <td className="border border-slate-400">{item.capacity}</td>
            <td className="border border-slate-400">{item.description}</td>
            <td className="border border-slate-400">{item.color}</td>
            <td className="border border-slate-400">{item.promotion}</td>
            
            <td className="border border-slate-400  w-[70px] text-center">
              <Link to={`/Admin/Update/${params.idDM}/Loai/${params.idLoai}/SanPham/${item.id}`}>
                <button type="button" className="btn btn-info">
                  Update
                </button>
              </Link>
            </td>
            <td className="border border-slate-400 w-[70px] text-center">
            <Link to={`/Admin/Delete/${params.idDM}/Loai/${params.idLoai}/SanPham/${item.id}`}>
            <button type="button" className="btn btn-warning">
                Delete
              </button>
              </Link>
            </td>
            <td className="border border-slate-400  w-[70px] text-center">
              <Link to={""} >
              <button className="btn btn-outline-dark">Chi Tiết</button>
              </Link>
            </td>
          </tr>
        );
      });
      return (
        <div className="w-full">
          <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
            QUẢN LÝ SẢN PHẨM
          </h1>
          <Link to={`/Admin/AddProd/${params.idDM}/Loai/${params.idLoai}`}>
              <button className="btn btn-outline-success mx-[20px] my-4">
               Thêm Sản Phẩm mới
           </button>
         </Link>
          <div className="flex flex-row justify-start items-center px-[20px] mb-[20px]">
            <label className="mr-[30px] w-32">Tên tìm kiếm</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                id=""
                name=""
                placeholder="Tên cần tìm"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="p-[15px] border outline-none form-control"
              />
          </div>
          </div>
          <table className="table table-hover leading-[40px]">
            <thead>
              <tr className="text-center">
                <th className="border border-slate-400">Mã ID</th>
                <th className="border border-slate-400">
                  {" "}
                  <button className="btn btn-outline-success" onClick={handleSort}>
                    Tên Sản Phẩm {getSortAge()}
                  </button>
                </th>
                <th className="border border-slate-400">Hình ảnh</th>
                <th className="border border-slate-400">Gía</th>
                <th className="border border-slate-400">Dung lượng</th>
                <th className="border border-slate-400">Mô tả</th>
                <th className="border border-slate-400">Màu sắc</th>
                <th className="border border-slate-400">Giảm giá(%)</th>
                <th className="border border-slate-400">Sửa</th>
                <th className="border border-slate-400">Xóa</th>
                <th className="border border-slate-400">Chi tiết</th>
              </tr>
            </thead>
            <tbody className="font-Roboto font-[500px]">{getListSanPham}</tbody>
          </table>
          <PageProd
          postsPerPage={postsPerPage}
          totalPosts={listProd.length}
          paginate={paginate}
          />
        </div>
      );
}