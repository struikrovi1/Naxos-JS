/*window.onload = function () {
    setInterval(() => {
        document.querySelector(".loading").classList.add("d-none")



    }, 3000);
}*/


var sliderAll = document.querySelector(".slider-all")
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
var sliderItem = document.querySelectorAll(".slider-item")
var slider = document.querySelector(".slider")

sliderAll.style.width = slider.clientWidth *sliderItem.length + "px";

var currentSlider = 0;
addActive();
next.onclick = function () {
    currentSlider++;
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove("slide-active")

    }
    if(currentSlider==sliderItem.length){
        currentSlider=0;
    }
    addActive();
    sliderAll.style.left = (-slider.clientWidth * currentSlider + "px")
}

prev.onclick = function () {
    currentSlider--;
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove("slide-active")

    }
    if(currentSlider==-1){
        currentSlider=sliderItem.length-1;
    }
    addActive();
    sliderAll.style.left = (-slider.clientWidth * currentSlider + "px")
}



function addActive() {
    sliderItem[currentSlider].classList.add("slide-active");

}