const goPagedetail = document.querySelector('.go_detail')
console.log(goPagedetail)

if (window.innerWidth > 1024) {
    goPagedetail.addEventListener('click', () => location.href = 'sub_1.html')

} else {

}







$(document).ready(function () {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots: true, //페이지버튼
        autoplay: true, //자동실행
        pauseOnHover: false, //마우스올렸을때 멈춤기능
        autoplaySpeed: 3000, //슬라이드간격(시간)
        speed: 300, //애니메이션 속도
        swipe: true, //pc에서는 마우스 드래그이동, 모바일은 손으로 쓸어넘기는 기능
        slide: 'div', //슬라이드로 사용할 엘리먼트 지정
        arrows: false
    });
});