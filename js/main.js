var $html = $('html');
var $input = $('colour-input');
var $ball = $('.ball');
var $from = $('from');

$('form').on('change', function (){
  $ball.css('background-colour', $input.val());
});
