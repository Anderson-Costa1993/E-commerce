import { Product, ProductVariant } from "../global/types";
import { Stock } from "../global/stock";

type GalleryViewOptions = {
  stock: ReturnType<typeof Stock>;
  product: Product;
  variant: ProductVariant;
  element: HTMLElement;
};

export function GalleryView(galleryViewOptions: GalleryViewOptions) {
  const { product, variant } = galleryViewOptions;

  function update() {
    galleryViewOptions.element.innerHTML = `

    <div class="container-gallery">
    <div class="gallery-path">
      <span class="product">
        <p>${product.name}</p> > ${variant.model} > ${variant.color}
      </span>
    </div>
    <div class="container-image">
    <div class="image">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="/images/products/${product.imagem}"img-pruduct">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/images/products/${product.imagem}" alt="Segundo Slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/images/products/${product.imagem}" alt="Segundo Slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </a>
      </div>
    </div>
  </div>
    `;
  }

  return {
    update
  }
}