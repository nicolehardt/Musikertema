/*window.onload = function(){
  //alert('welcome');
};*/

$(document).ready(function(){
  $('#facebook').click (function(){
    $('#facebookframe').slideToggle('slow');

    console.log(window.width);
/*
    if(window.width < 400){
    $('#portrait').toggle('slow');
  }*/

    $('#instagram').toggle('slow');
    $('#spotify').toggle('slow');
    $('#youtube').toggle('slow');
  });
  $('#instagram').click (function() {
    $('#instagramframe').slideToggle('slow')
    //$('#portrait').toggle('slow');
    $('#facebook').toggle('slow');
    $('#spotify').toggle('slow');
    $('#youtube').toggle('slow');
  });
  $('#spotify').click(function () {
    $('#spotifyframe').slideToggle('slow');
    //$('#portrait').toggle('slow');
    $('#instagram').toggle('slow');
    $('#youtube').toggle('slow');
    $('#facebook').toggle('slow');
  });
  $('#youtube').click(function () {
    $('#youtubeframe').slideToggle('slow');
    //$('#portrait').toggle('slow');
    $('#instagram').toggle('slow');
    $('#spotify').toggle('slow');
    $('#facebook').toggle('slow');
  });
});
