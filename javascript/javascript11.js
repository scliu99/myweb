// 在body標簽裡設定一個onload事件,於觸發時執行init()函式

function init(){
//    alert('DOM is loaded!');
}

// 透過element.onxxx的屬性來設定,例如
var b = document.getElementById('mypage'); // 取得body元素
/*
b.onload = function () {                   // 在b.onload指派一個函式
  alert('DOM is loaded-2!');
}
*/


// 直接用window的onload事件
/*
window.onload = function(){
    alert('DOM is loaded-3!');
}*/

// 透過`addEventListener()`的方法來加入事件,例如
/*
var myfunc = function() {
    alert('DOM is loaded-4!');
};

window.addEventListener("load", myfunc); // 加入指定事件
//b.removeEventListener("load", myfunc); // 移除指定事件
*/

// event參數的使用
var clickme = function(event){
    console.dir(event);
    alert('you clicked me!');
}
var addButtonClass = function(event){
  event.target.className = "button";

}
var removeButtonClass = function(event){
  event.target.className = "";

}

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
button1.addEventListener('click', clickme);
button2.addEventListener('dblclick', clickme);
button3.addEventListener('mouseover', addButtonClass);
button3.addEventListener('mouseout', removeButtonClass);

// 事件傳播
var outter = document.getElementById('outter');
var inner1 = document.getElementById('inner1');
var inner2 = document.getElementById('inner2');
/*
var outter1Click = function(){
  alert('outter1 click!');
};
var outter2Click = function(){
  alert('outter2 click!');
};
var inner1Click = function(){
  alert('inner1 click!');
};
var inner2Click = function(){
  alert('inner2 click!');
};
outter.addEventListener('click', outter1Click,true);
inner1.addEventListener('click', inner1Click, true);
//outter.addEventListener('click', outter2Click,false);
//inner2.addEventListener('click', inner2Click, false);
*/
// 阻止事件傳播
var outter1Click = function(event){
    alert('outter1 click!');
    event.stopPropagation();
};

var inner1Click = function(){
    alert('inner1 click!');
};
var inner2Click = function(event){
    alert('inner2 click!');
    event.stopPropagation();

};
//outter.addEventListener('click', outter1Click,true);
//inner1.addEventListener('click', inner1Click, true);
outter.addEventListener('click', outter1Click,false);
inner2.addEventListener('click', inner2Click, false);
