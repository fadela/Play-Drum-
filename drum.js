
         
        function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running
    audio.currentTime=0; //rewind to the start
    audio.play();
    setTimeout(function() {
        key.classList.add('playing');
    }, 140);
    key.classList.remove('playing');
};

window.addEventListener("keydown" , playSound)

