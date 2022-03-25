import React from 'react'

type Props = {}

export default function CartItem({ }: Props) {
    return (
        <div className='mt-3 px-2 py-3 grid grid-flow-row grid-cols-3 border border-solid rounded-xl  relative shadow-lg'>
            <div className=''>
                <img
                    src='https://image.cellphones.com.vn/200x/media/catalog/product/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611_2.jpg'
                    alt='product in cart'
                />
            </div>
            <div className='col-start-2 col-span-2'>
                <p className='font-bold'>Samsung Galaxy Z Fold3 5G-Bạc</p>
                <div className='grid grid-flow-row grid-cols-4'>
                    <p className='text-sm text-red-600 font-semibold pt-1'>
                        35.990.000 ₫
                    </p>
                    <p className='text-sm text-[#777] line-through font-light pt-1'>
                        41.990.000 ₫
                    </p>
                    <div className='bg-red-600 w-10/12 p-1 rounded-lg'>
                        <p className='text-sm text-white font-semibold'>
                            Giảm 14%
                        </p>
                    </div>
                </div>
                <div>
                    <span>Chọn số lượng:</span>
                </div>
                <div className='bg-[#f6f6f6] mt-2 pt-2 pb-4 pl-2 rounded-lg'>
                    <p className=''>- Chương trình khuyến mại:</p>
                    <ul className='pl-4 text-red-500'>
                        <li className='list-disc text-[15px] text-black'>
                            Gói dịch vụ ưu tiên cao cấp và phòng chờ hạng thương gia
                        </li>
                    </ul>
                </div>
            </div>
            <div className='absolute h-5 w-5 top-1 right-1'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-gray-500 font-bold cursor-pointer'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                        fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                    />
                </svg>
            </div>
        </div>
    )
}