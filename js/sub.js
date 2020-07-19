const showbox = document.querySelector('.showbox')
const thumBox = document.querySelectorAll('#content .thum_box')
const closeBtn = document.querySelector('.close_btn')
const detailImg = document.querySelectorAll('.detail_img')

showbox.style.height = window.screen.height + 'px'

// thumBox.forEach((el) => {
//     el.addEventListener('click', (e) => {
//         e.preventDefault();
//         showbox.style.zIndex = 100;
//         showbox.style.opacity = 1;




//     })
// })

for (let i = 0; i < thumBox.length; i++) {
    thumBox[i].addEventListener('click', (e) => {
        e.preventDefault();
        showbox.style.zIndex = 100;
        showbox.style.opacity = 1;

        console.log(detailImg[i])
        detailImg[i].style.display = 'block'


    })
}






closeBtn.addEventListener('click', () => {
    showbox.style.zIndex = -5;
    showbox.style.opacity = 0;
    detailImg.forEach((el) => {
        el.style.display = 'none'
    })
})

showbox.addEventListener('click', () => {
    showbox.style.zIndex = -5;
    showbox.style.opacity = 0;
    detailImg.forEach((el) => {
        el.style.display = 'none'
    })
})