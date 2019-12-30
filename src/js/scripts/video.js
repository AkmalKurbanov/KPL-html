$('.video-linkJs ').on('click', function (e) {
  e.preventDefault();
  $('.video-js').attr('src', $(this).attr('href'));
});
$('.video-js').attr('src', $('.video-linkJs').attr('href'));

var heightFrame = $('.video-js').height();
var heightFrame = (heightFrame - 35.5);
$('.video__last-video-list').css('height', heightFrame);