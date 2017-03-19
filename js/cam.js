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

  // $('.gc-desc-img').mouseenter(function(){
  //   console.log($('.gc-desc-img').find());
  //   // $('img').hide();
  //   // $('p').show();
  // })
  $('.gc-block').mouseenter(function(){
    var currentClass = '.'+classSplit($(this).attr('class'));
    // console.log(currentClass);
    var imgClass = '.'+currentClass+'-desc';
    $(currentClass + ' img').hide();

  }).mouseleave(function(){
    var currentClass = '.'+classSplit($(this).attr('class'));
    // console.log(currentClass);
    var imgClass = '.'+currentClass+'-desc';
    $(currentClass + ' img').show();
  })

  function classSplit(x){
    var mainclass=x.split(' ');
    return mainclass[0];
  }

})
