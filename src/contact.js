import {clearPage, createItem} from './helper-functions';


function loadContact() {

    clearPage()
    const content = document.querySelector('#content');
    
    let ctct = createItem('contact', 'Contact', 'Tel: 060-4456-7894 \r\n email: shinkebap@kebapmail.com');
    content.appendChild(ctct);

}

export {loadContact}