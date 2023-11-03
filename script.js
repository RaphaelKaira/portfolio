const learn = document.querySelector(".learnMore");
const learnBtn = document.querySelector(".learnMoreButton");


let isvisible = false
learnBtn.addEventListener("click", ()=>{
    if(isvisible){
        learn.style.display="none";
    }else{
        learn.style.display="flex";
    }
    isvisible = !isvisible
})