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
            arrows: false,
            pagination: false,
            rewind: true,
            autoplay: true
        }).mount();
    })
})(window);