console.log('скрипт в работе')
const hTwo = document.querySelectorAll('h2')
const contents = document.querySelector('#contents');
let arr = []
console.log()

//формируем массив 
hTwo.forEach(e => {
    arr.push(`${e.innerHTML} <br>`)

})

// превращаем массив в строку, удаляем запятые, вставляем на страницу

contents.innerHTML = arr.toString().replace(/[\,]/g, '')