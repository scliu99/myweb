$(function () {

    initScene3();

    // Scene 3: 遮罩動畫
    function initScene3 () {

        var $container = $('#scene-3'),            // container
            $masks     = $container.find('.mask'), // mask
            $lines     = $masks.find('.line'),     // 邊界線
            maskLength = $masks.length,            // mask總數

            // 儲存各mask切割區域資料的陣列
            maskData   = [];

        // 儲存各mask切割區域的左側座標
        $masks.each(function (i) {
            maskData[i] = { left: 0 };
        });

        // 執行滑鼠移入、移出mask的處理
        $container.on({
            mouseenter: function () {
                resizeMask($(this).index());
            },
            mouseleave: function () {
                resizeMask(-1);
            }
        }, '.mask');

        // 設定各mask初始切割區域與邊界線
        resizeMask(-1);

        // 各mask切割區域與邊界線的動畫函數
        function resizeMask (active) {

            // 取得container的寬度、高度
            // 作為各切割區域右側、下側的座標
            var w = $container.width(),
                h = $container.height();

            // 處理各mask
            $masks.each(function (i) {

                var $this = $(this), // 目前處理的mask
                    l;               // mask切割區域的左側座標

                // active = 滑鼠移入的mask index
                //          -1表示滑鼠為移出的狀態
                // i      = mask的index

                // 依照滑鼠事件計算mask切割區域左側的座標
                if (active === -1) {
                    // 滑鼠移出時均等切割
                    l = w / maskLength * i;
                } else if (active < i) {
                    // 以滑鼠移入的mask為基礎，調整其右側的mask
                    // 將這些切割區域左側往右邊調整
                    l = w * (1 - 0.1 * (maskLength - i));
                } else {
                    // 其他狀況將切割區域左側往左邊調整
                    l = w * 0.05 * i;
                }

                // 設定動畫從儲存的左側座標(maskData[i])移動至l的數值
                $(maskData[i]).stop(true).animate({ left: l }, {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    // 改寫mask與邊界線的CSS
                    progress: function () {
                        var now = this.left;
                        $this.css({
                            // 利用各數值組合rect()的參數
                            clip: 'rect(0px ' + w + 'px ' +
                                    h + 'px ' + now + 'px)'
                        });
                        $this.find($lines).css({
                            left: now
                        });
                    }
                });
            });
        }
    }

});
