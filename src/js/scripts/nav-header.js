$(function () {
    $('.nav__item--submenu').children('a').on('click', function (e) {
        event.preventDefault();
        $(this).toggleClass('nav__link--open');
        $(this).next().slideToggle(300);
        $('.nav__link').not(this).next().slideUp(300);
        $('.nav__link').not(this).removeClass('nav__link--open');
        $('.search-btn-close').slideUp(300);
        $('.search-btn').slideDown(300);
        $('.wrapper').removeClass('overlay');
        $('.header').removeClass('search-mode');
        $('.search').removeClass('search-open');
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
        $('.search').addClass('search-open');
        $('.nav__link').removeClass('nav__link--open');
        $('.wrapper').addClass('overlay');
        $('.header').addClass('search-mode');
    });

    $('.search-btn-close').on('click', function () {
        $(this).hide();
        $('.search-btn').css('display', 'flex');
        $('.search').removeClass('search-open');
        $('.wrapper').removeClass('overlay');
        $('.header').removeClass('search-mode');
    });

});


if ($(window).width() > 539) {
    var championship = $('.championship').height() + 16;
    $('#search').css('height', championship)
}
if ($(window).width() < 561) {
    $('.search, .header__top').appendTo('.nav');

}
$('.hamburger').on('click', function () {
    $('.nav').toggleClass('menu-open');
    $('body').toggleClass('body-scroll');
});