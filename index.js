

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}



function handleClick(){
    for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].style.color="";
    }

    if (document.querySelectorAll(".drum")[0]==this){
        
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        this.style.color="white";
        
    }
 
    else if (document.querySelectorAll(".drum")[1]==this) {
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        this.style.color="white";
    }

    else if (document.querySelectorAll(".drum")[2]==this) {
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        this.style.color="white";
        
    }

    else if (document.querySelectorAll(".drum")[3]==this) {
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        this.style.color="white";
    }
    else if (document.querySelectorAll(".drum")[4]==this) {
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        this.style.color="white";
    }
    else if (document.querySelectorAll(".drum")[5]==this) {
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        this.style.color="white";
    }
    else if (document.querySelectorAll(".drum")[6]==this) {
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        this.style.color="white";
    }

}
    /*
    else if (document.querySelectorAll("drum")[0]==button.s.drum) {
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
    }
    else if (document.querySelector(".d")) {
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
    }
    else if (document.querySelector(".j")) {
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
    }
    else if (document.querySelector(".k")) {
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
    }
    else if (document.querySelector(".l")) {
        var audio = new Audio("./sounds/kick.mp3");
        audio.play();
    }
}

*/
