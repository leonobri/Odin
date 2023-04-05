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

#00BEFDDF09A04B43E95BD114CBAF704B5CFE39AE1936234D408ADD901554E1BE
