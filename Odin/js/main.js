$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 1600,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500
});
$(document).ready(function () {
    $('#subir').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});