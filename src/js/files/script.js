// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";


const slider = document.querySelector('.popular__slider');
if (slider) {

   let mySwiper;

   function mobileSlider() {
      if (window.innerWidth >= 991.98 && slider.dataset.mobile == 'false') {
         mySwiper = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            navigation: {
               prevEl: '.popular-button-prev',
               nextEl: '.popular-button-next',
            },
            modules: [Navigation, Autoplay],
            observer: true,
            observeParents: true,
            speed: 800,
            loop: true,
         });

         slider.dataset.mobile = 'false';
      }

      // if (window.innerWidth < 991.98) {
      //    slider.dataset.mobile = 'true';
      //    if (slider.classList.contains('swiper-initialized')) {
      //       mySwiper.destroy();
      //    }
      // }
   }

   mobileSlider();

   // window.addEventListener('resize', () => {
   //    mobileSlider();
   // });

}
