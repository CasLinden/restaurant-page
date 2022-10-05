function clearPage() {
    while(content.firstChild){
        content.removeChild(content.lastChild)
    }
}

function createItem (itemClass, header, text, image) {
    let item = document.createElement('div');
    item.classList.add('item', `${itemClass}`);

    if(header){
        const h2 = document.createElement('h2');
        h2.textContent = `${header}`;
        item.appendChild(h2);
        }

    if(text){
        const para = document.createElement('p');
        para.textContent = `${text}`;
        item.append(para);
        }
    
    if(image){
        const img = new Image();
        img.src = image;
        img.style.width = '50%'
        img.style.borderRadius = '10px'
        item.append(img)
    }
    
    return item;
}


export {clearPage, createItem};