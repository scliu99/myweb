$(function () {

    /*
     * Tabs
     */
    $('.work-section').each(function () {

        var $container = $(this),                            // a
            $navItems = $container.find('.tabs-nav li'),     // b
            $highlight = $container.find('.tabs-highlight'); // c
        // 將Tab的各元素轉為jQuuery物件
        // a 包含Tab和Panel的整體container
        // b Tab列表
        // c 選択中Tab的Highlight

        // 執行jQuery UI Tabs
        $container.tabs({

            // 設定為不顯示時的動畫
            hide: { duration: 250 },

            // 設定為顯示時的動畫
            show: { duration: 125 },

            // 讀取時與選擇時Highlight位置的調整
            create: moveHighlight,
            activate: moveHighlight
        });

        // 調整Highlight位置的函數
        function moveHighlight (event, ui) {
            var $newTab = ui.newTab || ui.tab,  // 新選擇Tab的jQuery物件
                left = $newTab.position().left; // 新選擇Tab的left

            // Highlight位置的動畫
            $highlight.animate({ left: left }, 500, 'easeOutExpo');
        }
    });

});
