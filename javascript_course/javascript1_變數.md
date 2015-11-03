#1.變數

@(104-1.網站程式設計)[javascript]

---
#### 基本語法

- 區分大小寫: 變數命名要注意大小寫是不同的名稱
- 結尾符號: 每行程式結尾時均要加入分號`;`做為結束符號!(雖然不加有時也不會出錯,但在某些情形下會被誤譯,因此最好都要加)
- 變數型別不固定: javascript是屬於弱型別的程式語言,在宣告時不必決定其型別為何,且其型別可以隨時更改!
- 直譯型語言: javascript是屬於腳本型(script)語言,在執行時期同時編譯,正常情形下是由上至下的執行
- 註解: 單行註解為`//`,多行註解則由`/*`及`*/`包覆



#### 宣告變數

javascript為一動態語言,變數的宣告並不是必要的,不過宣告變數是撰寫程式的良好習慣,在大多數的程式語言中,宣告變數是必要的!因此,在撰寫javascript時也要尊守這一規則!
宣告變數的關鍵字為`var`

```javascript
var age; // 宣告一個名為age的變數,但沒有初始值
var age = 25; // 宣告一個名為age的變數,並給其數值為10做為初始值
```

#### 基本資料型別

- **`number`型別為一64位元的浮點數**

```javascript
var num = 10;
var num2 = -192.10;
      
typeof num; // typeof 會回傳變數的型別
```

- **`string`型別為字串型別**

```javascript
var name = 'David'; // 使用引號即為一字串
var city = "Taipei"; // 引號可用單引號或雙引號,但前後要一至
var book = "Jean's food"; // 若字串中有引號,外部則要用不同引號
var com = 'C"\'"s'; // 亦可使用一反斜線來導引特殊符號 
```

- **`boolean`型別**

```javascript
var doorIsOpened = true;
var lightIsOn = false;
```

- **`undefined`型別**

```javascript
var h;  // 當變數宣告但尚未給值,其內容即為undefined
typeof h; // undefined也是一種型別,而這種型別的唯一值就是undefined
```

- **`object`型別** 其內容為一組或多組的"屬性":"值"的組合**

```javascript
var book = { name: 'M', author: 'Sam' }; // 在這例子中, book有二個屬性,分別為name及author,其值分別為'M'及'Sam'
console.log(book.name); // 讀取book中的name屬性值
console.log(book['name']); // 讀取book中的name屬性值的另一種寫法
book.name = 'My Journey'; // 改變book中的name屬性值
book['name'] = 'My Journey2'; // 改變book中的name屬性值的另一種寫法

typeof book; // object
```   

- **`object`型別:陣列,陣列也是物件型別,是由多組資料組合而成**

```javascript
var books = [ 'book1', 'book2', 'book3']; // 由三個字串組合而成的陣列
books[0]; // 讀取陣列中第一組資料: 'book1'

typeof books; // object

// 陣列內的資料(elements),可以是任何型別的資料,甚至是另一種物件
var books = [
	{ 'name': 'name1', author: 'author1' },
	{ 'name': 'name2', author: 'author2' },
	{ 'name': 'name3', author: 'author3' },
]; 

books[0].name; // 讀取books第一組資料中的name屬性
```

- **特殊物件: `null`物件** `null`是一種物件的值,其型別是物件,所代表的意義是"`什麼都不是`",就是"`沒有值`"的意思!

```javascript
var file = null; // file此時值為null,而型別是object
typeof file; // object
```

- **function型別**	javascript可以將一個函式`function`指派給一個變數

```javascript
var showAlert = function(){
	alert('hello');
};
typeof showAlert; // function

showAlert(); // 呼叫showAlert函式
```

---
    
####變數範圍  (Variable scope)

> javascript中的變數範圍可分為二種

- **全域變數(Global variable)**
全域變數顧名思意,即此變數在任何地方均可以被存取(access)的到,在以下二種情形下所宣告的變數,是為全域變數
  1. 未使用`var`所宣告的變數,即直接附值
  2. 在最外層(即不在`function`之內)所宣告的變數(無論是否有用`var`宣告),亦為全域變數
 
 全域變數實際上會存放在一個全域物件上(以瀏覽器來說,此全域物件是`window`)

```javascript
a = 10;  // a為全域變數
console.log(a); // 10
console.log(window.a); // 10
```
*在實務上,建議盡量不要使用全域變數!*

- **區域變數(Local variable)**
區域變數指的是在一個函式中經由`var`宣告的變數,這種變數僅在此函式及其內層函式中生效

```javascript
var a2 = 20;
function test(){
	var a1 = 10;
	console.log(a1);  // a1為區域變數,僅能在test函式中生效
	console.log(a2);  // a2為上層變數,在test函式亦能存取
}
console.log(a1);   // 在test()之外是無法存取到a1的
```    