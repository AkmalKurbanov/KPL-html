$(function () {
    $('.comprising').on('click', function () {
        $(this).parent().parent().next().slideUp();
        $('.comprising').not(this).removeClass('sub-menu-open ul').children('ul').slideUp();
        $(this).toggleClass('sub-menu-open').children('ul').slideToggle().next().addClass('open-icon');
    });
    $('.comprisingTable').on('click', function () {
        $(this).parent().parent().next().slideToggle();
        $('.comprising ul').slideUp();
    });
    $(document).mouseup(function (e) {
        var div = $(".comprising ul");
        if (!div.is(e.target) 
            &&
            div.has(e.target).length === 0) { 
        }
    });

    $('.search-btn').on('click', function () {
        $('.comprising').removeClass('sub-menu-open');
        $('.search').fadeToggle();
    });

});