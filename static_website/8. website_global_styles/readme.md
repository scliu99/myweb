### 加入全域樣式(2.15)

全域樣式:
1. img width 100%
2. 使link顏色為金色(color guide)

```css

a:link {
    color: rgb(172, 140, 71);
}

a:visited {
    color: rgb(129, 105, 54);
}

a:hover {
    color: rgb(224, 182, 90);
}

a:active {
    color: rgb(252, 217, 142);
}
```

3. footer樣式

```css

footer {
    padding: 10px 0;
}

    footer h4 {
        text-transform: uppercase;
    }

    footer p {
        margin: 0;
    }
    
```    

### 注意樣式加入的順序(normalize.css 及 main.css)
    - 試改h1 font size,並不會生效尤(若順序相反) 
    - 相同設定,後者較優先
    - 若加`!important`會提高優先度(在實務上,除非有特別理由,不然是不建議使用)

### CSS繼承 inherit
    - 內層會繼承外層的屬性

### id and class selector
    - id selector: #idname (唯一)
    - class selector: .classname (多個)

### 規則: 那一個選擇器會贏
    由低到高:
    Universal selector: *
    Type selector: p, h1, a, ul
    Class selector: .container
    Attribute selector: input[type="text"]
    Pseudo-class: :focus :hover
    ID selector: #header
    inline styles: <p style="...">
    
### 複雜規則
    #hero .landing nth-of-type(2) h1        0121
    #home-page #landing div:first-child     0211 

     0         1        2           1        
     0         2        1           1
    ________ ________ _____ _____ _________
    inline    ids     class, attr elements
                      , pesudo

