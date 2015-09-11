### 調整圖片
1. 大約在600px及1050px時圖片要做二段放大調整
```

@media screen and (min-width: 600px) {
    .gallery {
        width: 446px;  /* 限制二張圖的寬 */
        margin-left: auto; /* 置中 */
        margin-right: auto;
    }
    .gallery img {
        max-width: 220px; 
    }
}

@media screen and (min-width: 1050px) {
    .gallery {
        width: 567px;  /* 限制二張圖的寬 */
        margin-left: auto; /* 置中 */
        margin-right: auto;
    }
    .gallery img {
        max-width: 280px; 
    }
}


```