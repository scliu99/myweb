#2.變數的比較及操作

@(104-1.網站程式設計)[javascript]

---

### 流程控制: 判別式

#### 判別式格式1: 當`condition`值為`true`時,會執行大刮號裡的程式碼

```javascript
if(condition) {
    // do something if condition is true
}
```

#### 判別式格式2: 當`condition`值為`true`時,會執行大刮號裡的程式,否則執行`else`之後大刮裡的程式碼

```javascript
if(condition) {
    // do something if condition is true
} else {
    // do something if condition is false
}
```

#### 範例:

```javascript
var age = 10;
var name = "David";

if(age == 10) {
    alert('age is 10');
}

if(age < 10 || name == "David"){
    alert("I'm David");
}
```

###不同型別之間的轉換

不同型別的變數若要一起做運算,則會自動作一些轉換

```javascript
var a = 10;
var b = '20';
var c = true;
console.log(a+b); // 若運算元中有字串,會先將其它變數轉成字串
console.log(a+c); // 布林值與數值運算時,true為1,false為0
console.log(b+c); // 布林值與字串,布林值會變"true"或"false"字串
```

若是二種不同型別的資料做一般比較運算(`==`,`!=`)時,亦會依上所述,先將二變數轉換成相同的型別再做比較!因此在使用比較運算時要特別注意這樣的特性!

```javascript
var a = 10;
var b = '10.0';
console.log(a == b); // true; 當字串與數值比較時,會先試著將字串轉成數值再做比對

var c = true;
var d = 1;
console.log(c == d); // true;
```

若是想要嚴格比較二變數是否完全相等或不等(即不轉換型別),則要用`===`或`!==`來比對

```javascript
var a = 10;
var b = '10';
console.log(a === b); // false;
```

`null`及`undefined`的比較

```javascript
var a = null;
var b = undefined;
console.log(a == b); // true
console.log(a === b); // false
```

`!`(否定)運算的應用,以下這些值在做過`!`運算後均會變成`true`

```javascript
var a = 0;
var b = '';
var c = false;
var d = null;
var e = undefined;
console.log(!a); // true
console.log(!b); // true
```

但是以下這些值在`!`後,是`false`

```javascript
var a = {}; // 空物件還是一個存在的物件,是有東西的
var b = []; // 空陣列同上
var c = 'false'; // 字串在轉布林時,是根據字串有沒有內容,這點r跟布林值轉字串的觀念不同,要特別注意!
var d = NaN; // NaN是javascript中一個非常特別的值,見後述
var e = Infinite; // Infinite無窮大,也是一個特別的值
var f = -Infinite; // 同上
```

### 關於`NaN`及`Infinite`(`-Infinite`)
`NaN`: 代表其值"不是一個數值"(Not a Number),此值不管與什麼資料做比較(包括`NaN`本身),其結果均為`false`. 如果要判斷變數是否為`NaN`,可以用`isNaN()`的函式來判斷

`Infinite`(`-Infinite`): 當運算結果為一無限大或負無限大時,會得到這樣的結果值

```javascript
var a = 1/0; // Infinite,除0結果為無限大
var a = 0/0; // NaN, 0/0不是一個數學上可定義的值
```


附:`==``===`的比較表: [https://dorey.github.io/JavaScript-Equality-Table/](https://dorey.github.io/JavaScript-Equality-Table/)

