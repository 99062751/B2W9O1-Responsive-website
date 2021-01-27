var menuitem= document.getElementById("menubar");
var menutext= document.getElementById("menutext");
menuitem.onclick= menuClicked;
    menutext.style.display= "none"


function menuClicked(){
    if( menutext.style.display == "inline-block"){
        menutext.style.display= "none";
    }
    else{
        menutext.style.display= "inline-block";
    }
    
}