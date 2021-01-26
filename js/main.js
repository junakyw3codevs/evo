(function($) {
    "use strict";
    // circle-progressbar

    $('#uiux-progress').circleProgress({
        value: 0.75,
        size: 200,
        thickness: 8,
        fill: '#6928d9',
        startAngle: -1.60,
        emptyFill: '#28205f',
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.parcentage').html(Math.round(73 * progress) + '<i>%</i>');
      });;

      $('#development-progress').circleProgress({
        value: 0.85,
        size: 200,
        thickness: 8,
        fill: '#1573ff',
        startAngle: -1.60,
        emptyFill: '#28205f',
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.parcentage').html(Math.round(85 * progress) + '<i>%</i>');
      });;

      $('#branding-progress').circleProgress({
        value: 0.48,
        size: 200,
        thickness: 8,
        fill: '#6928d9',
        startAngle: -1.60,
        emptyFill: '#16ffdb',
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.parcentage').html(Math.round(48 * progress) + '<i>%</i>');
      });;

      $('#product-progress').circleProgress({
        value: 0.69,
        size: 200,
        thickness: 8,
        fill: '#baff26',
        startAngle: -1.60,
        emptyFill: '#28205f',
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.parcentage').html(Math.round(69 * progress) + '<i>%</i>');
      });;

    //   sponsor slider

    $('.sponsor-brand').slick({
        slidesToShow: 5,
        arrows: false,
      });

      // offcanvas menu

      $(".humbrg-icon img").on('click', function(){
        $(".offcanvas-menu").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
      });

      $(".menu-cross, .offcanvas-menu-overlay").on('click', function(){
        $(".offcanvas-menu").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
      });

      // typed js

      var typed = new Typed('.type', {
        strings: [
          "Designer.",
          "Founder."
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        cursorChar: '',
      });

      // parallax

      var scene = document.getElementById('layer_1');
      var parallaxInstance = new Parallax(scene);

      var scene = document.getElementById('layer_2');
      var parallaxInstance = new Parallax(scene);

      var scene = document.getElementById('layer_3');
      var parallaxInstance = new Parallax(scene);

      var scene = document.getElementById('layer_4');
      var parallaxInstance = new Parallax(scene);


})(jQuery);

