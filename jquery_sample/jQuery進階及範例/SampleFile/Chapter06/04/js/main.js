$(function () {

    /*
     * Gallery
     */
    $('#gallery').each(function () {

        var $container = $(this),
            $loadMoreButton = $('#load-more'), //附加按鈕
            $filter = $('#gallery-filter'),    //篩選表單
            addItemCount = 16,                 //一次顯示的項目數量
            addedd = 0,                        //顯示結束的項目數量
            allData = [],                      //完整的JSON資料
            filteredData = [];                 // 篩選後的JSON資料

        $container.masonry({
            columnWidth: 230,
            gutter: 10,
            itemSelector: '.gallery-item'
        });

        // 取得JSON並執行initGallery函數
        $.getJSON('./data/content.json', initGallery);

        // 圖庫初始化
        function initGallery (data) {

            // 儲存取得的JSON資料
            allData = data;

            // 初始狀態不做任何篩選
            filteredData = allData;

            // 顯示初始的項目資料
            addItems();

            // 點擊新增按鈕後顯示
            $loadMoreButton.on('click', addItems);

            // 篩選的radio button有變化的話則執行篩選
            $filter.on('change', 'input[type="radio"]', filterItems);
        }

        // 建立項目並插入文件
        function addItems (filter) {

            var elements = [],
                // 新增資料的陣列
                slicedData = filteredData.slice(addedd, addedd + addItemCount);

            // 對每個slicedDate的元素建立DOM元素
            $.each(slicedData, function (i, item) {
                var itemHTML =
                        '<li class="gallery-item is-loading">' +
                            '<a href="' + item.images.large + '">' +
                                '<img src="' + item.images.thumb + '" alt="">' +
                                '<span class="caption">' +
                                    '<span class="inner">' +
                                        '<b class="title">' + item.title + '</b>' +
                                        '<time class="date" datatime="' + item.date + '">' +
                                            item.date.replace(/-0?/g, '/') +
                                        '</time>' +
                                    '</span>' +
                                '</span>' +
                            '</a>' +
                        '</li>';
                elements.push($(itemHTML).get(0));
            });

            // 將DOM元素陣列插入container，並執行Masonry配置
            $container
                .append(elements)
                .imagesLoaded(function () {
                    $(elements).removeClass('is-loading');
                    $container.masonry('appended', elements);

                    // 篩選後重新配置
                    if (filter) {
                        $container.masonry();
                    }
                });

// 06-03 新增
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // 對link設定Colorbox
            $container.find('a').colorbox({
                maxWidth: '970px',
                maxHeight: '95%',
                title: function () {
                    return $(this).find('.inner').html();
                }
            });
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

            // 新增結束後更新項目數目
            addedd += slicedData.length;

            // 當JSON中的資料皆已經顯示時，隱藏新增按鈕
            if (addedd < filteredData.length) {
                $loadMoreButton.show();
            } else {
                $loadMoreButton.hide();
            }
        }

        // 項目篩選
        function filterItems () {
            var key = $(this).val(), // 點選的Radio Button狀態值

                // 新增後的Masonry項目
                masonryItems = $container.masonry('getItemElements');

            // 刪除Masonry項目
            $container.masonry('remove', masonryItems);

            // 重新設定篩選後的項目資料
            // 與加入的項目資料數
            filteredData = [];
            addedd = 0;

            if (key === 'all') {
                // 如果是點選all，則儲存所有的JSON資料
                filteredData = allData;
            } else {
                // all以外的情況，則取出符合鍵值的資料
                filteredData = $.grep(allData, function (item) {
                    return item.category === key;
                });
            }

            // 加入項目
            addItems(true);
        }
    });

    // jQuery UI Button
    $('.filter-form input[type="radio"]').button({
        icons: {
            primary: 'icon-radio'
        }
    });

    // Resize page header
    $('.page-header').each(function () {
        var $header = $(this),
            headerHeight = $header.outerHeight(),
            headerPaddingTop = parseInt($header.css('paddingTop'), 10),
            headerPaddingBottom = parseInt($header.css('paddingBottom'), 10);
        $(window).on('scroll', $.throttle(1000 / 60, function () {
            var scroll = $(this).scrollTop(),
                styles = {};
            if (scroll > 0) {
                if (scroll < headerHeight) {
                    styles = {
                        paddingTop: headerPaddingTop - scroll / 2,
                        paddingBottom: headerPaddingBottom - scroll / 2
                    };
                } else {
                    styles = {
                        paddingTop: 0,
                        paddingBottom: 0
                    };
                }
            } else {
                styles = {
                    paddingTop: '',
                    paddingBottom: ''
                }
            }
            $header.css(styles);
        }));
    });

});
