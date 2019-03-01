var $ = require('jquery');
var _ = require('lodash');

$('.menu-opener').on('click', function(){
  $(this).toggleClass('active')
  $('.menu').toggleClass('active')
})

var opener = document.querySelector('.menu-opener')
var menu = document.querySelector('.menu')
if(opener){
  opener.addEventListener('click', function(){
    this.classList.toggle('active')
    menu.classList.toggle('active')
  })
}

// $('a').on('click', function(e){
//   // e.preventDefault()
//   // e.stopPropagation()
//   console.log(e,this)
// })
// $('.header').on('click', function(){
//   console.log('header clicked !!!')
// } )
// var lastScrollTop = 0;
// $(window).on('scroll', _.throttle(function(e){
//   console.log(e)
//   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//      console.log('downscroll')
//       // downscroll code
//    } else {
//      console.log('upscroll')
//       // upscroll code
//    }
//    lastScrollTop = st <= 0 ? 0 : st;
// }, 1000))
// $(window).on('mousemove', _.debounce(function(e){
//   console.log(e)
// }, 50))
console.log('works !!!');