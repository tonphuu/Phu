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

// Audio Autoloop
document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio("https://cdn.discordapp.com/attachments/968542864235716658/1198240393330970644/One_Of_The_Girls.mp3?ex=65f58e54&is=65e31954&hm=2528bd6b58d2dc40fe2ae64c09a7d089e9f4f081976a01ad3b57534fbadf2259&");
    audio.loop = true;
    document.addEventListener("click", function(){
      audio.play();
    });
    document.addEventListener("mousemove", function(){
      audio.play();
    });
});