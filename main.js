/**second nav */
const headerBox = document.querySelector("header");
const trigerDetailDepth = document.querySelector(".depth_detail");
const trigerDetailLookbook = document.querySelector(".depth_lookbook");
const trigerDetailEventdesign = document.querySelector(".depth_eventdesign");

const targetDetailDepth = document.querySelector(".depth_detail > ul");
const targetDetailLookbook = document.querySelector(".depth_lookbook > ul");
const targetDetailEventdesign = document.querySelector(
    ".depth_eventdesign > ul"
);

const article = document.getElementById("content")
let menuDetail = document.querySelectorAll(".menu_detail")

headerBox.addEventListener("mouseover", () => {
    article.style.filter = 'grayscale(95%)';
})
headerBox.addEventListener("mouseout", () => {
    article.style.filter = 'none';
})

//상세페이지
trigerDetailDepth.addEventListener("mouseover", () => {
    targetDetailDepth.style.display = "block";
    targetDetailDepth.style.opacity = 1;
    headerBox.style.height = 400 + "px";
    headerBox.style.opacity = 1;
});

targetDetailDepth.addEventListener("mouseover", () => {
    targetDetailDepth.previousElementSibling.style.borderBottom = '2px solid #4a99c3';
    targetDetailDepth.previousElementSibling.style.color = '#0b547a';
});

targetDetailDepth.addEventListener("mouseout", () => {
    targetDetailDepth.previousElementSibling.style.borderBottom = '';
    targetDetailDepth.previousElementSibling.style.color = '#333';
});


trigerDetailDepth.addEventListener("mouseout", () => {
    targetDetailDepth.style.display = "none";
    headerBox.style.height = 130 + "px";
    headerBox.style.opacity = 0.9;
});

//룩북
trigerDetailLookbook.addEventListener("mouseover", () => {
    targetDetailLookbook.style.display = "block";
    targetDetailLookbook.style.opacity = 1;
    headerBox.style.height = 400 + "px";
    headerBox.style.opacity = 1;
});
trigerDetailLookbook.addEventListener("mouseout", () => {
    targetDetailLookbook.style.display = "none";
    headerBox.style.height = 130 + "px";
    headerBox.style.opacity = 0.9;
});

targetDetailLookbook.addEventListener("mouseover", () => {
    targetDetailLookbook.previousElementSibling.style.borderBottom = '2px solid #4a99c3';
    targetDetailLookbook.previousElementSibling.style.color = '#0b547a';

});

targetDetailLookbook.addEventListener("mouseout", () => {
    targetDetailLookbook.previousElementSibling.style.borderBottom = '';
    targetDetailLookbook.previousElementSibling.style.color = '#333';

});


//이벤트디자인
trigerDetailEventdesign.addEventListener("mouseover", () => {
    targetDetailEventdesign.style.display = "block";
    targetDetailEventdesign.style.opacity = 1;
    headerBox.style.height = 400 + "px";
    headerBox.style.opacity = 1;
});
trigerDetailEventdesign.addEventListener("mouseout", () => {
    targetDetailEventdesign.style.display = "none";
    headerBox.style.height = 130 + "px";
    headerBox.style.opacity = 0.9;
});

targetDetailEventdesign.addEventListener("mouseover", () => {
    targetDetailEventdesign.previousElementSibling.style.borderBottom = '2px solid #4a99c3';
    targetDetailEventdesign.previousElementSibling.style.color = '#0b547a';

});

targetDetailEventdesign.addEventListener("mouseout", () => {
    targetDetailEventdesign.previousElementSibling.style.borderBottom = '';
    targetDetailEventdesign.previousElementSibling.style.color = '#333';

});



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




















// 룩북 3뎁스 트리거와 타겟
// const trigerLookbook1 = document.querySelector('.first_of_lookbook')
// const trigerLookbook2 = document.querySelector('.second_of_lookbook')
// const trigerLookbook3 = document.querySelector('.third_of_lookbook')

// const targetLookbook1 = document.querySelector('.first_of_lookbook > ul')
// const targetLookbook2 = document.querySelector('.second_of_lookbook > ul')
// const targetLookbook3 = document.querySelector('.third_of_lookbook > ul')
// //룩북
// trigerDetailLookbook.addEventListener('mouseover', () => {
//   targetDetailLookbook.style.display = 'block';
//   targetDetailLookbook.style.opacity = 1;
// })
// trigerDetailLookbook.addEventListener('mouseout', () => targetDetailLookbook.style.display = 'none')

// //룩북1
// trigerLookbook1.addEventListener('mouseover', () => {
//   targetLookbook1.style.display = 'block';
//   targetLookbook1.style.opacity = 1;
// })
// trigerLookbook1.addEventListener('mouseout', () => targetLookbook1.style.display = 'none')

// //룩북2
// trigerLookbook2.addEventListener('mouseover', () => {
//   targetLookbook2.style.display = 'block';
//   targetLookbook2.style.opacity = 1;
// })
// trigerLookbook2.addEventListener('mouseout', () => targetLookbook2.style.display = 'none')

// //룩북3
// trigerLookbook3.addEventListener('mouseover', () => {
//   targetLookbook3.style.display = 'block';
//   targetLookbook3.style.opacity = 1;
// })
// trigerLookbook3.addEventListener('mouseout', () => targetLookbook3.style.display = 'none')