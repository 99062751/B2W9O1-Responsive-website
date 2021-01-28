var menuitem= document.getElementById("menubar");
var menutext= document.getElementById("menutext");
menuitem.onclick= menuClicked;

if(window.innerWidth < 600){
    menuitem.style.display= "block";
    menutext.style.display= "none";

}else if(window.innerWidth > 600){
    menuitem.style.display= "none";
    menutext.style.display= "inline-block";
}

 
   

function menuClicked(){
    if(menutext.style.display == "inline-block"){
        menutext.style.display= "none";
    }
    else if(menutext.style.display == "none"){
        menutext.style.display= "inline-block";
    }
    
}

