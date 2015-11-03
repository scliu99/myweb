#10.Document Object Model

@(104-1.網站程式設計)[javascript]

---
對於網頁中的所有元件(標簽、屬性及值...等)的存取,必需透過`window.document`這個物件來完成

###DOM的架構

DOM是一個對應到網頁上所有標簽元素的樹狀結構體,以下面這份`HTML`為例

```html
<html>
<head>
  <title>一個HTML範例</title>
</head>
<body>
  歡迎訪問臉書網站!
  <br>
  <a href="http://www.facebook.com">http://www.facebook.com</a>
</body>
</html>
```

這個簡單的`HTML`會對應到一份如下的樹狀結構

```
document
└── <html> (根元素)
    ├── <head> (元素)
    │   └── <title> (元素)
    │       └── 一個HTML範例 (內文)
    └── <body> (元素)
        ├── 歡迎訪問臉書網站! (內文)
        ├── <a> (元素)
        │   ├── href (屬性)
        │   └── http://www.facebook.com (內文)
        └── <br> (元素)
```
對於一份樹狀結構,有以下的相關用語

- 根節點(root): 所有節點的最上層節點,其節點不會再有父節點,且一份樹狀結構只會存在一個根節點,這裡為`<html>`
- 子節點(children node): 一個節點的下一層節點,例如`<head>`是`<html>`的子節點.子節點可能為一個或多個!
- 父節點(parent node): 一個節點的上一層節點,例如`<body>`的父節點為`<html>`,父節點只會有一個
- 兄弟節點(sibling): 擁有相同父節點的節點,例如`<head>`與`<body>`互為兄弟節點
- 後代節點(descendant): 一個節點的下一個層次節點集合,例如`<head>`、`<title>`及`一個HTML範例`均為`<html>`的後代節點
- 袓先節點(ancestor): 一個節點的父節點及其位於父節點次上的節點,例如`<title>`的袓先節點有`<head>`及`<html>`
- 葉子節點(leaf): 一個沒有子節點的節點,例如`<br>`

---

###取得DOM裡的元素
`document`提供了二個方法,可以用來取得DOM裡的元素

- `getElementById(元素的id值)`: 透過元素中的`id`屬性值,來取得該元素的DOM物件,要注意的是,在一份DOM元件中,所有的`id`值均必須為唯一值!
- `getElementsByName(元素的name值)`: 透過元素中的`name`屬性值,來取得該元素的DOM物件!`name`屬性是可以重複的,因此這個方法會一次取得多個物件,以陣列方式回傳

**註:透過上述取得的DOM元件,依然可以透過相關的方法存取到其子節點、父節點或兄弟節點!**

以下面這個網頁為例

```html
<html>
<head>
  <title>一個HTML範例</title>
</head>
<body id='mybody'>
  歡迎訪問臉書網站!
  <br>
  <a href="http://www.facebook.com" name="fburl">http://www.facebook.com</a>
</body>
</html>
```

```javascript
var mybody = document.getElementById('mybody'); // 取得<body>的DOM物件
var myhrefs = document.getElementsByName('a'); // 取得<a>的DOM物件
console.dir(mybody);
console.dir(myhrefs);
```

在取到該物件後,可以透過以下的屬性存取其它相關節點
- `parentNode`: 取得其父節點
- `childNodes`: 取得其所有子節點(陣列)
- `firstChild`: 取得其第一個子節點
- `lastChild`: 取得其最後一個子節點
- `previousSibling`: 取得前一個兄弟節點
- `nextSibling`: 取得下一個兄弟節點
- `nodeName`: 節點的名稱(標簽名)
- `nodeValue`: 節點的值

以下為其中一些用法

```javascript
console.dir(mybody.parentNode); // 會得到<html>的元素
console.log(mybody.nodeName); // BODY

```

####DOM其它常用的屬性

- `innerHTML`: 這節點裡所包含的所有內容(文字、標簽、屬性...等),以字串型態表示(可改寫)
- `innerTEXT`: 節點裡的純文字內容(會去除所有html的標簽及屬性)(可改寫)
- `className`: 節點中的class屬性值,以字串型態表示
- `classList`: 節點中的class屬性值,以陣列型態表示
- `style`: 節點中的style屬性,這裡可以設定所有`css`的屬性及值
- `attributes`: 節點中的所有屬性及值,以陣列型態表示(setAttribute, getAttribute)
- `onxxxxx`: 所有的事件(參考事件的章節)

####DOM常用的方法

這些方法主要都是提供將另一個DOM元素加入(插入)原本的DOM中,或是將其中的DOM元素做更新或刪除等

1. 建立一個DOM的節點物件,主要有以下方法
   - `document.createElement()`: 建立一個元素(標簽)
   - `document.createTextNode()`: 建立一個文字元素
   以下是一段範例

   ```javascript
   var btn = document.createElement("BUTTON");        // Create a <button> element
   var t = document.createTextNode("CLICK ME");       // Create a text node
   btn.appendChild(t);                                // Append the text to <button>
   document.body.appendChild(btn);                    // Append <button> to <body>
   ```

   - `document.createAttribute()`: 建立一個屬性

   ```javascript
   var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
   var att = document.createAttribute("class");       // Create a "class" attribute
   att.value = "democlass";     // Set the value of the class attribute
   h1.setAttributeNode(att);    // Add the class attribute to <h1>
   ```

2. 將建立的節點物件加入原本的DOM裡
   - `appendChild(node)`: 將node節點附加在原節點之後
   
   ```javascript
   var node = document.createElement("LI");         // Create a <li> node
   var textnode = document.createTextNode("Water"); // Create a text node
   node.appendChild(textnode);                      // Append the text to <li>
   document.getElementById("myList").appendChild(node); // Append <li> to <ul> with id="myList"
   ```
   
   - `insertBefore(node)`: 將node節點加在原節點之前

3. 刪除節點
   - `removeChild(node)`: 將node節點由原節點中移除
   
   ```javascript
   var list = document.getElementById("myList");   // Get the <ul> element with id="myList"
   list.removeChild(list.childNodes[0]);           // Remove <ul>'s first child node (index 0)
   ```

---
關於節點的相關操作還有很多,可以參考[http://www.w3schools.com/jsref/](http://www.w3schools.com/jsref/),獲得更多的資訊!