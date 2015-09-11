#5.程式碼區塊

@(104-1.網站程式設計)[bootstrap]

###初始範例如下:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>代碼</title>
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet">


<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div class="container">
  <h1 class="page-header">程式碼<small> &lt;code&gt; 與 &lt;pre&gt; 標籤的使用</small></h1>
  
  <p>為<h1>標籤添加一個.page-header，可以為內容添加合適的邊距，並且在下方顯示一條灰色的邊線。</p>  
  
</div>

<!--
<div class="container">
  <div class="row">
    <div class="span8"> ... </div>
    <div class="span4"> ... </div>
  </div>
</div>
-->

  
  <script src="../bootstrap/js/jquery-1.7.2.min.js"></script> 
  <script src="../bootstrap/js/bootstrap.js"></script>
</p> 

</body>
</html>
```

###特殊符號轉換

在下面這段範例中,我們想將`<h1>`的內容顯示出來,由於這字串中含有與html標簽相同的符號,因此會顯示不出來

```html
<p>為<h1>標籤添加一個.page-header，可以為內容添加合適的邊距，並且在下方顯示一條灰色的邊線。</p>  
```

因此我們必須將這類的符號先做轉換,這稱之為:html encode,以下列表是常用的轉換字元

字符 |轉換碼     |字符 |轉換碼     
----|----------|-----|-----
`<` | `&lt;`   |`空白`| `&nbsp;`
`>` | `&gt;`   |`"`  | `&quot;`
`&` | `&amp;`  |     |

因此,轉換後的結果如下:
```html
<p>為&lt;h1&gt;標籤添加一個.page-header，可以為內容添加合適的邊距，並且在下方顯示一條灰色的邊線。</p>  
```

###程式碼片段`<code>`
若我們要再強調`<h1>`是程式碼片段,可以加入`<code>`標簽

```html
<p>為<code>&lt;h1&gt;</code>標籤添加一個<code>.page-header</code>，可以為內容添加合適的邊距，並且在下方顯示一條灰色的邊線。</p>  
```

###整段輸出`<pre>`
由於在html裡會忽略對空白及換行等排列,如果想要完整的輸出一段內容並保留其排列,即可以用`<pre>` (注意,即使用`<pre>`其內容還是要做轉碼)

```html
<pre>
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;span8&quot;&gt; ... &lt;/div&gt;
    &lt;div class=&quot;span4&quot;&gt; ... &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
```
若是要強調程式碼樣式,可以配合`<code>`

```html
<pre><code>
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;span8&quot;&gt; ... &lt;/div&gt;
    &lt;div class=&quot;span4&quot;&gt; ... &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
```

###加強美化程式碼區塊(非bootstrap的功能)

google提供了一套程式庫,稱之為[Javascript code prettifier](https://github.com/google/code-prettify), 只要將這套程式庫引入,即可讓程式碼區塊更美觀! 加入程式庫的方式如下:

```html
<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
```

同時,在`<pre>`中加入`prettyprint`class,即可加以美化! 另外,還可以再加入`linenums`使其顯示行號!

```html
<pre class="prettyprint linenums">
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;span8&quot;&gt; ... &lt;/div&gt;
    &lt;div class=&quot;span4&quot;&gt; ... &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
```