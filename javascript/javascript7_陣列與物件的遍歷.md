#7.陣列與物件

@(104-1.網站程式設計)[javascript]

---

###一個很像陣列的物件
先宣告二組變數如下

```javascript
var a = [1, 3, 9, 4]; // 陣列
var b = { 0:1, 1:3, 2:9, 3:4 }; // 物件
```
我們會發現,存取`a`的方式會與存取`b`的方式很類似

```javascript
a[1]; // 3
b[1]; // 3, 存取物件也可以用這種方式
```

如果我們想要存取`b`物件中的每一個元素,使用傳統的`for`迴圈是不容易達成的:

- 物件裡的屬性個數的取得,不像陣列可以透過`length`得知
- 物件裡的屬性名稱可不是都像上例是一組數值,它有可能是各種可能的值

因此,如果想要存取物件裡的每一個屬性就要用到`for`的each寫法

###`for`的另一種寫法: `for ... in` (或稱為foreach)

```javascript
var book = {
	id: 1,
	name: 'hello world!',
	author: 'Sam Liu'
}

for(var p in book) {
    console.log(p);	// id, name, author
    console.log(book[p]); // 1, 'hello world!', 'Sam Liu'
};

```

###foreach的寫法不要用在陣列中

先看一個正常的例子

```javascript
var nums = [1,2,3,4,5,6];
for(var i in nums) {
    console.log(i);	
    console.log(nums[i]);	  
};
```

基於陣列也是一種物件,我們可能這樣做

```javascript
var nums = [1,2,3,4,5,6];
nums.a = 'hello';	// nums中加了一個a屬性
for(var i in nums) {
    console.log(i);	
    console.log(nums[i]);	  // 連'hello'也跑出來了
};
```
**原本只是想要印出陣列中的值,但使用foreach會把不在陣列中的其它屬性值也一併印出來!**

###如何判斷一個物件到底是陣列還是一般物件?

如果用`typeof`來判斷一個陣列,所得到的結果依然是`array`,因此,以下是一個較通用的判斷方式,這方式是利用物件中一定會有的"建構式"`constructor`型別來判斷

```javascript
var a = []; // 陣列
var b = {}; // 一般物件

a.constructor === Array // true表示為陣列
b.constructor === Object // true表示為一般物件

```

**當然這個方法也能判斷其它型別,不過其它型別都很明確,只要用`typeof`即可判斷出!**

