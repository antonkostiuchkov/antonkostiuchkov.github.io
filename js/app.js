$(function () {

  toggleMenu ();
  closeWithEscape ();

});

function toggleMenu () {
  $('.nav-toggle').on('click', function (){
    $('.secondary-nav').toggleClass('open');
  });
};

// Hit escape key to close the nav
function closeWithEscape () {
  var $document = $(document);
  var $mainNav = $('.secondary-nav');

  $document.keyup(function(e) {
  if (e.keyCode == 27) {
    if ($mainNav.hasClass('open')) {
      $mainNav.toggleClass('open');
    }
  }
  });
};