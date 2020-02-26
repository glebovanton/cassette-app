/** *************Init JS*********************

 TABLE OF CONTENTS
 ---------------------------
 1.Ready function
 2.Load function
 3.Subscribe JS
 4.Full height function
 5.Resize function
 6.cassette function
 7.click function
 ** ***************************************/

"use strict";

/*****Ready function start*****/
$(document).ready(function(){
  cassette();
});
/*****Load function* end*****/
/***** Full height function start *****/
var setHeight = function () {
  var height = $(window).height();
  $('.full-height').css('min-height', (height));
};
/***** Full height function end *****/

/***** Resize function start *****/
$(window).on("resize", function () {
  setHeight();
  var width = $(window).width();
  if(width <= 1024) {
    $(".tag-wrap").insertBefore($("header.logo"));
    $( "#parallax_it").insertAfter($(".tag-wrap"));
  }
  else
  {
    $("#parallax_it").insertBefore($(".side-left .content-wrap"));
    $(".tag-wrap").appendTo($(".side-left .content-wrap"));

  }
}).resize();
/***** Resize function end *****/

/***** cassette function start *****/
function cassette(){
  /*parallaxify JS*/
  $.parallaxify({
    positionProperty: 'transform',
    responsive: true,
    motionType: 'natural',
    mouseMotionType: 'performance',
    motionAngleX: 70,
    motionAngleY: 70,
    alphaFilter: 0.5,
    adjustBasePosition: true,
    alphaPosition: 0.025,
  });

  /*click functions*/
  var target = $('#splitlayout');
  $(".about div").on('click', function(){
    if ( target.hasClass('reset-layout') ) {
      target.removeClass('close-right');
      target.addClass('open-left');
      target.removeClass('close-left');
      $('.page-left .animated').addClass('fadeInLeft');
      target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
        function() {
          target.removeClass('reset-layout')
        });
    }
    else if ( target.hasClass('open-left') ) {
      target.removeClass('reset-layout');
      target.removeClass('open-left');
      target.addClass('close-left');
      $('.page-left .animated').removeClass('fadeInLeft');
      target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
        function() {
          target.addClass('reset-layout')
        });
    }
    $('.side-left .call-to-action.about .goto-close').toggleClass('opacity-hide');
    $('.call-to-action .goto-next').toggleClass('opacity-hide');
  });

  $(".contact div").on('click', function(){

    if ( target.hasClass('reset-layout') ) {
      target.addClass('open-right');
      target.removeClass('close-right');
      target.removeClass('close-left');
      $('.page-right .animated').addClass('fadeInRight');
      target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
        function() {
          target.removeClass('reset-layout')
        });
    }
    else if ( target.hasClass('open-right') ) {
      target.removeClass('reset-layout');
      target.removeClass('open-right');
      target.addClass('close-right');
      $('.page-right .animated').removeClass('fadeInRight');
      target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
        function() {
          target.addClass('reset-layout')
        });
    }
    $('.call-to-action .goto-next').toggleClass('opacity-hide');
    $('.side-right .call-to-action .goto-close').toggleClass('opacity-hide');
  });
}
/***** cassette function end *****/
