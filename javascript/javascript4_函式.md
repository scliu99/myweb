#4.函式的使用

@(104-1.網站程式設計)[javascript]

---

###函式的宣告有二種方式

> - 函式宣告式
> - 函式表達式

####函式宣告式

以`function()`開頭直接定義一個函式的方式,為函式宣告式

```javascript
// 宣告一個名為callme的函式
function callme(p1, p2) {  // p1, p2 為參數,數量可自行增加,亦可不給
	// do something			// 函式中所執行的程式碼 
	return value;			// 可以回傳值(亦可省略)
}

// 呼叫(執行)函式
var result;
result = callme(1, 'abc'); // 若呼叫以宣告式方式所定義的函式,呼叫的程式碼可以寫在任意位置 
```
	
####函式表達式

```javascript
// 以表達式方式來宣告一個函式
var callme = function(p1, p2) {
	// do something			// 函式中所執行的程式碼 
	return value;			// 可以回傳值(亦可省略)
}
// 呼叫(執行)函式
var result;
result = callme(1, 'abc'); // 若呼叫以表達式方式所定義的函式,呼叫的程式碼**必需寫在函式宣告之後** 
```
	
####函式中的參數物件:`arugments`

在函式中有一個很特別的變數`arguments`,它記錄著所有傳進來的參數值,並以"類似陣列"(但與陣列不完全相同)的方式儲存

```javascript
function pcount() {
	alert(arguments.length); // 傳入的參數個數
	for(var i=0;i<arguments.length;i++) {
	    alert(arguments[i]);     // 同陣列的方式讀取參數
	}
}
pcount(1, 2, 3, '4', true);
```
	
####巢狀函式###

在函式(外部)中還可以包含函式(內部),而內部函式可以存取外部函式中的變數,但反之則不行!

```javascript
function outer(){
	var book1 = 'mybook';
	function inner(){
		var book2 = 'yourbook';
		console.log(book1); // mybook
	}
	inner();
	console.log(book2); // undefined
}
outer();
```

###函式裡的變數拉升(Hoisting)問題(<font color='red'>非常重要!!!</font>)

在函式裡的變數宣告要特別留意javascript的"變數拉升"特性,先看一下以下例子

```javascript
myname = 'global';
function f() {
    alert(myname); // (1)
    var myname = 'local';
    alert(myname); // (2)
}
f();
```

如果你認為在(1)處會印出`global`的值,<font color='red'>那就錯了!!</font>

> **變數拉升的原則如下:**
> 
> 1. var宣告的變數(不管有沒有初始值),會被拉升到函式內的最頂端
> 2. 若有給值(assign value)的部份則會留在原處

若依照這原則,上述例子其實會變成如下

```javascript
myname = 'global';
function f() {
    var myname;    // 變數的宣告會被拉到function中的最頂端
    alert(myname); // (1) 這時印出的結果應該是undefined
    myname = 'local'; // 變數的給值依然留在原處
    alert(myname); // (2) 給值後則為 local
}
f();
```