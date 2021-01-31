var menuitem= document.getElementById("menubar");
var menuitem2= document.getElementById("menubar2");

var menutext= document.getElementById("menutext");
var menutext2= document.getElementById("menutext2");

menuitem.onclick= menuClicked;
menuitem2.onclick= menuClicked2;


if(window.innerWidth < 600){
    menuitem.style.display= "block";
    menutext.style.display= "none";
    menuitem2.style.display= "block";
    menutext2.style.display= "none";

}else if(window.innerWidth > 600){
    menuitem.style.display= "none";
    menutext.style.display= "inline-block";
    menuitem2.style.display= "none";
    menutext2.style.display= "inline-block";
}
function menuClicked(){
    if(menutext.style.display == "inline-block"){
        menutext.style.display= "none";
    }
    else if(menutext.style.display == "none"){
        menutext.style.display= "inline-block";
    }
    
}

if(window.innerWidth < 600){

    menuitem2.style.display= "block";
    menutext2.style.display= "none";

}else if(window.innerWidth > 600){

    menuitem2.style.display= "none";
    menutext2.style.display= "inline-block";
}

function menuClicked2(){
    if(menutext2.style.display == "inline-block"){
        menutext2.style.display= "none";
    }
    else{
        menutext2.style.display= "inline-block";
    }
}


//slideshow



