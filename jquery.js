$(document).ready(function(){
  $('#overlay').click (function () {
    $('#overlay').hide('slow');
  });
  $('#burger').click (function() {
    $('nav').show('slow');
    $('#cross').show('slow');
    $('#burger').hide();
    $('header').addClass('burgerheader');
  });
  $('#cross').click (function() {
    $('nav').hide('slow');
    $('#burger').show('slow');
    $('#cross').hide();

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
