var btns =document.querySelectorAll("button");
// console.dir(btn)

for(btn of btns){
    // btn.onclick = myfun;
    btn.addEventListener("click",myfun);
    btn.addEventListener("click",hello);
}

function myfun(){
    console.log("button was pressed");
}

function hello(){
    console.log("hello!")
}


  var par = document.querySelector("p")
   
    par.addEventListener("mouseover",hover);
   

function hover(){
    par.textContent = "This is a paragraph text hover";
}
par.addEventListener("mouseout", function() {
    par.textContent = "This is a paragraph"; 
});
// btn.onclick = function(){
//     console.log('button was pressed');
// }

// add event listener iko value ch multiple events nu pass krr denda hai
// j apn iko value ch multiple event pass krriye tn ohde cho bss ik event execute hoyega
// add event listener is object not a event , present in a button
