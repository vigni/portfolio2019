// --------------
//Loader
//---------------

setTimeout(showPage,2000);

function showPage() {
  $("#loading").fadeOut(2000);
  $("#preloader").fadeOut(1000);
}


// --------------
//Timeline
//---------------
(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    //For intro
    // define variables
    var introHobbies = document.querySelectorAll(".display-move");
  
    function callbackFuncIntro() {
      for (var i = 0; i < introHobbies.length; i++) {
        if (isElementInViewport(introHobbies[i])) {
          introHobbies[i].classList.add("in-view");
        }
      }
    }

    var projects = document.querySelectorAll(".display-projects");

  
    function callbackFuncProjects() {
      for (var i = 0; i < projects.length; i++) {
        if (isElementInViewport(projects[i])) {
          projects[i].classList.add("in-view");
        }
      }
    }

    var buttons = document.querySelectorAll(".display-buttons");

  
    function callbackFuncButtons() {
      for (var i = 0; i < buttons.length; i++) {
        if (isElementInViewport(buttons[i])) {
          buttons[i].classList.add("in-view");
        }
      }
    }

    var title = document.querySelectorAll(".display-title");

  
    function callbackFuncTitle() {
      for (var i = 0; i < title.length; i++) {
        if (isElementInViewport(title[i])) {
          title[i].classList.add("in-view");
        }
      }
    }

   
    // 

  
    // function callbackFuncProjects() {
    //   for (var i = 0; i < intro.length; i++) {
    //     if (isElementInViewport(intro[i])) {
    //       intro[i].classList.add("in-view");
    //     }
    //   }
    // }

     //For projects
    
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    window.addEventListener("load", callbackFuncProjects);
    window.addEventListener("resize", callbackFuncProjects);
    window.addEventListener("scroll", callbackFuncProjects);

    window.addEventListener("load", callbackFuncIntro);
    window.addEventListener("resize", callbackFuncIntro);
    window.addEventListener("scroll", callbackFuncIntro);

    window.addEventListener("load", callbackFuncButtons);
    window.addEventListener("resize", callbackFuncButtons);
    window.addEventListener("scroll", callbackFuncButtons);

    window.addEventListener("load", callbackFuncTitle);
    window.addEventListener("resize", callbackFuncTitle);
    window.addEventListener("scroll", callbackFuncTitle);

  })();
  
// ------------
  // MENU
// ------------

  const header = document.getElementById('isFixed')

// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.
function onWindowScroll(event) {
	if (window.pageYOffset < 46) {
    header.classList.remove('scrolled')
    $('#logoImgHeader').attr('src', 'img/logo-black.png');
  } else {
    header.classList.add('scrolled')
    $('#logoImgHeader').attr('src', 'img/logo-white.png');
  }
}

window.addEventListener('scroll', onWindowScroll)


  filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("group");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    
    this.className += " active";
  });
}




