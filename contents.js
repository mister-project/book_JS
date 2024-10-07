console.log('скрипт в работе')

const hTwo = document.querySelectorAll('h2, h3, h4')
const contents = document.querySelector('#contents');
let arr = []
console.log()

//формируем массив 
hTwo.forEach((e, index) => {
    e.setAttribute('id', index)

})


const toc = document.getElementById('toc');
const headings = document.querySelectorAll('h2, h3, h4');

headings.forEach((heading) => {
    const link = document.createElement('a');
    link.textContent = heading.textContent;
    link.setAttribute('href', `#${heading.id}`);

    const listItem = document.createElement('li');
    listItem.appendChild(link);

    toc.appendChild(listItem);
});

// toc.style.display = 'none'

const btn1 = document.querySelector('#btn1')
console.dir(toc)
btn1.addEventListener('click', (e) => {
    toc.style.display = 'none';

})