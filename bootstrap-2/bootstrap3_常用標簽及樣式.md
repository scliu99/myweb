#3.常用標簽及樣式

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
    <h1 class="page-header">CSS<small> 常用的 CSS</small></h1>
    <p> cms, Lorem ipsum dolor sit amet, 重要的文字 , consectetur adipiscing elit. Nulla nibh est, 使用斜體強調的文字,  sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. Maecenas facilisis tellus quis nisl facilisis eget mollis lectus feugiat.</p>
</div>
<script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
<script src="../bootstrap/js/bootstrap.js"></script>
</body>
</html>

```

###常用排版標簽


- `<p>`表示一段文章(paragraph)
- `<strong>`可以加粗文件
- `<em>`以斜體字強調文字(**在中文上不推薦使用**)
- `<abbr title="full name">abbr</abbr>`用來表達一個縮寫字,在title中是縮寫的全名,可在滑鼠游標移到本文字上時,顯示其全名. 此外,可以加入`.initialism`class將其縮寫變為全大寫!

以下為一段範例

```html
<p> <abbr class="initialism" title="Content Management System">cms, Lorem ipsum dolor sit amet, <strong>重要的文字</strong> , consectetur adipiscing elit. Nulla nibh est, <em>使用斜體強調的文字</em>,  sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. Maecenas facilisis tellus quis nisl facilisis eget mollis lectus feugiat.</p>
```

- `<blockquote>`表達一段"引言"的文字
- `<small>`可將字體縮小
- `<cite>`表達引用來源


範例如下

```html
<blockquote><p> sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. Maecenas facilisis tellus quis nisl facilisis eget mollis lectus feugiat.</p>
<small>來自<cite>台北商業大學</cite></small>
</blockquote>
```

- `.pull-right`class 可將文字向右對齊

範例如下

```html
<blockquote class="pull-right"><p> sagittis sit amet consectetur a, rhoncus dignissim ligula. Curabitur at neque eget quam accumsan vestibulum. Maecenas facilisis tellus quis nisl facilisis eget mollis lectus feugiat.</p>
<small>來自<cite>台北商業大學</cite></small>
</blockquote>
```