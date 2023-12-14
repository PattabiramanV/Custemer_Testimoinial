"use strict"

let left_btn=document.createElement("button");
left_btn.innerText="<"

let Right_btn=document.createElement("button");
Right_btn.innerText=">"

let card=document.querySelector(".card");
let h_2=document.getElementById("h2");

let h_4=document.getElementsByTagName("h4");


let span=document.getElementById("span");

let card_img=document.getElementById("card_img");

let p_content=document.getElementsByTagName("p");


card.append(left_btn,Right_btn)


let card_Obj=[

    {
        src:"Figma .png",
        Name:"Susan Smith",
        Degin:"Web Develepor",
        About:"It is a long established fact that a reader will be "+
        "distracted by the readable content of a page when looking at "+
        "its layout."
       
    }
    ,
{
    src:"sathishh.jpg",
    Name:"Sathish",
    Degin:"Backend Develepor",
    About:"Lorem ipsum, or lipsum as it is sometimes known, is dummy "+
    "text used in laying out print, graphic or web designs."
   
},
{
    src:"Keerthi.jpg",
    Name:"Keerthi Suresh",
    Degin:"Star",
    About:"It is a long established fact that a reader will be" +
    "distracted by the readable content of a page when looking at "+
    "its layout."
}
]

Right_btn.addEventListener("click", function () { Right_Fun(this) });
left_btn.addEventListener("click", function () { Right_Fun(this) });

let valid = 0;

function Right_Fun(x) {
console.log(x);
        if (x.innerHTML == Right_btn.innerHTML) {
        valid++;
        if (valid == card_Obj.length) {
            valid = 0;
        }
        card_img.src = card_Obj[valid].src;

        h_4[0].innerText = card_Obj[valid].Name;
        span.innerHTML = card_Obj[valid].Degin;
        p_content[0].innerHTML = card_Obj[valid].About;

    }

    else {

        valid--;
        if (valid < 0) {
            valid = 2;
            card_img.src = card_Obj[valid].src;
            h_4[0].innerText = card_Obj[valid].Name;
            span.innerHTML = card_Obj[valid].Degin;
            p_content[0].innerHTML = card_Obj[valid].About;
        }

        else {
            console.log(valid);
            card_img.src = card_Obj[valid].src;
            h_4[0].innerText = card_Obj[valid].Name;
            span.innerHTML = card_Obj[valid].Degin;
            p_content[0].innerHTML = card_Obj[valid].About;

        }
    }
}
