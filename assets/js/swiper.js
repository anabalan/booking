var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 16,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
    },
});