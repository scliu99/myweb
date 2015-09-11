#11.導航路徑(breadcrumb)及分頁器

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>導航路徑與分頁器</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">

<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">導航路徑與分頁器</h1>
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>
```

###導航路徑的設定

導航路徑的作用是用來顯示目前的網頁的上下層相對位置. 導航路徑也稱之為"麵包屑"


```html
<div class="container">		
	<h1 class="page-header">導航路徑與分頁器</h1>
	<ul class="breadcrumb">		(1)
		<li><a href="#">首頁</a><span class="divider">/</span></li>	(2)	
		<li class="active">產品列表</li>
	</ul>
</div>

```

1. 與導行條不同的是,這裡改用`breadcrumb`class
2. 這裡的`<span>`是一個分隔符號

---

###分頁器的設定

分頁器一般是用在當資料超過一頁時,可以提供使用者切換到指定的資料頁上

```html
<div class="container">		
	<h1 class="page-header">導航路徑與分頁器</h1>
	<ul class="breadcrumb">		
		<li><a href="#">首頁</a><span class="divider">/</span></li>	
		<li class="active">產品列表</li>
	</ul>
	<div class="pagination">	(1)
		<ul>
			<li><a href="#">1</a></li>
			<li class="active"><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
			<li><a href="#">5</a></li>
		</ul>
    </div>
</div>
```

1. 這裡只要使用`pagination`class就能達成將`<li>`項目設為分頁器的效果. 此外,這裡還可以再加入`pagination-centered`或`pagination-right`來設定分頁器為置中排列或是靠右排列!

---

####簡單型的分頁器
分頁器的設計,還有另一種常用的簡單型分頁器,它只有"前一頁"及"後一頁"二個按鍵

```html
<ul class="pager">
	<li class="previous"><a href="#">前一頁</a></li>
	<li class="next"><a href="#">後一頁</a></li>
</ul>
```
