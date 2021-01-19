$('#projects-done').animateNumber({ number: 398 }, 2000);
$('#partnerships').animateNumber({ number: 126 }, 2000);
$('#relations').animateNumber({ number: 231 }, 2000);
$('#certificates').animateNumber({ number: 54 }, 2000);

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        991: {
            slidesPerView: 3
        }
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('#page-up').fadeIn(200);
    } else {
        $('#page-up').fadeOut(200);
    }
});
$('#page-up').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
});