// JavaScript Document
document.getElementsByClassName('MenuToggle')[0].onclick = function (){
    var menu = document.getElementById('nav');
    if(menu.className == "active"){
		menu.className = "inactive";
	} else {
		menu.className = "active";
	}
}




const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = carouselContainer.querySelector('.carousel-slide');
const imageWidth = carouselContainer.querySelector('.image').clientWidth;

function scrollVerder(){
    if(carouselSlide.scrollLeft < (carouselSlide.scrollWidth -imageWidth))
       carouselSlide.scrollBy({left: imageWidth, top: 0, behavior: "smooth"});

    else
    carouselSlide.scrollTo({left: 0,top: 0, behavior:'smooth'});
}

function scrollTerug(){
    if(carouselSlide.scrollLeft != 0)
    carouselSlide.scrollBy({left: -imageWidth, top:0, behavior:'smooth'});

    else
    carouselSlide.scrollTo({left: carouselSlide.scrollWidth, top: 0, behavior:'smooth'});
}

