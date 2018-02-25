window.onload = function(){
  alert('welcome');
};

$(document).ready(function(){
  $('#facebook').click (function(){
    $('iframe').slideToggle('slow');
  });
});
