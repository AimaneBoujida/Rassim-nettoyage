var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      mousewheel: {
          invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
    $(document).ready(function () {
      $('.customer-logos').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1500,
          arrows: true,
          dots: false,
          pauseOnHover: false,
          prevArrow: '<img src="assets/images/left.png" class="slick-prev" alt="Previous" style="width: 20px; height: 20px; cursor:pointer;">',
          nextArrow: '<img src="assets/images/right.png" class="slick-next" alt="Next" style="width: 20px; height: 20px; cursor:pointer;">',
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 3
              }
          }, {
              breakpoint: 520,
              settings: {
                  slidesToShow: 2
              }
          }]
      });
  });


  //////////////////// Gallery pics

  $(document).ready(function(){
    $('.portfolio-item').isotope(function(){
        itemSelector:'.item'
      });
  
  
  
    $('.portfolio-menu ul li').click(function(){
      $('.portfolio-menu ul li').removeClass('active');
      $(this).addClass('active');
  
  
      var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
          filter: selector
        })
        return false;
    });
  });


