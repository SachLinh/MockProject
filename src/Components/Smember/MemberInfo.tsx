import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom';

type Props = {}

interface userdata {
  uid: string,
  email: string,
  displayName: string,
  photoURL: string
}

function MemberInfo({ }: Props) {
  const [user, setUser] = useState<userdata>();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('mock-project-smember') + ""));
    console.log(user?.displayName);
  }, [])
  return (
    <div className="mt-20 w-5/6 mx-auto grid grid-flow-row grid-cols-4 gap-3">
      <div className="rounded-2xl shadow-xl border-[1px] border-gray-300">
        <div className="grid grid-flow-row grid-cols-5 m-2 p-2 border-[1px] border-red-500 rounded-xl bg-[#fee]  cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <p className="font-semibold text-red-500 text-xl col-start-2 col-span-4">Trang chủ</p>
        </div>
        <div className="grid grid-flow-row grid-cols-5 m-2 p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#686868] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <p className="font-semibold text-[#686868] text-xl col-start-2 col-span-4">Lịch sử mua hàng</p>
        </div>
        <div className="grid grid-flow-row grid-cols-5 m-2 p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#686868] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-semibold text-[#686868] text-xl col-start-2 col-span-4">Tài khoản của bạn</p>
        </div>
        <div className="grid grid-flow-row grid-cols-5 m-2 p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#686868] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
          </svg>
          <p className="font-semibold text-[#686868] text-xl col-start-2 col-span-4">Hỗ trợ</p>
        </div>
        <Link to="/Smember">
          <div onClick={() => firebase.auth().signOut()} className="grid grid-flow-row grid-cols-5 m-2 p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#686868] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <p className="font-semibold text-[#686868] text-xl col-start-2 col-span-4">Thoát tài khoản</p>
          </div>
        </Link>
      </div>
      <div className="col-start-2 col-span-3">
        <div>
          <div className="grid grid-flow-row grid-cols-2">
            <div className="border-[1px] border-gray-300 rounded-xl text-center">
              <img className="mx-auto mt-4 w-12 h-12 m-1 border-slate-800 border-1 rounded-full" src={user?.photoURL} />
              <p>Xin chào</p>
              <h2 className="font-semibold text-red-600 text-3xl">{user?.displayName}</h2>
              <div className="grid grid-flow-row grid-cols-3 mt-4">
                <div className="">
                  <p className="text-lg">Ngày tham gia</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-semibold text-lg">23/3/2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberInfo