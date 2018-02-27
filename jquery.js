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
  $('#overlay').click (function () {
    $('#overlay').hide('slow');
  });
  $('#burger').click (function() {
    //$('nav').removeClass('burgermenu');
    $('nav').show('slow');
    $('#cross').show('slow');
    $('#burger').hide();
    //$('#freija').hide();
    //$('.logo').hide();
    //$('ul').addClass('fjernmargin');
    $('header').addClass('burgerheader');
  });
  $('#cross').click (function() {
    //$('nav').addClass('burgermenu');
    $('nav').hide('slow');
    $('#burger').show('slow');
    $('#cross').hide();
    //$('#freija').show();
    //$('.logo').show();
  });
  $('.navforsvind').click (function () {
    $('nav').hide('slow');
    $('#cross').hide('slow');
    $('#burger').show('slow');
  })
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
});
