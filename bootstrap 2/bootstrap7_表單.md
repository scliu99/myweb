#7.表單

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>表單</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">表單</h1>

         
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>

```

###表單的一些組件

`<input>`可以用來設定各種型式的輸入欄位,像是文字格式,按鍵,單選,多選...等
以下是一個可以輸入文字欄位的例子

```html
<input type='text'>
```
[這裡](http://www.w3schools.com/html/html_form_input_types.asp)可以參考所有的input type!


###前綴與後綴
在輸入欄位的前面加入一個前?及後綴符號,例如前面是`$`符號,後面是`.00`

```html
<!-- 前綴 -->
<div class='input-prepend'>  <!-- 用div加上input-prepend class包覆 -->
	<span class='add-on'>$</span>
	<input type='text'></input>
</div>
<!-- 後綴 -->
<div class='input-append'>   <!-- 用div加上input-append class包覆 -->
	<input type='text'></input>
	<span class='add-on'>.00</span>
</div>

<!-- 混合 -->
<div class='input-prepend input-append'>
	<span class='add-on'>$</span>
	<input type='text'></input>
	<span class='add-on'>.00</span>
</div>

```

也可以將按揵與輸入欄位結合
```html
<div class='input-append'>   <!-- 用div加上input-append class包覆 -->
	<input type='text'></input>
	<button class="btn" type="button">查詢</button>
</div>

```

###單選按鍵

`input type`設為`radio`時,會將這欄位變為一個單選的型態表示,可以配合`name`屬性指定這個選項的名稱,及`value`屬性表示當選中此項後所代表的值為何
而在外層,可以用`<label>` 標簽包覆,同時給一個顯示在畫面上的選項說明
```html
<label class='radio'>
<input type='radio' name='gender' value='male'>男</label>
```

`radio`的選項特性,是在多個選項中選擇其中一項,因此我們可以多加一些選項,其中相同`name`屬性值,可以決定他們是同一個群組

```html
<label>您的性別</label>
<label class='radio'>
<input type='radio' name='gender' value='male'>男</label>
<label class='radio'>
<input type='radio' name='gender' value='female'>女</label>
<label class='radio'>
<input type='radio' name='gender' value='other'>其他</label>
```

###複選按鍵

`input type`設為`checkbox`時,會將這欄位變為一個複選的型態表示,可以配合`name`屬性指定這個選項的名稱,及`value`屬性表示當選中此項後所代表的值為何
而在外層,可以用`<label>` 標簽包覆,同時給一個顯示在畫面上的選項說明
```html
<label class='checkbox'>
<input type='checkbox' name='cms' value='wordpress'>WordPress</label>
```

`checkbox`的選項特性,是在多個選項中選擇一項或多項,因此我們可以多加一些選項,其中相同`name`屬性值,可以決定他們是同一個群組

```html
<label>你喜歡的CMS</label>
<label class='checkbox'>
<input type='checkbox' name='cms' value='wordpress'>WordPress</label>
<label class='checkbox'>
<input type='checkbox' name='cms' value='durpal'>Durpal</label>
<label class='checkbox'>
<input type='checkbox' name='cms' value='joomla'>Joomla</label>
```

如果想要其中的選項是以水平方式排列,可以在`label`中加入`inline`class

```html
<label>你喜歡的CMS</label>
<label class='checkbox inline'>
<input type='checkbox' name='cms' value='wordpress'>WordPress</label>
<label class='checkbox inline'>
<input type='checkbox' name='cms' value='durpal'>Durpal</label>
<label class='checkbox inline'>
<input type='checkbox' name='cms' value='joomla'>Joomla</label>
```

###選擇列表

選擇列表的功能與前述的單選或複選按鍵相同,只不過在畫面上是以列表的方式展示,且在語法上也大不相同!
選擇列表要以`<select>`包覆一組`<option>`的項目內容

```html
<label for='somewhere'>想去的地方</label>
<select id='somewhere'>
	<option value='Italy'>意大利</option>
	<option value='US'>美國</option>
	<option value='UK'>英國</option>
</select>
```

若是要可以複選,只要在`<select>`加入`multiple='multiple'`屬性即可

```html
<label for='somewhere'>想去的地方</label>
<select id='somewhere' multiple='multiple'>
	<option value='Italy'>意大利</option>
	<option value='US'>美國</option>
	<option value='UK'>英國</option>
</select>
```

**註:這種複選式列表較少使用,因為使用者在多選時必需配合按下`CTRL`或是`SHIFT`鍵去點選,方能達成多選的效果,使用上較不直覺!若是沒有適當的說明,使用者也不見得會知道如何使用!**


###表單的排版

初始的範例如下
```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>表單</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">表單</h1>
  
  <label for="username">用戶名</label>
  <input id="username" type="text">
  <p class="help-block">請輸入您想要註冊的用戶名</p>
  
  <label for="password">密碼</label>
  <input id="password" type="password">
  <p class="help-block">請輸入設置的密碼</p>
  
  <button type="submit" class="btn btn-primary">登錄</button>
  </form>
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>

```


bootstrap針對一個完整的表單,所提供的美化如下

```html
<form class="form-horizontal">	(1)
<fieldset>						(2)
  <legend>用戶登錄</legend>		(3)
  <div class="control-group">	(4)
	<label class="control-label" for="username">用戶名</label>  (4)
	<div class="controls">		(4)
	  <input id="username" type="text">
	  <p class="help-block">請輸入您想要註冊的用戶名</p>
	</div>
  </div>
  <div class="control-group">
	<label class="control-label" for="password">密碼</label>
	<div class="controls">
	  <input id="password" type="password">
	  <p class="help-block">請輸入設置的密碼</p>
	</div>
  </div>
</fieldset>
<div class="form-actions">		(5)
  <button type="submit" class="btn btn-primary">登錄</button>
</div>
</form>

```

1. 一份表單的最外層必需以`<form>`包覆, 並加入`form-horizontal`class
2.  `<fieldset>`可將欄位分群組
3.  `<legend>`可設定欄位群組的名稱
4.  這三個地方的設定,可以將`<label>`及欄位做對齊及同行排列
5.  提交按鍵的部份可用`<div>`包覆,並加入`form-actions`class,美化其效果