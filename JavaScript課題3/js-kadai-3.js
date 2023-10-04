$(function() {
  $('.nav-menu').hover(function() {
    $('.sub-item',this).slideDown();
  },
  function() {
    $('.sub-item',this).slideUp() ;
  });
});