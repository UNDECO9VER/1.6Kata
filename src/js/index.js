import Swiper, { Pagination } from 'swiper';
import '../scss/style.scss';

const mediaQuery = window.matchMedia('(max-width: 480px)')
const sliderContainer = document.querySelectorAll('.swiper__list');
const btn = document.querySelectorAll('.more-btn');
const learBtn = document.querySelector('.description-section__button');
const textContainer = document.querySelector('.description-section__text');
const body = document.querySelector('body');

const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebar-icon');

const closeBtn = document.querySelector('.close-icon');

const callLink = document.querySelectorAll('.call-link');
const chatLink = document.querySelectorAll('.chat-link');
const modal = document.querySelectorAll('.modal');
const callModal = document.querySelector('.call-modal');
const chatModal = document.querySelector('.chat-modal');
const closeModal = document.querySelectorAll('.modal__close-icon');

console.log(body);

if(document.documentElement.clientWidth <= 550){
    const swiper = new Swiper('.swiper', {
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 'auto',
        spaceBetween: 16,
    
        breakpoints: {
            768: {
                spaceBetween: 0
            }
        }
    
    
    });

}

learBtn.addEventListener('click',()=>{
    if (learBtn.textContent === "Скрыть"){
        textContainer.removeAttribute("style");
        learBtn.textContent = "Читать далее";
        learBtn.classList.remove('description-section__button--expanded');
    }else {
        console.log(btn.textContent);
        textContainer.style.maxHeight = textContainer.scrollHeight +'px';
        learBtn.textContent = "Скрыть";
        learBtn.classList.add('description-section__button--expanded');
    }
})

btn.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (btn[index].textContent === "Скрыть"){
            sliderContainer[index].removeAttribute("style");
            btn[index].textContent = "Показать всё";
            btn[index].classList.remove('more-btn--expanded');
        }else {
            console.log(btn[index].textContent);
            sliderContainer[index].style.maxHeight = sliderContainer[index].scrollHeight +'px';
            btn[index].textContent = "Скрыть";
            btn[index].classList.add('more-btn--expanded');
        }
    })
})

sidebarBtn.addEventListener('click', ()=>{
    sidebar.classList.add('sidebar-opened')
    body.classList.add('container-fixed')
})

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('sidebar-opened')
    body.classList.remove('container-fixed')
})

sidebar.addEventListener('click', function(event){
    if(event.target === sidebar){
        sidebar.classList.remove('sidebar-opened')
        body.classList.remove('container-fixed')
    }
})


callLink.forEach((el)=>{
    el.addEventListener('click',function(e){
        sidebar.classList.remove('sidebar-opened')
        body.classList.add('container-fixed')
        callModal.classList.add('modal-opened')
    })
})

chatLink.forEach((el)=>{
    el.addEventListener('click',function(e){
        sidebar.classList.remove('sidebar-opened')
        chatModal.classList.add('modal-opened')
        body.classList.add('container-fixed')
    })
})

closeModal.forEach((el,index)=>{
    el.addEventListener('click', function(e){
        modal[index].classList.remove('modal-opened')
        body.classList.remove('container-fixed')
    })
})

modal.forEach((el,index)=>{
    el.addEventListener('click', function(e){
        if(e.target === modal[index]){
            modal[index].classList.remove('modal-opened')
            body.classList.remove('container-fixed')
        }
    })
})

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
