### Response Web Design

1. 瀏覽器拉寬後,nav的按鍵寬度變的太大,不好看
2. 使用media queries來製作不同畫面大小的樣式表
3. media query的語法如下:

```css
@media screen and (min-width: 600px) {
    #heading {
        font-size:3em;
    }
}
```
    - 參考說明:http://www.w3schools.com/css/css_rwd_mediaqueries.asp
    - @media screen: 使用那一種媒體,這裡選的是screen,即針對螢幕. 
    - (min-width: 600px): 條件,也就是符合此條件的情形下,會用其內容的樣式! 
    - 完整的media rule說明: http://www.w3schools.com/cssref/css3_pr_mediaquery.asp

4. 以750px寬為第一分界,試著加入以下media query,並調整大小及觀查(完成後即可移除)

```css
@media screen and (min-width: 750px) {
    .main-navigation a:visited {
        color: red;
    }

}
```

5. 正式設計導航欄,加入以下CSS,並觀查

```css
@media screen and (min-width: 750px) {
    ---3.
    .main-navigation {
        min-height: 100px; 
        border-top: 1px solid rgb(36, 36, 36);
        border-bottom: 1px solid rgb(36, 36, 36);
    }
    ---2. 
    .main-navigation ul {
        max-width: 950px;
        margin: 0 auto;
    }
    ---1.
    .main-navigation li {
        float: left; /* 靠左流動 */
        margin-left: 20px;
        width: 28%;
    }
    ----4.
    .main-navigation a {
        background: none;
    }
        .main-navigation a:hover{
            background: none;
        }
}/* media query */

---5. 這個主要是調整當放大到大約880px時,MENU不會置中而做的修正
@media screen and (min-width: 880px){

     .main-navigation ul {
        position: relative;
         right: -30px;
    }
    
}/* media query */

```

