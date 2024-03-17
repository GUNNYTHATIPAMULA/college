let username = document.querySelector("#txtUserId");
let password = document.querySelector("#txtPwd");
let btn = document.querySelector("#btnLogin");
let exam = document.querySelector(".exam");
let one = document.querySelector(".one");
let image= document.querySelector(".images");
let mainimage=document.querySelector(".mainimage");
let examarks=document.querySelector(".examarks");
let announcements=document.querySelector(".announcements");
let resultbox=document.querySelector(".resultbox");
let showbtn=document.querySelector(".showbtn");
let allmarks=document.querySelector(".allmarks");



// second

let image1= document.querySelector(".images1");
let mainimage1=document.querySelector(".mainimage1");
let examarks1=document.querySelector(".examarks1");
let announcements1=document.querySelector(".announcements1");
let resultbox1=document.querySelector(".resultbox1");
let showbtn1=document.querySelector(".showbtn1");
let allmarks1=document.querySelector(".allmarks1");

// alert("fdsj")

btn.addEventListener("click",page);
function page(){
  if(username.value==="23K91A04N9" && password.value==="23K91A04N9"){
    console.log("baksjh")
    image.classList.toggle("hide");
    one.classList.add("hide");
    mainimage.classList.toggle("hide")
    
  }
  else if(username.value==="23K91A04M2" && password.value==="23K91A04M2"){
    image1.classList.toggle("hide");
    one.classList.add("hide");
    mainimage.classList.toggle("hide")
  }
  else{
    alert("Server Error!!!");
  }
};
// me

examarks.addEventListener("click",()=>{
  announcements.classList.add("hide");
  resultbox.classList.remove("hide");
})
showbtn.addEventListener("click",()=>{
  // allmarks.classList.("hide");
  allmarks.style.display="flex";
});


// second
examarks1.addEventListener("click",()=>{
  announcements1.classList.add("hide");
  resultbox1.classList.remove("hide");
})
showbtn1.addEventListener("click",()=>{
  // allmarks.classList.("hide");
  allmarks1.style.display="flex";
});


