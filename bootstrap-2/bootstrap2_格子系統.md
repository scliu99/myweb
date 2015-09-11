#2.格子佈局系統

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bootstrap 佈局</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>

    <h1 class="page-header">佈局<small> 使用Bootstrap網格系統佈局網頁</small></h1>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. Maecenas facilisis tellus quis nisl facilisis eget mollis lectus feugiat. Etiam pharetra mattis ultrices. In ac mi metus, ac pharetra ipsum. Aenean imperdiet sem purus. Suspendisse quis odio eu neque varius posuere. Fusce tincidunt tincidunt arcu non viverra. Vivamus dui eros, rhoncus cursus porta quis, sollicitudin a ante. Aliquam porta euismod sollicitudin.</p>
    
    <h2 class="page-header">區塊一</h2>
    <p>consectetur adipiscing elit,Lorem ipsum dolor sit amet. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. </p>
    
    <h2 class="page-header">區塊二</h2>
    <p>Lorem ipsum dolor sit amet, quam accumsan vestibulum，consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget . </p>
    
    <h2 class="page-header">區塊三</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. </p>

<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>

```

###加入`container` class

在頁面的最外層加入`container` class,定義了像是寬度、邊界...等樣式,可以使其內部的html標簽依照bootstrap的格式排列(這是必要的做法).要注意的是,container不可再包含另一個container!

```html
<body>
	<div class='container'>
	<h1 class="page-header">佈局<small> 使用Bootstrap網格系統佈局網頁</small></h1>
    
	... 中間省略
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. </p>
	</div>
```
在加入container後,可以發現內容物均置中顯示!

> 此外:
 
> *你還可以在這裡加入bootstrap-responsive.css,並放大或縮小瀏覽器的寬度,並觀察有什麼差異!*
> 如果要使內容為佔滿瀏覽器,可改用`container-fluid` class


###加入網格class

bootstrap的網格一共分成了12格,以方便將網頁內容分佈在這12格的範圍中!
在本範例中,我們將把`區塊1`到`區塊3`改為同一行,並平均分配寬度,由於網格一共12格,故每一區塊將佔掉4格!

####首先加入代表同一行的`row` class

```html
<div class="row">
    <h2 class="page-header">區塊一</h2>
    <p>
        ...略
    </p>
      
    <h2 class="page-header">區塊二</h2>
    <p>
        ...略
    </p>
    <h2 class="page-header">區塊三</h2>
	<p>
	     ...略  
	</p>
</div>
    
```

####再來將每個區塊要佔的格數,以`span[n]`格式加入class,例如這裡的區塊要佔4格,則加入`span4`的class


```html
<div class="row">
    <div class="span4">
        <h2 class="page-header">區塊一</h2>
        <p>
            ...略
        </p>
    </div>  
    <div class="span4">
        <h2 class="page-header">區塊二</h2>
        <p>
            ...略
        </p>
    </div>
    <div class="span4">    
        <h2 class="page-header">區塊三</h2>
    	<p>
    	     ...略  
    	</p>
	</div>
</div>

```

####網格裡再分網格
如果要在一個網格裡再分網格,同樣的只要在原網格裡依照上述的架構,加入`row`class,再加入`span`class即可,不過要注意的是,在子網格裡的的span總合要等於或小於其父網格的span數

我們將區塊3的格子再加入二個子區塊,使其各佔一半的寬度

```html
<div class="span4">    
    <h2 class="page-header">區塊三</h2>
 	<p>
   	     ...略  
   	</p>
   	<div class="row">
   	    <div class="span2"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. </p> 
   	     </div>
   	    <div class="span2"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh est, sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. </p>
   	    </div>   	
   	</div>
</div

```


###流動佈局
前面例子中,所使用的`container`是固定寬度(可縮小瀏覽器後發現內容寬度並不會隨改變),如果要讓內容物會依照瀏覽器實際寬度改變,改用'container-fluid'及'row-fluid'的class

> *請自行將上述例子中的`container`改為`container-fluid`,`row`改為`row-fluid`,並縮小瀏覽器寬度觀察*

---
> 在觀察後,會發現子網格中二個`span2`的區塊,所佔的大小比例不正確,其原因是因為原本固動佈局裡的`span2`是以固定寬度來來記算,當`row`改為`row-fluid`後,`span`的寬度會改以百分比來記算大小(以父網格的寬度為基準),因此這裡的`span` 要改成`span6`使其各佔50%


###自適式(響應式)佈局設計
如果要讓網面針對不同的寬度來調整所相對應的佈局及樣式,這就稱之為自適式佈局設計(Responsive Web Design, 簡稱RWD)!例如,當一個網頁在一般大畫面(桌上型電腦)瀏覽器中,會以最大化的佈局設計. 當相同網頁是以手機或平板裝置來瀏覽時,就會改以較小的佈局設計來展示頁面!而這樣的設計完全可以透過網頁中的`@media`指令來達成!

以下是一段`@media`的寫法格式,所代表的意思是,當畫面寬度在小於767px的時侯,會套用"樣式定義1"裡的內容

```css
@media (max-width: 767px) { // 樣式定義1 }
```

可以執行以下這個範例,並改變瀏覽寬度觀察

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Queries</title>
    <style>
        body{background:#000}  /* 這個樣式適用在所有情形下 */
        @media (max-width:767px) {body{background:#f00}} /* 在畫面小於767px時所套用的樣式 */
    </style>
</head>
<body>
</body>
</html>
```

> 以上例子中,可以再改變`@media`為`min-width`,並再觀察其結果!

`@media`可以組合其條件,例如:

```css
@media (mix-width:767px) and (max-width:979px) {body{background:#f00}} /* 在畫面大於767px且小於979px時套用其樣式 */
```


###在bootstrap中套用RWD
bootstrap己經俱備了RWD的功能,只要將bootstrap套件中的`bootstrap-responsive.css`檔案連結進來即可

```html
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>佈局</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/bootstrap-responsive.css" rel="stylesheet">
...以下略

```

在加入這個樣式檔後,可以再放大/縮小瀏覽器,並觀察畫面中各區塊的變化

*註:這裡的範例請使用`container`及`row`class來觀察*


###針對RWD的一些class樣式

我們可以指定某些區塊,在某些裝置上可以"顯示"(visible)或是"隱藏"(hidden),而這些裝指分別為`phone`(手機),`tablet`(平板)及`desktop`(桌上電腦).因此有以下六種class樣式可用

```
.visible-phone
.visible-tablet
.visible-desktop
.hidden-phone
.hidden-tablet
.hidden-desktop
```

以下是範例

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>回應式佈局的實用類</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
<link href="../bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">回應式佈局的實用類<small> 使用Bootstrap網格系統佈局網頁</small></h1>
  <div class="row">
    <div class="page-header clearfix">
      <div class="span4"><img src="images/phone.png" alt="智能手機"></div>
      <div class="span4 hidden-phone"><img src="images/tablet.png" alt="平板電腦"></div>
      <div class="span4 visible-desktop"><img src="images/desktop.png" alt="桌面電腦"></div>
    </div>
  </div>
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>

```

*註:這範例可利用chrome瀏覽器中的開發模式中,選擇不同的Device來模擬各種不同的設備*
