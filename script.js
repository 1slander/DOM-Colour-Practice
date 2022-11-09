let btn = document.querySelector('#change-colour');
let container = document.querySelector('.container');
let header = document.querySelector('.header');

const colours = ['#ff0000', '#00ff00', '#0000ff', '#ffe700', '#f000ff'];

console.log(colours);

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * colours.length);
  container.style.backgroundColor = `${colours[random]}`;
  header.innerText = `I'm ${colours[random]}`;
  header.style.color = 'white';
});
