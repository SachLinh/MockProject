import React, { useEffect, useState } from 'react';

type Props = {}

interface userdata {
  uid: string,
  displayName: string,
  email: string,
  photoURL: string,
  phoneNumber: string,
  createdAt: string,
  creationTime: string,
  lastLoginAt: string,
  lastSignInTime: string
}

function YourAccount({ }: Props) {
  const [user, setUser] = useState<userdata>();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('mock-project-smember') + ""));
  }, [])
  return (
    <div className="col-start-2 col-span-3 border-[1px] border-gray-300 rounded-xl text-center">
      <img className="mx-auto mt-4 w-12 h-12 m-1 border-slate-800 border-1 rounded-full" src={user?.photoURL} />
      <p>Xin chào</p>
      <h2 className="font-semibold text-red-600 text-3xl">{user?.displayName}</h2>
      <div className="grid grid-flow-row grid-cols-5 mt-4">
        <div className="">
          <p className="text-lg">Ngày tham gia</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="font-semibold text-lg">{user?.creationTime}</p>
        </div>
        <div className="">
          <p className="text-lg">Ngày đăng nhập</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="font-semibold text-lg">24/3/2022</p>
        </div>
        <div className="">
          <p className="text-lg">Email</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="font-semibold text-lg break-words">{user?.email}</p>
        </div>
        <div className="">
          <p className="text-lg">Số điện thoại</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <p className="font-semibold text-lg">{user?.phoneNumber || "Chưa cập nhật"}</p>
        </div>
        <div className="">
          <p className="text-lg">Sinh nhật</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
          </svg>
          <p className="font-semibold text-lg">Chưa cập nhật</p>
        </div>
      </div>
    </div>
  )
}

export default YourAccount