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
        <p>${product.name}</p> > ${product.model} > ${product.color}
      </span>
    </div>

    <div class="container-image">
    <div class="image">

  <div id="carouselExample" class="carousel slide" >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 image-product" src="/images/products/${variant.imagem}"img-pruduct">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 image-product" src="/images/products/${variant.imagem1}"img-pruduct">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 image-product" src="/images/products/${variant.imagem2}"img-pruduct">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  </div>
    `;

  }
  return {
    update
  }
}