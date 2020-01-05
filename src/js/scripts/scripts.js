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


  // map stadiums
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [41.718653, 74.594727],
        zoom: 6
      }, {
        searchControlProvider: 'yandex#search'
      }),

      stadium1 = new ymaps.Placemark([42.880216, 74.597980], {
        hintContent: 'Стадион им. Д.Омурзакова',
        balloonContent: 'г.Бишкек, ул.​Тоголок Молдо, 17/17'
      }, {
        // Тип маркера.
        iconLayout: 'default#image',
        iconImageHref: '/assets/img/map-marker.svg',
        // Размеры маркера.
        iconImageSize: [35, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }),

      stadium2 = new ymaps.Placemark([42.861895, 74.540833], {
        hintContent: 'Локомотив',
        balloonContent: 'г.Бишкек, ул.​Осмонова, 1 Пишпек ж/м, Ленинский район,'
      }, {
        iconLayout: 'default#image',
        iconImageHref: '/assets/img/map-marker.svg',
        iconImageSize: [35, 48],
        iconImageOffset: [-24, -24],
      });

    stadium3 = new ymaps.Placemark([42.837643, 74.584108], {
      hintContent: 'Алга Бишкек',
      balloonContent: 'г.Бишкек, ул.​Карасаева 41​, Октябрьский район'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/assets/img/map-marker.svg',
      iconImageSize: [35, 48],
      iconImageOffset: [-24, -24],
    });

    stadium4 = new ymaps.Placemark([42.895218, 74.845236], {
      hintContent: 'Абдыш-Ата',
      balloonContent: 'г.Кант,​ ул.Московская 7'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/assets/img/map-marker.svg',
      iconImageSize: [35, 48],
      iconImageOffset: [-24, -24],
    });
    stadium5 = new ymaps.Placemark([42.880216, 74.597980], {
      hintContent: 'Дордой Арена',
      balloonContent: 'г.Бишкек, ул.Тоголок Молдо 17'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/assets/img/map-marker.svg',
      iconImageSize: [35, 48],
      iconImageOffset: [-5, -38]
    });
    stadium6 = new ymaps.Placemark([42.799107, 73.857106], {
      hintContent: 'СК “Манас”',
      balloonContent: 'г.Кара-Балта'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/assets/img/map-marker.svg',
      iconImageSize: [35, 48],
      iconImageOffset: [-24, -24],
    });
    stadium7 = new ymaps.Placemark([42.826425, 74.548654], {
      hintContent: 'Газпром',
      balloonContent: 'г.Бишкек'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/assets/img/map-marker.svg',
      iconImageSize: [35, 48],
      iconImageOffset: [-24, -24],
    });


    myMap.geoObjects
      .add(stadium1)
      .add(stadium2)
      .add(stadium3)
      .add(stadium4)
      .add(stadium5)
      .add(stadium6)
      .add(stadium7)
  });

  // map stadiums end