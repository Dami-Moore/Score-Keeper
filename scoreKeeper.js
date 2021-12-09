const playerUp1 = document.querySelector('#player-up1');
const numberUp1 = document.querySelector('#number-up1');

const playerUp2 = document.querySelector('#player-up2');
const numberUp2 = document.querySelector('#number-up2');

const select = document.querySelector('select');
let num = 1;
playerUp1.addEventListener('click', function(e) {
  numberUp1.innerText =  num++;   
  if(numberUp1.innerText === select.value) {
      playerUp1.disabled = true;
      playerUp2.disabled = true;
  } 
})

let number = 1;
playerUp2.addEventListener('click', function(e) {
    numberUp2.innerText =  number++;
    if(numberUp2.innerText === select.value) {
        playerUp2.disabled = true;
        playerUp1.disabled = true;
    }     
  })

const reset = document.querySelector('#reset');

reset.addEventListener('click', function() {
    playerUp1.disabled = false;
    playerUp2.disabled = false;
    numberUp1.innerText = 0;
    numberUp2.innerText = 0;
    num = 1;
    number = 1;
})

