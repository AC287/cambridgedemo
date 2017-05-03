$(document).ready(function(){
  console.log('cam.js is loaded');
  // console.log(typeof(window.location.href));
  // currentLocation(window.location.href);

  $('html').css('overflow-x','hidden');

  $('[data-toggle="tooltip"]').tooltip();

  // $('.gc-block').mouseenter(function(){
  //   var currentClass = '.'+classSplit($(this).attr('class'));
  //   // console.log(currentClass);
  //   var imgClass = '.'+currentClass+'-desc';
  //   $(currentClass + ' img').hide();
  //   $(currentClass + ' span').hide();
  //   $(currentClass + '-desc').fadeIn();
  //
  // }).mouseleave(function(){
  //   var currentClass = '.'+classSplit($(this).attr('class'));
  //   // console.log(currentClass);
  //   var imgClass = '.'+currentClass+'-desc';
  //   $(currentClass + '-desc').hide();
  //   $(currentClass + ' img').fadeIn();
  //   $(currentClass + ' span').fadeIn();
  // });

  $('.gc-block').bind({
    mouseenter: function(){
      var currentClass = '.'+classSplit($(this).attr('class'));
      // console.log(currentClass);
      var imgClass = '.'+currentClass+'-desc';
      $(currentClass + ' img').hide();
      $(currentClass + ' span').hide();
      $(currentClass + '-desc').fadeIn();
    },
    mouseleave: function(){
      var currentClass = '.'+classSplit($(this).attr('class'));
      // console.log(currentClass);
      var imgClass = '.'+currentClass+'-desc';
      $(currentClass + '-desc').hide();
      $(currentClass + ' img').fadeIn();
      $(currentClass + ' span').fadeIn();
    }
  });

  function classSplit(x){
    var mainclass=x.split(' ');
    return mainclass[0];
  }

  // function currentLocation(x){
  //   var cur_address = x.split('/');
  //   console.log(cur_address);
  //   console.log(cur_address.length);
  // }

})
