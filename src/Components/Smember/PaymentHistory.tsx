import axios from 'axios'
import { list } from 'postcss';
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../Recoil/RecoilState';
import { BillType } from '../../TypeState/BillType';

type Props = {}

function PaymentHistory({ }: Props) {

  const [billList, setBillList] = useState<BillType[]>([]);
  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    getBillList();
  }, [])

  const getBillList = async () => {
    const listBill: BillType[] = [];
    await axios.get('https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon')
      .then(res => {
        res.data.map((value: any) => {
          if (value.billInfo.uid == userInfo.uid) {
            listBill.push(value.billInfo);
          }
        })
        setBillList(listBill);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="col-start-2 col-span-3 bg-[#eee] rounded-3xl py-3 px-2">
      <h2 className="text-red-600 text-center font-semibold text-2xl">QUẢN LÝ ĐƠN HÀNG</h2>
      <p className="text-red-600 font-semibold text-lg border-b-[3px] border-red-600 w-max">Tất cả</p>
      <table className="table-fixed w-full mx-auto mt-2">
        <thead>
          <tr className='text-red-600'>
            <th>Mã đơn hàng</th>
            <th>Ngày đặt</th>
            <th>Người nhận</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody className='font-semibold'>
          {
            billList.map((bill, key) => {
              return (
                <tr key={key}>
                  <td>{bill.id}</td>
                  <td>{bill.date}</td>
                  <td>{bill.customerName}</td>
                  <td>{bill.totalPrice}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PaymentHistory