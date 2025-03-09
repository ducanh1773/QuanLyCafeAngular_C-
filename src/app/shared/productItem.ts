export type productItem = {
    id: number;
    name: string;
    detail: string;
    price: number;
    category: string; // Thuộc tính còn thiếu
    deleted: boolean; // Thuộc tính còn thiếu
    imageProduct: string; // Thuộc tính còn thiếu
    status: string; // Thuộc 
}



export type productItemAdd = {
    name: string;
    detail: string;
    price: number;
    category_Name: string;
    deleted: boolean;
    imageProduct: string;
    status: boolean,
}