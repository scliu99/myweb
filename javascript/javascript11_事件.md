#11.DOM的事件

@(104-1.網站程式設計)[javascript]

---
由於DOM所對應的是提供給使用者觀看及操作的頁面,在操作的過程式我們可以透過DOM元件所提供的事件,來得知發生的那些事情,進而對其做相對應的處理!

###事件的用法

事件是屬於DOM物件的屬性,可以透過

1. 在`HTML`的標簽屬性裡設定,例如

   ```html
   <body id="mypage" onload="init();"> // 在body標簽裡設定一個onload事件,於觸發時執行init()函式
   </body>
   ```

2. 透過`element.onxxx`的屬性來設定,例如

   ```javascript
   var b = document.getElementById('mypage'); // 取得body元素
   b.onload = function () {                   // 在b.onload指派一個函式
     // do something..
   }
   ```

3. 透過`addEventListener()`的方法來加入事件,例如

   ```javascript
   var myfunc = function() { ... };
   window.addEventListener("load", myfunc); // 加入指定事件
   window.removeEventListener("load", myfunc); // 移除指定事件
   ```

###對於事件用法的一些注意事項

- 對於第1種方式,在基於程式碼與頁面分離的建議及原則下,不建議使用這個方式
- 對於第2種方式,這種方法適用在所有的瀏覽器中,因此在適當的情形下,可以使用
- 對於第3種方式,這是最推薦的一種用法,它能為事件設定多個處理方法,唯一要注意的是,這方法不支援在`IE8`或更舊的瀏覽器上,必需改用attachEvent()方法,如下例:

  ```javascript
  var myfunc = function() { ... };
  var b = document.getElementById('mypage'); // 取得body元素
  b.attachEvent("onload", myfunc); // 加入指定事件,這裡要用on
  b.detachEvent("onload", myfunc); // 移除指定事件
  ```

  此外,使用以下這個技巧,即可以適用在所有的瀏覽器

  ```javascript
  var myfunc = function() { ... };
  var b = document.getElementById('mypage'); // 取得body元素
  if(b.addEventListener){       // 先判斷addEventListener這個方法是否存在
    b.addEventListener("load", myfunc);
  }else{
    b.attachEvent("onload", myfunc);
  }
  ```

###常用事件

- `onclick`: 當該元素被點擊時觸發
- `ondblclick`: 當該元素被連點二下時觸發
- `onload`: 當DOM元件被載入完成時觸發
- `onfocus`: 當元素取得焦點時(一般是當游標進入時)
- `onblur`: 當元素失去焦點時(一般是當游標離開時)
- `onchange`: 當元素的內容改變時
- `onmouseover`: 當滑鼠游標移入元素時
- `onmouseout`: 當滑鼠游標移開時
- `onkeydown`: 當任一按鍵被按下時
- `onkeyup`: 當任一按鍵被放開時
- `onkeypress`: 當任一按鍵被按下並放開時
- `onmousedown`: 當任一滑鼠按鍵被按下時
- `onmouseup`: 當任一滑鼠按鍵被放開時
- `onresize`: 當視事窗大小改變時
- `onselect`: 當文字被選取時
- `onsubmit`: 提交按鍵按下時

###事件的傳播特性

首先,假設我們有二個元素如下(外層element1包覆一個內層element2)

```
┌─────────────────────────────────┐
│ element1                        │
│   ┌───────────────────────┐     │
│   │element2               │     │
│   └───────────────────────┘     │
│                                 │
└─────────────────────────────────┘
```

如果我們點了element2,則這二個元素的onclick的事件均會被觸發!

---

事件順序分為二種模型:

1. 事件捕獲模型(Event Capturing):
   Netscape瀏覽器採用這種模型,這種模型的觸發是由外向內,因此element1的事件會先發生!

   ```
   ┌──────────────││─────────────────┐
   │ element1     ││                 │
   │   ┌──────────││───────────┐     │
   │   │element2  \/           │     │
   │   └───────────────────────┘     │
   │          Event Capturing        │
   └─────────────────────────────────┘
   ```

