// console.time('Your code took') 
//  console.log('This is a console');
//  console.table(['Name',21])
// console.warn('This is a Warning');
// console.clear();
// console.timeEnd('Your code took')
// console.error('This is an error')
// console.count(25,'String')
// console.log(typeof 'hi')
// console.log('Hi'.toString())
// console.log(Number([2,'5',3,'4']))
// console.log('hI'.concat('bye'))
// console.log('You are awesome'.indexOf('You'))
// console.log(location.reload());
// let a = document.all;
// Array.from(a).forEach(function(element) {
//     console.log(element)
// })
// console.log(32+33 == 65)
// console.log('Hello');
// let cont = document.querySelector('.container');
// console.log(cont.children);
// console.log(cont.childNodes)
// ;
// let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[1].nodeType;

// console.log(nodeName)
// console.log(nodeType)

/* Node Types:
1 - element
2 - Attribute
3 - Text Node
8 - Comment
9 - Document
10 - Doctype
*/
// let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children)
// console.log(container.children[0].parentElement)
// console.log(container.children[0].nextElementSibling.nextSibling)
// console.log('Welcome to Tut 16')
// let element = document.createElement('li');
// element.className = 'hello';
// element.id = 'hello';
// element.setAttribute('href','https://www.google.com');
// element.innerHTML = '<b>Go to Google</b>';
// console.log(element)

// let ul = document.getElementById('ul');

// ul.appendChild(element)
// console.log('Welcome');
// (console.log("Divyanshu Batta"))
// let heading = document.createElement("h1");
// let text = document.createTextNode("Go to CodeWithHarry.com");
// heading.appendChild(text);
// let link = document.createElement("a");
// link.setAttribute("href","https://www.codewithharry.com")
// link.appendChild(heading);
// document.body.appendChild(link);

const fruitList = ['apple','banana','tomato']

let ul = document.querySelector("#ul");
fruitList.forEach(element => {
    let li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
});
const imageSrc = 'https://crocoder.dev/icon.png';

let div = document.querySelector("#logo-div");
let img = document.createElement("img");
img.setAttribute("src",imageSrc);
div.appendChild(img);