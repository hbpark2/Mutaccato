/* first nav*/
// let depthOne = document.querySelectorAll('.depth_1')
// let depthTwoBox = document.querySelectorAll('.depth_1 > ul')
// let headerBox = document.querySelector('header')
// for(let i = 0; i < depthOne.length; i++){
//   depthOne[i].addEventListener('mouseover',function(event){
//     for(let a = 0; a < depthTwoBox.length; a++){
//       console.log(depthTwoBox[a].style.height = 400 + 'px')
//       headerBox.style.height = 400 + 'px'
//     }
//   })
// }

// for(let i = 0; i < depthOne.length; i++){
//   depthOne[i].addEventListener('mouseout',function(event){
//     for(let a = 0; a < depthTwoBox.length; a++){
//       console.log(depthTwoBox[a].style.height = '0')
//       headerBox.style.height = 130 + 'px'
//     }
//   })
// }

/**secon nav */
const headerBox = document.querySelector("header");
const trigerDetailDepth = document.querySelector(".depth_detail");
const trigerDetailLookbook = document.querySelector(".depth_lookbook");
const trigerDetailEventdesign = document.querySelector(".depth_eventdesign");

const targetDetailDepth = document.querySelector(".depth_detail > ul");
const targetDetailLookbook = document.querySelector(".depth_lookbook > ul");
const targetDetailEventdesign = document.querySelector(
    ".depth_eventdesign > ul"
);

// console.log(detailDepth, detailLookbook, detailEventdesign)
//헤더 크기, opacity
// headerBox.addEventListener('mouseover', () => headerBox.style.height = 400 + 'px')
// headerBox.addEventListener('mouseout', () => headerBox.style.height = 130 + 'px')
// headerBox.addEventListener('mouseover', () => headerBox.style.opacity = 1)
// headerBox.addEventListener('mouseout', () => headerBox.style.opacity = 0.9)

//상세페이지
trigerDetailDepth.addEventListener("mouseover", () => {
    targetDetailDepth.style.display = "block";
    targetDetailDepth.style.opacity = 1;
    headerBox.style.height = 400 + "px";
    headerBox.style.opacity = 1;
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
