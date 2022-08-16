// MASK

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

// JUST VALIDATE

const validate = new window.JustValidate('#contactsForm');

validate
  .addField('#contactsName', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'customRegexp',
      value: /(?=.*[А-Я])(?=.*[а-я])/,
      errorMessage: 'Недопустимый формат'
    },
  ])
  .addField('#contactsTel', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
  ]);

// MAP

ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.759755, 37.615398],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });

        var myPlacemark = new ymaps.Placemark([55.759755, 37.615398], {}, {
          iconLayout: 'default#image',
          iconImageHref: './img/contacts/contacts_location.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [0, 0]
        });

        myMap.geoObjects.add(myPlacemark);
    }