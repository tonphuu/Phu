document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    // disable F12 key
    if(e.keyCode == 123) {
        return false;
    }
 
        // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }
 
    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }
 
    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }

    // disable S key
    if(e.ctrlKey && e.keyCode == 83) {
        return false;
     }
}

document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio("https://cdn.discordapp.com/attachments/968542864235716658/1198512881969418310/Kerosene.mp3?ex=65bf2d1a&is=65acb81a&hm=4437b866718a76ff62cbd82f664347118e8f14c3f3b211f6f71475164605e70c&");
    audio.loop = true;
    document.addEventListener("click", function(){
      audio.play();
    });
    document.addEventListener("mousemove", function(){
      audio.play();
    });
  });