#4.列表

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>常用的 CSS</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">列表<small> 無序列表，有序列表，描述列表</small></h1>
  <h2>無序列表</h2>
  
  Drupal
  Joomla
  Wordpress
  
  <h2>有序列表</h2>
 
  Drupal
  Joomla
  Wordpress
  
  <h2>描述列表</h2>
  
  Drupal
  強大而靈活的CMF
  Joomla
  簡單易用的CMS
  Wordpress
  優雅的內容發佈應用

</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>
```

###列表標簽
列表標簽有以下三種
1. 無序列表: 列表中的項目沒有固定順序
2. 有序列表
3. 描述列表

####無序列表: `<ul>`+`<li>`

```html
<h2>無序列表</h2>
<ul>
	<li>Drupal</li>
	<li>Joomla</li>
	<li>Wordpress</li>
<ul>
```

####有序列表:`<ol>`+`<li>`

```html
<h2>有序列表</h2>
<ol> 
  <li>Drupal</li>
  <li>Joomla</li>
  <li>Wordpress</li>
</ol>
```

####描述列表:`<dl>`+`<dt>`+`<dd>`

```html
<h2>描述列表</h2>
<dl> 
  <dt>Drupal</dt>
  <dd>強大而靈活的CMF</dd>
  <dt>Joomla</dt>
  <dd>簡單易用的CMS</dd>
  <dt>Wordpress</dt>
  <dd>優雅的內容發佈應用</dd>
</dl>  
```

如果想將`<dl>`裡的項目水平排列,可以加入`dl-horizontal`class

```html
<h2>描述列表</h2>
<dl class='dl-horizontal'> 
  <dt>Drupal</dt>
  <dd>強大而靈活的CMF</dd>
  <dt>Joomla</dt>
  <dd>簡單易用的CMS</dd>
  <dt>Wordpress</dt>
  <dd>優雅的內容發佈應用</dd>
</dl>  
```