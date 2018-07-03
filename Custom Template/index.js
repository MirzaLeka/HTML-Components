

   var $item = $('.carousel .item'); 

$item.eq(0).addClass('active');

$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});



$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

