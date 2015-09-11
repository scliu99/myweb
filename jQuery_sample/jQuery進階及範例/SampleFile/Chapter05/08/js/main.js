$(function () {

    /*
     * Back-toTop button (Smooth scroll)
     */
    $('.back-to-top').on('click', function () {

        // 執行Smooth Scroll Plug-in
        $.smoothScroll({
            easing: 'easeOutExpo', // easing的種類
            speed: 500             // 所需時間
        });
    });

});
