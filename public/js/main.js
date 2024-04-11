// Mobile menu toggle
function toggleMobileNav() {
    document.getElementById("nav").classList.toggle("show-nav-mob");
}

// Close mobile menu on link click
function closeMobileNav() {
    document.getElementById("nav").classList.remove("show-nav-mob");
    document.getElementById("checkbox").checked = false;
}

function toggleProjectList(projectTitle) {
  

  switch (projectTitle){
  case "koug":
    document.getElementById("koug").classList.toggle("expand-project");
    document.getElementById("cream-slide-1").classList.toggle("expand-project");
    var projectList = ["scj", "survivin", "tester4", "tester5"];
  console.log(projectList);
  for (var i = projectList.length - 1; i >= 0; i--) {
    document.getElementById(projectList[i]).classList.remove("expand-project");
    console.log(projectList[i]);
  }
    break;
  case "scj":
    document.getElementById("scj").classList.toggle("expand-project");
    document.getElementById("cream-slide-2").classList.toggle("expand-project");
    var projectList = ["koug", "survivin", "tester4", "tester5"];
  console.log(projectList);
  for (var i = projectList.length - 1; i >= 0; i--) {
    document.getElementById(projectList[i]).classList.remove("expand-project");
    console.log(projectList[i]);
  }
    break;
  case "survivin":
    document.getElementById("survivin").classList.toggle("expand-project");
    document.getElementById("cream-slide-3").classList.toggle("expand-project");
    var projectList = ["koug", "scj", "tester4", "tester5"];
  console.log(projectList);
  for (var i = projectList.length - 1; i >= 0; i--) {
    document.getElementById(projectList[i]).classList.remove("expand-project");
    console.log(projectList[i]);
  }
    break;
  case "tester4":
    document.getElementById("tester4").classList.toggle("expand-project");
    document.getElementById("cream-slide-4").classList.toggle("expand-project");
    var projectList = ["koug", "scj", "survivin",  "tester5"];
  console.log(projectList);
  for (var i = projectList.length - 1; i >= 0; i--) {
    document.getElementById(projectList[i]).classList.remove("expand-project");
    console.log(projectList[i]);
  }
    break;
  case "tester5":
    document.getElementById("tester5").classList.toggle("expand-project");
    document.getElementById("cream-slide-5").classList.toggle("expand-project");
    var projectList = ["koug", "scj", "survivin", "tester4"];
  console.log(projectList);
  for (var i = projectList.length - 1; i >= 0; i--) {
    document.getElementById(projectList[i]).classList.remove("expand-project");
    console.log(projectList[i]);
  }
  }
  
  
  console.log("hi");
}



// Header change on scroll
var className = "header-solid";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
}



// // Image Slider
// // Select all slides
// const slides = document.querySelectorAll(".slide");

// // loop through slides and set each slides translateX
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// // select next slide button
// const nextSlide = document.querySelector(".btn-next");

// // current slide counter
// let curSlide = 0;
// // maximum number of slides
// let maxSlide = slides.length - 1;

// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   // check if current slide is the last and reset current slide
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   //   move slide by -100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// // select next slide button
// const prevSlide = document.querySelector(".btn-prev");

// // add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   //   move slide by 100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

var projectHeight = document.getElementById("koug-title").offsetHeight;
console.log(projectHeight);
console.log("haiiiii");
let creamSlidesArray = document.querySelectorAll('.cream-slide');
for (var i = creamSlidesArray.length - 1; i >= 0; i--) {
     creamSlidesArray[i].style.height = projectHeight + 'px';
}
console.log(document.querySelector('.cream-slide').offsetHeight);


