/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoaiSPType } from '../../TypeState/LoaiSP';
interface TypeID {
	id: string;
}
export default function MenuC2(props: TypeID) {
	useEffect(() => {
		getLoaiSP();
	}, []);
	const [listLoaiSP, setLoaiSP] = useState<LoaiSPType[]>([]);
	const getLoaiSP = async () => {
		try {
			const res = await axios.get(
				`https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai`,
			);
			setLoaiSP(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	const showLoaiSP = listLoaiSP.map((itemLoai, indexLoai) => {
		if (itemLoai.DanhMucId === props.id) {
			return (
				<li
					className='hover:bg-[#fab6b6]  p-[6px] pl-[10px]'
					key={indexLoai}>
					<Link
						className='w-full pl-[20px]'
						to={`/DanhMucSPCon/${props.id}/Loai/${itemLoai.id}`}>
						{itemLoai.name}
					</Link>
				</li>
			);
		}
	});
	return <div>{showLoaiSP}</div>;
}
