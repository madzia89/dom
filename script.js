var question = function ask() {
    var confirmed = confirm("You wanna see something?")
    console.log(confirmed)                          //dopisanie tego pozwala konsoli na odczytanie wartości true lub false

    if (confirmed) {                                //jeżeli zmienna w nawiasie  === true wyświetli dalszą część
        var name = prompt("write: your name")       // to co zwróci nam prompt zapisane zostanie w zmiennej name
        alert("Hello! " + name)
    }

    else {
        alert ("that's ok")
    }
}
question()                  // question() wywołuje powyższą funkcję, bez tego, okienka nie pojawią się w przeglądarce