$(document).ready(function(){
  console.log('cam.js is loaded');
  // $(window).resize();
  // $(window).resize(function(){
  //   console.log('resizing . . . .');
  //   if((window.fullscreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
  //     $("html").css("overflow","hidden");
  //   } else {
  //     $("html").css("overflow", "auto");
  //   }
  // });
  console.log((window.innerWidth == screen.width && window.innerHeight == screen.height))
  console.log(window.innerWidth);
  console.log(screen.innerWidth);
  // console.log(window.fullscreen);
  // console.log(window.innerWidth);
  // if((window.fullscreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
  //   $("html").css("overflow","hidden");
  // }

  $('html').css('overflow-x','hidden');

  $('[data-toggle="tooltip"]').tooltip();

  $('.gc-block').mouseenter(function(){
    var currentClass = '.'+classSplit($(this).attr('class'));
    // console.log(currentClass);
    var imgClass = '.'+currentClass+'-desc';
    $(currentClass + ' img').hide();
    $(currentClass + '-desc').fadeIn();

  }).mouseleave(function(){
    var currentClass = '.'+classSplit($(this).attr('class'));
    // console.log(currentClass);
    var imgClass = '.'+currentClass+'-desc';
    $(currentClass + '-desc').hide();
    $(currentClass + ' img').fadeIn();
  })

  function classSplit(x){
    var mainclass=x.split(' ');
    return mainclass[0];
  }

})
