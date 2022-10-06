import {clearPage, createItem} from './helper-functions';
import kebab from './images/kebab.jpg';

function loadHome (){

    clearPage()

    let content = document.querySelector('#content');

    function about() {
        let about = createItem('about', 'A Better Kebab', 'Born from Turkish tradition and perfected on the streets of Berlin, we present the veggie kebab! For the first time in Tokyo. Let the flavor speak for itself.', kebab);
        content.appendChild(about);
    }
    about();

    function hours (){
        let hours = createItem('hours', 'Hours', `Sunday-Thursday: 12:00-23:00 \r\n Friday - Saturday:15:00-02:00`);
        content.appendChild(hours);
    }
    hours();

    function location() {
        let location = createItem('location', 'Location', 'Shinjuku Station \r\n West Exit \r\n Omoide-Yokocho \r\n \r\n Nishi-shinjuku \r\n 99-02-09 \r\n\ NOT A REAL RESTAURANT (yet)')
        content.appendChild(location);
    }
    location()
}

export {loadHome};
