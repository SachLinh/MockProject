import React from 'react'

type Props = {}

function PaymentHistory({}: Props) {
  return (
    <div className="col-start-2 col-span-3 bg-[#eee] rounded-3xl py-3 px-2">
      <h2 className="text-red-600 text-center font-semibold text-2xl">QUẢN LÝ ĐƠN HÀNG</h2>
      <p className="text-red-600 font-semibold text-lg border-b-[3px] border-red-600 w-max">Tất cả</p>
    </div>
  )
}

export default PaymentHistory