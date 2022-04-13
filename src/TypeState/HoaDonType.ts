export interface ProductList {
  id: string;
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  count: number;
}

export interface BillInfo {
  id: string;
  productLists: ProductList[];
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  cutomerAddress: string;
  uid: string;
  date: string;
  totalPrice: string;
}

export interface HoaDonType {
  billInfo: BillInfo;
  id: string;
}
