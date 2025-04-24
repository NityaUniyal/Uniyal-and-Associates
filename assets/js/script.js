// Code for the testimonial slider
  $(document).ready(function () {
    $(".testimonial-slider").slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    });
  });

