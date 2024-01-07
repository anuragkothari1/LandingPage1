const menuClicked=()=>{
    const menu=document.getElementById("formobile");
    menu.style.display="flex";
  
    console.log("clicked");

}

const closeClicked=()=>{
    const close=document.getElementById("formobile");
    close.style.display="none";

    console.log("clicked");
}
document.addEventListener("scroll",()=>{
    
    const navbar= document.getElementById("forlarge");
    if (window.scrollY>50){
        navbar.style.backgroundColor="black";
       
    }else{
        navbar.style.backgroundColor="rgb(123 36 101)";
        
    }
})