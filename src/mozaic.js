import cucmini from './images/minis/cuc.png'
import herbsmini from './images/minis/herbs.png'
import zucaubmini from './images/minis/zucaub.png'
import lemonmini from './images/minis/lemon.png'
import peppermini from './images/minis/pepper.png'
import fetamini from './images/minis/feta.png'
import redonionmini from './images/minis/redonion.png'
import carrotsmini from './images/minis/carrots.png'
import saucemini from './images/minis/sauce.png'
import chickenmini from './images/minis/chicken.png'


function mozaic () {
    let minis = [chickenmini, cucmini, fetamini, zucaubmini, lemonmini, carrotsmini, redonionmini, saucemini, peppermini, herbsmini];
    let container = document.querySelector('#mozaic');

   function appendTile(mini){
    const tile = new Image();
    tile.src = mini;
    tile.classList.add('tile')
    console.log(mini)
    container.appendChild(tile);
   }

   minis.forEach(mini => appendTile(mini))

   function shuffle(array) {
    var m = array.length, t, i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

   for(let i = 0; i < 2; i++){
    let randomMinis = shuffle(minis);
    randomMinis.forEach(mini => appendTile(mini))
   }

   function setMargin(){
    let header = document.querySelector('#header');
    let height = header.offsetHeight;
   }

   setMargin()
  
}



export {mozaic};