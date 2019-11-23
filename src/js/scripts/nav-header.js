$(function () {
    $('.nav__item').children('a').on('click', function (e) {
        event.preventDefault();
        $(this).toggleClass('nav__link--open');
        $(this).parent().parent().parent().next().fadeOut(300);
        $(this).next().fadeToggle(300);
        $('.nav__link').not(this).next().fadeOut(300);
        $('.nav__link').not(this).removeClass('nav__link--open');
        $('.search-btn-close').fadeOut(300);
        $('.search-btn').fadeIn(300);
    });

    $('.nav__item').on('click', function (e) {
        $(this).find('.club-list-wrap.club').parent().css('position', 'inherit');
    });
    var containerWidth = $('.container').width();
    var clubListWidth = $('.club').css('min-width', containerWidth);

    $('.search-btn').on('click', function () {
        $(this).hide();
        $('.search-btn-close').css('display', 'flex');
        $('.sub-menu,.sub-block').fadeOut(300);
        $('.search').fadeToggle(300);
        $('.nav__link').removeClass('nav__link--open');
    });

    $('.search-btn-close').on('click', function () {
        $(this).hide();
        $('.search-btn').css('display', 'flex');
        $('.search').toggle();
    });

});