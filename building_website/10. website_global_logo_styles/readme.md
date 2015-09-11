### Logo圖片大小並不很適當,使其大小適中,並置中放置

1. 將logo圖片的a tag加入class="logo" (三個檔)
2. .logo css 設block, 改固定大小, 置中

```css
.logo {
    /* 以下三個設定為置中的設法 */
    display: block; /* 原為inline */
    margin: 0 auto; /* 左右為auto,會使圖置中 */
    width: 150px;   /* 但圖也要設為150px */
}

    .logo img {
        width: 150px;
    }

```
