$(function () {

    /*
     * Back-toTop button (Smooth scroll)
     */
    $('.back-to-top').each(function () {

        
        // 檢測html、body何者為可捲動元素
        var $el = $(scrollableElement('html', 'body'));

        // 設定按鈕的點擊事件
        $(this).on('click', function (event) {
            event.preventDefault();
            $el.animate({ scrollTop: 0 }, 250);
        });
    });

    // 透過scrollTop檢測可用元素的函數
    // http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
    function scrollableElement (elements) {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i],
            $el = $(el);
            if ($el.scrollTop() > 0) {
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];
    }

});
