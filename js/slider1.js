let nextBtn = document.getElementById("NextBtn");
let prevBtn = document.getElementById("PrevBtn");
let items = document.querySelector(".catalog__items");
let curren=0;
items.style.left= String(curren)+"%";
nextBtn.addEventListener("click", ()=>{
    curren -= 34;
    items.style.left= String(curren)+"%";
    if (items.style.left <= -102+"%")
    {
        nextBtn.setAttribute('disabled', true);
    } 
    if(items.style.left < 0+'%'){
        prevBtn.removeAttribute('disabled');
    }
})
prevBtn.addEventListener("click", ()=>{
    if(items.style.left>=0+'%'){
        prevBtn.setAttribute('disabled', true);
    }
    else{
        curren += 34;
        items.style.left= String(curren)+"%";
    }
    if(items.style.left > -102+"%"){
        nextBtn.removeAttribute('disabled');
    }
})
