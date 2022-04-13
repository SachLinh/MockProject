import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { isTemplateMiddle } from "typescript";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { getAllHoaDon, getChiTietHoaDon } from "../../../Features/HoaDonSlice";
import { HoaDonType } from "../../../TypeState/HoaDonType";
import PageHoaDon from "./PageHoaDon";

export default function ChiTietHoaDon() {
  const param = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    //dispatch(getChiTietHoaDon(param.idhoadon))
    getHoaDon();
  }, []);
  //   const listData = useAppSelector(state => state.listHoaDon)
  //   const listHoaDon:HoaDonType[] = listData.listHoaDon;

  const [listHoaDon, setListHoaDon] = useState<HoaDonType>();
  const getHoaDon = async () => {
    try {
      const res = await axios.get(
        `https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon/${param.idhoadon}`
      );
      setListHoaDon(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
        CHI TIẾT HÓA ĐƠN
      </h1>
      <div className="p-[20px] w-full">
        <table className="p-[20px] mt-[20px] w-full">
          {/* // id */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.id}
            </td>
          </tr>
          {/* // name */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Name</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.billInfo?.customerName}
            </td>
          </tr>
          {/* //Phone */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Phone</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.billInfo?.customerPhoneNumber}
            </td>
          </tr>
          {/* // email */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Email</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.billInfo.customerEmail}
            </td>
          </tr>
          {/* // Price */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Price</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.billInfo?.totalPrice}
            </td>
          </tr>
          {/* // Address */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Address</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              {listHoaDon?.billInfo?.cutomerAddress}
            </td>
          </tr>
          {/* // san SanPham */}
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">List Product</label>
            </th>
            <td className="w-5/6 h-[50px] border border-slate-300">
              <table className="table table-hover leading-[40px] w-full">
                <thead>
                  <tr className="text-center">
                    <th className="border border-slate-400">ID SP</th>
                    <th className="border border-slate-400">Name</th>
                    <th className="border border-slate-400">IMG</th>
                    <th className="border border-slate-400">Price</th>
                    <th className="border border-slate-400">count</th>
                  </tr>
                </thead>
                {listHoaDon?.billInfo?.productLists.map((item, index) => {
                  return (
                    <tbody>
                      <tr className="text-center">
                        <th className="border border-slate-400">{item.id}</th>
                        <th className="border border-slate-400">{item.name}</th>
                        <th className="border border-slate-400">
                          <img src={item.image} alt="" />
                        </th>
                        <th className="border border-slate-400">
                          {item.price}
                        </th>
                        <th className="border border-slate-400">
                          {item.count}
                        </th>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
