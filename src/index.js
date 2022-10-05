import './style.css';
import {mozaic} from './mozaic';
import {loadHome} from './home';
import {loadMenu} from './menu';
import {loadContact} from './contact';

mozaic()
loadHome()


function chargeButtons () {
    let currentPage = 'home'

    function homeButton() {
        const btn = document.querySelector('.home-button');
        btn.addEventListener('click', load)
        function load () {
            if(currentPage !== 'home'){
                loadHome();
                currentPage = 'home';
                decolorBtn();
                btn.style.backgroundColor = "#367E18";
            }
        }
    }
    homeButton()

    function menuButton() {
        const btn = document.querySelector('.menu-button');
        btn.addEventListener('click', load)
        function load () {
            if(currentPage !== 'menu'){
                loadMenu();
                currentPage = 'menu';
                decolorBtn()
                btn.style.backgroundColor = "#367E18";
            }
        }
    }
    menuButton()

    function contactButton() {
        const btn = document.querySelector('.contact-button');
        btn.addEventListener('click', load)
        function load () {
            if(currentPage !== 'contact'){
                loadContact();
                currentPage = 'contact';
                decolorBtn();
                btn.style.backgroundColor = "#367E18";
            }
        }
    }
    contactButton()


}
chargeButtons()

function decolorBtn () {
    const buttons = document.getElementsByClassName('button');
    for(let button of buttons){
        button.style.backgroundColor = 'black';
    } 
}


