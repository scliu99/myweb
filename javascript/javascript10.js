// ex1
var mybody = document.getElementById('mybody'); // 取得<body>的DOM物件
var myhrefs = document.getElementsByName('mybody'); // 取得<a>的DOM物件
console.dir(mybody);
console.dir(myhrefs);

// ex2
console.dir(mybody.parentNode); // 會得到<html>的元素
console.log(mybody.nodeName); // BODY