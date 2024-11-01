let a = document.querySelector("#menubtn")
let b = document.querySelector("#Xbtn")
let c = document.querySelector("nav")

a.addEventListener("click",function(){
    c.style.display="block";
    a.style.display="none";
    b.style.display="block";
})

b.addEventListener("click",function(){
    c.style.display="none";
    a.style.display="block";
    b.style.display="none";
})

let faq1= document.querySelector("#Ftext1")
let text1=document.querySelector("#fdiv1")
let up1=document.querySelector("#up1")
let down1=document.querySelector("#down1")
f1=0
text1.addEventListener("click",function(){
   if(f1==0){
    faq1.style.display="block";
    down1.style.display="none"
    up1.style.display="block";
    text1.style.color="white";
    text1.style.borderRadius="100px";
    text1.style.backgroundColor="coral";
    f1=1
   }
   else{
    faq1.style.display="none";
    text1.style.border="none";
    text1.style.color="black";
    text1.style.backgroundColor="transparent";
    up1.style.display="none";
    down1.style.display="block"
    f1=0;
   }
})


let faq2= document.querySelector("#Ftext2")
let text2=document.querySelector("#fdiv2")

f2=0
text2.addEventListener("click",function(){
    if(f2==0){
        faq2.style.display="block";
        text2.style.color="white";
        down2.style.display="none"
        up2.style.display="block";
        text2.style.borderRadius="100px";
        text2.style.backgroundColor="lightskyblue";
        f2=1
    }
    else{
        faq2.style.display="none";
        text2.style.border="none";
        text2.style.color="black";
        text2.style.backgroundColor="transparent";
        up2.style.display="none";
        down2.style.display="block"
        f2=0;
    }

})
let faq3= document.querySelector("#Ftext3")
let text3=document.querySelector("#fdiv3")


f3=0
text3.addEventListener("click",function(){
    if(f3==0){
        faq3.style.display="block";
        text3.style.color="white";
        down3.style.display="none"
    up3.style.display="block";
        text3.style.borderRadius="100px";
        text3.style.backgroundColor="darkcyan";
        f3=1
    }
    else{
        faq3.style.display="none";
        text3.style.border="none";
        text3.style.color="black";
        text3.style.backgroundColor="transparent";
         up3.style.display="none";
    down3.style.display="block"
        f3=0
    }
    
})

let btn=document.querySelector("#Langbtn")
let div=document.querySelector("#language")
let l=0;

btn.addEventListener("click",function(){
    if(l==0){
        div.style.display="block";
        l=1;
    }
    else{
        div.style.display="none";
        l=0;
    }
})
