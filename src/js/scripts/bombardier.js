$('.bombardier__list-item, .standings__wrapper').on('click', function () {
  $(this).toggleClass('active');
  $('.bombardier__list-item, .standings__wrapper').not(this).removeClass('active');
});
if ($('body').width() <= 752) {
  $('.info .standings__wrapper').removeClass('active');
  $('.info .standings__wrapper .bombardier__photo').remove();
  $('.info .standings__wrapper').on('click', function () {
    $(this).removeClass('active');
  });
  $('.info .bombardier thead th:gt(1)').each(function () {
    var text = $(this).text();
    $(this).html(text[0]);
  });
}