$(document).ready(function() {
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  passive: false,
  responsive: {
    320: {
      nav: true
    },
    767: {
      items: 1,
      nav: true
    },
    768: {
      fixedWidth: 575,
      items: 1,
      nav: true
    },
    850: {
      nav: false
    },
    1024: {
      fixedWidth: 575,
      items: 1
    },
    1025: {
      fixedWidth: 750,
      items: 1
    },
    1440: {
      fixedWidth: 750,
      items: 1
    },
    2560: {
      fixedWidth: 750,
      items: 1
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});