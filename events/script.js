(function(){
    var buttonElement = document.querySelector('button')
    buttonElement.addEventListener(
        'click',
        function(someEvent){
            console.log(someEvent)
        })

})()

//po click wpisujemy funkcję którą będziemy chcieli wywołac możemy potać już zadeklarowaną lub podać nową funkcję ta funkcja będzie wywołana przez funkcję matkę, ta funkcja wykona się zawsze gdy kilikniemy
