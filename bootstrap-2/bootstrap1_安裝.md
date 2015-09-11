#1.Bootstrap 2

@(104-1.網站程式設計)[bootstrap]

###下載
官方網站連結: [http://getbootstrap.com/2.3.2/getting-started.html](http://getbootstrap.com/2.3.2/getting-started.html) 點選`Download Bootstrap`即可下載所需要的檔案

中文翻譯網站: [https://kkbruce.tw/bs2/GettingStarted](https://kkbruce.tw/bs2/GettingStarted)

此外,如果不想下載安裝檔案,亦可在網頁中直接連結CDN


```
https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap-responsive.css

https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap-responsive.min.css

https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap.css

https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap.min.css

https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/img/glyphicons-halflings-white.png

https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/img/glyphicons-halflings.png

https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.js

https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.min.js

```

官網上還提供更多的安裝方式,可[自行前往] (http://getbootstrap.com/getting-started/)了解!

*注意: bootstrap的外掛,會依賴於jQuery程式庫,因此在使用此亦需將jQuery引入方可正常工作!jQuery版本建議使用1.11.3版.*


##Bootstrap的檔案結構
在下載[預編譯](https://github.com/twbs/bootstrap/releases/download/v3.3.5/bootstrap-3.3.5-dist.zip)的版本(絕大多數的情形下都會使用這版本)並解開後,其檔案資料結構如下

```
  bootstrap/
  ├── css/
  │   ├── bootstrap.css
  │   ├── bootstrap.min.css
  ├── js/
  │   ├── bootstrap.js
  │   ├── bootstrap.min.js
  └── img/
      ├── glyphicons-halflings.png
      └── glyphicons-halflings-white.png
```

*其中.在開發時可使用不帶.min的檔案,而.min為加壓版本,可在上線後使用!*

##參考樣版
官方提供了一份最小化的樣本供參考,可以用這份樣本開始編輯:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bootstrap 101 Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```
