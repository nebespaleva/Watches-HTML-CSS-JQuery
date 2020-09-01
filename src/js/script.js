
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  passive: false,
  responsive: {
    767: {
      items: 1
    },
    768: {
      fixedWidth: 575,
      items: 1
    },
    1024: {
      fixedWidth: 575,
      items: 1
    },
    1025: {
      fixedWidth: 575,
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