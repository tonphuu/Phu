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
    var audio = new Audio("https://cdn.discordapp.com/attachments/968542864235716658/1211180733306114118/x2mate.com_-_FIFA4_BGM__-_EL_TORNADO_128_kbps.mp3?ex=65ed42f5&is=65dacdf5&hm=b8eb567e42d71f94c0b37e832713b3ff6a18753864d1f66cb6886179b1e3785e&");
    audio.loop = true;
    document.addEventListener("click", function(){
      audio.play();
    });
});
