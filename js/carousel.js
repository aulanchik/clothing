document.addEventListener("DOMContentLoaded", function() {
    const brands = [
        {src: "assets/images/banner-1.png"},
        {src: "assets/images/banner-2.png"},
        {src: "assets/images/banner-3.png"},
        {src: "assets/images/banner-4.png"},
        {src: "assets/images/banner-5.png"},
        {src: "assets/images/banner-6.png"},
        {src: "assets/images/banner-7.png"}
    ];

    const carousel = document.getElementById('carousel');
    carousel.classList.add('carousel');
    carousel.classList.add('slide-in-bottom');

    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel__container');

    const fragment = document.createDocumentFragment();

    brands.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = `Brand ${index + 1}`;
        fragment.appendChild(img);
    });

    carouselContainer.appendChild(fragment.cloneNode(true));
    carouselContainer.appendChild(fragment);

    carousel.appendChild(carouselContainer);
});
