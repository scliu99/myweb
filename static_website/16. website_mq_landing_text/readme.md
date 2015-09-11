### 調整字的大小
1. 調整整體字的大小,畫面大時,加大字體

```css
@media screen and (min-width: 750px){
    body {
        font-size: 1.4em; /* 750px時放大1.4倍 */
    }
}

```

2. 調整各頁主文字區(landing)的排列,750px時置中
    - index.html 在The Blue Leopard的div tag, 加入class="landing"
    - menu.html 在Menu的div tag, 加入class="landing"
    - location.html 在Location & Hours的div tag, 加入class="landing"
    
3. landing的css如下

```css

@media screen and (min-width: 750px){
    .landing {
        text-align: center;
    }
}

```