$(document).ready(function(){
  console.log('cam.js is loaded');

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
