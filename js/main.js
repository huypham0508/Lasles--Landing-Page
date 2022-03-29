$(".customer-content").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><ion-icon name='arrow-back-outline'></ion-icon></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><ion-icon name='arrow-forward-outline'></ion-icon></button>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
const navSlide = () => {
  const toogleBar = document.querySelector(".active-mobile");
  const menu = document.querySelector(".menu-mobile");
  toogleBar.addEventListener("click", () => {
    menu.classList.toggle("is-show");
  });
};
navSlide();
