### 調整menu.index中的STARTERS, ENTRESS, FOR THE TABLE三區塊
1. 加入class="featured-info" 使其有相同的效果

### 由於featured-info不只被homepage使用,可以將其移入global樣式區中

### 在menu.index的body中加入class="menu-page",使其可以只為該頁調整樣式

```css
.menu-page .featured-info ul {
    font-style: italic;
}
```
如此即可以.featured-info class來指定menu-page調整樣式

### 調整圖片,使其不會與前一區塊文字靠太近
1. 在四張圖的外層div加入class="gallery"
2. css 加入

```css
.gallery {
    margin-top: 30px;
}
```

