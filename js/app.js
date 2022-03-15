const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5
})
sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider__item').forEach(item => {
    open1 = false;
    open2 = false;
    item.addEventListener('click', event => {
        console.log(open2);
        if (item.getAttribute('aria-label') == "1 / 9") {

            if (open1 == false && open2 == false) {
                item.classList.add('opened');
                console.log(item.getAttribute('aria-label'));
                open1 = true;
            } else {
                open1 = false;
                item.classList.remove('opened');
            }
        } else {
            if (item.getAttribute('aria-label') == "2 / 9") {
                if (open1 == false && open2 == false) {
                    item.classList.add('opened');
                    console.log(item.getAttribute('aria-label'));
                    open2 = true;
                } else {
                    open2 = false;
                    item.classList.remove('opened');
                }
            } else {

            }
        }

    })

})




// let clickOnMe = document.querySelectorAll('.slider__item');
// Array.from(clickOnMe).forEach(el => {
//     el.addEventListener("click", e => {
//         let showBox = e.currentTarget;
//         showBox.classList.toggle('opened');
//         open = true;



//     });
// });


let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})