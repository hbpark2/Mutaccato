(function () {
  const slideList = document.querySelector(".slide_list"); // Slide parent dom
  const slideContents = document.querySelectorAll(".slide_content"); // each slide dom
  const slideBtnNext = document.querySelector(".slide_btn_next"); // next button
  const slideBtnPrev = document.querySelector(".slide_btn_prev"); // prev button
  const pagination = document.querySelector(".slide_pagination");
  const slideLen = slideContents.length; // slide length
  const slideWidth = 1600; // slide width
  const slideSpeed = 300; // slide speed
  const startNum = 0; // initial slide index (0 ~ 4)

  slideList.style.width = slideWidth * (slideLen + 2) + "px";

  // Copy first and last slide
  let firstChild = slideList.firstElementChild;
  let lastChild = slideList.lastElementChild;
  let clonedFirst = firstChild.cloneNode(true);
  let clonedLast = lastChild.cloneNode(true);

  // Add copied Slides
  slideList.appendChild(clonedFirst);
  slideList.insertBefore(clonedLast, slideList.firstElementChild);

  // Add pagination dynamically
  let pageChild = "";
  for (var i = 0; i < slideLen; i++) {
    pageChild += '<li class="dot';
    pageChild += i === startNum ? " dot_active" : "";
    pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
  }
  pagination.innerHTML = pageChild;
  const pageDots = document.querySelectorAll(".dot"); // each dot from pagination

  slideList.style.transform =
    "translate3d(-" + slideWidth * (startNum + 1) + "px, 0px, 0px)";

  let curIndex = startNum; // current slide index (except copied slide)
  let curSlide = slideContents[curIndex]; // current slide dom
  curSlide.classList.add("slide_active");

  /** Next Button Event */
  slideBtnNext.addEventListener("click", function () {
    if (curIndex <= slideLen - 1) {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform =
        "translate3d(-" + slideWidth * (curIndex + 2) + "px, 0px, 0px)";
    }
    if (curIndex === slideLen - 1) {
      setTimeout(function () {
        slideList.style.transition = "0ms";
        slideList.style.transform =
          "translate3d(-" + slideWidth + "px, 0px, 0px)";
      }, slideSpeed);
      curIndex = -1;
    }
    curSlide.classList.remove("slide_active");
    pageDots[curIndex === -1 ? slideLen - 1 : curIndex].classList.remove(
      "dot_active"
    );
    curSlide = slideContents[++curIndex];
    curSlide.classList.add("slide_active");
    pageDots[curIndex].classList.add("dot_active");
  });

  /** Prev Button Event */
  slideBtnPrev.addEventListener("click", function () {
    if (curIndex >= 0) {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform =
        "translate3d(-" + slideWidth * curIndex + "px, 0px, 0px)";
    }
    if (curIndex === 0) {
      setTimeout(function () {
        slideList.style.transition = "0ms";
        slideList.style.transform =
          "translate3d(-" + slideWidth * slideLen + "px, 0px, 0px)";
      }, slideSpeed);
      curIndex = slideLen;
    }
    curSlide.classList.remove("slide_active");
    pageDots[curIndex === slideLen ? 0 : curIndex].classList.remove(
      "dot_active"
    );
    curSlide = slideContents[--curIndex];
    curSlide.classList.add("slide_active");
    pageDots[curIndex].classList.add("dot_active");
  });

  /** Pagination Button Event */
  let curDot;
  Array.prototype.forEach.call(pageDots, function (dot, i) {
    dot.addEventListener("click", function (e) {
      e.preventDefault();
      curDot = document.querySelector(".dot_active");
      curDot.classList.remove("dot_active");

      curDot = this;
      this.classList.add("dot_active");

      curSlide.classList.remove("slide_active");
      curIndex = Number(this.getAttribute("data-index"));
      curSlide = slideContents[curIndex];
      curSlide.classList.add("slide_active");
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform =
        "translate3d(-" + slideWidth * (curIndex + 1) + "px, 0px, 0px)";
    });
  });

})();

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
const headerBox = document.querySelector('header')
const trigerDetailDepth = document.querySelector('.depth_detail')
const trigerDetailLookbook = document.querySelector('.depth_lookbook')
const trigerDetailEventdesign = document.querySelector('.depth_eventdesign')

const targetDetailDepth = document.querySelector('.depth_detail > ul')
const targetDetailLookbook = document.querySelector('.depth_lookbook > ul')
const targetDetailEventdesign = document.querySelector('.depth_eventdesign > ul')




// console.log(detailDepth, detailLookbook, detailEventdesign)
//헤더 크기, opacity
// headerBox.addEventListener('mouseover', () => headerBox.style.height = 400 + 'px')
// headerBox.addEventListener('mouseout', () => headerBox.style.height = 130 + 'px')
// headerBox.addEventListener('mouseover', () => headerBox.style.opacity = 1)
// headerBox.addEventListener('mouseout', () => headerBox.style.opacity = 0.9)


//상세페이지
trigerDetailDepth.addEventListener('mouseover', () => {
  targetDetailDepth.style.display = 'block';
  targetDetailDepth.style.opacity = 1;
  headerBox.style.height = 400 + 'px';
  headerBox.style.opacity = 1;
})
trigerDetailDepth.addEventListener('mouseout', () => {
  targetDetailDepth.style.display = 'none';
  headerBox.style.height = 130 + 'px';
  headerBox.style.opacity = 0.9;
})

//룩북
trigerDetailLookbook.addEventListener('mouseover', () => {
  targetDetailLookbook.style.display = 'block';
  targetDetailLookbook.style.opacity = 1;
  headerBox.style.height = 400 + 'px';
  headerBox.style.opacity = 1;
})
trigerDetailLookbook.addEventListener('mouseout', () => {
  targetDetailLookbook.style.display = 'none';
  headerBox.style.height = 130 + 'px';
  headerBox.style.opacity = 0.9;
})



//이벤트디자인
trigerDetailEventdesign.addEventListener('mouseover', () => {
  targetDetailEventdesign.style.display = 'block';
  targetDetailEventdesign.style.opacity = 1;
  headerBox.style.height = 400 + 'px';
  headerBox.style.opacity = 1;
})
trigerDetailEventdesign.addEventListener('mouseout', () => {
  targetDetailEventdesign.style.display = 'none';
  headerBox.style.height = 130 + 'px';
  headerBox.style.opacity = 0.9;
})















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