import { Product, ProductVariant, GetStockProductOptions } from "./types";

export function Stock() {
  const products: Product[] = [

    {
      id: 1,
      name: "Camiseta",
      marca: "StyleMenswear",
      model: "StyleMenswear ClassicEssentials",
      color: "Branco",
      variants: [
        {
          id: 1,
          imagem: "t-shirt-white.jpg",
          imagem1: "t-shirt-white-2.jpg",
          imagem2: "t-shirt-white.jpg",
          size: "P",
          quantity: 3,
          price: 100.00,
          discountName: "10%",
          discount: 0.10,
          amount: 0,
        },
        {
          id: 2,
          imagem: "t-shirt-white.jpg",
          imagem1: "t-shirt-white-2.jpg",
          imagem2: "t-shirt-white.jpg",
          size: "M",
          quantity: 5,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
        {
          id: 3,
          imagem: "t-shirt-white.jpg",
          imagem1: "t-shirt-white-2.jpg",
          imagem2: "t-shirt-white.jpg",
          size: "G",
          quantity: 3,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
      ],
    },

    {
      id: 2,
      name: "Camiseta",
      marca: "StyleMenswear",
      model: "StyleMenswear ClassicEssentials",
      color: "Preto",
      variants: [
        {
          id: 1,
          imagem: "t-shirt-black.jpg",
          imagem1: "t-shirt-black-2.jpg",
          imagem2: "t-shirt-black.jpg",
          size: "P",
          quantity: 3,
          price: 100.00,
          discountName: "10%",
          discount: 0,
          amount: 0,
        },
        {
          id: 2,
          imagem: "t-shirt-black.jpg",
          imagem1: "t-shirt-black-2.jpg",
          imagem2: "t-shirt-black.jpg",
          size: "M",
          quantity: 3,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
        {
          id: 3,
          imagem: "t-shirt-black.jpg",
          imagem1: "t-shirt-black-2.jpg",
          imagem2: "t-shirt-black.jpg",
          size: "G",
          quantity: 3,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
        {
          id: 4,
          imagem: "t-shirt-black.jpg",
          imagem1: "t-shirt-black-2.jpg",
          imagem2: "t-shirt-black.jpg",
          size: "GG",
          quantity: 3,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
      ],
    },

    {
      id: 3,
      name: "Calça Jeans",
      marca: "StyleMenswear",
      model: "UrbanFit Masculina",
      color: "Azul",
      variants: [
        {
          id: 1,
          imagem: "calça-jeans-azul.jpg",
          imagem1: "calça-jeans-azul-2.jpg",
          imagem2: "calça-jeans-azul.jpg",
          size: "P",
          quantity: 10,
          price: 150,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
        {
          id: 2,
          imagem: "calça-jeans-azul.jpg",
          imagem1: "calça-jeans-azul-2.jpg",
          imagem2: "calça-jeans-azul.jpg",
          size: "M",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 4,
          imagem: "calça-jeans-azul.jpg",
          imagem1: "calça-jeans-azul-2.jpg",
          imagem2: "calça-jeans-azul.jpg",
          size: "GG",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
      ],
    },


    {
      id: 4,
      name: "Calça Jeans",
      marca: "StyleMenswear",
      model: "UrbanFit Masculina",
      color: "Cinza",
      variants: [
        {
          id: 1,
          imagem: "calça-jeans-cinza.jpg",
          imagem1: "calça-jeans-cinza-2.jpg",
          imagem2: "calça-jeans-cinza.jpg",
          size: "38",
          quantity: 10,
          price: 150,
          discount: 0.20,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 2,
          imagem: "calça-jeans-cinza.jpg",
          imagem1: "calça-jeans-cinza-2.jpg",
          imagem2: "calça-jeans-cinza.jpg",
          size: "40",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 3,
          imagem: "calça-jeans-cinza.jpg",
          imagem1: "calça-jeans-cinza-2.jpg",
          imagem2: "calça-jeans-cinza.jpg",
          size: "42",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
      ],
    },


    {
      id: 5,
      name: "Tenis",
      marca: "Nike",
      model: "Court Royale 2 Next Nature Masculino",
      color: "Preto",
      variants: [
        {
          id: 1,
          imagem: "tenis-nike-court-royale-preto.jpeg",
          imagem1: "tenis-nike-court-royale-2-preto.jpg",
          imagem2: "tenis-nike-court-royale-preto.jpeg",
          size: "39",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 2,
          imagem: "tenis-nike-court-royale-preto.jpeg",
          imagem1: "tenis-nike-court-royale-2-preto.jpg",
          imagem2: "tenis-nike-court-royale-preto.jpeg",
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
      id: 6,
      name: "Bermuda",
      marca: "StyleMenswear",
      model: "Bermuda StyleMenswear DenimFlex",
      color: "Azul",
      variants: [
        {
          id: 1,
          imagem: "bermuda-jeans-azul.jpg",
          imagem1: "bermuda-jeans-azul-2.jpg",
          imagem2: "bermuda-jeans-azul.jpg",
          size: "P",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 2,
          imagem: "bermuda-jeans-azul.jpg",
          imagem1: "bermuda-jeans-azul-2.jpg",
          imagem2: "bermuda-jeans-azul.jpg",
          size: "M",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        }
      ],
    },

    {
      id: 7,
      name: "Camiseta",
      marca: "StyleMenswear",
      model: "StyleMenswear RetroStree",
      color: "Azul",
      variants: [
        {
          id: 1,
          imagem: "t-shirt-azul.jpg",
          imagem1: "t-shirt-azul-2.jpg",
          imagem2: "t-shirt-azul.jpg",
          size: "P",
          quantity: 3,
          price: 100.00,
          discountName: "10%",
          discount: 0.10,
          amount: 0,
        },
        {
          id: 2,
          imagem: "t-shirt-azul.jpg",
          imagem1: "t-shirt-azul-2.jpg",
          imagem2: "t-shirt-azul.jpg",
          size: "M",
          quantity: 5,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
      ],
    },

    {
      id: 8,
      name: "Bermuda",
      marca: "Reserva",
      model: "Bermuda Five sarja Color",
      color: "Cinza",
      variants: [
        {
          id: 1,
          imagem: "bermuda-sarja-cinza.jpg",
          imagem1: "bermuda-sarja-cinza-2.jpg",
          imagem2: "bermuda-sarja-cinza-3.jpg",
          size: "P",
          quantity: 3,
          price: 100.00,
          discountName: "10%",
          discount: 0.10,
          amount: 0,
        },
        {
          id: 2,
          imagem: "bermuda-sarja-cinza.jpg",
          imagem1: "bermuda-sarja-cinza-2.jpg",
          imagem2: "bermuda-sarja-cinza-3.jpg",
          size: "M",
          quantity: 5,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
      ],
    },

    {
      id: 9,
      name: "Bermuda",
      marca: "Reserva",
      model: "Bermuda Five sarja Color",
      color: "Bege",
      variants: [
        {
          id: 1,
          imagem: "bermuda-sarja-bege.jpg",
          imagem1: "bermuda-sarja-bege-2.jpg",
          imagem2: "bermuda-sarja-bege.jpg",
          size: "P",
          quantity: 3,
          price: 100.00,
          discountName: "10%",
          discount: 0.10,
          amount: 0,
        },
        {
          id: 2,
          imagem: "bermuda-sarja-bege.jpg",
          imagem1: "bermuda-sarja-bege-2.jpg",
          imagem2: "bermuda-sarja-bege.jpg",
          size: "M",
          quantity: 5,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
      ],
    },

    {
      id: 10,
      name: "Bermuda",
      marca: "StyleMenswear",
      model: "Bermuda StyleMenswear DenimFlex",
      color: "Cinza",
      variants: [
        {
          id: 1,
          imagem: "bermuda-jeans.cinza.jpg",
          imagem1: "bermuda-jeans-cinza-2.jpg",
          imagem2: "bermuda-jeans.cinza.jpg",
          size: "P",
          quantity: 3,
          price: 100.00,
          discountName: "10%",
          discount: 0.10,
          amount: 0,
        },
        {
          id: 2,
          imagem: "bermuda-jeans.cinza.jpg",
          imagem1: "bermuda-jeans-cinza-2.jpg",
          imagem2: "bermuda-jeans.cinza.jpg",
          size: "M",
          quantity: 5,
          price: 100.00,
          discount: 0.20,
          discountName: "20%",
          amount: 0,
        },
      ],
    },

    {
      id: 11,
      name: "Tenis",
      marca: "Nike",
      model: "Court Royale 2 Next Nature Masculino",
      color: "Branco",
      variants: [
        {
          id: 1,
          imagem: "tenis-nike-court-royale-2.png",
          imagem1: "tenis-nike-court-royale-2-branco.jpg  ",
          imagem2: "tenis-nike-court-royale-2.png",
          size: "39",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        },
        {
          id: 2,
          imagem: "tenis-nike-court-royale-2.png",
          imagem1: "tenis-nike-court-royale-2-branco.jpg",
          imagem2: "tenis-nike-court-royale-2.png",
          size: "40",
          quantity: 10,
          price: 150,
          discount: 0,
          discountName: "0%",
          amount: 0,
        }
      ],
    },


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

  function findSimilarProducts(productId: number): number[] {
    const product = products.find((p) => p.id === productId);

    if (product) {
      const similarProducts = products.filter(
        (p) => p.model === product.model && p.id !== productId
      );

      return similarProducts.map((p) => p.id);
    }
    return [];
  }

  function findSimilarVariant(productId: number, variantId: number): number[] {
    const product = products.  find((p) => p.id === productId);
    const variant = product?.variants.filter((v) => v.id === variantId)

    if (variant) {
      const similarVariant = variant.filter(
        (p) => p.id !== productId
      );
      return similarVariant.map((p) => p.id);
    }
    return [];
  }




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
    getTotal,
    findSimilarProducts,
    findSimilarVariant
  }
}