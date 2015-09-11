#8.按鍵群組

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>按鍵</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">按鍵 <small>按鍵的基本樣式</small></h1>
  
  <div style="margin-bottom:15px"> 
  	<a href="#"> 查看評論</a>
  </div>
  
  <div style="margin-bottom:15px">
    <button type="submit">結帳</button>
  </div>
  
  <div style="margin-bottom:15px">
    <input type="button" value="設置">
  </div>
  
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>


```

###按鍵的基本設定

在`<button>`的標簽裡加入`btn`class,即可得到一個基本的按鍵樣式

```html
<button class='btn'>右對齊</button>
<button class='btn'>置中</button>
<button class='btn'>左對齊</button>
```

將這些按鍵群組,只要用`<div>`包覆,並加入`btn-group`class

```html
<div class='btn-group'>
	<button class='btn'>右對齊</button>
	<button class='btn'>置中</button>
	<button class='btn'>左對齊</button>
</div>
```

將不同群組結合成一排工具列
```html
<div class='btn-toolbar'>
	<div class='btn-group'>
		<button class='btn'>右對齊</button>
		<button class='btn'>置中</button>
		<button class='btn'>左對齊</button>
	</div>
	<div class='btn-group'>
		<button class='btn'>粗體</button>
		<button class='btn'>斜體</button>
		<button class='btn'>底線</button>
	</div>
</div>
```

###在工具列裡加入下拉式選單
這個功能可以在上述的工具列中,加入一個下拉式的選單
**注意: 這功能必需引入`jquery.js`及`bootstrap.js`二個程式庫方能正常執行**

```html
<div class="btn-toolbar">
	<div class="btn-group">
		<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">字體 <span class="caret"></span></a>	(1)
		<ul class="dropdown-menu">				(2)
			<li><a href="#">黑體</a></li>		(2)
			<li><a href="#">宋體</a></li>
			<li><a href="#">仿宋</a></li>

		</ul>
	</div>
	<div class="btn-group">
		<a class="btn" href="#">字體</a>			(3)
		<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
		<ul class="dropdown-menu">
			<li><a href="#">黑體</a></li>
			<li><a href="#">宋體</a></li>
			<li><a href="#">仿宋</a></li>
		</ul>
	</div>
</div>  

```

1. 使用`<a>`來定義下拉選單顯示的標題,這裡要加入`dropdown-toggle`class,並加入`data-toggle='dropdown'`的屬性設定! 此外,為了讓這個標題有更好的辦識,可以在文字後加入`<span>`並加入`caret`class,來顯示一個向下的三角型
2. 下拉選單必需以`<ul>`及`<li>`標簽來包覆下拉後可選的項目

3. 這裡的做法是將下拉選單的標題與三角型符號,分離成二個獨立的按鍵,僅在按下三角型的按鍵時才會打開下拉選單(因為三角型裡有設定`data-toggle`的屬性)