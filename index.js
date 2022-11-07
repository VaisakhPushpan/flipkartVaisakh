document.querySelector("#more-show").addEventListener("mouseover", ()=>{
   document.querySelector(".dropdown-more").style.display = "block";
   document.querySelector("#symbol").innerHTML = "&nbsp&#x2303;"
})
window.addEventListener("click" , ()=>{
    document.querySelector(".dropdown-more").style.display = "none";
    document.querySelector("#symbol").innerHTML = "&nbsp&#x2304;"
})
document.querySelector("#icon-menu").addEventListener("click" , ()=>{
    document.querySelector("#list-menu").style.left = 0;
})
document.querySelector("#list-menu").addEventListener("click" , ()=>{
    document.querySelector("#list-menu").style.left = "-10000px";
})
document.querySelector(".nav-login-btn").addEventListener("mouseover" , ()=>{
    document.querySelector("#login-div").style.display = "block";
})
document.querySelector(".nav-login-btn").addEventListener("mouseout" , ()=>{
    document.querySelector("#login-div").style.display = "none";
})
document.querySelector("#loginbtn").addEventListener("click" , ()=>{
    if(document.querySelector(".container-login").style.display == "block"){
        document.querySelector(".container-login").style.display = "none";
    }
    else{
    document.querySelector(".container-login").style.display = "block";
    document.querySelector(".container-login").style.display = "flex";
    document.querySelector(".container-login").style.justifyContent = "center";
    document.querySelector(".container-login").style.alignItems = "center";
    }

})
document.querySelector("#logindisable").addEventListener("click" , ()=>{
    document.querySelector(".container-login").style.display = "none";
})
document.querySelector("#form-btn").addEventListener("click" , ()=>{
    let form1 = document.querySelector("#form-1");
    let form2 = document.querySelector("#form-2");
    if(form1.value == "" ){
        document.querySelector("#form1-label").style.marginTop = "-20px";
        document.querySelector("#form1-label").style.color = "red";
    }
    else if(form2.value == ""){
        document.querySelector("#form2-label").style.marginTop = "-20px";
        document.querySelector("#form2-label").style.color = "red";
    }
    else if(form1.value && form2.value){
        document.querySelector("#form1-label").style.color = "grey";
        document.querySelector("#form2-label").style.color = "grey";
        document.querySelector(".container-login").style.display = "none";
        document.querySelector("#loginbtn").innerHTML = "Logout";
    }
    document.querySelector("#loginbtn").addEventListener("click" , ()=>{
        document.querySelector("#loginbtn").innerHTML = "Login";
    })
            
})
document.querySelector("#responsive-loginbtn").addEventListener("click" , ()=>{
    document.querySelector(".responsive-loginpage").style.display = "block";
})
document.querySelector("#resonsive-logindissmiss").addEventListener("click" , ()=>{
    document.querySelector(".responsive-loginpage").style.display = "none";
})
document.querySelector("#continue-input").addEventListener("change" , (numberr)=>{
     let number = numberr.currentTarget.value;
     if(number.length === 10){
        document.querySelector("#continue-btn").style.background = "orange";
     }
     else{
        document.querySelector("#continue-btn").style.background = "grey";
     }
})
document.querySelector("#continue-btn").addEventListener("click" , ()=>{
    let number = document.querySelector("#continue-input").value;
    if(number.length === 10){
        document.querySelector("#continue-input").style.color = "black";
        document.querySelector(".responsive-loginpage").style.display = "none";
        document.querySelector("#responsive-loginbtn").innerHTML = "logout";
    }
    document.querySelector("#responsive-loginbtn").addEventListener("click" , ()=>{
        document.querySelector("#responsive-loginbtn").innerHTML = "login";
    })
})
