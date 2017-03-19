$(document).ready(function(){
  console.log('cam.js is loaded');

  // $(".gc-desc-img img").hover(function(){
  //   console.log($(this).attr('class'));
  // })

  // $('.gc-desc-img img').mouseenter(function(){
  //   classSplit($(this).attr('class'));
  // })
  //
  // function classSplit(x) {
  //   console.log(typeof(x));
  // }

  $('.gc-desc-img').mouseenter(function(){
    console.log($('.gc-desc-img').find());
    // $('img').hide();
    // $('p').show();
  })

})
