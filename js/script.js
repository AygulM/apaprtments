let btnPrev = document.getElementById("apartmentOneLeft");
let bnNext = document.getElementById("apartmentOneRight");
let img = document.getElementById("apartmentOneSlider");
let slider = ["img/apartments__img/a2/1.jpg", 
"img/apartments__img/a2/2.jpg", 
"img/apartments__img/a2/3.jpg", 
"img/apartments__img/a2/4.jpg"];
let current = 0 ;
bnNext.addEventListener("click", moveSlideNext);
btnPrev.addEventListener("click", moveSlidePrev)
function moveSlideNext(){
    current++;
    if(current>=slider.length){
        current=0;
    }
    img.style.backgroundImage="url(" + slider[current] + ")";
}
function moveSlidePrev(){
    current--;
    if(current<0){
        current=slider.length-1;
    }
    img.style.backgroundImage="url(" + slider[current] + ")";
}