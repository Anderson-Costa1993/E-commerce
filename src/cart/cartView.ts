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
          <button class="remove">
            <i class="bi bi-trash3" style="font-size: 18px; color:black" ></i>
          </button>
        </div>

        <span class="product-name-model">${ cartItem.name }  ${cartItem.model}</span>
        <span class="parceiro">vendido e entrgue por <a href="">parceiro</a>
        </span>

      </div>
    </div>

    <div class="container-quantity-price">
      <div class="card container-quantity" data-productId="${cartItem.id}" data-variantId="${cartItem.variantId}">

        <button class="descrease">
        <i class="bi bi-dash" style="font-size: 18px; color:black"></i>
        </button>

        <span class="quantity">${ cartItem.quantity }</span>

        <button class="increase">
        <i class="bi bi-plus" style="font-size: 18px; color:black"></i>
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

    if (cartViewOptions.cart.cartItems.length) {

    cartViewOptions.element.innerHTML += `
    <div class="replacement">
    <span class="icon-troca">
      <i class="bi bi-box-seam" style="font-size: 18px; color:black" ></i>
    </span>

    <div class="descrition">
      <p class="title-troca">
        Troca e devolução facil
      </p>
      <p class="text-troca">
        Não se preocupe se quiser trocar, pois a troca é gratuita e pode ser feita em até 30 dias após a sua compra. Caso precise devolver algum produto, o dinheiro será restituído.
      </p>
    </div>
    </div>

  <div class="cumpons">
    <div class="title-voucher">
      <span class="title-cupom">Cumpons e vales</span>
      <span><i class="bi bi-ticket-perforated" style="font-size: 18px; color:black"></i></span>
    </div>

    <p class="text-cupom">
      Possui um Cupom de desconto ou Vale-troca? Utilize-o na página de pagamento e aproveite!
    </p>

    <form>
      <fieldset>
        <input class="voucher" value="${ cartViewOptions.cart.getVoucher()?.code || "" }" required/>
        <button type="submit" class="btn-voucher">OK</button>
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
      <span class="sub-itens-quantity">Subtotal(${cartViewOptions.cart.cartItems.length} itens)</span>
      <span  class="subtotal-value">RS${ (cartViewOptions.cart.getTotal() - cartViewOptions.cart.getDiscont()).toFixed(2)}</span>
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
}
  return {
    update
  }
}