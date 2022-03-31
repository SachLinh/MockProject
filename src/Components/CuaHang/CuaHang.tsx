import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function CuaHang() {
  return (
    <div className="mt-[100px]">
        <div className="mt-[80px] w-[1200px] flex flex-row h-auto m-auto ">
      <div className="w-4/5 rounded-t-lg border-2">
        <div className="image">
          <img src="https://cellphones.com.vn/media/wysiwyg/banner_dcch.png" className="w-full rounded-t-lg"></img>
          <div className="text-center bg-red-500 w-full h-[50px] leading-[50px] text-white">
            <span className="font-bold"> Group1-ULTRPhones</span>
          </div>
        </div>
        <div className="boss m-[5px]">
          <h3 className="text-red-500 text-center font-bold">
            TIỆN ÍCH TẠI CỬA HÀNG ULTRPHONES
          </h3>
          <p>
            <strong>UltrphoneS</strong> luôn nỗ lực{" "}
            <strong>“Tận tâm với khách hàng“</strong> mang đến dịch vụ và trải
            nghiệm tốt nhất:
          </p>
          <div className="flex flex-row font-[13px] mt-[10px] text-[13px]">
            <div className="left w-1/2 mr-[12px]">
              <p>
              <strong>
                CellphoneS là hệ thống bán lẻ uỷ quyền chính hãng của Apple Việt
                Nam (AAR - Apple Authorized Reseller).
              </strong>
              </p>
              <strong>
                Điện Thoại Vui ASP là hệ thống bảo hành chính hãng uỷ quyền của
                Apple tại Việt Nam
              </strong>
              <ul className="list-disc ml-[50px]">
                <li>
                  Nhân viên nhiệt tình, thân thiện, gửi xe & Wifi miễn phí
                </li>
                <li>Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí</li>
                <li>Giá bán, khuyến mãi luôn tốt nhất thị trường</li>
                <li>
                  Dịch vụ bán hàng doanh nghiệp : giá tốt nhất - có hoa hồng
                </li>
                <li>Bảo hành chính hãng, đổi mới miễn phí 1 tháng</li>
                <li>Thu cũ đổi mới sản phẩm trợ giá tốt nhất</li>
              </ul>
            </div>
            <div className="right w-1/2">
              <p>
                CellphoneS là hệ thống bán lẻ uỷ quyền chính hãng của Apple Việt
                Nam (AAR - Apple Authorized Reseller).
              </p>
              <strong>
                Điện Thoại Vui ASP là hệ thống bảo hành chính hãng uỷ quyền của
                Apple tại Việt Nam
              </strong>
              <ul className="list-disc ml-[50px]">
                <li>
                  Nhân viên nhiệt tình, thân thiện, gửi xe & Wifi miễn phí
                </li>
                <li>Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí</li>
                <li>Giá bán, khuyến mãi luôn tốt nhất thị trường</li>
                <li>
                  Dịch vụ bán hàng doanh nghiệp : giá tốt nhất - có hoa hồng
                </li>
                <li>Bảo hành chính hãng, đổi mới miễn phí 1 tháng</li>
                <li>Thu cũ đổi mới sản phẩm trợ giá tốt nhất</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 p-[15px] ml-[15px]  h-[300px] rounded-lg border-2">
          <div className=" rounded-[5px] bg-white ">
              <h2 className="text-center">Liên hệ</h2>
              <i className="fa-solid fa-phone text-[20px] mr-2"></i> <strong className="text-red-500">Tổng đài miễn phí</strong>
              <br />
              <p><strong className="text-[13px]">Khiếu nại: </strong>0848785548</p>
              <p><strong className="text-[13px]">Góp ý: </strong>145786645</p>
              <i className="fa-solid fa-handshake text-[20px] mr-2"></i> <strong className="text-red-500">Hợp tác liên doanh</strong>
              <br />
              <p><strong className="text-[13px]">Cho thuê mặt bằng: </strong></p>
              <p><strong className="text-[13px]">Mr.Group1 </strong></p>
              <Link to={""} className='text-blue-500 italic'>ninhvantuan@gmail.com</Link>
              <p><strong className="text-[13px]">Bán hàng daonh nghiệp </strong></p>
              <p  className="text-[13px]">Gọi : 1800.2097 (Miền Nam) hoặc 1800.2044 (Miền Bắc) Email : cskh@cellphones.com.vn</p>
          </div>
      </div>
    </div>
    <div className="w-[1200px] m-auto mt-[10px]">
        <div className="box_diaChi w-full border-2 rounded-lg p-[10px]">
            <h2 className="font-bold">Hệ thống cửa hàng bán lẻ ULTRPHONES</h2>
            <p className="text-[13px]" >Giờ mở cửa: 8h-22h(Áp dụng tùy của hàng)</p>
            <div className="box_CuaHangSearch bg-slate-100 w-1/2 h-[100px] border-2 rounded-lg ">
                <div className="select_box flex flex-row justify-around p-[10px]">
                    <select className="khuVuc border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                        <option>Tất cả khu vực</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                    <select className="Tinh border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                    <option>Chọn tỉnh thành</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                    <select className="quan border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                    <option>Chọn quận</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                </div>
                <div className="m-auto">
                    <input className="w-[530px] ml-[24px] pl-[5px] border-[1px] border-black rounded-sm " placeholder="Nhập tên đường, quận, huyện"></input>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[1200px] m-auto mt-[10px]">
        <div className="box_diaChi w-full border-2 rounded-lg p-[10px]">
            <h2 className="font-bold">Hệ thống cửa hàng sửa chữa điện thoại vui</h2>
            <p className="text-[13px]" >Giờ mở cửa: 8h-22h(Áp dụng tùy của hàng)</p>
            <div className="box_CuaHangSearch bg-slate-100 w-1/2 h-[100px] border-2 rounded-lg ">
                <div className="select_box flex flex-row justify-around p-[10px]">
                    <select className="khuVuc border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                        <option>Tất cả khu vực</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                    <select className="Tinh border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                    <option>Chọn tỉnh thành</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                    <select className="quan border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                    <option>Chọn quận</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                </div>
                <div className="m-auto">
                    <input className="w-[530px] ml-[24px] pl-[5px] border-[1px] border-black rounded-sm " placeholder="Nhập tên đường, quận, huyện"></input>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[1200px] m-auto mt-[10px]">
        <div className="box_diaChi w-full border-2 rounded-lg p-[10px]">
            <h2 className="font-bold">Trung tâm bảo hành Uỷ quyền Apple - Điện thoại vui</h2>
            <p className="text-[13px]" >Giờ mở cửa: 8h-22h(Áp dụng tùy của hàng)</p>
            <div className="box_CuaHangSearch bg-slate-100 w-1/2 h-[100px] border-2 rounded-lg ">
                <div className="select_box flex flex-row justify-around p-[10px]">
                    <select className="khuVuc border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                        <option>Tất cả khu vực</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                    <select className="Tinh border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                    <option>Chọn tỉnh thành</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                    <select className="quan border-[1px] border-black rounded-sm w-1/3 m-[10px]">
                    <option>Chọn quận</option>
                        <option>Miền Nam</option>
                        <option>Miền Bắc</option>
                    </select>
                </div>
                <div className="m-auto">
                    <input className="w-[530px] ml-[24px] pl-[5px] border-[1px] border-black rounded-sm " placeholder="Nhập tên đường, quận, huyện"></input>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
