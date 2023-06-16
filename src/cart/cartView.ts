import { Stock } from "../global/stock";
import { Cart } from "../global/cart";


type CartViewOptions = {
  stock: ReturnType<typeof Stock>;
  cart: ReturnType<typeof Cart>;
  element: HTMLElement;
}

export function CartView(cartViewOptions: CartViewOptions) {

  function addEvents() {
    cartViewOptions.element.querySelectorAll(".descrease").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.parentElement!;

        const productId = Number(card.getAttribute("data-productId"));
        const variantId = Number(card.getAttribute("data-variantId"));

        const cartProduct = cartViewOptions.cart.findCartProduct({
          productId,
          variantId
        });

        if (!cartProduct) return;

        if (cartProduct.quantity === 1) {

          cartViewOptions.cart.removeProduct({
            productId,
            variantId
          });
        } else {

          cartViewOptions.cart.changeProductQuantity({
            productId,
            variantId,
            quantity: cartProduct.quantity - 1
          });
        }

        update();
      });
    });

    cartViewOptions.element.querySelectorAll(".increase").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.parentElement!;

        const productId = Number(card.getAttribute("data-productId"));
        const variantId = Number(card.getAttribute("data-variantId"));

        const cartProduct = cartViewOptions.cart.findCartProduct({
          productId,
          variantId
        });

        if (!cartProduct) return;

        cartViewOptions.cart.changeProductQuantity({
          productId,
          variantId,
          quantity: cartProduct.quantity + 1
        });


        update();
      });
    });

    cartViewOptions.element.querySelectorAll(".remove").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.parentElement!

        const productId = Number(card.getAttribute("data-productId"));
        const variantId = Number(card.getAttribute("data-variantId"));

        const cartProduct = cartViewOptions.cart.findCartProduct({
          productId,
          variantId
        });

        if (!cartProduct) return;

        cartViewOptions.cart.removeProduct({
          productId,
          variantId
        });

        update();
      });
    });

    cartViewOptions.element.querySelectorAll("form").forEach(form => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const voucher = form.querySelector(".voucher") as HTMLInputElement;

        cartViewOptions.cart.applyVoucher(voucher.value);

        update();
      });
    });

    cartViewOptions.element.querySelector("#removeVoucher")?.addEventListener("click", () => {
      cartViewOptions.cart.removeVoucher();

      update();
    });
  }

  function update() {
    cartViewOptions.element.innerHTML = `
    `;

    if (cartViewOptions.cart.cartItems.length) {
      cartViewOptions.cart.cartItems.forEach(cartItem => {
        const productId = cartItem.id
        const variantId = cartItem.variantId
        const variantDiscount = cartViewOptions.stock.getProducDiscount(cartItem.id, cartItem.variantId);
        cartViewOptions.element.innerHTML += `
          <div class="card" data-productId="${cartItem.id}" data-variantId="${cartItem.variantId}">
          <div class="container-product">
      <div class="img-product">
        <img src="images/products/${ cartItem.imagem }" alt="" class="image">
      </div>
      <div class="product-information">
        <div class="card container-del" data-productId="${cartItem.id}" data-variantId="${cartItem.variantId}">
          <span class="marca">${ cartItem.marca }</span>
          <button class="remove"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg></button>
        </div>
        <span class="product-name-model">${ cartItem.name } ${ cartViewOptions.stock.getProductVariant(cartItem.id, cartItem.variantId).model }</span>
        <span class="parceiro">vendido e entrgue por <a href="">parceiro</a>
        </span>
      </div>
    </div>

    <div class="container-quantity-price">
      <div class="card container-quantity" data-productId="${cartItem.id}" data-variantId="${cartItem.variantId}">
        <button class="descrease">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
          </svg>
        </button>

        <span class="quantity">${ cartItem.quantity }</span>

        <button class="increase">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
      </div>
      <div class="container-price">
        ${
          variantDiscount ? `
            <span class="price-discount"> <s>R$ ${cartItem.price.toFixed(2)}</s></span>
          ` : ``
        }
        <span class="price-total"> <strong>R$ ${((cartItem.price - cartViewOptions.cart.discountPorduct({productId, variantId})) * cartItem.quantity).toFixed(2)}</strong></span>
      </div>
    </div>
  </div>
          </div>
        `;
      });
    } else {
      cartViewOptions.element.innerHTML += `
        <div class="empty-cart">
        <h1><strong>sua sacola esta vazia...</strong></h1>
        <p>Que tal aproveitar nossas ofertas especiais?</p>
        <span> <a href="index.html">Clique aqui e aproveite nossas ofertas</a></span>
        </div>
      `;
    }

    cartViewOptions.element.innerHTML += `
    <div class="replacement">
    <span class="icon-troca"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
    </svg></span>
    <div class="descrition">
    <p class="title-troca">Troca e devolução facil</p>
    <p class="text-troca">Não se preocupe se quiser trocar, pois a troca é gratuita e pode ser feita em até 30 dias após a sua compra. Caso precise devolver algum produto, o dinheiro será restituído.</p>
    </div>
  </div>

  <div class="cumpons">
    <span class="title-cupom">Cumpons e vales</span>
    <p class="text-cupom">Possui um Cupom de desconto ou Vale-troca? Utilize-o na página de pagamento e aproveite!</p>
    <form>
      <fieldset>
        <input class="voucher" value="${ cartViewOptions.cart.getVoucher()?.code || "" }" required/>
        <button type="submit" class="btn-voucher">Apply</button>
        ${
          cartViewOptions.cart.getVoucher() ? `
            <button type="btn-voucher" id="removeVoucher" class="btn-voucher">Remove</button>
          ` : ``
        }
      </fieldset>
    </form>
  </div>

  <div class="resumo">
    <h1 class="resumo-title">Resumo</h1>
    <div class="subtotal">
      <span class="sub-itens-quantity">Subtotal(itens)</span>
      <span  class="subtotal-value">RS${ (cartViewOptions.cart.getTotal() - cartViewOptions.cart.getDiscont()).toFixed(2) }</span>
    </div>
    <div class="total">
      <span class="total-title">Total</span>
      <span  class="total-value"> <strong>R$ ${cartViewOptions.cart.getAmount().toFixed(2)}</strong></span>
    </div>
  </div>
  <button class="btn-buy">Finalizar compra</button>
  <button class="btn-home"> <a href="index.html"> Continuar comprando</a></button>
    `;
    addEvents();

  }

  return {
    update
  }
}