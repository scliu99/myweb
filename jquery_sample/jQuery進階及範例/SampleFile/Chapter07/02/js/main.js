$(function () {

    initScene1();

    // Scene 1:圖片序列的動畫
    function initScene1 () {

        var
            // 圖片container與當中所有圖片的jQuery物件
            $container       = $('#scene-1 .image-sequence'),
            $images          = $container.find('img'),

            // 圖片總數與目前顯示圖片的index
            frameLength      = $images.length,
            currentFrame     = 0,

            // 動畫執行中會用到的數值
            counter          = 0, // 動畫執行狀況的counter
            velocity         = 0, // 動畫的速度

            // 動畫的timer (初始為空)
            timer            = null,

            // 圖片畫面比例 (width / height)
            imageAspectRatio = 864 / 486;

        // container上觸發滑鼠滾輪事件後執行處理
        $container.on('mousewheel', function (event, delta) {
            // 對應滾輪方向計算速度
            if (delta < 0) {
                velocity += 1.5;
            } else if (delta > 0) {
                velocity -= 1.5;
            }
            // 呼叫動畫的開始函數
            startAnimation();
        });

        // 動畫的開始函數
        function startAnimation () {
            // 如果沒有執行的動畫，則執行動畫
            if (!timer) {
                // 每1/60 秒更新一次
                timer = setInterval(animateSequence, 1000 / 30);
            }
        }

        // 動畫的結束函數
        function stopAnimation () {
            clearInterval(timer);
            timer = null;
        }

        // 動畫函數
        function animateSequence () {

            // 下個顯示圖片的index
            var nextFrame;

            // 將速度乘上摩擦係數，讓每次呼叫的值越來越小
            velocity *= 0.9;

            //檢驗速度，若值在0±0.00001的範圍則視為0並將其停止
            if (-0.00001 < velocity && velocity < 0.00001) {
                stopAnimation();
            } else {
                // 其他狀況則加總counter與velocity
                // カ並將counter的數值範圍限制在圖片數的範圍中
                counter = (counter + velocity) % frameLength;
            }

            // 將counter的數值取整數以表示該影格(frame)
            nextFrame = Math.floor(counter);
            if (currentFrame !== nextFrame) {
                $images.eq(nextFrame).show();
                $images.eq(currentFrame).hide();
                currentFrame = nextFrame;
            }
        }

        // 在container中維持圖片畫面比例並配置於整個顯示區域
        // 每次視窗大小有所改變則連動調整
        $(window).on('resize', function () {

            // 取得視窗寬度、高度
            var $window = $(this),
                windowWidth = $window.width(),
                windowHeight = $window.height();

            // 比較圖片與視窗的圖片畫面比例
            // 調整container的大小與位置
            if (imageAspectRatio > windowWidth / windowHeight) {
                $container.css({
                    width: windowHeight * imageAspectRatio,
                    height: '100%',
                    top: 0,
                    left: (windowWidth - windowHeight * imageAspectRatio) / 2
                });
            } else {
                $container.css({
                    width: '100%',
                    height: windowWidth / imageAspectRatio,
                    top: (windowHeight - windowWidth / imageAspectRatio) / 2,
                    left: 0
                });
            }
        });

        // 初始時觸發視窗resize事件以進行調整
        $(window).trigger('resize');
    }

});
