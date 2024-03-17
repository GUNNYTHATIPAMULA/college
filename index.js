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
// alert("fdsj")

btn.addEventListener("click",page);
function page(){
  if(username.value==="23K91A04N9" && password.value==="23K91A04N9"){
    console.log("baksjh")
    image.classList.toggle("hide");
    one.classList.add("hide");
    mainimage.classList.toggle("hide")
    
  }
  else{
    alert("invalid login");
  }
};
examarks.addEventListener("click",()=>{
  announcements.classList.add("hide");
  resultbox.classList.remove("hide");
})
showbtn.addEventListener("click",()=>{
  allmarks.classList.toggle("hide");
});