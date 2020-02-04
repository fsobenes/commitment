var nav = document.getElementById("navbar");

window.scroll = function() {
	if (window.pageYOffset > 100){
		nav.style.opacity = "0.9"
	}
}



// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }