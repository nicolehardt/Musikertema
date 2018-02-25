window.onload = function(){
  alert('welcome');
};

$(document).ready(function(){
  $('#facebook').click (function(){
    $('#facebookframe').slideToggle('slow');
    $('#portrait').toggle('slow');
    $('#instagram').toggle('slow');
    $('#youtube').toggle('slow');
  });
  $('#instagram').click (function() {
    $('#instagramframe').slideToggle('slow')
    $('#portrait').toggle('slow');
    $('#facebook').toggle('slow');
    $('#youtube').toggle('slow');
  });
  $('#youtube').click(function () {
    $('#youtubeframe').slideToggle('slow');
    $('#portrait').toggle('slow');
    $('#instagram').toggle('slow');
    $('#facebook').toggle('slow');
  });
});
