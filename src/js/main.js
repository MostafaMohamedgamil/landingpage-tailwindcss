
let header = document.getElementById('card-header')
let content = document.getElementById('card-content')

let header2 = document.getElementById('card-header2')
let content2 = document.getElementById('card-content2')

let header3 = document.getElementById('card-header3')
let content3 = document.getElementById('card-content3')

let sign = document.getElementById('sign')
let sign2 = document.getElementById('sign2')
let sign3 = document.getElementById('sign3')






// dark mode

document.getElementById('toggle_checkbox').addEventListener("change",function(){

  document.querySelector('html').classList.toggle("dark")
})



// scroll mode

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 180) {
    nav.classList.add('bg-black');
  } else {
      nav.classList.remove('bg-black');
  }
});








header.addEventListener('click', function () {
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    sign.innerHTML = '-'
  } else {
    content.classList.add('hidden');
    sign.innerHTML = '+'
  }

});

header2.addEventListener('click', function () {
  content2.classList.toggle('hidden')

  if (content2.classList.contains('hidden')) {

    sign2.innerHTML = '+'

  } else {
    sign2.innerHTML = '-'
  }
});



header3.addEventListener('click', function () {
  content3.classList.toggle('hidden')


  if (content3.classList.contains('hidden')) {

    sign3.innerHTML = '+'

  } else {
    sign3.innerHTML = '-'
  }

});




