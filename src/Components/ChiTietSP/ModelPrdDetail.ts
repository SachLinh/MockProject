export interface DetailProduct {
	name: string;
	avatar: string;
	kichThuoc: string;
	doPhangiai: string;
	congNghemanhinh: string;
	chatLieu: string;
	hangSanxuat: string;
	thoiLuongpin: number;
	thoiGiansac: number;
	loaiCpu: string;
	tinhNangnoibat: string;
	cameraSau: string;
	cameraTruoc: string;
	RAM: string;
	ROM: string;
	SIM: string;
	heDieuHanh: string;
    giaCu: string
    gia: string
	id: string;
	SanPhamId: string;
}
export interface Color {
    color: string;
    colorPrice: string;
    id: string;
    SanPhamId: string;
}
export interface Capacity {
    capacity: number;
    capacityPrice: string;
    id: string;
    SanPhamId: string;
}
export interface Images {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    id: string;
    SanPhamId: string;
}