(function(){
    var bodyElement = document.querySelector('body')         //znajdujemy body
    var div1 = document.createElement('div')                //tworzymy div 1
    bodyElement.appendChild(div1)                           //dołączamy div 1 do body

    div1.classList.add("firstClass")                        // dodajemy klasę firstClass do div1
    div1.classList.add("secondClass")                       // dodajemy klasę secondClass do div1
    div1.classList.add("thirdClass")                        // dodajemy klasę thirdClass do div1
    div1.classList.remove("secondClass")                    // usuwamy secondClass z diva
})()
