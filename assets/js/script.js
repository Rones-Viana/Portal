var slideItem = 0;
window.onload = function(){
	setInterval(passarSlide, 7000);

	var slidewidth = document.getElementById("slideteste").offsetWidth;
	var objs = document.getElementsById("slide-teste2");
	
	for(var i in objs){
		objs[i].style.width = slidewidth;
	}
}
function passarSlide(){
	var slidewidth = document.getElementById("slideteste").offsetWidth;

	if(slideItem >= 3){
		slideItem = 0;
	}else{
		slideItem++;
	}
		document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function mudarSlide(pos){
	slideItem = pos;
	var slidewidth = document.getElementById("slideteste").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function toggleMenu(){

	var menu = document.getElementById("menu");

	if(menu.style.display == 'none' || menu.style.display == ''){
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}