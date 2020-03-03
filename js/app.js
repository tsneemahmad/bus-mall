'use strict'

var product = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'water-can',
  'wine-glass'
];

var firstImage = document.getElementById('firstImage');
var secondImage = document.getElementById('secondImage');
var rightImage = document.getElementById('thirdImage');
var images = document.getElementById('images');

firstImage.src = `img/${product[0]}.jpg`;
firstImage.alt = product[0];
firstImage.title = product[0];

secondImage.src = `img/${product[1]}.jpg`;
secondImage.alt = product[1];
secondImage.title = product[1];

thirdImage.src = `img/${product[2]}.jpg`;
thirdImage.alt = product[2];
thirdImage.title = product[2];

function Products(name) {
  this.name = name;
  this.imagePath = `img/${this.name}.jpg`;
  this.click = 0;
  this.view = 0;
  Products.all.push(this);
}
Products.all = [];

for (var i = 0; i < product.length; i++) {
  new Products(product[i]);
}
var firstProduct, secondProduct, thirdProduct;
function render() {
  firstProduct = Products.all[randomNumber(0, Products.all.length - 1)];
  console.log(firstProduct);
  secondProduct = Products.all[randomNumber(0, Products.all.length - 1)];
  console.log(secondProduct);
  thirdProduct = Products.all[randomNumber(0, Products.all.length - 1)];
  console.log(thirdProduct);
  while (firstProduct.imagePath === secondProduct.imagePath || thirdProduct.imagePath === secondProduct.imagePath || thirdProduct.imagePath === firstProduct.imagePath) {
    firstProduct = Products.all[randomNumber(0, Products.all.length - 1)];
    secondProduct = Products.all[randomNumber(0, Products.all.length - 1)];
    thirdProduct = Products.all[randomNumber(0, Products.all.length - 1)];
  }
  firstImage.src = firstProduct.imagePath;
  firstImage.alt = firstProduct.name;
  firstImage.title = firstProduct.name;

  secondImage.src = secondProduct.imagePath;
  secondImage.alt = secondProduct.name;
  secondImage.title = secondProduct.name;

  thirdImage.src = thirdProduct.imagePath;
  thirdImage.alt = thirdProduct.name;
  thirdImage.title = thirdProduct.name;


}

render();
var x = 25;
images.addEventListener('click', handleClickOnProduct);
var totalClicks = 0;
function handleClickOnProduct(event) {
  if (totalClicks < x) {
    if (event.target.id !== 'images') {
      if (event.target.id === 'firstImage') {
        firstProduct.click++;
      } else if (event.target.id === 'secondImage') {
        secondProduct.click++;
      } else if (event.target.id === 'thirdImage') {
        thirdProduct.click++;
      }
      totalClicks++;
      firstProduct.view++;
      secondProduct.view++;
      thirdProduct.view++;
      render();
    }
  } else {
    console.log('more than 25 clicks');
    images.removeEventListener('click', handleClickOnProduct);
    chart();
    // render2();
  }
}
// function render2() {
//     var ulE1 = document.getElementById('result');
//     for (var i =0; i<Products.all.length ; i++) {
//       var liE1 = document.createElement('li');
//       liE1.textContent = `${Products.all[i].name} had ${Products.all[i].click} votes and was shown ${Products.all[i].view} times`;
//       ulE1.appendChild(liE1);
//       var liE1 = document.createElement('li');
//     }
//   }


function chart() {
  var allProducts = [];
  var numClicks = [];
  var numViews = [];
  for (var i = 0; i < Products.all.length; i++) {
    var productsName = Products.all[i].name;
    allProducts.push(productsName);
    var newClicks = Products.all[i].click;
    numClicks.push(newClicks);
    var newViews = Products.all[i].view;
    numViews.push(newViews);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: allProducts,
      datasets: [{
        label: '# of Clicks',
        data: numClicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1

      },
      {
        label: '# of Views',
        data: numViews,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
        type: 'bar',
        labels: allProducts
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



'use strict'
var onscreenImage = [];
var clicks = [];
var views = [];

render2();



function render2() {
  // var ulE1 = document.getElementById('summary');

  for (var i = 0; i < product.length; i++) {
    // var liE1 = document.createElement('li');
    //   Banana Slicer had 3 votes and was shown 5 times
    // liE1.textContent = ${Products.all[i].name} had ${Products.all[i].click} votes and was shown ${Products.all[i].view} times;
    // ulE1.appendChild(liE1);
    // var liE1 = document.createElement('li'); 
    clicks.push(Products.all[i].click);
    views.push(Products.all[i].view);
    console.log(clicks);
    console.log(views);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: product,
        datasets: [{
          label: '# of clicks',
          data: clicks,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: '# of veiw',
          data: views,
          backgroundColor: 'aquamarine',
          borderColor: '#009688',
          borderWidth: 1


        }]

      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }
}
console.log(clicks);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}