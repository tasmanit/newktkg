// получаем все кнопки навигации
const tabsButtons = document.querySelectorAll('.tabs__button');

// Проходимся по всем кнопкам
tabsButtons.forEach(btn => {
  // вешаем на каждую кнопку обработчик события клик
  btn.addEventListener('click', () => {
    // Получаем предыдущую активную кнопку
    const prevActiveItem = document.querySelector('.tabs__item._active');
    // Получаем предыдущую активную вкладку
    const prevActiveButton = document.querySelector('.tabs__button._active');
    
    // Проверяем есть или нет предыдущая активная кнопка
    if (prevActiveButton) {
      //Удаляем класс _active у предыдущей кнопки если она есть
      prevActiveButton.classList.remove('_active');
    }
    
    // Проверяем есть или нет предыдущая активная вкладка
    if (prevActiveItem) {
      // Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveItem.classList.remove('_active');
    }
    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    // получаем новую активную вкладку по id
    const nextActiveItem = document.querySelector(nextActiveItemId);
    
    // добавляем класс _active кнопке на которую нажали
    btn.classList.add('_active');
    // добавляем класс _active новой выбранной вкладке
    nextActiveItem.classList.add('_active');
  });
});
$('#slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.news').owlCarousel({
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#tarifin').owlCarousel({
    margin:15,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4,
        }
    }
});
$('#tarifip').owlCarousel({
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('.itrsnoslide').owlCarousel({
    margin:15,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3,
        }
    }
});