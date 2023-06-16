import { Product, ProductVariant } from "../global/types";
import { Stock } from "../global/stock";

type InfoViewOptions = {
  stock: ReturnType<typeof Stock>;
  product: Product;
  variant: ProductVariant;
  element: HTMLElement;
};

export function InfoView(infoViewOptions: InfoViewOptions) {
  const { product, variant, element } = infoViewOptions;

  function addEvents () {

    const selectElement = element.querySelector("#select-color") as HTMLSelectElement;
    selectElement.addEventListener("change", () => {

      const selectedVariantId = selectElement.value;
      let link = `/product.html?productId=${product.id}&variantId=${selectedVariantId}`;
      window.location.href = link

      const buyButton = element.querySelector(".btn-buy") as HTMLAnchorElement;
      const href = `/cart.html?productId=${product.id}&variantId=${selectedVariantId}`;
      buyButton.href = href;

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
    <Span class="Model">${variant.model} <strong>${variant.color}</strong> </Span>
    <span class="parceiro">vendido e entrgue <a href="">Parceio</a></span>
  </div>

<div class="selecions">
  <div class="select-colors">
      <span>Selecione tamanho e cor</span>
  <select id="select-color">
  <options value="">Choose a variant</options>
  ${infoViewOptions.stock
    .getProduct(product.id)
    .variants.map((variants) => {
      return `<option value="${variants.id}" ${variants.id === variant.id  ? 'selected' : ''}>${variants.size} ${variants.color}</option>`;
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
  <a class="btn-buy" href="/cart.html?productId=${product.id} &variantId=${
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
