#8.閉包(closure)

@(104-1.網站程式設計)[javascript]

---

###閉包的特性

>	閉包的產生,主要是由一個函式,包裹一個內部函式,所形成的環境,這個環境有三個特性
1. 內部函式可以參考(存取)到外部函式的所有變數(當然如果還有更外一層的話,也能存取的到)

	```javascript
	var outter = function() {
	    var outterVar = 'abc';
	    // inner內層函式裡存取了outterVar這個外層的變數
	    var inner = function(arg) { 
	        return outterVar + ' and ' + arg;
	    };
	    return inner('def');
	};
	console.log(outter());
	```

2. 即使在外層函式執行完畢(`return`後),內層函式依然可能參考(存取)到外層中所有的變數!(這點與C#或Java等語言有相當大的不同,一般函式執行完後,會釋放所有函式中產生的變數,而不能再被參考)

	```javascript
	var outter = function () {
		var outterVar = 'abc';
		var inner = function (arg) {
			return outterVar + ' and ' + arg;
		};
		return inner;
	};

	var f = outter(); // 取得inner(),
	f('def');    // 對inner()的呼叫,依然可以參考到ouutterVar(此時outterVar依然存在)
	f('xyz');    
	```

	更進一步將外層的`outterVar`改成參數,這裡要表達的重點有二個
	
	- 外層的參數等同於外層的變數,在內層同樣可以存取
	- 每次執行`outter()`外層函式時,會產生個別獨立的內層閉包(<font color='red'>**這點閉包應用的核心,非常重要!</font>**)

	```javascript
	var outter = function (outterVar) {
		var inner = function (arg) {
			return outterVar + ' and ' + arg;
		};
		return inner;
	};
	var f1 = outter('123');
	f1('def');          // 123 and def
	f1('xyz');          // 123 and xyz
	var f2 = outter('456'); // f1及f2二個函式會產生個別獨立的閉包個體(物件)
	f2('ykk');          // 456 and ykk
	```

	上面的例子可以改成更加精簡且優雅,`inner`變數可以省去,直接將一個函式回傳,這也是實務上的寫法
	```javascript
	var outter = function (outterVar) {
		return function (arg) {
			return outterVar + ' and ' + arg;
		};
	};
	```

3. 內層函式可以變更外層函式的變數值(實務上會用這個特性將一個函式設計成一個類似類別的模組,這個模組內部提供一系列的方法,而其外層變數則為封裝的屬性!)

	```javascript
	function box() {
		var val = undefined;
		return {        
		  set: function (newVal) { val = newVal; },
		  get: function () { return val; },
		  type: function () { return typeof val; }
		};
	}

	var b = box();
	console.log(b.type());  // undefined
	b.set(13.38 * 13.38);   // 對閉包內的變數設值
	console.log(b.get());   // 179.0244
	console.log(b.type());  // number

	```
	**補充:每次執行外層函式時,均會產生個別獨立的閉包,閉包之間沒有任何關連,也就是說閉包內的變數值及其內部函式都是獨立的!(這點很重要,依此特性,可以用來模擬區塊變數)**

###閉包應用1: 模擬區塊變數(配合立即函式)

由於在javascript中沒有區塊變數的既念,看看下面的例子,這個例子中原意是希望能將傳入的陣列元素轉成函式回傳

```javascript
function wrapElements(a) {
    var result = [];
    var i;
    for (i = 0, i < a.length; i++) {
        result[i] = function () { return a[i]; } // (1)
    }
    return result;
}

var w = wrapElements([10, 20, 30, 40, 50]); // (2)
var f = w[0];	// (3)
console.log(f()); // 答案請自行測試!如果其結果並未令你感到意外,那代表你懂了!
```

在這個例子中,內層函式被產生了5次,然而依照上述閉包的特性說明,內層裡的變數`i`其實是參考了外層裡的變數,因此這個`i`值會在`wrapElements()`執行完畢後被保留下來,而且其值為`5`
變數`f`是取其回傳值中的第一個陣列中的內容,並執行它,但要注意的是,這時的`i`值已經是5了,因此我們會得到`return a[5];`的結果!(`a[5]`並沒有任何值!)

要解決這個問題,當然就是要利用到閉包的特性,將`i`值也封裝成閉包裡的變數(成為`for`區塊中的區域變數),如下例:

```javascript
var wrapElements = function(a) {
    var result = [];
    var i;
    for (i = 0; i < a.length; i++) {
        (function(i) {    // (1)
            result[i] = function() { return a[i]; };
        })(i);
    }
    return result;
};

var w = wrapElements([10, 20, 30, 40, 50]);
var f = w[0]; // (2)
console.log(f());    // 10
```

在(1)處可以看到,我們以一個"立即執行的函式",包住原本`result[i]...`的程式碼,並將`i`值以<font color='red'>"參數的方式"</font>(**重點**)傳入,這樣`i`就會成為"立即執行的函式"裡被參考的一個變數,而且每次都會有一個獨立的個體(也就是說`i`會被保留起來)
此時,(2)處的`f()`所執行的`return a[i]`就會是當時保留下來的`i`值!