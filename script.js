(function {
    var confirmed = confirm("You wanna see something?")
    console.log(confirmed)                          //dopisanie tego pozwala konsoli na odczytanie wartości true lub false

    if (confirmed) {                                //jeżeli zmienna w nawiasie  === true wyświetli dalszą część
        var name = prompt("write: your name")       // to co zwróci nam prompt zapisane zostanie w zmiennej name
        alert("Hello! " + name)
    }

    else {
        alert("that's ok")
    }
})() // ze względu na okrągłe nawiasy przed funkcją i za nią, funkcja sama sie wywołuje, bez tych nawiasów potrzebna byłaby nazwa funkcji oraz na końcu ponownie jej nazwa z nawiasami () która by ją wywołała

//poniżej krótszy zapis powyższej funkcji
(function () {
    if (confirm("You wanna see something?")){
        alert(
           prompt("write: your name")
        )
    }else {
        alert("that's ok")
    }
})()