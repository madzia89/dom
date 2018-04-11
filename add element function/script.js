function addElement(){ //chcemy dodać element który doda Ala ma kota do body

    //body możemy znaleźć przez query selector lub założyć że body tołaśnie body lub

    var bodyElement = document.querySelector('body')

    var newDiv = document.createElement('div') //tworzymy nowy div

    var textNode = document.createTextNode("Ala ma kota") //tworzymy text

    newDiv.appendChild(textNode) //dodajemy text do diva

    bodyElement.appendChild(newDiv) // dodajemy diva do body jako dziecko body
}