2. 事件冒泡模型(Event Bubbling):
   Microsoft認為,事件應該是由內向外,因此element2的事件會先發生!

   ```
   ┌──────────────/\─────────────────┐
   │ element1     ││                 │
   │   ┌──────────││───────────┐     │
   │   │element2  ││           │     │
   │   └───────────────────────┘     │
   │          Event Bubbling         │
   └─────────────────────────────────┘
   ```

---

W3C採用了以上二種模型的混合

[W3C](http://www.w3.org/)綜合這二種模型:
事件首先會由外到內層的順序被"捕獲",再由內到外層的順序"冒泡"!也就是混合以上二種模型!

```
┌──────────────││─/\──────────────┐
│ element1     ││ ││              │
│   ┌──────────││─││────────┐     │
│   │element2  \/ ││        │     │
│   └───────────────────────┘     │
│          W3C Event Model        │
└─────────────────────────────────┘
```

然而事件的設計,只會存在其中一種模型(事件在這二個階段中只會被觸發一次),因此我們在註冊事件時,必須決定所註冊的事件是那一種模型!
透過`addEventListener()`[^1][^2]的第三個參數,如果為`true`則這事件將在捕獲階段觸發,反之則在冒泡階段(預設為`false`)!

舉個例子,如果事件的註冊如下方式

```javascript
element1.addEventListener('click',callback1,true);
element2.addEventListener('click',callback2,true);
element1.addEventListener('click',callback3,false);
element2.addEventListener('click',callback4,false);
```

那麼當我們點了element2時,事件被觸發的順序就會是

`callback1` -> `callback2` -> `callback4` -> `callback3`

---

###阻止事件傳播

- `event.stopPropagation()`: 停止冒泡階段的上層事件,或是捕獲階段的下層事件!(同一元素上若有多個事件,並不會被停止)

  ```javascript

  element2.addEventListener("click", myFunction, false);
  element1.addEventListener("click", someOtherFunction, false);

  function myFunction(event) {
      alert ("Hello World!");
      event.stopPropagation();       // 這會阻止someOtherFunction的執行
  }

  // This function will not be executed
  function someOtherFunction() {
      alert ("I will not get to say Hello World");
  }

  ```

- `event.stopImmediatePropagation()`: 停止同一元表上的其它事件,及`stopPropagation()`所述的功能

  ```javascript
  element2.addEventListener("click", myFunction);
  element2.addEventListener("click", someOtherFunction);

  function myFunction(event) {
      alert ("Hello World!");
      event.stopImmediatePropagation();       // 這會阻止someOtherFunction的執行
  }

  // This function will not be executed
  function someOtherFunction() {
      alert ("I will not get to say Hello World");
  }

  ```

- `event.preventDefault()`: 阻止元素上的預設事件
  有些元素是有預設事件的,例如:`<input type='sumbit'></input>`這樣的按鍵,當按下後會提交表單資料到主機.又例如:`<a href="...">`,在點選該網址後,會開啟開網址的網頁...等
  如果我們想要動態決定在某些情形下必需阻止預設事件的執行,即可執行`evet.preventDefault();`來達成!

  ```javascript
  var myform = document.getElementById('myform'); // 取得表單
  myform.addEventListener('submit', function(event) {
    if (something goes wrong) {
      event.preventDefault(); // 阻止提交
      window.history.back(); // 退回上一頁
    }
  });
  ```









---
[^1]能決定那一種模型的事件註冊方式,只能透過`addEventListener()`方法來設定
[^2]由於Microsoft由來就不認同捕獲事件模型,因此在`attachEvent()`的方法裡並未支援這樣的參數!又由於後來基於標的需求,在IE9之後的瀏覽器也加入了`addEventListener()`的方法!
