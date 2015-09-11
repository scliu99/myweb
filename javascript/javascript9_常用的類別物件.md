#9.常用的類別物件

@(104-1.網站程式設計)[javascript]

---

###`String`類別物件

只要是變數被初始化為一個字串時,就會繼承所有`String`物件裡的屬性及方法,例如:


```javascript
var s = '123';
console.log(s.length); // 取得s的長度
console.log(s.charAt(1)); // 取得s字串中的第2個字元
```
---

常用的屬性

- `length`: 取得字串的長度

常用的方法

- `charAt(index)`: 取得位於index的字元
- `concat(s2)`: 將原字串與s2字串相連接
- `replace(a, b)`: 將字串中出現`a`字串的部份以`b`字串取代
- `slice(a, b)`: 取出字串中第`a`位置到第`b-1`位置的字串
- `split(d)`: 將字串以`d`為分隔符,切分成一組陣列
- `substr(a, b)`: 同slice
- `toLowerCase()`: 轉成小寫
- `toUpperCase()`: 轉成大寫
- `trim()`: 將首尾空白去除

其它更多的方法,可以參考: [http://www.w3schools.com/jsref/jsref_obj_string.asp](http://www.w3schools.com/jsref/jsref_obj_string.asp)


###`Date`類別物件

`Date`主要是提供處理日期及時間的運算

初始化一個"日期/時間"變數:

```javascript
var d = new Date(); // d為當前日期時間
var d = new Date("2015-04-04"); // Sat Apr 04 2015 08:00:00 GMT+0800 (CST)
var d = new Date(2015, 04, 04, 12, 10, 30, 0); // Mon May 04 2015 12:10:30 GMT+0800 (CST)

```

常用的方法

- `getFullYear()`: 取得4位數年份
- `getMonth()`: 取得月份(0-11)
- `getDate()`: 取得當月的第幾天(1-31)
- `getDay()`: 取得當週的第幾天(0-6)
- `getHours()`: 取得小時數(0-23)
- `getMinutes()`: 取得分(0-59)
- `getSeconds()`: 取得秒(0-59)
- `getTime()`: 取得自1970-01-01開始到現在的毫秒(1/1000秒)數
(以上所有方法均有對應的set方法)
- `toDateString()`: 將日期轉成字串

其它更多的方法,可以參考: [http://www.w3schools.com/jsref/jsref_obj_date.asp](http://www.w3schools.com/jsref/jsref_obj_date.asp)

###`Array`物件

`Array`常用的物件請參考第6章中的陣列操作

其它更多的方法,可以參考: [http://www.w3schools.com/jsref/jsref_obj_array.asp](http://www.w3schools.com/jsref/jsref_obj_array.asp)

###`window`物件(注意w是小寫,且結尾沒有s)

`window`是一個很特別的物件,它是在瀏覽器 [^1] 中對於javascrip環境的一個最高層物件,也就是全域(global)物件!
當我們呼叫一個沒有指名物件的函式時,這函式即為window的方法(函式),例如:

```javascript
alert('hello world!');  // alert()的方法不用指定物件,其實就是指定了全域物件window
window.alert('hello world!'); // 同上
```

常用屬性如下:

- `document`: `window`中最重要的屬性之一,這個物件會對應到網頁中的所有標簽物件,並以樹狀方式存放,而這個物件又稱之為DOM(Document Object Model)[^2]
- `location`: 這物件與網址(url)有關[^3]
- `innerHeight`: 當前視𥦬內部的高度(不含工具列)
- `innerWidth`: 當前視𥦬內部的寬度(不含工具列)
- `opener`: 若當前視𥦬是由另一個視𥦬所開啟(window.open(...)),`opener`則指向開啟者的`window`物件
- `parent`: 若本視𥦬是一個`<iframe>`或`<frame>`,而被套用在另一個視𥦬之內,則`parent`指向其上層的視𥦬



常用方法如下:

- `confirm()`: 顯示一個對話框,內有"確定"及"取消"按鍵,若按下"確定"則會回傳`true`,否則會回傳`false`
- `prompt()`: 顯示一個可輸入文字的對話框,並回傳所輸入的文字內容
- `setTimeout(function, delay)`: 設定一個在延遲`delay`毫秒後,執行一次`function`函式的功能

    ```javascript
    var sayHello = function(){ alert('Hello!'); };
    setTimeout(sayHello, 3000); // 3秒後會執行sayHello()
    ```
- `clearTimeout()`: 在`setTimeout`功能沒執行前,取消其執行
    ```javascript
    var sayHello = function(){ alert('Hello!'); };
    var myfunc = setTimeout(sayHello, 3000); // 3秒後會執行sayHello()
    clearTimeout(myfunc); // 原來的setTimeout被取消,sayHello這時就不會被執行
    ```
- `setInterval(function, delay)`: 功能同`setTimeout`,差異是這個設定的執行不會停止,即每隔`delay`時間,會執行一次`function`
- `clearInterval()`: 功能與`clearTimeout`相同,取消`setInterval`的執行
- `scrollTo(x, y)`: 將視𥦬捲動到指定的位置(x, y)
- `close()`: 將當前視𥦬關閉
- `open()`: 開啟一個新的視𥦬
- `focus()`: 視𥦬指定為'焦點',會將視𥦬移到最前方
- `moveBy(x,y)`: 將指定視𥦬位移到相對位置(x, y)
- `moveTo(x,y)`: 將指定視𥦬位移到絕對位置(x, y)
- `resizeBy(x, y)`: 將指定視𥦬放大或縮小(x, y)的量
- `resizeTo(x, y)`: 將指定視𥦬設定大小為(x, y)

    ```javascript
    function openWin() {
        myWindow = window.open('', '', 'width=200, height=100'); // Opens a new window
        myWindow.document.write("<p>This is 'myWindow'</p>");    // Some text in the new window
    }

    function moveWin() {
        myWindow.moveBy(250, 250);      // Moves the new window
        myWindow.focus();               // Sets focus to the new window
    }
    ```

###`navigator`物件

`navigator`主要是用來辦識使用者瀏覽器的相關資訊,有助於決定javascript在編寫時,可以依照不同瀏覽器做最佳化

常用屬性如下:

- `appCodeName`: 取得瀏覽器的'代碼'名稱
- `appName`: 取得瀏覽器的名稱
- `appVersion`: 取得瀏覽器的版本
- `platform`: 取得瀏覽器所執行的平台名稱
- `userAgent`: 取得瀏覽器的完整名稱
- `langeage`: 取得瀏覽器當前所使用的語系
- `cookieEnabled`: 取得瀏覽器當前的cookie功能是否開啟
- `onLine`: 取得瀏覽器當前是否連上網

  ```javascript
  var txt = "";
  txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
  txt += "<p>Browser Name: " + navigator.appName + "</p>";
  txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
  txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
  txt += "<p>Browser Language: " + navigator.language + "</p>";
  txt += "<p>Browser Online: " + navigator.onLine + "</p>";
  txt += "<p>Platform: " + navigator.platform + "</p>";
  txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
  document.getElementById("demo").innerHTML = txt;
  ```

  在chrome下的執行結果:(以下結果會依照不同的瀏覽而有不同結果,僅供參考!)

  ```
  Browser CodeName: Mozilla

  Browser Name: Netscape

  Browser Version: 5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36

  Cookies Enabled: true

  Browser Language: zh-TW

  Browser Online: true

  Platform: MacIntel

  User-agent header: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36
  ```

  - `getlocation`: 取得使用者目前的地理座標位置(這功能會依不同設備,其精準度有所不同)

  ```javascript
  var x = document.getElementById("demo");

  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition); // getCurrentPosition()為一非同步方法,當取得座標後會呼叫showPosition的函式
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  // showPosition為一callback函式,position參數為getCurrentPosition所傳入的座標位置
  function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    }

  ```

###`localStorage`及`sessionStorage`

這二個屬性,主要是用來存放資料用的

- `localStorage`: 可以依照網域(存取範圍為同一網域),存放任何物件(屬性),且當瀏覽器關閉後,資料依然存在!以下是常用的方法:

  ```javascript
  window.localStorage.item1 = 'abc'; // 存放一個item1物件
  window.localStorage.setItem('item1', 'abc'); // 與上面方式完全相同
  console.log(window.localStorage.item1); // abc, 取得item1的值
  console.log(window.localStorage.getItem('item1')); // abc, 同上一個方式
  window.localStorage.removeItem('item1'); // 移除item1的物件,若不移除,當永續存放
  window.localStorage.clear(); // 清除所有物件
  console.log(window.localStorage.length); // 己存放的物件數
  ```

- `sessionStorage`: 功能與`localStorage`大致相同,唯當session結束時(如關閉瀏覽器,或是逾時),資料也會被清除!

###document.cookie

cookie是瀏覽器的一種存放資料的機制,它不同與前面所述的存放資料功能!

1. cookie能存放的資料相對小很多(大約300個值)! [^4]
2. cookie會有一個保存期限,一但時間到了,就會自動消失!
3. 存放在cookie裡的資料,不但會被保存在瀏覽器中,還會在提交表單時一並傳送到主機端,當然也可以由主機端將cookie的資料傳回瀏覽器!

####JavaScript 設定 Cookie 寫法

JavaScript 設定、刪除 Cookie 最簡易的寫法如下:

- 設定 Cookie
  ```javascript
  document.cookie = "name=test";
  ```

  設定 1天過期, cookie name: name, value: test. (cookie可以設定保存期限!)

  ```javascript
  expire_days = 1; // 過期日期(天)
  var d = new Date();
  d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = "name=test" + "; " + expires + '; domain=blog.longwin.com.tw; path=/';
  // alert(document.cookie)
  ```

  - 刪除 Cookie

  ```javascript
  document.cookie = "name=; expire=Thu, 18 Dec 2013 12:00:00 GMT;"; // 後面的時間只要比現在時間還前面即可.
  ```

  設定 Cookie 完整寫法

  ```javascript
  document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; domain=.example.com; path=/";
  document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/"; // 不寫 domain 簡短寫法
  ```

---
注解

[^1]: javascript並非只能用在瀏覽器中,另一個很有名的環境即為[nodejs](https://nodejs.org/),在這環境中也是用javscript語言,但是它的全域變數卻不是`window`而是叫`global`
[^2]: DOM物件會另有章節說明
[^3]: location物件會另有章節說明
[^4]: 依不同瀏覽器,還是會有差異,[]這個網站](http://browsercookielimits.squawky.net/)可以測試你的瀏覽器對cookie的資料限制: http://browsercookielimits.squawky.net/
