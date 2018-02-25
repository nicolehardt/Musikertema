window.onload = function(){
  alert('welcome');
};

$(document).ready(function(){
  $('#facebook').click (function(){
    $('iframe').slideToggle('slow');
    $('#portrait').toggle('slow');
  });
  $('#instagram').click (function() {
    $('blockquote').slideToggle('slow')
    $('#portrait').toggle('slow');
  })
});
