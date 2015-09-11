### 為加入背景圖做準備

1. 將body中的字的顏色改為白(背景圖為一暗色系的圖片)
2. 為使文字可讀,將背景底色設為黑色(非背景圖)
3. 加入背景圖
4. 不要使背景重複(no-repeat)
5. 由於背景圖片不見得能完整覆蓋整個頁面,可設背景大小為cover

### 加入一個div來包覆頁面內容,使其內容與背景整頁可以有所區隔

1. 將三個html檔 `<div>` 包覆內容,並設定`class`為container (這名字是大家習慣用語)
2. container css

```
.container {
    background: rgb(15, 15, 15); /* IE8 */
    background: rgba(15, 15, 15, 0.74);
    padding: 30px; /* 使其內容內縮 */
}
```
並在body {} 加入padding: 3%; 使其container內縮