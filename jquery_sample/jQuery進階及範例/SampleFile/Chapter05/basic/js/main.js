$(function () {

    /*
     * Slideshow
     */
    // 對每個有slideshow類別的元素進行處理
    $('.slideshow').each(function () {

        var $slides = $(this).find('img'), // 所有Slide
            slideCount = $slides.length,   // Slide個數
            currentIndex = 0;              // 目前Slide的index

        // 淡入顯示首張Slide
        $slides.eq(currentIndex).fadeIn();

        // 每7500毫秒就執行showNextSlide函數
        setInterval(showNextSlide, 7500);

        // 顯示下一張Slide的函數
        function showNextSlide () {

						//下張Slide的index
						//(如果是最後一張Slide，則會到第一張)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 目前的Slide淡出顯示
            $slides.eq(currentIndex).fadeOut();

            // 下一張Slide淡入顯示
            $slides.eq(nextIndex).fadeIn();

            // 更新目前的index
            currentIndex = nextIndex;
        }

    });

    /*
     * Sticky header
     */
    $('.page-header').each(function () {

        var $window = $(window), // 將window轉為jQuery物件
            $header = $(this),   // 將header轉為jQuery物件
        // 取得header的預設位置
            headerOffsetTop = $header.offset().top;

        // 監控視窗捲動事件
        // (每次視窗觸發捲動事件時執行處理)
        $window.on('scroll', function () {
            // 檢查視窗捲動程度、
            // 若超過header的預設位置則附加類別、
            // 反之則刪除
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
        // debugger;
        // 觸發window的捲動事件
        // (用以調整header的初始位置)
        $window.trigger('scroll');

    });

    /*
     * Tabs
     */
    $('#work').each(function () {

        // 將Tab各元素jQuery物件化
        var $tabList    = $(this).find('.tabs-nav'),   // Tab的列表
            $tabAnchors = $tabList.find('a'),          // Tab(鏈結)
            $tabPanels  = $(this).find('.tabs-panel'); // Panel

        //點擊Tab時的處理
        //傳入作為參數的事件物件
        $tabList.on('click', 'a', function (event) {

            // 取消點擊鏈結的預設動作
            event.preventDefault();

// 將點擊的Tab轉為jQuery物件
            var $this = $(this);

            // 如果是已被選取的Tab，則結束處理
            if ($this.hasClass('active')) {
                return;
            }

            // 取消所有Tab的選擇狀態
            // 對被點擊的Tab附加狀態
            $tabAnchors.removeClass('active');
            $this.addClass('active');

            // 將所有Panel設定為不顯示
            // 顯示對應點擊Tab的Panel
            $tabPanels.hide();
            $($this.attr('href')).show();

        });

        // 初始Tab的選擇狀態
        $tabAnchors.eq(0).trigger('click');

    });

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

    /*
     * Google Maps
     */
    function initMap () {
        var mapContainer = document.getElementById('map-container'),
            mapImageSrc = mapContainer.getElementsByTagName('img')[0].getAttribute('src'),
            mapParams = decodeURIComponent(mapImageSrc.split('?')[1]).split('&'),
            mapData = {},
            mapStyleName = 'Mono',
            mapStyles = [
                {
                    featureType: 'all',
                    elementType: 'all',
                    stylers: [
                        { visibility: 'on' },
                        { hue: '#105ea7' },
                        { saturation: -100 },
                        { invert_lightness: true }
                    ]
                },
                {
                    elementType: 'labels.icon',
                    stylers: [
                        { visibility: 'off' }
                    ]
                }
            ],
            latLng,
            mapOptions,
            map,
            marker,
            markerLatLng,
            i,
            len,
            pair;
        for (i = 0, len = mapParams.length; i < len; i++) {
            pair = mapParams[i].split('=');
            mapData[pair[0]] = pair[1];
        }
        markerLatLng = mapData.markers? mapData.markers.split(','): null;
        latLng = mapData.center? mapData.center.split(','): markerLatLng;
        mapOptions = {
            center: new google.maps.LatLng(latLng[0], latLng[1]),
            disableDefaultUI: true,
            panControl: true,
            zoom: +mapData.zoom || 16,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
        map = new google.maps.Map(mapContainer, mapOptions);
        map.mapTypes.set(mapStyleName, new google.maps.StyledMapType(mapStyles, { name: mapStyleName }));
        map.setMapTypeId(mapStyleName);
        if (mapData.markers) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(markerLatLng[0], markerLatLng[1]),
                map: map
            });
        }        
    }

    initMap();

});
