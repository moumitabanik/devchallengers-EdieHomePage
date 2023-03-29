const menuBtn = document.querySelector(".menu");
const involve = document.querySelector("#dropdown_involve");
const dropdown = document.querySelector("#dropdown");
const content = document.querySelector(".dropdown_content");

menuBtn.addEventListener('click',()=>{
    var openmenu= document.querySelector(".dropdown_involve");
    if(openmenu){
        involve.classList.remove("dropdown_involve");
        dropdown.classList.remove("dropdown");
        content.style.display = "none";
    }
    else{
        involve.classList.add("dropdown_involve");
        dropdown.classList.add("dropdown");
        content.style.display = "flex";
    }
});

