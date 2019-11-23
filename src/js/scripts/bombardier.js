$('.bombardier__list-item').on('click', function () {
  $(this).toggleClass('active');
  $('.bombardier__list-item').not(this).removeClass('active');
});