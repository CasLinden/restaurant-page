import './style.css';
import {mozaic} from './mozaic'


let wrapper = document.querySelector('#wrapper');


mozaic()

function clearPage() {
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.lastChild)
    }
}

function loadHome () {
    clearPage()
}