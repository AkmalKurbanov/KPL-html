$('.bombardier__list-item, .standings__wrapper').on('click', function () {
  $(this).toggleClass('active');
  $('.bombardier__list-item, .standings__wrapper').not(this).removeClass('active');
});