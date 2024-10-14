export interface ApiProduct {
    id: number;
    title: string;
    category: string;
    rating: number;
    stock: number;
    price: number;
    thumbnail: string;
}

export interface ProductsResponse {
    products: ApiProduct[];
}

export interface ProductDto {
    id: number;
    name: string;
    imageUrl: string;
    description?: string;
    price: number;
    discount: number;
    quantity: number;
    categoryId: number;
    categoryName?: string;
    archived: boolean;
}
<<<<<<< HEAD
export interface CreateProductModel {
    name: string;
    imageUrl: string;
    description?: string;
=======

export interface CreateProductModel {
    name: string;
    imageUrl: string;
    description: string | null;
>>>>>>> f8de1d4221b2a5bebf4e2ba9c4b0cfad19fbde14
    price: number;
    discount: number;
    quantity: number;
    categoryId: number;
    archived: boolean;
<<<<<<< HEAD
=======
}

export interface EditProductModel {
    id: number;
    name: string;
    imageUrl: string;
    description: string | null;
    price: number;
    discount: number;
    quantity: number;
    categoryId: number;
    archived: boolean;
}

export interface CategoryModel {
    id: number;
    name: string;
>>>>>>> f8de1d4221b2a5bebf4e2ba9c4b0cfad19fbde14
}