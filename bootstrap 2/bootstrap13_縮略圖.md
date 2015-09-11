#13.縮略圖

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>縮略圖</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>
<body>
<div class="container">
  <h1 class="page-header">縮略圖</h1>
  <a href="#"><img src="http://placehold.it/260x180" alt=""></a>
  <a href="#"><img src="http://placehold.it/260x180" alt=""></a>
  <a href="#"><img src="http://placehold.it/260x180" alt=""></a>
  <a href="#"><img src="http://placehold.it/260x180" alt=""></a>
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>
```

###縮圖的樣式設定

縮圖一般是提供使用者查看一系列圖片的縮小圖,bootstrap提供這樣的樣式


```html
  <h1 class="page-header">縮略圖</h1>
  <ul class="thumbnails">    (1)
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>  (2)
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>
  <ul>
```
1. 對於縮圖的排列,依然可以透過`<ul>`+`<li>`達成,但這裡使用`thumbnails`class
2. 在每張圖裡必須做一些設定,以這例子來說,
  - 這有四張圖,每張圖佔3個網格,因此使用`span3`來設定
  - 在`<a>`標簽裡加入`thumbnail`class
  
**註: [http://placehold.it](http://placehold.it)是一個可以產生各種尺寸圖片的網站,可自行前往了解**

以下是更多不同尺寸圖片的例子

```html
  <h1 class="page-header">縮略圖</h1>
  <ul class="thumbnails">    (1)
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>  (2)
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>
	<li class="span6"><a class="thumbnail" href="#"><img src="http://placehold.it/520x380" alt=""></a></li>
    <li class="span6"><a class="thumbnail" href="#"><img src="http://placehold.it/520x180" alt=""></a></li>
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>
    <li class="span3"><a class="thumbnail" href="#"><img src="http://placehold.it/260x180" alt=""></a></li>
  <ul>
```

