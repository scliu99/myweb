#6.陣列

@(104-1.網站程式設計)[javascript]

---

###陣列的操作

```javascript
var a = [1, 3, 9, 4, 'kitty', false]; // 陣列的宣告及初始值
```

####存取某一個元素值

```javascript
console.log(a[3]);	// 4, 索引是由0開始
a[5] = 'hello kitty'; // 重新給值
```

####加入一個元素
加入元素有許多種方式:

- 直接給值在最後一個元素的後一位

```javascript
a[6] = 10; // a陣列原本有6個元素[0..5]
```
我們可以更進一步利用陣列的`length`屬性來得知目前陣列的總數量,而寫成如下更通用的方式:

```javascript
a[a.length] = 10; // a陣列原本有6個元素[0..5]
```

- 利用陣列的`push`方法來加入元素在最後位置

```javascript
a.push(10);	//  將10推入a陣列的最後位置,效果同前一方法
```

- 利用陣列的'unshift'方法來加入元素到第一位置

```javascript
a.unshift(20);	//  將20推入a陣列的第一位置
```

- 使用陣列的`splice()`方法來加入特定元素到指定的位置

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// 第1個參數代表要插入元素的位置
// 第2個參數代表有多少個元素要先移除
// 第3個之後的參數會被加入陣列中
fruits.splice(2, 0, "Lemon", "Kiwi"); 
```

####取出元素

取出元素的操作,除了會得到該元素值之外,還會將該元素移除

- 利用`pop()`方法取出最後一個元素

```javascript
console.log(a.pop()); // 將最後一個元素取出
```

- 利用`shift()`方法取出第一個元素

```javascript
console.log(a.shift()); // 將第一個元素取出
```

- 利用`splice()`方法取出指定的元素(沒錯,與前述的`splice()`是同一個方法)

```javascript
console.log(fruits.splice(2,1)); // 取出第2個元素

var part = fruits.splice(2,2); // 取出第2個開始的2個元素,而part本身也會是一個陣列
```



###陣列排序
陣列提供了一個`sort()`方法,可以排序陣列中的元素

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple,Banana,Mango,Orange
```

**不過要特別注意,陣列的排序是以字母的順序來排,即使陣列中的元素都是數值,還是會以字串的規則來排**

```javascript
var nums = [34, 9, 11, 214];
nums.sort(); // 11, 214, 34, 9 
```

如果想要正確的以"數值"的方式來排序,就必需先訂義一個用來"比較二個元素值的大小"的函式

```javascript
// 定義一個比較大小的函式
function compareNumber(a,b) {
	return a-b; // 如果回傳正數,代表a>b,反之代表b>a
				// 因此如果要反序排列,則改成b-a即可
}
var nums = [34, 9, 11, 214];
nums.sort(compareNumber); // 9, 11, 34, 214 如預期的結果
```

如果想要反序排列,除了可以利用"比較函式"之外,還可以利用`reverse()`方法來完成

```javascript
fruits.reverse(); // Orange,Mango,Banana,Apple
nums.reverse(); // 214,34,11,9
```

###陣列中的其它常用操作

- `.join()`將陣列中所有元表串成一個字串
- `.split(',')`將字串以參數為分隔符號,轉成陣列
- `.concat(arr1, arr2)`將原陣列與arr1, arr2陣列串在一起
- `.slice(n, m)`複製出原陣列中由第n個開始,到第m-1個元素