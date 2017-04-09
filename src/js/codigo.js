$(document).ready(function(){
  $('.plus').click(function(){
    $('.biografia').toggleClass('toggle-bio');
    $(this).toggleClass('toggle-plus');
  });
});
