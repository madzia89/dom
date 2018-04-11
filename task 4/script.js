(function () {
    var getById = document.getElementById('someId')

    console.log(getById)

    var getByClass = document.getElementsByClassName('someClass')
    console.log(getByClass)

    var getByTag = document.getElementsByTagName('div#someClass')

    var getByQuerrySel = document.querySelector('p')
    console.log(getByQuerrySel)

    var getByQuerrySelAll = document.querySelectorAll('p')
    console.log(getByQuerrySelAll)
})()