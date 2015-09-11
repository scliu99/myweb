### 調整功能區塊,使其放大時水平排列
1. 按鍵拉大的問題,限制最大寬度: 250px;
```
.button {
    background: rgb(172, 140, 71);  /* 按鍵底色 */
    border-radius: 6px; /* 倒角 */
    max-width: 250px;
}
```

2. 放大到1050px時,水平排列

```css

@media screen and (min-width: 1050px){
    .featured-info {
        float: left;
        width: 30%;
        margin-left: 3%; /* 使其不要擠在一起 */
    }
}
```

3. landing text的寬度在放到很大時,感覺太寬,可對p加入最大寬度來限制(改完後會發現未置中)
```css

p {
    font-size: 1em;
    line-height: 1.4211em;
    margin-top: 1.4211em;
    margin-bottom: 0;
    max-width: 700px;
}

```
4. 可在之前landing的media query中加入landing p來設定置中

```css
@media screen and (min-width: 750px){
    .landing {
        text-align: center;
    }
    .landing p {
        margin-left: auto;
        margin-right: auto;
    }
}
```

5. 調整footer,使其不要與上方區塊太接近. clear: both;可以清掉前區塊的float設定,使其另起新的行

```css
footer {
    padding: 10px 0;
    clear: both;
}
```

6. menu.index中的套餐,我們不想讓這些區塊水平排列,所以再要特別處理

```css

.menu-page .featured-info {
    float: none; /* 指定不流動 */
    text-align: center; /* 並置中 */
    max-width: 400px;  /* 指定大小並置中 */
    margin-left: auto;
    margin-right: auto;
}

```