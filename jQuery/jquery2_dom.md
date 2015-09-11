#2.DOM操作

@(104-1.網站程式設計)[jquery]

---

###DOM介紹
- 檔案物件模型Document Object Model的縮寫(在W3C中對DOM的定義更為廣義,這邊僅對網頁相關做說明)
- 給HTML文件使用的API,它提供了文件的結構表,例如document就代表"文件本身",table物件代表html裡的表格...等
- 在javascript(但不只是javascript)中可以很容易的對DOM做存取其中的元素及其屬性,用來取得或改變網頁的內容(外觀及內容值)
- DOM操作分為三個部份
  1. Core DOM:DOM的操作並不專屬javascript,任何支援DOM的語言都能使用。另外Core的部份也不是僅針對HTML,任何一種標記語言,例如:XML, XHTML都可以處理。例如:document.getElementsByTagName("form");可以取得一個文件中的form物件,element.getAttribute("src")可以取得元素中的src屬性。
  2. HTML DOM:用來操作HTML中專有的物件,例如:document.forms可以取得一個forms物件,element.src則可以取得元素中的src屬性。HTML DOM的許多操作其實會與Core DOM的操作相同,但其語法會更加簡單,但這種操作方式僅在網頁中有效!
  3. CSS DOM:在javascript中對css的操作,主要是對style的屬性做操作,例如:element.style.color="red",style後的css屬性基本上名稱與css檔中的屬性名相對應,但多字節名稱(如background-color)會將連接符移除後以小駝峰命名法改之(如backgroundColor)

###HTML DOM操作的類型
- 找尋節點(node): 利用選擇器(01)
- 建立元素及取得內容
- 插入節點
- 刪除節點
- 複製節點
- 替換節點
- 包覆(wrap)節點

###建立元素及取得內容(02)

- `$(html字串)`:建立一個元素DOM物件

  ```javascript
  var $li = $("<li>香蕉</li>");
  $("ul").append($li)
  ```

- `html()`:設定或取得一元素中的`html`內容,相當於javascript中`innerHTML`屬性的設定

  ```javascript
  var p = $("p").html() //取得p元素中的html內容
  $("p").html("<b>Hello</b>") // 設定p元素的內容
  ```

- `text()`:設定或取得元素中的純文字內容,相當於javascript中`innerText`屬性的設定。(firefox不支援
  `innerText`,但jquery可以正常的在firefox中運行)
  
  ```javascript
  var p = $("p").html() //取得p元素中的html內容
  $("p").html("<b>Hello</b>") // 設定p元素的內容
  ```


- `val()`:設定或取得元素中的值(一般是用在`input`元素中),相當於javascript中的`value`屬性。
  若取得的值為多值,則回傳的值會以陣列形態存放。

  ```javascript
  var p = $("p").text() //取得p元素中的文字內容
  $("p").text("<b>Hello</b>") // 設定p元素的文字內容
  ```

###插入節點(03)

- `append()`:將所有選擇到的元素內部附加內容
  
  ```
  HTML:
  <p>我想說:</p>
  jQuery:
  $("p").append("<b>你好</b>");
  結果:
  <p>我想說: <b>你好</b></p>
  ```

- `appendTo()`:將所有選擇到的元素,加入到指定的元素中。(與append()方法動作相反)
  
  ```
  HTML:
  <p>我想說:</p>
  jQuery:
  $("<b>你好</b>").appendTo("p");
  結果:
  <p>我想說: <b>你好</b></p>
  ```

- `prepend()`:將所有選擇到的元素內部前置內容(與append()相似,只不過加入的元素是附加到選擇元素內容的前面)
  
  ```
  HTML:
  <p>我想說:</p>
  jQuery:
  $("p").prepend("<b>你好</b>");
  結果:
  <p><b>你好</b>我想說:</p>
  ```

