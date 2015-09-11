#11.導航路徑(breadcrumb)及分頁器

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>提示資訊</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">

<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">提示資訊</h1>
  <h4>提示</h4>
  Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula.
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>

```

###提示資訊的設定

提示資訊一般是以較醒目的文字及底色,來提醒使用者注意事項!設定很簡單,僅需加上`<div>`包覆,並加入`alert alert-block`class即有此效果!


```html
<div class="alert alert-block">
  <h1 class="page-header">提示資訊</h1>
  <h4>提示</h4>
  Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula.
</div>
```

這裡使用的`alert-block`只是其中一種,還可以使用以下class
- `alert-error`
- `alert-success`
- `alert-info`

---

###可關閉的提示訊息
提示訊息若要可關閉,必需加入一個關閉的按鍵,當然,這功能也是要引入jquery.js及bootstrap.js的程庫

```html
<div class="alert alert-block">
  <a href="#" class="close" data-dismiss="alert">x</a>    (1)
  <h1 class="page-header">提示資訊</h1>
  <h4>提示</h4>
  Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula.
</div>
```

1. 關閉按鍵要加入`close`class及`data-dismiss="alert"`的屬性即可!