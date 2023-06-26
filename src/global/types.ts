export type ProductVariant = {
  id: number;
  imagem: string;
  imagem1: string;
  imagem2: string;
  size: string;
  price: number;
  discount: number;
  discountName: string;
  amount: number;
  quantity: number;
}

export type Product = {
  id: number;
  name: string;
  marca: string;
  model: string;
  color: string;
  variants: ProductVariant[];
}

export type CartItem = {
  variantId: number;
  model: string;
  imagem: string;
  quantity: number;
  price: number;
  discount: number,
  discountName: string;
  amount: number,
  color: string;
  size: string;
} & Omit<Product, 'variants'>;

export type GetStockProductOptions = {
  productId: number;
  variantId: number;
  quantity: number;
};