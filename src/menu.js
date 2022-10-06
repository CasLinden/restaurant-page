import {clearPage, createItem} from './helper-functions';
import ayran from './images/ayran.png';
import coke from './images/coke.png';
import beer from './images/beer.png';
import kebab from './images/kebab-sandwich.jpg';
import veggieKebab from './images/veggie-kebab.jpg';
import wrap from './images/wrap.png';
import veggieWrap from './images/veggie-wrap.jpg'

function loadMenu() {
    clearPage();
    const content = document.querySelector('#content');

    function containers (){
        const menuContainer = document.createElement('div');
        menuContainer.setAttribute('id', 'menu-content')
        content.appendChild(menuContainer);
        const foodColumn = document.createElement('div');
        const drinksColumn = document.createElement('div');
        foodColumn.classList.add('food');
        drinksColumn.classList.add('drinks');
        menuContainer.appendChild(foodColumn);
        menuContainer.appendChild(drinksColumn);
    }
    containers()
   
    const food = document.querySelector('.food');
    const drinks = document.querySelector('.drinks');
    
    function headers(){
        let foodHeader = createItem('food-item', 'Food');
        let drinksHeader = createItem('drinks-item', 'Drinks');
        food.appendChild(foodHeader);
        drinks.appendChild(drinksHeader);
    }
    headers()

    function addAyran(){
        let item = createItem('drinks-item', null, 'Ayran', ayran, '¥350');
        drinks.appendChild(item);
    }
    addAyran()

    function addCoke(){
        let item = createItem('drinks-item', null, 'Coke', coke, '\r\n ¥300');
        drinks.appendChild(item)
    }
    addCoke()

    function addBeer(){
        let item = createItem('drinks-item', null, 'Beer', beer, '\r\n ¥350');
        drinks.appendChild(item)
    }
    addBeer()

    function addChickenKebab (){
        let item = createItem('food-item', null, 'Chicken Kebab', kebab, '\r\n ¥800');
        food.appendChild(item);
    }
    addChickenKebab()

    function addVeggieKebab(){
        let item = createItem('food-item', null, 'Veggie Kebab', veggieKebab, '\r\n ¥800');
        food.appendChild(item);
    }
    addVeggieKebab();

}

export {loadMenu}