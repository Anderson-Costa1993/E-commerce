import { Product, ProductVariant, GetStockProductOptions } from "./types";

export function Stock() {
  const products: Product[] = [
    {
      id: 1,
      name: "Camiseta",
      imagem: "blusaJeans.jpg",
      marca: "Reserva",
      variants: [
        {
          id: 1,
          model: "Reserva Easy Oxford Denim",
          color: "Preto",
          size: "M",
          quantity: 3,
          price: 100.00,
          discountName: "10%",
          discount: 0.10,
          amount: 0,
        },
        {
          id: 2,
          model: "Reserva Easy Oxford Denim",
          color: "Branco",
          size: "P",
          quantity: 3,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
        {
          id: 3,
          model: "Reserva Easy Oxford Denim",
          color: "Amarelo",
          size: "GG",
          quantity: 3,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
        {
          id: 4,
          model: "Reserva Easy Oxford Denim",
          color: "Preto",
          size: "G",
          quantity: 3,
          price: 100.00,
          discountName: "10%",
          discount: 0.10,
          amount: 0,
        },
      ],
    },
    {
      id: 2,
      name: "Calça Jeans",
      imagem: "calcaJeans300.jpg",
      marca: "Jhon Jhon",
      variants: [
        {
          id: 1,
          model: "Skinny Noruega John John Masculina",
          color: "Branco",
          size: "G",
          quantity: 10,
          price: 150,
          discount: 0.20,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 2,
          model: "Skinny Noruega John John Masculina",
          color: "Azul",
          size: "P",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        }
      ],
    },
    {
      id: 3,
      name: "Tenis",
      imagem: "tenis.jpg",
      marca: "Nike",
      variants: [
        {
          id: 1,
          model: "Court Royale 2 Next Nature Masculino",
          color: "Branco",
          size: "39",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 2,
          model: "Nike Court Royale 2 Next Nature Masculino",
          color: "Azul",
          size: "40",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        }
      ],
    },
    {
      id: 4,
      name: "Bermuda",
      imagem: "bermuda.jpg",
      marca: "TNG",
      variants: [
        {
          id: 1,
          model: "Bermuda Five Pockets Color",
          color: "Branco",
          size: "G    ",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 2,
          model: "Bermuda Five Pockets Color",
          color: "Azul",
          size: "P",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        }
      ],
    }
  ];


  function getProduct(productId: number): Product {
    const product = products.find(p => p.id === productId);

    if (!product) {
      throw new Error(`Product with id ${productId} not found`);
    }

    return product;
  };


  function getProductVariant(productId: number, variantId: number): ProductVariant {
    const product = getProduct(productId);
    const variant = product.variants.find(v => v.id === variantId);

    if (!variant) {
      throw new Error(`Variant with id ${variantId} not found`);
    }
    return variant;
  };


  function changeQuantityStock(options: GetStockProductOptions){

    const { productId, variantId, quantity } = options;

    const product = getProduct(productId);
    const variant = getProductVariant(productId, variantId);

    if (!product || !variant) {
      throw new Error(`Product with id ${productId} and variant id ${variantId} not found`);
    }

    variant.quantity = quantity
  }

  function getProducDiscount(productId: number, variantId: number){
    getProduct(productId);
    const variant = getProductVariant(productId, variantId)
    let discount = variant.price * variant.discount

    return discount;
  };

  function getTotal (productId: number, variantId: number){
    getProduct(productId);
    const variant = getProductVariant(productId, variantId)
    let total =  variant.price - getProducDiscount(productId, variantId)
    return total.toFixed((2))
  }


  return {
    products,
    getProduct,
    getProductVariant,
    changeQuantityStock,
    getProducDiscount,
    getTotal
  }
}