$(function () {

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

});
