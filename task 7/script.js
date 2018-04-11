(function (){

var inputElement2 = document.querySelector('input')
    inputElement2.setAttribute('name', 'email')
    inputElement2.setAttribute('disabled', '')
    inputElement2.setAttribute('placeholder', 'write e-mail')
    inputElement2.removeAttribute('placeholder')
})()
//powyższe pozwala zmieniać atrybut elementu


function  toggleDisabled(){
    var inputElement2 = document.querySelector('input')

    if(inputElement2.getAttribute('disabled') === null)
        inputElement2.setAttribute('disabled', '')
    else
        inputElement2.removeAttribute('disabled')
}


// druga funkcja pozwala włączać i wyłączać atrybut disabled poprzez wywołanie tej funkcji