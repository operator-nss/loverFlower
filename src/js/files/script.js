// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";

document.addEventListener("watcherCallback", function (e) {
   // Полная информация от наблюдателя
   const entry = e.detail.entry;
   // Наблюдаемый объект
   const targetElement = entry.target;
   const call = document.querySelector('.phones-side-mainblock__order');


   window.addEventListener('scroll', function () {
      if ((targetElement.classList.contains('_watcher-view')) || (document.documentElement.scrollTop > 1500)) {
         call.classList.add('_active');

         setTimeout(() => {
            call.classList.add('_calling');
         }, 5000);
      }

   });



});


document.addEventListener("beforePopupOpen", function (e) {
   const call = document.querySelector('.phones-side-mainblock__order');
   call.classList.add('popup-margin');

});

document.addEventListener("afterPopupClose", function (e) {
   const call = document.querySelector('.phones-side-mainblock__order');
   setTimeout(() => {
      call.classList.remove('popup-margin');
   }, 2000);


});
