export type ProductVariant = {
  id: number;
  model: string;
  color: string;
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
  imagem: string;
  marca: string;
  variants: ProductVariant[];
}

export type CartItem = {
  variantId: number;
  model: string;
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