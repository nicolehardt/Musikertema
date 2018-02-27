/*window.onload = function(){
  //alert('welcome');
};*/


/*
$(document).ready(function(){
  $('#facebook').click (function(){
    $('#facebookframe').slideToggle('slow');
    $('#portrait').toggle('slow');
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
*/

$(document).ready(function(){
  $('#facebook').click (function(){
    $('#facebookframe').show('slow');
    $('#instagramframe').hide('slow');
    $('#spotifyframe').hide('slow');
    $('#youtubeframe').hide('slow');
  });
  $('#instagram').click (function() {
    $('#instagramframe').show('slow');
    $('#facebookframe').hide('slow');
    $('#spotifyframe').hide('slow');
    $('#youtubeframe').hide('slow');
  });
  $('#spotify').click (function() {
    $('#spotifyframe').show('slow');
    $('#facebookframe').hide('slow');
    $('#instagramframe').hide('slow');
    $('#youtubeframe').hide('slow');
  });
  $('#youtube').click (function() {
    $('#youtubeframe').show('slow');
    $('#facebookframe').hide('slow');
    $('#spotifyframe').hide('slow');
    $('#instagramframe').hide('slow');
  });
  $('#burger').click (function() {
    $('nav').removeClass('burgermenu');
    $('#cross').show('slow');
    $('#burger').hide();
    $('#freija').hide();
    $('.logo').hide();
    //$('ul').addClass('fjernmargin');
    $('header').addClass('burgerheader');
  });
  $('#cross').click (function() {
    $('nav').addClass('burgermenu');
    $('#burger').show('slow');
    $('#cross').hide();
    $('#freija').show();
    $('.logo').show();
  });
});