- `prependTo()`:將所有選擇到元素,加入到指定的元`素前面。(與prepend()方法動作相反)
  
  ```
  HTML:
  <p>我想說:</p>
  jQuery:
  $("<b>你好</b>").prependTo("p");
  結果:
  <p><b>你好</b>我想說:</p>
  ```

- `after()`:將所有選擇到的元素之後,插入元素
  
  ```
  HTML:
  <p>我想說:</p>
  jQuery:
  $("p").after("<b>你好</b>");
  結果:
  <p>我想說:</p><b>你好</b>
  ```

- `insertAfter()`:將所有撰擇的元素插入到指定的元素之後。(與after()的動作相反)
  
  ```
  HTML:
  <p>我想說:</p>
  jQuery:
  $("<b>你好</b>").insertAfter("p");
  結果:
  <p>我想說:</p><b>你好</b>
  ```

- `before()`:將所有選擇的元素之前插入內容
  
  ```
  HTML:
  <p>我想說:</p>
  jQuery:
  $("p").before("<b>你好</b>");
  結果:
  <b>你好</b><p>我想說:</p>
  ```

- `insertBefore()`:將所月選擇的元素插入到指定元素的前面。(與before()的動作相反)
  
  ```
  HTML:
  <p>我想說:</p>
  jQuery:
  $("<b>你好</b>").insertBefore("p");
  結果:
  <b>你好</b><p>我想說:</p>
  ```

###刪除節點

- `remove()`:將所有選擇到的元素從DOM中移除
  
  ```javascript
  $("ul li:eq(1)").remove()
  $("ul li").remove("li[title!=xyz]");
  ```

- `empty()`:將所有選擇到的元素清除內容,節點依然存在!
  
  ```javascript
  $("ul li:eq(1)").empty()
  ```

###複製節點

- `clone()`:將所有選擇到的元素複製一份
  
  ```javascript
  $(this).clone().appendTo("ul"); //複製當前節點,並將它附加到<ul>元素中
  ```

- `clone(true)`:複製節點的過程式,同時將原本的事件也一併複製!
  
###替換節點

- `replaceWith()`:將所有選擇到的元素內部替換內容
  
  ```javascript
  $("p").replaceWith("<b>xyz</b>"); //將<p>元素中的內容替換成<b>xyz</b>
  ```

- `replaceAll()`:將指定的內容替換掉選擇的元素中的內容(與replaceWith()動作相反)
  
  ```javascript
  $("<b>xyz</b>").replaceAll("p"); //將<p>元素中的內容替換成<b>xyz</b>
  ```

###包覆(wrap)節點

- `wrap()`:將所有選擇到的元素以指定的標簽包覆(每一個元素均包覆)
  
  ```javascript
  HTML:
  <p>我想說:</p>
  <p>我想說:</p>
  jQuery:
  $("p").wrap("<b></b>");
  結果:
  <b><p>我想說: </p></b>
  <b><p>我想說: </p></b>
  ```

- `wrapAll()`:將所有選擇到的元素以指定的標簽包覆在最外層
  
  ```javascript
  HTML:
  <p>我想說:</p>
  <p>我想說:</p>
  jQuery:
  $("p").wrapAll("<b></b>");
  結果:
  <b><p>我想說: </p>
  <p>我想說: </p></b>
  ```

- `wrapInner()`:將所有選擇到的元素以指定的標簽包覆在內層
  
  ```javascript
  HTML:
  <p>我想說:</p>
  <p>我想說:</p>
  jQuery:
  $("p").wrapInner("<b></b>");
  結果:
  <p><b>我想說: </b></p>
  <p><b>我想說: </b></p>
  ```

###屬性操作(09)

- `attr()`:取得/設定屬性
- `removeAttr()`:刪除屬性

###CSS操作(10)

- `css()`:設定或取得元素中的style屬性
  
  ```javascript
  $("p").css("color") // 取得p元素中style為color的值
  $("p").css("color","red") //設定p元素中style為color的值為"red"
  $("p").css({"color":"red", "fontSize":"2em"})//同時設定多個style屬性值
  ```

- `height()` `width()`:取得或設定元素的高(寬)
  
  ```javascript
  $("p").width() //取得p元素的寬
  $("p").height("300px")//設定p元素的高為300px
  ```

- `offset()`:取得元素在當前視窗中的相對徧移值座標
  
  ```javascript
  var p=$("p").offset()
  p.left; //左徧移量
  p.top;//上徧移量
  ```

- `position()`:取得最近一個poistion樣式為relative或是absolute的父節點的相對徧移值座標
  
  ```javascript
  var p=$("p").position()
  p.left; //左徧移量
  p.top;//上徧移量
  ```