var nav = document.getElementById("navbar");

window.onscroll = function(){
	if (window.pageYOffset <500){
		nav.style.opacity = "0";
	}
	else{ //if (window.pageYOffset >=500{
		nav.style.opacity = "0.8";
	}

		//nav.style.opacity = "0.9";
		//nav.style.boxShadow = "0px 2px 1px pink";
	
}



// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }