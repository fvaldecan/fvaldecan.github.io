(function ($) {
    'use strict';
    
AOS.init({
    once: true
});
    $(".nav-link").click(function(){
        var pageId = $(this).attr("data-page");
        $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
    });
    // ----------------------- 
        // Progress Bar--------------------
        // 
        // 

    $(window).on ('load', function (){ 
        $('.progress-bar').each(function(){
                var width = $(this).data('percent');
                $(this).css({'transition': 'width 3s'});
                $(this).appear(function() {
                    console.log('hello');
                    $(this).css('width', width + '%');
                    $(this).find('.count').countTo({
                        from: 0,
                        to: width,
                        speed: 3000,
                        refreshInterval: 50
                    });
                });
            });
        }
    )
    .on('scroll', function(){
        let scrollTop = $(window).scrollTop(),
        projectSection = $('#about').offset().top,
        navHeight = $(".navbar").height(),
        distanceTop = projectSection - scrollTop - navHeight;
        if(distanceTop > 0) {
            $('.navbar').removeClass('faded')
        }
        else if (distanceTop < 0) {
            $('.navbar').addClass('faded')
        }
    });

    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        autoplayTimeout:8000
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

     $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


})(jQuery);