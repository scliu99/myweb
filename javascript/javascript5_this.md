#5.`this`物件及其相關應用

@(104-1.網站程式設計)[javascript]

---

> javascript中有一個非常特別的物件`this`,這個物件不是一個固定物件,它會隨著不同情況而代表著不同的值!

*注意:這裡的`this`觀念會與其它語言,如:java, c#等完全不同,請不要把它們搞混!*

先觀察`this`物件在最外層時的內容

```c#
console.dir(window); 
console.dir(this); // this物件會與window物件相同
```

再看看`this`在`function`中的情形

```javascript
var o1 = function() { console.dir(this); };
o1(); // window, 這裡的this依然是與window物件相同!
```

我們再將變數的結構做一下改變

```javascript
var o1 = {};
o1.f1 = 123;
o1.f2 = function() { console.dir(this); };
o1.f2(); // 觀察一下結果的物件內容
o1.f3 = 'hello'; // o1再加入一個屬性
o1.f2(); // 再觀察一次,可以發現這裡的this就是o1
```

接著上面的範例

```javascript
o1.f4 = {};
o1.f4.z1 = 'world';
o1.f4.z2 = function() { console.dir(this) }; // 這時this又跟o1.f4相同了!
```

此外,上面範例的寫法,我們可以直接用物件宣告的方式改寫,其結果完全相同:

```javascript
o1 = {
	f1: '123',
	f2: function() { console.dir(this) },
	f3: 'hello',
	f4: {
		z1: 'world',
		z2: function() { console.dir(this) }
	}
}
```
**在函式中使用`this`物件,要特別小心,因為`this`物件是不可預期的內容!它是由"函式物件"本身來決定其內容!**

####呼叫`function`並指定`this`物件

如果要在呼叫`function`時指定`this`物件,可以透過`call()`或`apply()`來達成

```javascript
var test = function(p1, p2){
	console.log(p1);
    console.dir(this);
};

var m = {
    a:1,
    b:'hello'
};
test('hello', 'world'); // 未指定this物件,則依前述規則,this同window
test.call(m, 'hello', 'world'); // 可以透過call()的方式來指定this物件(本例是將m指定給this)
```

也可以用`apply()`來達成相同結果,`apply`與`call`的差異,僅在參數的部份,必須要以陣列方式傳入

```javascript
test.apply(m, ['hello', 'world']); // 結果相同
```

如果要將函式當參數傳遞,同時又要指定函式中的`this`物件,則可以用`bind()`來綁定`this`物件

```javascript
function test(func) {
	func();
};

var callback = function(){
	console.dir(this);
};

test(callback); // window,如同前述,這裡是window

var m = { f: 'hello' };
test(callback.bind(m)); // m,指定callback裡的this為m
```

####練習一下,看看下列程式會得到什麼結果?

```javascript
x = 10;
var obj = {
	x: 20,
	f: function(){
		console.log(this.x);
		var foo = function(){ console.log(this.x); }
		foo(); // (2)
	}
};

obj.f();  // (1)
```

```javascript
var obj = {
	x: 20;
	f: function(){ console.log(this.x); }
};

var obj2 = {
	x: 30;
};

obj1.f.call(obj2); // (1)
```