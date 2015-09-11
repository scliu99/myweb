### 調整h1, h2, h3的字體的粗細為一般,使其看起來較美觀

```css
h1,h2,h3{
    font-family: "double-pica-sc", "alegreya sc", Garamond, "Baskerville Old Face", "Times New Roman", serif;
    font-weight: normal;
}
```

### h1 改為金色

```css
h1 {
    font-size: 3.3684em;
    line-height: 1.2656em;
    margin-top: 0.4219em;
    margin-bottom: 0;
    color: rgb(172, 140, 71);
}
```

### 調整MENU, LOCATION, ENTERTAINMENT三個區塊的樣式

1. 在index.html此三個div tag加入class="featured-info"

```css    
.featured-info h3 {
    border-bottom: 1px solid rgb(128, 128, 128);  /* 加入底線 */
}

.featured-info p {
    font-style: italic;
}

.featured-info ul {
    list-style: none;
    padding-left: 0;
}

```

### 將以上三區塊的a tag,改成button樣式

1. 在三區的a tag外的p tag加入class="button"

```css
.button {
    background: rgb(172, 140, 71);  /* 按鍵底色 */
    border-radius: 6px; /* 倒角 */
}

.button a {
    color: rgb(226, 226, 226);
    display: block;
    text-decoration: none;
    text-align: center;  /* 置中 */
    font-style: normal;  /* 不用斜體字 */
    text-transform: uppercase; /* 全大寫 */
    padding: 10px 0;        /* 增加上下的內間 */
    
}

.button a:hover {
    background: rgb(119, 97, 48);  /* 按鍵底色 */
    border-radius: 6px; /* 倒角 */
    
}
```