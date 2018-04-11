function addElement() {

    var bodyElement = document.querySelector('body')        //wybieramy body aby do niego dodawać elementy

    var newDiv = document.createElement('div')              //tworzymy div 1

    bodyElement.appendChild(newDiv)                         // dodajemy ierwszy div do body

    var secondDiv = document.createElement('div')           // dodajemy div 2

    var textNode = document.createTextNode("Hello")         // towrzymy tekst

    secondDiv.appendChild(textNode)                         // załączamy tekst do div 2

    newDiv.appendChild(secondDiv)                            // dodajemy drugiego diva do pierwszego diva
}

//poniżej zapis Mateusza:

(function(){
    var bodyElement = document.querySelector('body')         //znajdujemy body
    var div1 = document.createElement('div')                //tworzymy div 1
    var div2 = document.createElement('div')                // tworzymy div2
    var text = document.createTextNode("hello")             // tworzymy text

    div2.appendChild(text)                                  //dołączamy text do div2
    div1.appendChild(div2)                                  //dołączamy div1 do div2
    bodyElement.appendChild(div1)                           //dołączamy div 1 do body
})()


//krótszy sposób
(functon (){
    document.querySelector('body')
        .innerHtml = "<div>Hello</div>"
}
)()