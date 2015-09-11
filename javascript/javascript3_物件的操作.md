#3.物件的操作

@(104-1.網站程式設計)[javascript]

---

####二個比較複雜的物件

```javascript
var someone = {
	id: 0,
	name: 'John',
	no: 'A001',
	age: 20,
	address: {
		zip: 123,
		city: 'Taipei'
		street: 'some street'
	}
}; // 物件中包含了物件
```
```javascript
var someone2 = {
	id:0, 
	name: 'John,
	ownBooks: ['book1', 'book2', 'book3' ],
	children: [
		{ name: 'petter', age: '12' },
		{ name: 'angel', age: '14' } 
	]
} // 物件中還包含有陣列,陣列中亦還有物件
```

以上的物件(javascript object)存取,均如同前面"變數型別"說明的方式,如:

```javascript
console.log(someone2.ownBooks[2]); // book3
console.log(someone.address.zip); // 123
```

若是要在物件中加入屬性,可直接指定其新的屬性名稱並給值即可

```javascript
someone.wife = 'Mary'; // wife屬性會加到someone中
someone['wife'] = 'Mary'; // 同上
```

若要刪除某一個屬性

```	javascript
delete someone.wife; // 此時wife屬性就從someone中移除
```

物件中可以存放任意物件,甚至是函式

```javascript
// someone物件中有getName及setName的屬性,其值為function
var someone = {
	id: 0,
	name: 'John',
	getName: function() { 
		return this.name;  // this的意義及用法請參考相關章節
	},
	setName: function(newName) { 
		this.name = newName; 
	}
}
// 可以透過getName及setName的呼叫,讀取或改變其中name的屬性值
someone.getName(); // John
someone.setName('Mary'); // 設定name的值為Mary
someone.getName(); // Mary
someone.name; // Mary
```

###物件與字串的轉換

若將javascript的物件轉成字串,就是所謂的JSON(JavasSript Object Notation),在現代的網頁前端設計中,對於與主機間資料的傳遞,大多會使用這種格式來做為準備格式!

一般來說,要將資料傳到主機,會先將資料轉成字串,要將一個物件轉成字串相當簡單:

```javascript
var emp = {
    employees:[
        {"firstName":"John", "lastName":"Doe"}, 
        {"firstName":"Anna", "lastName":"Smith"}, 
        {"firstName":"Peter", "lastName":"Jones"}
    ]
}

var empJson = JSON.stringify(emp); // emp物件的字串
```

然後接收到由主機傳來的json,我們需要將它轉回物件

```javascript
var emp2 = JSON.parse(empJson); // emp2的內容會和emp相同
```

**注意: 在較老舊的瀏覽器中(像是ie8或更舊的版本),並不支援這樣的語法,若想讓這些瀏覽器也能支援這樣的語法,就必需引入[json2.js](https://github.com/douglascrockford/JSON-js/blob/master/json2.js)的程式庫**
