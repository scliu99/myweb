#9.導航選單

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>導航</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">

<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>
<body>
<div class="container">
  <h1 class="page-header">導航</h1>
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>
```

###導航選單的設定

導航選單一般是一個網站的最主要的選單項目,會置放在上方,以下是一個導般選單的基本設定

```html
<div class="navbar">				(1)
  	<div class="navbar-inner">		(1)
    	<div class="container">		(2)
			<ul class="nav">		(3)
				<li class="active"><a href="#">首頁</a></li>		(4)
				<li><a href="#">項目一</a></li>
				<li><a href="#">項目二</a></li>
			</ul>
        </div>
    </div>
</div>
```

1. 包覆二層`<div>`,外層宣告一個導航選單主體,第二層宣告導航條的內容
2. 選單裡的項目先用一層`<div>`加`container`class包覆
3. 項目內容依然是以`<ul>`+`<li>`
4. 可以加入一個`active`的class,使其項目會加深,表示是目前做用中的選項

---

導航選單中,可以設定多組的項目內容

```html
<div class="navbar">				
  	<div class="navbar-inner">		
    	<div class="container">		
			<ul class="nav">		
				<li class="active"><a href="#">首頁</a></li>		
				<li><a href="#">項目一</a></li>
				<li><a href="#">項目二</a></li>
			</ul>
			<ul class="nav pull-right">		(1)
				<li><a href="#">登入</a></li>		
				<li class='divider-vertical'></li>  (2)
				<li><a href="#">註冊</a></li>
			</ul>
        </div>
    </div>
</div>
```
1. 第二組導航選項,並且加入`pull-right`class使其靠向對齊
2. 這是一條垂直分隔線

---

導航條裡還可再加入一些設定,如下

```html
<div class="navbar navbar-fixed-top">	(1)
  	<div class="navbar-inner">
    	<div class="container">
        <a class="brand" href="#">Bootstrap</a>   (2)
        <ul class="nav">
        	<li class="active"><a href="#">首頁</a></li>
            <li><a href="#">項目一</a></li>
            <li><a href="#">項目二</a></li>
        </ul>
        <form class="navbar-search">	(3)
        	<input type="text" class="search-query">
        </form>
        <ul class="nav pull-right">
        	<li><a href="#">登錄</a></li>
            <li class="divider-vertical"></li>
            <li><a href="#">註冊</a></li>
        </ul>
        </div>
    </div>  
</div>
```

1. 如果要將導航選單固定在最上方(不會因為網頁向下搖動而消失),可以加入`navbar-fixed-top`class
2. 利用`brand`class來表示一個網站標示(品牌)
3. 利用`<form>`及`navbar-search`class來加入一個查詢輸入框的功能


###配合響應式網頁設計


```html
<div class="navbar">	
  	<div class="navbar-inner">
    	<div class="container">
			<a href="#" class="btn btn-navbar" data-toggle="collapse"   
			   data-target=".nav-collapse">		(1)
				<span class="icon-bar"></span>  (2)
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</a>
			<a class="brand" href="#">Bootstrap</a>   
			<div class="nav-collapse">			(3)
				<ul class="nav">
					<li class="active"><a href="#">首頁</a></li>
					<li><a href="#">項目一</a></li>
					<li><a href="#">項目二</a></li>
				</ul>
				<form class="navbar-search">	
					<input type="text" class="search-query">
				</form>
				<ul class="nav pull-right">
					<li><a href="#">登錄</a></li>
					<li class="divider-vertical"></li>
					<li><a href="#">註冊</a></li>
				</ul>
			</div>
		</div>
    </div>  
</div>
```

1. 這段`<a>`標簽中,主要是讓這導航條在畫面寬度過小時,可以出現一個下拉按鍵,來顯示導航選單的項目,同時要利用`data-target`的設定,參考到`nav-collapse`class的`<div>`標簽上!(3)
2. 這三個`<span>`的作用是顯示三條線
3. 這個`<div>`所包覆的內容,會在畫面變小時隱藏起來,並在導航按鍵(1)按下時,顯示出來