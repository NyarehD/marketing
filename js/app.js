$(document).ready(function () {
  let screenHeight = $(window).height();
  // console.log(screenHeight);
  $(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    // console.log(currentPosition);
    if (currentPosition >= screenHeight - 100) {
      $(".site-nav").addClass("site-nav-scroll");
    } else {
      $(".site-nav").removeClass("site-nav-scroll");
      setActive("home");
    }
  })
  $(".navbar-toggler").click(function () {
    let result = $(".navbar-collapse").hasClass("show");
    if (result) {
      $(".menu-icon").removeClass("fa-close").addClass("fa-bars")
    } else {
      $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
    }
  })

  function setActive(current) {
    $(`.nav-link`).removeClass("current-section");
    $(`.nav-link[href='#${current}']`).addClass("current-section");
  }
        
  function navScroll() {
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {
      if (direction==='down') {
        let currentSectionId = $(this.element).attr('id');
        setActive(currentSectionId)
      }
    }, {
      offset: '0'
    })
    currentSection.waypoint(function (direction) {
      if (direction==='up') {
        let currentSectionId = $(this.element).attr('id');
        setActive(currentSectionId)
      }
    }, {
      offset: "-100%"
    })
  }
  navScroll();
  $('.pricing-slide').slick({
    centerMode: false,
    centerPadding: "50px",
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  new WOW().init();
})
$(window).on("load",function () {
  $(".loader-container").fadeOut(1000,function () {
    this.remove();
  })
})