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

// tabs
$('.tabs__item').children('a').on('click', function () {
  $(this).parent().addClass('active');
  $('.tabs__link').not(this).parent().removeClass('active');
});
var tabsWidth = $('.tabs__list').width();
document.documentElement.style.setProperty('--tabsWidth', `${tabsWidth}px`);

// tabs end




