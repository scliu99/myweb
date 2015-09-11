#1.jQuery選擇器

@(104-1.網站程式設計)[jquery]

---

###jQuery選擇器: 來自於CSS選擇器
- `jQuery()`,`$()`是`jQuery`選擇器的函式,`jQuery`是函示的原名,$則是它的別名,習慣上會用較簡短的`$`
- `$('#ID')`用來替代`document.getElementById('ID')`函式(注意裡面的#號,表示ID)
- `$('tagName')`則用來替代`document.getElementsByTagName('tagName')`函式


###選擇器的分類
- 基本選擇器(basic)
- 層次選擇器(level)
- 過濾選擇器(filter)
  - 基本過濾
  - 內容過濾
  - 可見性過濾
  - 屬性過濾
  - 子元素過濾
  - 表單屬性過濾
- 表單選擇器(form)

###基本選擇器

選擇器|說明|回傳|範例
-----|---|----|----
`#id`   |依指定的id名稱找到其元素  |單一元素|`$("#test")`選取`id`為`test`的元素(11)
`.class`|依指定的名稱找到其類別名稱相符的元素|集合元素|`$(".test")`選取所有`class`為`test`的元素(12)
`E`     |所有標簽名為E的元素|集合元素|`$("p")`選取所有`<p>`元素
`S1`, `S2`, `S3`, `S4`..|多個選擇器的集合|集合元素|`$("div, span, p.myClass")`選取所有`<div>`、`<span>`及`class`為`myClass`的`<p>`元素


###層次選擇器(14)

選擇器|說明|回傳|範例
-----|---|----|----
$`("E F")`	|選取E元素裡所有的`F`(內層)元素,`F`可以是內層中的任一層(後代)	|集合元素	|`$("div span")`選取`<div>`裡的所有任一層`<span>`元素
`$("E>F")`	|選取`E`元素裡所有的`F`(內層)元素,`F`僅為`E`的第一層(兒子)	|集合元素	|`$("div>span")`選取`<div>`裡的所有直屬`<span>`元素
`$("E+F")`	|選取`E`元素之後的第一個`F`元素	|集合元素	|`$(".one+div")`選取class為`one`的下一個`<div>`元素
`$("E~F")`	|選取`E`元素後的所有`F`兄弟元素(同一層)	|集合元素	|`$("#two~div")`選`id`為`two`的元素後的所有`<div>``兄弟元素

###選擇器的等價關係(15)

選擇器|方法
-----|----
`$(".one + div")`	|`$(".one").next("div");`
`$("#prev ~ div")`|`$("#prev").nextAll("div");`
&nbsp;	|`$("#middle").siblings("div");` 選取所有前後的兄弟`<div>`

###過濾選擇器-基本過濾(16)

選擇器|說明|回傳|範例
-----|---|----|----
`:first`	|選取第一個元素	|單一元素	|$("div:first")選取所有div中的第一個元素
`:last`	|選取最後一個元素	|單一元素	|$("div:last")選取所有div中的最後一個元素
`:not(E)`	|去除所有`E`元素	|集合元素	|`$("input:not(.myClass)")`選取`<input>`中`class`不為`myClass`的元素
`:even`	|選取所有偶數的元數(索引由0開始)	|集合元素	|`$("input:even")`選取`<input>`中偶數元素
`:odd	`|選取所有奇數的元數(索引由0開始)	|集合元素	|`$("input:odd")`|選取`<input>`中奇數元素
`:eq(index)`	|選取索引值等於`index`的元素(索引由0開始)	|單一元素	|`$("input:eq(1)")`|選取`<input>`中索引為1的元素
`:gt(index)`	|選取索引值大於`index`的元素(索引由0開始)	|集合元素	|`$("input:gt(1)")`|選取`<input>`中索引值大於1的元素
`:lt(index)`	|選取索引值小於`index`的元素(索引由0開始)	|集合元素	|`$("input:lt(1)")`|選取`<input>`中索引值小於1的元素
`:header`	|選取所有標題標簽(`h1`-`h6`)	|集合元素	|`$(":header")`

###過濾選擇器-內容過濾(17)

選擇器|說明|回傳|範例
-----|---|----|----
`:contains(text)`	|選取含有文字內容為`text`的元素	|集合元素	|`$("div:contains('me')")`選取所有`<div>`中的文字內容含有`me` 的元素
`:empty`	|選取不含有子元素的空元素	|集合元素	|`$("div:empty")`選取所有`<div>`中的空元素
`:has(E)`	|選取含有E子元素的元素	|集合元素	|`$("div:has(p)")`選取含有`<p>`元素的所有`<div>`
`:parent`	|選取含有子元素的元素	|集合元素	|`$("div:parent")`選取`<div>`中有含子元素的元素

###過濾選擇器-可見過濾(18)

選擇器|說明|回傳|範例
-----|---|----|----
`:hidden`	|選取所有不可見的元素	|集合元素	|`$(":hidden")`選取所有不可見元素,包括`<input type='hidden'/>` `<div style='display:none'/>` `<div style='visibility:hidden'>`等元素,如果只想選取`input`,可以使用`$('input:hidden')`
`:visible`	|選取所有可見的元素	|集合元素	|`$("div:visible")`選取所有可見的`<div>`元素

###過濾選擇器-屬性過濾(19)

選擇器|說明|回傳|範例
-----|---|----|----
`[attribute]`	|選取有此屬性的元素	|集合元素	|`$("div[id]")`選取有`id`屬性的`<div>`
`[attribute=value]`	|選取屬性的值為`value`的元素	|集合元素	|`$("div[title=test]")`選取`title`屬性為`test`的`<div>`元素
`[attribute!=value]`	|選取屬性的值不為`value`的元素	|集合元素	|`$("div[title!=test]")`選取`title`屬性不為`test`的`<div>`元素
`[attribute^=value]`	|選取屬性的值以`value`起始的元素	|集合元素	|`$("div[title^=test]")`選取`title`屬性以`test`的起始`<div>`元素
`[attribute$=value]`	|選取屬性的值以`value`結束的元素	|集合元素	|`$("div[title$=test]")`選取`title`屬性以`test`的結束`<div>`元素
`[attribute*=value]`	|選取屬性的值含有`value`的元素	|集合元素	|`$("div:[title*=test]")`選取`title`屬性包含`test`的`<div>`元素
`[ attribute1]`...`[ attributeN]`	|複合屬性(滿足所有條件)	|集合元素	|`$("div[id][title$='test']")`選取含有`id`屬性,且`title`屬性以`test`結束的`<div>`元素

###過濾選擇器-子元素過濾(20)

選擇器|說明|回傳|範例
-----|---|----|----
`[:nth-child](index/even/odd/equation)`	|選取每個父元素下的第`index`個子元素或者奇偶元素(`index`由1算起)	|集合元素	|`:eq(index)`僅找尋第一個元素,而`:nth-child`將為每一個父元素找尋符合的子元素
`:first-child`|選取每個父元素下的第1個子元素元素	|集合元素	|`$("ul li:first-child");`選取每個`ul`中的第一個`li`元素
`:last-child`	|選取每個父元素下的最後一個子元素元素	|集合元素	|`$("ul li:last-child");`選取每個`ul`中的最後一個`li`元素
`:only-child`	|選取每個父元素裡僅有一個子元素的元素	|集合元素	|`$("ul li:only-child")`如果`li`是`ul`的唯一子元素,則會被選中

###過濾選擇器-表單屬性過濾(21)

選擇器|說明|回傳|範例
-----|---|----|----
`:enable`	  |選取所有可用元素	|集合元素	|`$("#form1 :enabled")`選取`id`為`form1`的表單位所有可用元素
`:disabled`	|選取所有不可用元素(有設`disabled="disabled"`)	|集合元素	|`$("#form1 :disabled")`選取`id`為`form1`的表單位所有不可用元素
`:checked`	|選取所有被選中的元素(有設`checked='checked'`)(單選框,複選框)	|集合元素	|`$("input :checked")`選取所有被選中的`<input>`元素
`:selected`	|選取所有被選中的元素(有設`selected='selected'`)(下拉列表)	|集合元素	|`$("select :selected")`選取所有被選中的選項元素

###表單選擇器 (22)

選擇器|說明|回傳|範例
-----|---|----|----
`:input`	|選取所有`<input>``<textarea>``<select>`及`<button>`元素	|集合元素	|`$(":input")`[^1]選取所有`<input>``<textarea>``<select>`及`<button>`元素
`:text`	  |選取所有單行文字框	|集合元素	|`$(":text")`
`:password`	|選取所有密碼文字框	|集合元素	|`$(":password")`
`:radio`	|選取所有單選框	|集合元素	|`$(":radio")`
`:checkbox`	|選取所有多選框	|集合元素	|`$(":checkbox")`
`:submit`	|選取所有提交按鍵	|集合元素	|`$(":submit")`
`:image`	|選取所有圖像按鍵	|集合元素	|`$(":image")`
`:reset`	|選取所有重置按鍵	|集合元素	|`$(":reset")`
`:button`	|選取所有按鍵	|集合元素	|`$(":button")`
`:file`	  |選取所有上傳區	|集合元素	|`$(":file")`
`:hidden`	|選取所有不可見元素	|集合元素	|`$(":hidden")`

###注意事項

- `$("#form1 input")` `$("#form1 :input")`二者之間的差異
  1. 前者是選取`<input>`元素
  2. 後者是選取`<input>``<textarea>``<select>``<button>`
- `$(".test :hidden")` `$(".test:hidden")` (前者中間有空白)二者之間的差異
  1. 前者是選取`class=test`裡面的所有不可見元素(層次選擇器+表單選擇器)
  2. 後者是撰取`class=test`且不可見的元素(可見過慮器)



---
[^1]注意: $("#form1 input") $("#form1 :input")二者之間的差異!
