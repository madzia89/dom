function addElement(){                          //chcemy dodać element który doda Ala ma kota do body

                                                //body możemy znaleźć przez query selector lub założyć że body tołaśnie body lub

    var bodyElement = document.querySelector('body')

    var newDiv = document.createElement('div')  //tworzymy nowy div

    var textNode = document.createTextNode("Ala ma kota") //tworzymy text

    newDiv.appendChild(textNode)                //dodajemy text do diva

    bodyElement.appendChild(newDiv)             // dodajemy diva do body jako dziecko body
}

// poniżej skrócony sposób Mateusza
function addElement(container, content, tag) {
    container = container || document.querySelector('body')  // dodaje selector do wskazanego miejsca lub body
    content = content === undefined ? 'Ala ma kota' : content // dodaje nadany text lub ala ma kota
    tag = tag || 'div'                                          // dodaje nowy tag lub nowy div

    var newDiv = document.createElement(tag)
    var textNode = document.createTextNode(content)

    newDiv.appendChild(textNode)

    container.appendChild(newDiv)
}