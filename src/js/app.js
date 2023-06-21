import Splide from '@splidejs/splide';

(()=>{
    window.addEventListener("DOMContentLoaded",e=>{
        const header = document.querySelector(".header");
        const fn = ()=>{
            if(window.scrollY>165){
                header.classList.add("header-active")
            }else{
                header.classList.remove("header-active")
            }
        }
        fn();
        window.addEventListener("scroll", fn);
        new Splide('.splide', {
            type: 'slide',
            perPage: 1,
            perMove: 1,
            arrows: true,
            pagination: false,
            rewind: true,
            autoplay: true,
            // isNavigation: true,
            navigation: {
                nextEl: '.generate-exp__slider-prev',
                prevEl: '.generate-exp__slider-next',
            },
        }).mount();
    })
})(window);