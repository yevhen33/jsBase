let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    one = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';
btn[2].style.borderRadius = '100%';
btn[1].style.backgroundColor = 'red';
circle[2].style.backgroundColor = 'yellow';


let div = document.createElement('div'),
    text = document.createTextNode('Hello!!');

div.classList.add('black');
// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello ASS!!!</h1>';
div.textContent = 'Hello ASS!!!';




document.body.insertBefore(div, circle[1]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(circle[1], btn[3]);

console.log(div);


// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'black'
// }

// heart.forEach(function(item, i, hear) {
//     item.style.backgroundColor = 'black';
// });


// console.log(box);
// console.log(btn);
// console.log(btn[2]);
// console.log(circle[1]);
// console.log(heart);
// console.log(one);