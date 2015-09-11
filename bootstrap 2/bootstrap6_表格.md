#6.表格

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>表格</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
<h1 class="page-header">表格 <small>&lt;table&gt;</small></h1>
<h2>預設的表格</h2>
 <table>
  <thead>
    <tr>
      <th>#</th>
      <th>下載量</th>
      <th>圖書出版</th>
      <th>外鏈數</th>
    </tr>
  </thead>
  <tr>
    <td>Wordpress</td>
    <td>644,880</td>
    <td>83</td>
    <td>26,900</td>
  </tr>
  <tr>
    <td>Joomla</td>
    <td>86,547</td>
    <td>64</td>
    <td>45,600</td>
  </tr>
  <tr>
    <td>Drupal</td>
    <td>22,836</td>
    <td>65</td>
    <td>37,100</td>
  </tr>
</table>

<h2>條紋表格</h2>
 <table>
  <thead>
    <tr>
      <th>#</th>
      <th>下載量</th>
      <th>圖書出版</th>
      <th>外鏈數</th>
    </tr>
  </thead>
  <tr>
    <td>Wordpress</td>
    <td>644,880</td>
    <td>83</td>
    <td>26,900</td>
  </tr>
  <tr>
    <td>Joomla</td>
    <td>86,547</td>
    <td>64</td>
    <td>45,600</td>
  </tr>
  <tr>
    <td>Drupal</td>
    <td>22,836</td>
    <td>65</td>
    <td>37,100</td>
  </tr>
</table>

<h2>帶邊框的表格</h2>
 <table>
  <thead>
    <tr>
      <th>#</th>
      <th>下載量</th>
      <th>圖書出版</th>
      <th>外鏈數</th>
    </tr>
  </thead>
  <tr>
    <td>Wordpress</td>
    <td>644,880</td>
    <td>83</td>
    <td>26,900</td>
  </tr>
  <tr>
    <td>Joomla</td>
    <td>86,547</td>
    <td>64</td>
    <td>45,600</td>
  </tr>
  <tr>
    <td>Drupal</td>
    <td>22,836</td>
    <td>65</td>
    <td>37,100</td>
  </tr>
</table>

<h2>壓縮表格</h2>
 <table>
  <thead>
    <tr>
      <th>#</th>
      <th>下載量</th>
      <th>圖書出版</th>
      <th>外鏈數</th>
    </tr>
  </thead>
  <tr>
    <td>Wordpress</td>
    <td>644,880</td>
    <td>83</td>
    <td>26,900</td>
  </tr>
  <tr>
    <td>Joomla</td>
    <td>86,547</td>
    <td>64</td>
    <td>45,600</td>
  </tr>
  <tr>
    <td>Drupal</td>
    <td>22,836</td>
    <td>65</td>
    <td>37,100</td>
  </tr>
</table>
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>
```

###表格的基本結構

以下是一個最基本的表格結構

```html
 <table>	<!-- 表格最外層的宣告 -->
  <thead>   <!-- 表頭的部份 -->
    <tr>	<!-- 行的宣告 -->
      <th>...</th>   <!-- 表頭欄的內容 -->
      <th>...</th>   
    </tr>
  </thead>
  <tbody>	<!-- 表身的部份,可省略 -->
    <tr>	<!-- 行的宣告 -->
      <td>...</td>	<!-- 表身欄的內容 -->
      <td>...</td>
    </tr>
  </tbody>
</table>

```

###bootstrap針對表格的美化

先將`<table>`加入`table`class,即會得到一個預設美化過的表格

```html
<h2>預設的表格</h2>
  <table class='table'>
  ...
```

可再加入`table-striped`,可使表格有帶條紋的效果

```html
<h2>條紋表格</h2>
  <table class='table table-striped'>
  ...
```

可加入`table-bordered`,使表格帶邊框(預設表格是沒有邊框的!)

```html
<h2>帶邊框的表格</h2>
  <table class='table table-striped'>
  ...
```

可加入`table-condensed`,使表格內容排的更加緊密,達到縮小表格的效果!

```html
<h2>壓縮表格</h2>
  <table class='table table-condensed'>
```

**註:以上所有效果可以一起搭配使用**