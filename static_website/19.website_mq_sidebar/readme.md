### 整調location的二個文字區塊,成為sidebar

1. 為了要能指定location頁面調整,在該頁的body tag中加入class="localtion-page"

```html
<body class="location-page">
```

2. 為了能指定調整aside,在aside tag加入class="sidebar"
```html
<aside class="sidebar">
```

3. 放大到1050px時,將sidebar放到右邊去

```
@media screen and (min-width: 1050px) {
    .location-page .featured-info {
        float: none;
        width: 100%;
    }
    .location-page .landing {
        float: left;
        /* text-align: left; */
        width: 56%;
    }
    .location-page .sidebar {
        float: right;
        width: 30%;
    }
    
}

```