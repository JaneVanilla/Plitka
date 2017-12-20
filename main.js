function myFunction() {
	var hamburger = document.querySelector(".page-nav__humburger");
	var menu = document.querySelector(".page-nav__list");
	var close = document.querySelector(".page-nav__close");
	hamburger.addEventListener('click', function(event) {
         event.preventDefault();
         menu.classList.add("page-nav__show");
         //close.classList.add("page-nav__show");
	});
	/*
    close.addEventListener('click', function(event) {
    	   event.preventDefault();
           menu.classList.remove("page-nav__show");
          close.classList.remove("page-nav__show");
    });
    */
}
/*
function myFunction2() {
		var hamburger = document.querySelector(".page-nav__humburger");
	var menu = document.querySelector(".page-nav__list");
	var close = document.querySelector(".page-nav__close");

    close.addEventListener('click', function(event2) {
    	   event2.preventDefault();
           menu.classList.remove("page-nav__show");
          close.classList.remove("page-nav__show");
    });
}
*/

/*навигация для мобильной версии*/


var hamburger = document.querySelector(".top-content__nav-hamburger");
var navigation = document.querySelector(".page-nav__list");
var showBtn = document.querySelector(".page-nav__show");
var closeBtn = document.querySelector(".page-nav__close");

hamburger.addEventListener("click", function(event1) {
   event1.preventDefault();
   navigation.classList.add("page-nav__show");
   hamburger.classList.add("page-nav__close");
   closeBtn.classList.add("page-nav__show");
});
/*
closeBtn.addEventListener("click", function(event2) {
    event2.preventDefault();
    navigation.classList.remove("page-nav__show");
    hamburger.classList.add("page-nav__show");
    closeBtn.classList.remove("page-nav__show")
    hamburger.classList.remove("page-nav__close");
});*/
