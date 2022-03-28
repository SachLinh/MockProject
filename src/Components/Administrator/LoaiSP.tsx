import { useEffect, useState } from 'react';
import axios from 'axios';

interface listLoaiSpType {
    name: string;
    id: string;
    DanhMucId: string;
}

export default function LoaiSP() {
    useEffect(() => {
        getLoaiSP()
    }, []);
    const [loaiSP, setLoaiSP] = useState<listLoaiSpType[]>([])
    const getLoaiSP = async () => {
        try {
            const res = await axios.get(
                `https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/1/Loai`
            );
            setLoaiSP(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='text-center ml-5'>
            <div>
                <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
                <section className="bg-white py-20 lg:py-[120px]">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <div className="max-w-full overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr className="bg-red-500 text-center">
                                                <th className="table-header border-l">
                                                    ID
                                                </th>
                                                <th className="table-header">
                                                    Tên
                                                </th>
                                                <th className="table-header">
                                                    ID Danh Mục
                                                </th>
                                                <th className="table-header border-r ">
                                                    Chức Năng
                                                </th>
                                            </tr>
                                        </thead>
                                        {loaiSP.map(item => {
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <td className="table-body">
                                                            {item.id}
                                                        </td>
                                                        <td className="table-body">
                                                            {item.name}
                                                        </td>
                                                        <td className="table-body">
                                                            {item.DanhMucId}
                                                        </td>
                                                        <td className="table-body border-r">
                                                            
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== Table Section End */}
            </div>
        </div>
    )
}