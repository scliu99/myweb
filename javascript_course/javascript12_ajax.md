#12.Ajax(Asynchronous JavaScript and XML)

@(104-1.網站程式設計)[javascript]

---
1. Ajax的核心建構式: `XMLHttpRequest`
2. 如果是在IE中,則是用`ActiveXObject("Microsoft.XMLHTTP")`
3. `XMLHttpRequest.open("GET", "/api/ajax", true);`對主機的請求設定
   - 參數1:請求方式`GET`/`POST`
   - 參數2:請求的網址
   - 參數3:是否為非同步
4. `XMLHttpRequest.send(null)`: 對主機實際發出請求,若是以`POST`方式,則需將資料由參數傳遞
5. `XMLHttpRequest.onreadystatechange`: 對主機回應的狀態有任何改變是,會發出事件呼叫
   - `XMLHttpRequest.readyState`代表狀態,共有四個狀態(1到4)
     1. 請求準備好,但尚未發出
     2. 請求發出,尚未回應
     3. 已經有回應,但未全部完成
     4. 回應完成
   - `xmlHttpRequest.status`: 代表http回應結果, 200代表正常結束
   - `xmlHttpRequest.responseText`: 由主機回傳回來的內容

以下是一個範例

```javascript
// 使用ajax的技術,向主機呼叫webapi
var ajaxSubmit = function() {
    var xmlHttpRequest = null; // 宣告一個變數來接受XMLHttpRequest()
    //alert(window.ActiveXObject);
    if (window.ActiveXObject) { // IE browser
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) { // 其它的browser
        xmlHttpRequest = new XMLHttpRequest();
    }
    if (xmlHttpRequest != null) {
        // 請求設定
        xmlHttpRequest.open("GET", "/api/ajax", true);
        // ajax的callback function
        xmlHttpRequest.onreadystatechange = ajaxCallback;
        // 發出請求(若為POST,則將資料以參數方式傳入)
        xmlHttpRequest.send(null);
    }
    // callback function
    function ajaxCallback() {
        // 只需要對readyState為4做處理
        if (xmlHttpRequest.readyState == 4) {
            // http協定的回傳結果值,200代表正常結束
            if (xmlHttpRequest.status == 200) {
                var responseText = xmlHttpRequest.responseText;
                document.getElementById("output").innerHTML = responseText;
            }
        }
    }
};

```

1. 非同步呼叫VS同步呼叫
   - 若將非同步改為同步,在請求未完全之前,整個網站是不會動的!
   - 一般為了有較好的使用者體驗,大多數都會以非同步方式處理ajax call
2. 若使用POST方式向主機請求,則必須要加上如下的設定
   -	`xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");`
