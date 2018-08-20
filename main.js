function playSound(event){
    let soundElement = document.querySelector(`audio[data-keyCode="${event.keyCode}"`);
    let soundContainer = document.querySelector(`.key[data-keyCode="${event.keyCode}"`);
  
    if(!soundElement || !soundContainer) {
       return console.error(`no such sound element with key code ${event.keyCode} `);
    }
    else{ // no really need for this else statment, just for more organiztion.
    
        soundElement.currentTime = 0;
        soundElement.play();
        soundContainer.classList.add('playingEffects');
    }

}

function removeEffects(event){
  if(event.propertyName !== 'transform'){
      return;
  }
  else{
     this.classList.remove('playingEffects');
  }
}


document.addEventListener("keydown",playSound);
let containers = document.querySelectorAll('.key');
containers.forEach((element) => element.addEventListener('transitionend',removeEffects));