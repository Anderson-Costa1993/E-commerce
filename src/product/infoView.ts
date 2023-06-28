import { Product, ProductVariant } from "../global/types";
import { Stock } from "../global/stock";
import { Cart } from "../global/cart";

type InfoViewOptions = {
  stock: ReturnType<typeof Stock>;
  cart: ReturnType<typeof Cart>;
  product: Product;
  variant: ProductVariant;
  element: HTMLElement;
};

export function InfoView(infoViewOptions: InfoViewOptions) {
  const { product, variant, element } = infoViewOptions;

  function addEvents () {

    const selectElement = element.querySelector("#select-size") as HTMLSelectElement;
    selectElement.addEventListener("change", () => {
      const selectedVariantId = selectElement.value;
      const buyButton = element.querySelector(".btn-buy") as HTMLAnchorElement;
      const href = `/cart.html?productId=${product.id}&variantId=${selectedVariantId}`;
      buyButton.href = href;
    });

    const selectColor = Array.from(element.querySelectorAll(".select-color")) as HTMLLIElement[];
    selectColor.forEach((selectColor: HTMLLIElement) => {
    selectColor.addEventListener("click", () => {
      const selectColorId = selectColor.value;
      console.log(selectColorId)
      const selectedVariantId = selectElement.value;
      let link = `/product.html?productId=${selectColorId}&variantId=${selectedVariantId}`;
      window.location.href = link
    })
  });
  }


  function update() {
    const variantDiscount = infoViewOptions.stock.getProducDiscount(
      product.id,
      variant.id
    );

  element.innerHTML = `
  <div class = "card" data-productId="${product.id} data-productId="${variant.id}">
  <div class="Product-Data">
    <span class="marca">${product.marca}</span>
    <Span class="Model">${product.model} <strong>${ product.color}</strong></Span>
    <span class="parceiro">vendido e entrgue:<a href="">Parceiro</a></span>
  </div>

  <div class="container-select-color">
    <option value="">Outras Cores</option>
      ${
        infoViewOptions.stock.findSimilarProducts(product.id).map((id) => {
        const similarProduct = infoViewOptions.stock.products.find((p) => p.id === id);
        const similarVariant = similarProduct?.variants.find((v) => v.id)
        return `<li class="select-color" value="${similarProduct?.id} id="list-colors">
        <img src="/images/products/${similarVariant?.imagem}" alt="" class="image-color">
        </li>`
      })
      .join("") }
  </div>

<div class="selecions">
  <div class="select-colors">
  <span>Selecione o tamanho</span>
  <select id="select-size">
  <options value="">Choose a variant</options>
  ${infoViewOptions.stock
    .getProduct(product.id)
    .variants.map((variants) => {
      return `<option value="${variants.id}" ${variants.id === variant.id  ? 'selected' : ''}>${variants.size} </option>`;
    })
    .join("")}
  </select>
</div>

<div class="prices" data-productId="${product.id}" data-variantId="${
      variant.id
    }">
${
  variantDiscount
    ? `
    <div class="container-desconto">
    <span class="price-discount"> <s>R$ ${infoViewOptions.variant.price.toFixed(
      2
    )} </s> </span>
      <span class="name-discount">${infoViewOptions.variant.discountName}</span>
    </div>
  `
    : ``
}
<span class="price">R$ ${infoViewOptions.stock.getTotal(
      product.id,
      variant.id
    )}</span>
</div>
</div>

<div class="container-buy">

  <a class="btn-buy" style="text-decoration: none; color: #f3f4f6;" href="/cart.html?productId=${product.id} &variantId=${
      variant.id
    }">Comprar</a>


</div>
    `;
    addEvents()
  }
  return {
    update,
  };
}
