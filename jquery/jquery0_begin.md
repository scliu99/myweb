#0.jQuery二三事

@(104-1.網站程式設計)[jquery]

---

###jQuery相關資訊
   - 官方網站: http://jquery.com/
   - 官方插件: http://plugins.jquery.com/
   - jQuery UI: http://jqueryui.com/
   - jQuery Mobile: http://jquerymobile.com/

###`jQuery.ready()`:

ready事件的幾種寫法如下

1. `$(document).ready(handler);`: (推薦標準寫法)(1)
2. `$().ready(handler);` (省略`document`,不推薦)
3. `$( handler);`
4. `$(document).on( "ready", handler );`: (1.8版後淘汰)

###當DOM文件載入後的事件,類似`onload`事件,但不完全相同
- `window.onload`
  1. 事件會在所有文件全部載入後觸發
  2. 事件的設定僅最後一次有效(2)
- jquery的`ready()`事件
  1. 會在主要文件一載入後立即觸發,非同步下載的其它文件(如圖片),則不會等待,可以縮短javascript啟始執行的時間
  2. 所有的`ready()`均會被執行(3)

###3.	jQuery與javascript簡單比較

- 使用DOM

  ```javascript
  // 不使用jquery的事件處理
  window.onload=function() {
      var myLinks = document.getElementsByTagName('a');
      for (var i = 0; i < myLinks.length; i++) {
          // 為每一個連結附加一個onclick事件函式
          myLinks[i].onclick = function () {
              alert('Hello World!');
          };
      }
  }
  ```

- 使用jQuery

  ```javascript
  $(document).ready(function() {
      // 使用jquery的事件處理
      $('a').click(function() {
          alert('Hello, World!');
      });
  } );
  ```

###jQuery物件與DOM物件的相互轉換

- DOM轉成jQuery

  ```javascript
  var pTag = document.getElementsByTagName('p')[0];
  // DOM物件轉成jquery物件
  var pJqTag = $(pTag);
  alert('DOM物件的結果:'+pTag.innerHTML);
  alert('jquery物件的結果:' + pJqTag.html());
  ```

- jQuery轉成DOM

  ```javascript
  var clickme = $("#clickme");    // clickme是一組jquery物件(陣列)
  // 將jquery物件轉成DOM物件,二種方式
  var domClickme1 = clickme[0];   // 第一種方式
  var domClickme2 = clickme.get(0);// 第二種方式
  alert('domClick1=' + domClickme1.innerHTML);
  alert('domClick2=' + domClickme2.innerHTML);
  ```
