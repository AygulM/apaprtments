let nextBtn = document.getElementById("NextBtn");
let prevBtn = document.getElementById("PrevBtn");
let items = document.querySelector(".catalog__items");
let curren=0;
let fillNext = document.querySelector(".cbtn__next");
let fillPrev = document.querySelector(".cbtn__prev");
items.style.left= String(curren)+"%";
nextBtn.addEventListener("click", ()=>{
    curren -= 34;
    items.style.left= String(curren)+"%";
    if (items.style.left <= -102+"%")
    {
        nextBtn.setAttribute('disabled', true);
        fillNext.style.fill = "lightgrey";
    } 
    if(items.style.left < 0+'%'){
        prevBtn.removeAttribute('disabled');
        fillPrev.style.fill = "#6E9773";
    }
})
prevBtn.addEventListener("click", ()=>{
    if(items.style.left>=0+'%'){
        prevBtn.setAttribute('disabled', true);
        fillPrev.style.fill = "lightgrey"
    }
    else{
        curren += 34;
        items.style.left= String(curren)+"%";
    }
    if(items.style.left > -102+"%"){
        nextBtn.removeAttribute('disabled');
        fillNext.style.fill = "#6E9773"
    }
})
