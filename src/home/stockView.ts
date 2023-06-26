import { Stock } from "../global/stock";
import { Cart } from "../global/cart";
import { UpdateViewFunction } from "./types";

type StockViewOptions = {
  stock: ReturnType<typeof Stock>;
  cart: ReturnType<typeof Cart>;
  element: HTMLElement;
  updateView: UpdateViewFunction;
}

export function StockView(stockViewOptions: StockViewOptions) {

  function addEvents () {

    stockViewOptions.element.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        const productId = Number(card.getAttribute("data-productId"));
        const variantId = Number(card.getAttribute("data-variantId"));
        window.location.href = `/product.html?productId=${productId}&variantId=${variantId}`;
      });
    });
  }


    function update() {
      stockViewOptions.stock.products.forEach(product => {
        const firstvariant = product.variants[0]
          const variantDiscount = stockViewOptions.stock.getProducDiscount(product.id, firstvariant.id);
          stockViewOptions.element.innerHTML += `

    <div class="card" data-productId="${product.id}" data-variantId="${firstvariant.id}">
        <div class="img-exposicion">
          <img src="/images/products/${firstvariant.imagem}" alt="" class="img-product">
        </div>

        <span class="marca">${product.marca}</span>
        <div class="dados-product">
          <span class="nome-produto">
            <p>${ product.name } ${product.model}</p>
          </span>
        </div>

        <div class="precos">
          ${
            variantDiscount ? `
              <div class="container-desconto">
                <span id="valor-desconto"><s>R$${ firstvariant.price.toFixed(2) }</s></span>
                <span id="nome-desconto">-${ firstvariant.discountName }</span>
              </div>
            ` : ``
          }
            <span id="valor-total">R$${stockViewOptions.stock.getTotal(product.id, firstvariant.id)}</span>
        </div>
    </div>
        `;
      });
      addEvents();
    }

    return {
      update
    }
  }

