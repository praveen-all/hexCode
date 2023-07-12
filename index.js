function func(){
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++){
        cons+=val[Math.round(Math.random()*(15-0)+0)];
    }
    return cons;
}

let btn=document.getElementById("btn1");
let div=document.querySelector(".clrbdy");
// console.log(div);
// console.log(btn);
let inverval;
let app;
let istrue=true;
btn.addEventListener("click",()=>{
    if(istrue){
        istrue=false;
    inverval=setInterval(() => {
     app=func();
    div.style. backgroundColor=app;
    div.innerText=app;
  }, 1000);
    }
})


let btn1=document.getElementById('btn2');
btn1.addEventListener("click",()=>{
     istrue=true;
    clearInterval(inverval);
})
