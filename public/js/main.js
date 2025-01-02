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
  case "tester1":
    document.getElementById("tester1").classList.toggle("expand-project");
    document.getElementById("cream-slide-1").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("tester1") && expandedArray[i] != document.getElementById("cream-slide-1")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("tester1-button").innerHTML = "Minimize"
      }
    }








  //   var projectList = ["tester2", "tester3", "tester4", "tester5"];
 
  // for (var i = projectList.length - 1; i >= 0; i--) {
  //   if( document.getElementById(projectList[i]).classList.contains("expand-project")){
  //     document.getElementById(projectList[i]).classList.remove("expand-project");
  //   console.log(projectList[i]);
  //   }
    
  // }
    break;
  case "tester2":
    document.getElementById("tester2").classList.toggle("expand-project");
    document.getElementById("cream-slide-2").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("tester2") && expandedArray[i] != document.getElementById("cream-slide-2")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("tester1-button").innerHTML = "Minimize"
      }
    }


  //   var projectList = ["tester1", "tester3", "tester4", "tester5"];
  // console.log(projectList);
  // for (var i = projectList.length - 1; i >= 0; i--) {
  //   document.getElementById(projectList[i]).classList.remove("expand-project");
  //   console.log(projectList[i]);
  // }
    break;
  case "tester3":
    document.getElementById("tester3").classList.toggle("expand-project");
    document.getElementById("cream-slide-3").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("tester3") && expandedArray[i] != document.getElementById("cream-slide-3")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("tester1-button").innerHTML = "Minimize"
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
        // document.getElementById("tester1-button").innerHTML = "Minimize"
      }
    }
    break;

    case "tester5":
    document.getElementById("tester5").classList.toggle("expand-project");
    document.getElementById("cream-slide-5").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("tester5") && expandedArray[i] != document.getElementById("cream-slide-5")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("tester1-button").innerHTML = "Minimize"
      }
    }
    break;

    case "poster":
   document.getElementById("poster").classList.toggle("expand-project");
    document.getElementById("cream-slide-5").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("poster") && expandedArray[i] != document.getElementById("cream-slide-5")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("tester1-button").innerHTML = "Minimize"
      }
    }
    break;

    case "ad":
   document.getElementById("ad").classList.toggle("expand-project");
    document.getElementById("cream-slide-6").classList.toggle("expand-project");

    var expandedArray = document.querySelectorAll('.expand-project');
    console.log(expandedArray);
    for (var i = expandedArray.length - 1; i >= 0; i--) {
      if(expandedArray[i] != document.getElementById("ad") && expandedArray[i] != document.getElementById("cream-slide-6")){
      expandedArray[i].classList.toggle("expand-project");
      }

      else{
        // document.getElementById("tester1-button").innerHTML = "Minimize"
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


var projectHeight = document.getElementById("tester1-title").offsetHeight;
console.log(projectHeight);
console.log("haiiiii");
let creamSlidesArray = document.querySelectorAll('.cream-slide');
for (var i = creamSlidesArray.length - 1; i >= 0; i--) {
     creamSlidesArray[i].style.height = projectHeight + 'px';
}
console.log(document.querySelector('.cream-slide').offsetHeight);



