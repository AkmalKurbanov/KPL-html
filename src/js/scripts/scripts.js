// select dropdown
$('.select').on('click', function () {
  $(this).children('.select__dropdown').slideToggle();
});
$('.select__option').on('click', function () {
  let value = $(this).attr('data-value');
  $(this).parent().parent().find('.select-item').val(value);
  $(this).parent().parent().find('.select_checked').text(value);
});
// select dropdown end