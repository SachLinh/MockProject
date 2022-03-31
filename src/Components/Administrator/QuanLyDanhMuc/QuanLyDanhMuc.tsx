import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DanhMucType } from "../../../TypeState/DanhMucType";
import Pagination from "./Pagination";

export default function QuanLyDanhMuc() {
  useEffect(() => {
    getListCata();
  }, []);
  const [listCatas, setListCatas] = useState<DanhMucType[]>([]);
  // page
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  // Lấy dữ liệu
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

  // Giá trị sắp xếp
  const SORT = {
    up: "2",
    down: "3",
  };
  const [sortId, setSortId] = useState(SORT.up);
  // Hiển thị giá trị trên màn hình
  const getSortAge = () => {
    if (sortId === SORT.down) {
      return `^`;
    }
    if (sortId === SORT.up) {
      return "^";
    }
  };
  // Chuyển đổi giá trị sắp xếp
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
  // Tìm kiếm
  const findName = function (list: DanhMucType[]) {
    let res: DanhMucType[] = [...list];
    if (searchName) {
      res = res.filter((el) =>
        el.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if (sortId !== SORT.down) {
      res.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));
    } else {
      res.sort((a, b) => (parseInt(a.id) < parseInt(b.id) ? 1 : -1));
    }
    return res;
  };
  // get ccurrent Page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listCatas.slice(indexOfFirstPost, indexOfLastPost);
  // function paginate
  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  // Render map data
  const getListDanhMuc = findName(currentPosts).map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-slate-400 text-center">{item.id}</td>
        <td className="border border-slate-400">{item.name}</td>
        <td className="border border-slate-400  w-[170px] text-center">
          <Link to={`/Admin/Update/${item.id}`}>
            <button type="button" className="btn btn-info">
              Update
            </button>
          </Link>
        </td>
        <td className="border border-slate-400 w-[170px] text-center">
          <Link to={`/Admin/Delete/${item.id}`}>
            <button type="button" className="btn btn-warning">
              Delete
            </button>
          </Link>
        </td>
        <td className="border border-slate-400  w-[170px] text-center">
          <Link to={`${item.id}/QuanLyLoaiSP`}>
            <button className="btn btn-outline-dark">Chi tiết Danh Mục</button>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="w-full">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
        QUẢN LÝ DANH MỤC
      </h1>
      <Link to="/Admin/AddNewDanhMuc">
        <button className="btn btn-outline-success mx-[20px] my-4">
          Thêm mới danh mục
        </button>
      </Link>
      <div className="flex flex-row justify-start items-center px-[20px] mb-[20px]">
        <label className="mr-[30px]">Tên tìm kiếm</label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name=""
            id=""
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
            <th className="border border-slate-400">
              <button className="btn btn-outline-success" onClick={handleSort}>
                Mã ID {getSortAge()}
              </button>
            </th>
            <th className="border border-slate-400">Tên danh mục</th>
            <th className="border border-slate-400">Sửa</th>
            <th className="border border-slate-400">Xóa</th>
            <th className="border border-slate-400">Chi tiết</th>
          </tr>
        </thead>
        <tbody className="font-Roboto font-[500px]">{getListDanhMuc}</tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={listCatas.length}
        paginate={paginate}
      />
    </div>
  );
}