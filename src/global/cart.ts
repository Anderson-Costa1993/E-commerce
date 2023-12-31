import { CartItem } from "./types";
import { Stock } from "./stock";

export type AddProductOptions = {
  productId: number;
  variantId: number;
  quantity: number;
};

type RemoveProductOptions = {
  productId: number;
  variantId: number;
};

export type FindProductOptions = {
  productId: number;
  variantId: number;
}

type Voucher = {
  code: string;
  discount: number;
}

type CartOptions = {
  stock: ReturnType<typeof Stock>;
}

export function Cart(cartOptions: CartOptions) {
  const cartItems: CartItem[] = getLocalStorageCartItems();
  const vouchers: Voucher[] = [
    {
      code: "VOUCHER1",
      discount: 10,
    }
  ];
  let voucher: Voucher | undefined = getLocalStorageVoucher();

  function addProduct(options: AddProductOptions) {
    const { productId, variantId, quantity } = options;

    const findedProduct = findProduct({ productId, variantId });

    if (!findedProduct) {
      throw new Error(`Product with id ${productId} and variant id ${variantId} not found`);
    }


    const cartProduct = findCartProduct({ productId, variantId });

    if (cartProduct) {

      changeProductQuantity({
        productId,
        variantId,
        quantity: cartProduct.quantity + quantity,
      });

    } else {

    const { product, variant } = findedProduct;

    if (quantity > variant.quantity) {
      alert("Produto esgotado")
      throw new Error(`Product with id ${productId} and variant id ${variantId} has only ${variant.quantity} quantity`);
    }

    cartItems.push({
      id: product.id,
      name: product.name,
      model: product.model,
      imagem: variant.imagem,
      marca: product.marca,
      price: variant.price,
      discount: variant.discount,
      discountName: variant.discountName,
      amount: variant.amount,
      color: product.color,
      size: variant.size,
      quantity,
      variantId,
    });
  }

    updateLocalStorageCartItems();
  }

  function removeProduct(options: RemoveProductOptions) {
    const { productId } = options;

    const productIndex = cartItems.findIndex(p => p.id === productId);

    if (productIndex === -1) {
      throw new Error(`Product with id ${productId} not found`);
    }

    cartItems.splice(productIndex, 1);

    updateLocalStorageCartItems();
  }

  function changeProductQuantity(options: AddProductOptions) {
    const { productId, variantId, quantity } = options;

    const product = findCartProduct({ productId, variantId });
    const variant = cartOptions.stock.getProductVariant(productId, variantId);

    if (!product) {
      throw new Error(`Product with id ${productId} and variant id ${variantId} not found`);
    }

    if (quantity > variant.quantity) {
      alert("Produto esgotado")
      throw new Error(`Product with id ${productId} and variant id ${variantId} has only ${variant.quantity} quantity`);
    }

    product.quantity = quantity;

    updateLocalStorageCartItems();
  }

  function discountPorduct (options: FindProductOptions) {
    const { productId, variantId } = options;
    const cartProduct = findCartProduct({ productId, variantId });
    let discount = 0
    if (cartProduct) {
      discount = cartProduct.price * cartProduct.discount
    }
    return discount

  }

  function getDiscont (){
    const discont = cartItems.reduce((total, item) => total + item.price * item.discount * item.quantity, 0);
    return discont
  }

  function getTotal() {
    let subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return subtotal
  }

  function getAmount (){
    let amount = getTotal() - getDiscont()

    if (!cartItems.length) {
      removeVoucher()
    }
    if (!voucher) return amount;

    return amount - voucher.discount;
  }

  function findProduct(options: FindProductOptions) {
    const product = cartOptions.stock.getProduct(options.productId);

    if (!product) return undefined;

    const variant = cartOptions.stock.getProductVariant(options.productId, options.variantId);

    if (!variant) return undefined;

    return {
      product,
      variant,
    };
  }

  function findCartProduct(options: FindProductOptions) {
    return cartItems.find(p => p.id === options.productId && p.variantId === options.variantId);
  }

  function applyVoucher(code: string) {
    const findedVoucher = findVoucher(code);

    if (!findedVoucher) {
      throw new Error(`Voucher with code ${code} not found`);
    }

    voucher = findedVoucher;

    updateLocalStorageVoucher();
  }

  function removeVoucher() {
    voucher = undefined;

    updateLocalStorageVoucher();
  }

  function findVoucher(code: string) {
    const findedVoucher = vouchers.find(v => v.code === code);

    if (!findedVoucher) return undefined;

    return findedVoucher;
  }

  function getVoucher(): Voucher | undefined {
    return voucher;
  }

  function getLocalStorageCartItems(): CartItem[] {
    const cartItems = localStorage.getItem("cartItems");

    if (!cartItems) return [];

    return JSON.parse(cartItems);
  }

  function updateLocalStorageCartItems() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  function getLocalStorageVoucher(): Voucher | undefined {
    const voucher = localStorage.getItem("voucher");

    if (!voucher) return undefined;

    return findVoucher(voucher);
  }

  function updateLocalStorageVoucher() {
    if (voucher) {
      localStorage.setItem("voucher", voucher.code);
    } else {
      localStorage.removeItem("voucher");
    }
  }

  console.log(cartItems)

  return {
    cartItems,
    getVoucher,
    addProduct,
    removeProduct,
    changeProductQuantity,
    findProduct,
    findCartProduct,
    applyVoucher,
    removeVoucher,
    getTotal,
    getDiscont,
    getAmount,
    discountPorduct
  }
}