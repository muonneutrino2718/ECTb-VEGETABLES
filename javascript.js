$('.slick').slick({
  dots:true
});

$('.faq-list').click(function(){
  var $answer=$(this).find('.answer');
  if($answer.hasClass('accordion')){
    $answer.removeClass('accordion');
    $answer.slideUp();
    $(this).find('span').text('+');
  }
  else{$answer.addClass('accordion');
  $answer.slideDown();
  $(this).find('span').text('-');

  }

});

  $('header a').click(function(){
    var navigation=$(this).attr('href');
    var position=$(navigation).offset().top;
    $('html,body').animate({'scrollTop':position},800);
  });

  $('.second-btn-open').click(function(){
    $('.modal').fadeIn();

  });

  $('.second-btn-close').click(function(){
    $('.modal').fadeOut();

  });
