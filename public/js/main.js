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

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("koug") && expandedArray[i] != document.getElementById("cream-slide-1")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("koug-button").innerHTML = "Minimize"
      }
    }








  //   var projectList = ["scj", "survivin", "tester4", "tester5"];
 
  // for (var i = projectList.length - 1; i >= 0; i--) {
  //   if( document.getElementById(projectList[i]).classList.contains("expand-project")){
  //     document.getElementById(projectList[i]).classList.remove("expand-project");
  //   console.log(projectList[i]);
  //   }
    
  // }
    break;
  case "scj":
    document.getElementById("scj").classList.toggle("expand-project");
    document.getElementById("cream-slide-2").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("scj") && expandedArray[i] != document.getElementById("cream-slide-2")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("koug-button").innerHTML = "Minimize"
      }
    }


  //   var projectList = ["koug", "survivin", "tester4", "tester5"];
  // console.log(projectList);
  // for (var i = projectList.length - 1; i >= 0; i--) {
  //   document.getElementById(projectList[i]).classList.remove("expand-project");
  //   console.log(projectList[i]);
  // }
    break;
  case "survivin":
    document.getElementById("survivin").classList.toggle("expand-project");
    document.getElementById("cream-slide-3").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("survivin") && expandedArray[i] != document.getElementById("cream-slide-3")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("koug-button").innerHTML = "Minimize"
      }
    }
    break;
  case "tester4":
   document.getElementById("tester4").classList.toggle("expand-project");
    document.getElementById("cream-slide-4").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("tester4") && expandedArray[i] != document.getElementById("cream-slide-4")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("koug-button").innerHTML = "Minimize"
      }
    }
    break;
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


var projectHeight = document.getElementById("koug-title").offsetHeight;
console.log(projectHeight);
console.log("haiiiii");
let creamSlidesArray = document.querySelectorAll('.cream-slide');
for (var i = creamSlidesArray.length - 1; i >= 0; i--) {
     creamSlidesArray[i].style.height = projectHeight + 'px';
}
console.log(document.querySelector('.cream-slide').offsetHeight);




// https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('start-slide');
    }
    if (!entry.isIntersecting){
     entry.target.classList.remove('start-slide');
    }
  });
});

const creamslides = document.querySelectorAll('.cream-slide');
creamslides.forEach((element) => observer.observe(element));

