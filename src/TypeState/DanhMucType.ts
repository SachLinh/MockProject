export interface LoaiSP {
    name: string;
    id: string;
}

export interface DanhMucType {
    name: string;
    LoaiSP: LoaiSP[];
    id: string;
}
