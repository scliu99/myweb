// ex1
var mybody = document.getElementById('mybody'); // 取得<body>的DOM物件
var myhrefs = document.getElementsByName('mybody'); // 取得<a>的DOM物件
console.dir(mybody);
console.dir(myhrefs);

// ex2
console.dir(mybody.parentNode); // 會得到<html>的元素
console.log(mybody.nodeName); // BODY

// ex3 節點操作
var list = document.getElementById('list');
console.dir(list.childNodes); // 注意元素之間的空白亦會產生子元素
console.dir(list.firstChild);
console.dir(list.lastChild);
console.dir(list.firstChild.nextSibling.nodeName);
console.dir(list.childNodes[1].firstChild);
console.dir(list.childNodes[1].firstChild.nodeName);
console.dir(list.childNodes[1].firstChild.nodeValue);
// ex4
//console.log(list.innerHTML);
//console.log(list.firstChild.nextSibling.innerHTML);

// change first node to 1st node
list.firstChild.nextSibling.innerHTML = '1st node';
list.childNodes[1].firstChild.nodeValue = '1st node++';

console.log(list.childNodes[1].style);
list.childNodes[1].style.backgroundColor="red"; // inline style力最大
list.childNodes[1].style.fontSize="1.3em";

console.log(list.childNodes[1].attributes);
list.childNodes[3].setAttribute('class','blue-item');
list.childNodes[5].setAttribute('class','purple-item');

for(var i=0; i<list.childNodes.length;i++){
    if(list.childNodes[i].nodeName == 'LI') {
        var myClassname = list.childNodes[i].className + ' list-top-bottom';
        list.childNodes[i].className = myClassname;
        //list.childNodes[i].setAttribute('class',myClassname);
    }   
    
}



// ex4 常用方法

// 加入一個li節點
var liNode = document.createElement('li');
var liTextNode = document.createTextNode('sixth node');
liNode.appendChild(liTextNode);
list.appendChild(liNode);

// change liNote attribute
liNode.className = 'list-top-bottom purple-item'; 

// inser before 2nd li
var secondLi = list.childNodes[2];
list.insertBefore(liNode, secondLi);

// remove node
//list.removeChild(liNode);