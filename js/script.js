let lbtn = document.getElementById("apartmentOneLeft");
let rbtn = document.getElementById("apartmentOneRight");
let img = document.getElementById("apartmentOneImg");
rbtn.addEventListener("click", function(){
    let num = img.getAttribute("data-numimg");
    if(num==1){
        img.setAttribute("src", "img/apartment_one2.jpg");
        img.setAttribute("data-numimg", 2);
    }
    else if(num==2){
        img.setAttribute("src", "img/apartment_one3.jpg");
        img.setAttribute("data-numimg", 3);
    }
    else if(num==3){
        img.setAttribute("src", "img/apartment_one4.jpg");
        img.setAttribute("data-numimg", 4);
    }
    else if(num==4){
        img.setAttribute("src", "img/apartment_one1.jpg");
        img.setAttribute("data-numimg", 1);
    }
} );
lbtn.addEventListener("click", function(){
    let num = img.getAttribute("data-numimg");
    if(num==1){
        img.setAttribute("src", "img/apartment_one4.jpg");
        img.setAttribute("data-numimg", 4);
    }
    else if(num==4){
        img.setAttribute("src", "img/apartment_one3.jpg");
        img.setAttribute("data-numimg", 3);
    }
    else if(num==3){
        img.setAttribute("src", "img/apartment_one2.jpg");
        img.setAttribute("data-numimg", 2);
    }
    else if(num==2){
        img.setAttribute("src", "img/apartment_one1.jpg");
        img.setAttribute("data-numimg", 1);
    }
} );