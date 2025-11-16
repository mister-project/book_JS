console.log('скрипт в работе')

const hTwo = document.querySelectorAll('h2, h3, h4')
const contents = document.querySelector('#contents');
const openModalBtn = document.querySelector('#openModal'); // Кнопка открытия модального окна
const toc = document.getElementById('modal');

let arr = []


openModalBtn.addEventListener('click', () => {
    toc.style.display = 'block';
})

//формируем массив 
hTwo.forEach((e, index) => {
    e.setAttribute('id', index)

})

const headings = document.querySelectorAll('h2, h3, h4');
console.log(headings);

headings.forEach((heading) => {
    const link = document.createElement('a');
    link.textContent = heading.textContent;
    link.setAttribute('href', `#${heading.id}`);

    const listItem = document.createElement('li');
    listItem.appendChild(link);

    toc.appendChild(listItem);
});

// toc.style.display = 'none'

const btn1 = document.querySelector('.close')
console.dir(toc)
btn1.addEventListener('click', (e) => {
    toc.style.display = 'none';

})