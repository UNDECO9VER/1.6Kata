const brandSwiper = new Swiper('.brand-slider', {
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
const techSwiper = new Swiper('.technique-slider', {
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
const priceSwiper = new Swiper('.prices-slider', {
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

const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
    if (e.matches) {
        brandSwiper.disable();
        techSwiper.disable();
        priceSwiper.disable();
    } else {
        brandSwiper.enable();
        techSwiper.enable();
        priceSwiper.enable();
    }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

const image = document.querySelectorAll('.more-btn__img');
const container = document.querySelectorAll('.common-slider__list');
const btn = document.querySelectorAll('.more-btn');
const btnText = document.querySelectorAll('.more-btn__txt');

btn.forEach((el, index) => {
    el.addEventListener('click', () => {
        container[index].classList.toggle('expanded');
        let size = container[index].style.height;
        console.log(Number(size))
        image[index].classList.toggle('expanded-image');
        if (container[index].classList.contains('expanded')) {
            btnText[index].innerHTML = "Скрыть";
        } else {
            btnText[index].innerHTML = "Показать всё";
        }
    })
})


// btn.addEventListener('click',() => {
//     container.classList.toggle('expanded');
//     image.classList.toggle('expanded-image');
//     if (container.classList.contains('expanded')){
//         btnText.innerHTML = "Скрыть";
//     }
//     else {
//         btnText.innerHTML = "Показать всё";
//     }
// })


function expandFunction(rotateImage, expandContainer, buttonText) {
    const image = document.querySelector(rotateImage);
    const container = document.querySelector(expandContainer);
    const btnText = document.querySelector(buttonText);
    if (container.style.height !== 'auto') {
        image.style.transform = 'rotate(180deg)';
        btnText.innerHTML = "Скрыть";
        container.classList.toggle('expanded');
    } else if (container.style.height === 'auto') {
        image.style.transform = 'rotate(0deg)';
        btnText.innerHTML = "Показать всё";
        container.classList.toggle('expanded')
    }
}







