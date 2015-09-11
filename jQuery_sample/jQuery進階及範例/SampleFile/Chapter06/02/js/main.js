$(function () {

    /*
     * Gallery
     */
    $('#gallery').each(function () {

        // 將#gallery元素作為gallery的container
        var $container = $(this);

        // 設定option並準備Masonry
        $container.masonry({
            columnWidth: 230,
            gutter: 10,
            itemSelector: '.gallery-item'
        });

        // 要求JSON檔案，若成功則執行後續處理
        $.getJSON('./data/content.json', function (data) {

            // 用以暫時儲存loop所建立DOM元素的陣列
            var elements = [];

            // 針對每個JSON的陣列元素執行迴圈處理
            $.each(data, function (i, item) {

                // 從陣列元素建立HTML字串
                var itemHTML =
                        '<li class="gallery-item is-loading">' +
                            '<a href="' + item.images.large + '">' +
                                '<img src="' + item.images.thumb +
                                    '" alt="' + item.title + '">' +
                            '</a>' +
                        '</li>';

                // 將HTML字串轉為DOM元素並加入陣列
                elements.push($(itemHTML).get(0));

            });

            // 插入DOM
            $container.append(elements);

            // 圖片載入結束後進行Masonry配置
            $container.imagesLoaded(function () {
                $(elements).removeClass('is-loading');
                $container.masonry('appended', elements);
            });
        });
    });
});
