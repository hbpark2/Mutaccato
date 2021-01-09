// const showbox = document.querySelector('.b_showbox')
// const thumBox = document.querySelectorAll('#content .b_thum_box')
// const closeBtn = document.querySelector('.b_close_btn')
// const detailImg = document.querySelectorAll('.detail_img')
// const lightGallery = document.querySelector('.b_thum_wrap')

// showbox.style.height = window.screen.height + 'px'

// for (let i = 0; i < thumBox.length; i++) {
//     thumBox[i].addEventListener('click', (e) => {
//         e.preventDefault();
//         showbox.style.zIndex = 100;
//         showbox.style.opacity = 1;

//         console.log(detailImg[i])
//         detailImg[i].style.display = 'block'

//     })
// }

// closeBtn.addEventListener('click', () => {
//     showbox.style.zIndex = -5;
//     showbox.style.opacity = 0;
//     detailImg.forEach((el) => {
//         el.style.display = 'none'
//     })
// })

// showbox.addEventListener('click', () => {
//     showbox.style.zIndex = -5;
//     showbox.style.opacity = 0;
//     detailImg.forEach((el) => {
//         el.style.display = 'none'
//     })
// })

var $lg = $(".b_thum_wrap").lightGallery({
	selector: ".item",
	zoom: true,
	scale: 1,
	autoplay: false,
	autoplayControls: false,
	actualSize: true,
	thumbnail: false,
	share: false,
	fullScreen: false,
	download: false,
	subHtmlSelectorRelative: true,
});
