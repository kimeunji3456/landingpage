// 마우스 커서
$('body').mousemove(function (e) {
    const w = $('.cursor').width() / 2
    const h = $('.cursor').height() / 2
    const xVal = e.clientX;
    const yVal = e.clientY;

    gsap.to('.cursor', {
        x: xVal - w,
        y: yVal - h
    })
})


$('.sc-main').mouseover(function () {
    gsap.to('.cursor .wrap', {
        y: -0
    })
})

$('.sc-work .swiper-wrapper').mouseover(function () {
    gsap.to('.cursor .wrap', {
        y: -150
    })
})

$('.sc-work .btn.prev').mouseover(function () {
    gsap.to('.cursor .wrap', {
        y: -225
    })
})

$('.sc-work .btn.next').mouseover(function () {
    gsap.to('.cursor .wrap', {
        y: -310
    })
})

$('#footer').mouseover(function () {
    gsap.to('.cursor .wrap', {
        y: -75
    })
})



$('.btn-box').mouseenter(function () {
    $('.cursor').css('opacity', '0.5')
})
$('.btn-box').mouseleave(function () {
    $('.cursor').css('opacity', '1')
})




// 헤더 스크롤
const showAnim = gsap.from('#header', {
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});





// 메뉴 클릭시 해당 영역 이동
$('.menu-item > a').click(function () {

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});






// 작업 내역
const workSlide = new Swiper(".work-slide", {
    loop: true,
    speed: 1000,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    }
});