let con=document.querySelectorAll(".con");
let computer= document.querySelectorAll(".computer")
console.log(computer);
let YOU = document.querySelector(".YOU")
let PC = document.querySelector(".PC")
let winmodal=document.querySelector(".win-modal")
let winner = document.querySelector(".winner")
let play=document.querySelector(".play")
let random= Math.floor(Math.random()*3);
let triangle =document.querySelector(".triangle");
let rulebtn=document.querySelector(".btn-rule");
let score=JSON.parse(localStorage.getItem("sc"));
let scoreElem=document.getElementById("score")
let rulemodal=document.querySelector(".rule-modal")
let ruleimg=document.querySelector(".rule-img")
if (score){
       scoreElem.innerText=score;
}
let count=0;

con.forEach((element,index)=>{

element.addEventListener("click",()=>{
    YOU.style.opacity="1";
    triangle.style.display="none";

    con.forEach((item)=>{

    item.style.display="none";
    });
    element.style.display="block";
    element.classList.add("show");
    setTimeout(()=>{

        PC.style.opacity="1";
        setTimeout(()=>{

            computer[random].style.display="block";
            computer[random].classList.add("right");
        }),1000;
    
    },500);
    setTimeout(()=>{
        if(random==index){
            winmodal.style.display="grid";
            winner.innerText="Match Tied "

        }
        else if(index==0 && random==2 ||index==1 && random==0 || index==2 && random==1){
         winmodal.style.display="grid";
         winner.innerText="You Win ";
         count=score;
         count++;
         scoreElem.innerText=count;
         localStorage.setItem("sc",JSON.stringify(count));
         

        }else {
        winmodal.style.display="grid";
         winner.innerText="Pc Win "

        }
     }),1500;
})
});
play.addEventListener('click',()=>{
    window.location.reload();
});

rulebtn.addEventListener("click",()=>{
    rulemodal.style.display="flex";
    setTimeout(()=>{
ruleimg.style.transform="translateY(0)"

    }),500;
    let close=document.querySelector(".close");
    close.addEventListener("click",()=>{
        rulemodal.style.display="none";
    })

})