### 調整導航欄,以手機瀏覽設計為主

1. nav tag 加入class="main-navigation"

```css
.main-navigation ul {
    padding-left: 0;
}

.main-navigation li {
    list-style: none; /* 移除前面的點 */
    text-align: center; /* 使文字置中 */
    margin: 20px 0;
}

.main-navigation a {
    display: block;  /* 改為block,使其佔一整行 */
    padding: 15px 10px;
    text-decoration: none; /* 移除底線 */
    text-transform: uppercase; /* 全大寫 */
    background: rgba(67, 67, 67, 0.17); /* 降底透明度,強化反差 */
    color: rgb(180, 180, 180);
}
    
    .main-navigation a:visited {
        color: rgb(106, 106, 106);
    }

    .main-navigation a:hover {
        color: rgb(255, 255, 255);
        font-size: 1.05em;
        transition: .5s font-size, .5s color;   /* 動畫改變,長度2秒, 改變屬性為顏色及字型大小*/
    }

    .main-navigation a:active {
        color: rgb(172, 140, 71);
    }
```