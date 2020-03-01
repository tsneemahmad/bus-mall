'use strict';

var images = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];
var products = [];

var images = document.querySelector('#images');
var firstImage = document.querySelector('#firstImage');
var secondImage = document.querySelector('#secondImage');
var thirdImage = document.querySelector('#thirdImage');

// firstImage.src = `img/${images[0]}.jpg`;
// firstImage.alt = images[0];
// firstImage.title = images[0];
// secondImage.src = `img/${images[1]}.jpg`;
// secondImage.alt = images[1];
// secondImage.title = images[1];
// thirdImage.src = `img/${images[2]}.jpg`;
// thirdImage.alt = images[2];
// thirdImage.title = images[2];


function Products(name) {
  this.name = name;
  this.clicks = 0;
  this.views = 0;
  this.imagePath = `img/${this.name}`;
  products.push(this);
}

for (var i = 0; i < images.length; i++) {
  new Products(images[i]);//creat 25 obj for the images 
}
console.log(products);
var firstProduct, secondProduct, thirdProduct;
function render() {
  firstProduct = products[randomNumber(0, products.length - 1)];
  console.log(firstProduct);
  secondProduct = products[randomNumber(0, products.length - 1)];
  console.log(secondProduct);
  thirdProduct = products[randomNumber(0, products.length - 1)];
  firstImage.setAttribute('src', firstProduct.imagePath);
  firstImage.setAttribute('alt', firstProduct.name);
  firstImage.setAttribute('title', firstProduct.name);
  secondImage.setAttribute('src', secondProduct.imagePath);
  secondImage.setAttribute('alt', secondProduct.name);
  secondImage.setAttribute('title', secondProduct.name);
  thirdImage.setAttribute('src', thirdProduct.imagePath);
  thirdImage.setAttribute('alt', thirdProduct.name);
  thirdImage.setAttribute('title', thirdProduct.name);
}
render();


images.addEventListener('click', clickOnProduct);
var totalClicks = 0;
function clickOnProduct(event) {
  if (totalClicks < 25) {
    if (event.target.id !== 'images') {
      if (event.target.id === 'firstImag') {
        firstProduct.clicks++;
      } else if (event.target.id === 'secondImage') {
        secondProduct.clicks++;
      } else if (event.target.id === 'thirdImage') {
        thirdProduct.clicks++;
      }

      totalClicks++;
      firstProduct.views++;
      secondProduct.views++;
      thirdProduct.clicks++;

      render();
    }
  } else {
    console.log('more than 25 clicks');
    images.removeEventListener('click', clickOnProduct);
    render2();
  }
}

function render2() {
  var ulE1 = document.getElementById('result');
  for (var i = 0; i < Products.all.length; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${Products.all[i].name} has ${Products.all[i].clicks} clicks and ${Products.all[i].views} views`;
    ulE1.appendChild(liE1);
  }
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
