
var drumnumber = document.querySelectorAll(".drum").length;
for(var i=0;i<drumnumber;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var letter=this.innerHTML;
      playsound(letter);
      animation(letter);
    }
    );
}

document.addEventListener("keydown",function(event)
{
    playsound(event.key);
    animation(event.key);
}
);

function playsound(letter)
{
    switch (letter) {
        case "w":
        var tom1=new Audio("music/tom-1.mp3");
        tom1.play();
           
            break;
        case "a":
        var tom2=new Audio("music/tom-2.mp3");
        tom2.play();
               
            break;
        case "s":
        var tom3=new Audio("music/tom-3.mp3");
        tom3.play();
               
            break;

        case "d":
        var tom4=new Audio("music/tom-4.mp3");
        tom4.play();
           
            break;
        case "j":
        var crash=new Audio("music/crash.mp3");
        crash.play();
               
            break;
        case "k":
        var kick=new Audio("music/kick-bass.mp3");
         kick.play();
               
            break;  
        case "l":
        var snare=new Audio("music/snare.mp3");
        snare.play();
               
            break;                        
        default:
            break;
    }
}

function animation(letter)
{
   document.querySelector("."+letter).classList.add("pressed");
   setTimeout(function(){
    document.querySelector("."+letter).classList.remove("pressed");
   },100);
 
}

