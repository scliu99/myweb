#10.頁籤

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>頁籤</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">

<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">頁籤</h1>
  

</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>
```

###頁籤的設定

頁籤的設定與導航的設定相當類似,也是透過`<ul>`+`<li>`來設定項目內容
```html
<div class="container">		
	<h1 class="page-header">頁籤</h1>
	<ul class="nav nav-tabs">		(1)
		<li class="active"><a href="#">Wordpress</a></li>		
		<li><a href="#">Drupal</a></li>
		<li><a href="#">Joomla</a></li>
	</ul>
</div>

```

1. 與導行條不同的是,這裡改用`nav-tabs`class

---

頁籤預設是橫向排列,若要直向排列,只要在上述(1)處,再加入`nav-stacked`class即可

```html
<div class="container">	
	<h1 class="page-header">頁籤</h1>
	<ul class="nav nav-tabs nav-stacked">		
		<li class="active"><a href="#">Wordpress</a></li>		
		<li><a href="#">Drupal</a></li>
		<li><a href="#">Joomla</a></li>
	</ul>
</div>
```
---

頁籤可以改用pills的樣式

```html
<div class="container">
	<h1 class="page-header">頁籤</h1>
	<ul class="nav nav-pills">
		<li class="active"><a href="#">Wordpress</a></li>
		<li><a href="#">Drupal</a></li>
		<li><a href="#">Joomla</a></li>
	</ul>
</div>
```

####頁籤對應的內容
頁籤在點選後,可以切換顯示所對應的內容,以下是個完整的基本範例
**注意:這個功能需要引入jquery.js及boostrap.js二個程式庫**
```html
<div class="container">
	<h1 class="page-header">頁籤</h1>
	<ul class="nav nav-tabs">
		<li class="active"><a href="tab1" data-toggle="tab">Wordpress</a></li> (3)
		<li><a href="tab2" data-toggle="tab">Drupal</a></li>
		<li><a href="tab3" data-toggle="tab">Joomla</a></li>
	</ul>
	<div class="tab-content">  (1)
		<div class="tab-pane active" id="tab1"><p>Wordpress, 優雅的CMS</p></div>  (2)
		<div class="tab-pane" id="tab2"><p>Drupal, 靈活強大的CMS</p></div>
		<div class="tab-pane" id="tab3"><p>Joomla, 簡單易用的CMS</p></div>		
	</div>
</div>
```

1. 頁籤內容的包覆`<div>`標籤,要加任`tab-content`class
2. 每一個頁籤所對應的內容,要加入`tab-pane`class,及`id`屬性,若為作用中的內容,同時也要再加入`active`class
3. 這裡的`href`要指定到上述的`id`屬性.此外,還要再加入`data-toggle="tab"`的屬性設定

---

####改變頁籤的排列位置(方向)
頁籤除了預設的"頁籤在上內容在下"的排法之外,bootstrap還提供了另外三種

- `tabbable tabs-left` 頁籤在左
- `tabbable tabs-right` 頁籤在右
- `tabbable tabs-below` 頁籤在下,若使用這種方式,要將頁籤的html放在內容之下

```html
<div class="container">
	<h1 class="page-header">頁籤</h1>
	<div class="tabbable tabs-left">
		<ul class="nav nav-tabs">
			<li class="active"><a href="tab1" data-toggle="tab">Wordpress</a></li> (3)
			<li><a href="tab2" data-toggle="tab">Drupal</a></li>
			<li><a href="tab3" data-toggle="tab">Joomla</a></li>
		</ul>
		<div class="tab-content">  (1)
			<div class="tab-pane active" id="tab1"><p>Wordpress, 優雅的CMS</p></div>  (2)
			<div class="tab-pane" id="tab2"><p>Drupal, 靈活強大的CMS</p></div>
			<div class="tab-pane" id="tab3"><p>Joomla, 簡單易用的CMS</p></div>		
		</div>
	</div>
</div>
```
