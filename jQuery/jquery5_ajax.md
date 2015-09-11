#5. Ajax

@(104-1.網站程式設計)[jquery]

---
###`jQuery.ajax( url, [ settings ] )` 回傳: `jqXHR`
執行一個非同步的HTTP（Ajax）的請求。

- `jQuery.ajax( url, [ settings ] )`                  version added: 1.5

  - `url`:一個用來包含傳送請求的URL字串。
  - `settings`:一個以`{鍵:值}`組成的AJAX請求設定。所有選項都是可選的。可以使用`$.ajaxSetup()`設定任何預設參數。看`jQuery.ajax( settings )`下所有設定的完整列表。

- `jQuery.ajax( settings )`                       version added: 1.0

  `settings`:一個以`{鍵:值}`組成的AJAX請求設定。所有選項都是可選的。可以使用`$.ajaxSetup()`設定任何預設參數。
  * `accepts` `Map`
    * 預設：取決於資料類型
    * 內容類型傳送請求頭，告訴伺服器什麼樣的回應會接受回傳。如果accepts設定需要修改，推薦在`$.ajaxSetup()`方法中做一次。
  * `async` `Boolean`
    * 預設： `true`
    * 預設設定下，所有請求均為非同步請求（也就是說這是預設設定為`true`）。如果需要傳送同步請求，請將此選項設定為`false`。跨域請求和`dataType: "jsonp"`請求不支援同步操作。注意，同步請求將鎖住瀏覽器，使用者其它操作必須等待請求完成才可以執行。
  * `beforeSend(jqXHR, settings)` `Function`
    * 傳送請求前可修改`jqXHR`（在jQuery 1.4.x的中，`XMLHttpRequest`）物件的函式，如添加自定義HTTP頭等。該`jqXHR`和設定作為參數傳遞的。這是一個Ajax事件。`beforeSend`行數回傳的`false`將取消該請求。在jQuery 1.5， `beforeSend`選項將被訪問，不管請求的類型。
  * `cache` `Boolean`
    * 預設： `true`, `dataType`為`script`和`jsonp`時預設為`false`
    * 如果設定為`false` ，瀏覽器將不緩存此頁面。
* `complete(jqXHR, textStatus)` `Function`, `Array`
  * 請求完成後回呼函式(請求成功或失敗之後均呼叫)。這個回呼函式得到2個參數： `jqXHR` (in jQuery 1.4.x, XMLHTTPRequest)物件和一個描述成功請求類型的字串("success", "notmodified", "error","timeout", or "parsererror") 。在jQuery 1.5， `complete`設定可以接受一個函式的數組。每個函式將被依次呼叫。這是一個Ajax事件。
* `contents` (added 1.5) `Map`
  * 一個以"{字串:正則表達式}"配對的物件，用來確定jQuery將如何解析回應，給定其內容類型。
* `contentType` `String`
  * 預設: `application/x-www-form-urlencoded`
  * 傳送資訊至伺服器時內容編碼類型。預設值是`application/x-www-form-urlencoded`，適合大多數情況。如果你明確地傳遞了一個`content-type`給`$.ajax()` 那麼他必定會傳送給伺服器（即使沒有資料要傳送）。資料將總是使用UTF-8字符集傳遞給伺服器。
* `context` `Object`
  * 這個物件用於設定Ajax相關回呼函式的內文(context)。也就是說，讓回呼函式內`this`指向這個物件（如果不設定這個參數，那麼`this`就指向呼叫本次AJAX請求時傳遞的`options`參數）。比如指定一個DOM元素作為`context`參數，這樣就設定了`success`回呼函式的上下文為這個DOM元素。就像這樣：
  ```javascript
  $.ajax({
    url: "test.html",
    context: document.body,
    success: function(){
      $(this).addClass("done");
    }
  });
  ```

* `converters` (1.5新增) `Map`
  - 預設： `{"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML}`
  - 一個資料類型對資料類型轉換器的物件。每個轉換器的值是一個函式，返迴回應的轉化值

- `crossDomain` (1.5新增)
  - 預設：同域請求為`false`，跨域請求為`true`
  - 如果你想強制跨域請求（如JSONP形式）同一域，設定`crossDomain`為`true`。這使得例如，伺服器端重定向到另一個域
- `data` `Object, String`
  - 傳送到伺服器的資料。將自動轉換為請求字串格式。`GET`請求中將附加在URL 後。查看`processData` 選項說明以禁止此自動轉換。必須為"{鍵:值}"格式。如果為數組，jQuery 將自動為不同值對應同一個名稱。如`{foo:["bar1", "bar2"]}` 轉換為`&foo=bar1&foo=bar2`。如果值是一個數組（ Array ）, jQuery將在多個連續的值具有相同的鍵值的基礎上建立的傳統設定(下述)。
- `dataFilter(data, type)` `Function`
  - 一個函式被用來處理`XMLHttpRequest`的原始回應資料。這是一個預過濾功能，淨化回應。您應該回傳安全資料。提供`data`和`type`兩個參數：`data`是Ajax回傳的原始資料，`type`是呼叫`jQuery.ajax`時提供的`dataType`參數。函式回傳的值將由jQuery進一步處理。
- `dataType` `String`
  - 預設: Intelligent Guess (`xml`, `json`, `script`, or `html`)
  - 預期伺服器回傳的資料類型。如果不指定，jQuery 將自動根據HTTP 包MIME 資訊來智能判斷，比如XML MIME類型就被識別為XML。在1.4中，JSON就會生成一個JavaScript物件，而script則會執行這個腳本。隨後伺服器端回傳的資料會根據這個值解析後，傳遞給回呼函式。可用值:
    - `xml`: 回傳XML 文檔，可用jQuery 處理。.
    - `html`: 回傳純文本HTML 資訊；包含的script標籤會在插入dom時執行。
    - `script`: 評估為JavaScript並回傳純文本回應。不會自動緩存結果。除非設定了`cache`參數。**注意：在遠程請求時(不在同一個域下)，所有POST請求都將轉為GET請求。(因為將使用DOM的script標籤來加載)**
    - `json`:評估為JSON回應，並回傳一個JavaScript物件。1.4中，JSON就會生成一個JavaScript物件，而script則會執行這個腳本。（見json.org的更多資訊，正確的JSON格式。）
    - `jsonp`: JSONP格式。使用JSONP形式呼叫函式時，如`myurl?callback=?` jQuery將自動替換`?`為正確的函式名，以執行回呼函式。
    - `text`: 回傳純文本字串。
    - 多個空格分割的值: As of jQuery 1.5， jQuery可以從ContentType頭收到並轉換一個您需要的資料類型。例如，如果你想要一個文本回應為XML處理，使用"text xml"資料類型。您也可以將一個JSONP的請求，以文本形式接受，並用jQuery以XML解析: "jsonp text xml"。同樣地可以使用"jsonp xml"簡寫,將首先嘗試從JSONP形式轉換為XML,做不到這一點，並沒有從文本，從JSONP形式轉換為文本，然後到XML。
  - `error(jqXHR, textStatus, errorThrown)` `Function`
請求失敗時呼叫此函式。有以下三個參數：jqXHR (在jQuery 1.4.x中, XMLHttpRequest)物件、描述發生的錯誤類型的一個字串和捕獲的異常物件。如果發生了錯誤，錯誤資訊（第二個參數）除了得到null之外，還可能是"timeout" , "error" , "abort"和"parsererror"。這是一個Ajax Event。在jQuery 1.5 ,在error設定可以接受函式組成的數組。每個函式將被依次呼叫。注意：此處理程序不被跨域腳本和JSONP形式的請求呼叫。
global Boolean
預設: true
無論怎麼樣這個請求將觸發全局AJAX事件處理程序。預設是true。設定為false將不會觸發全局AJAX事件，如ajaxStart或ajaxStop可用於控制不同的。這可以用來控制各種Ajax Events .
headers (1.5新增) Map
Default: {}
一個額外的"{鍵:值}"對映射到請求一起傳送。此設定被設定之前beforeSend函式被呼叫;因此，消息頭中的值設定可以在覆蓋beforeSend函式範圍內的任何設定。
ifModified Boolean
預設: false
僅在伺服器資料改變時獲取新資料。使用HTTP 包Last-Modified 頭資訊判斷。在jQuery 1.4中，他也會檢查伺服器指定的'etag'來確定資料沒有被修改過。
isLocal (added 1.5.1) Boolean
預設:取決於當前的位置協議
允許當前環境被認定為“本地”，（如文件系統），即使jQuery預設情況下不會承認它。以下協議目前公認為本地：file , *-extension , and widget。如果isLocal設定需要修改，建議在$.ajaxSetup()方法中這樣做一次。
jsonp String
在一個jsonp請求中重寫回呼函式的名字。這個值用來替代在"callback=?"這種GET或POST請求中URL參數里的"callback"部分，比如{jsonp:'onJsonPLoad'}會導致將"onJsonPLoad=?"傳給伺服器。在jQuery 1.5，，設定jsonp選項為false阻止了jQuery從加入"?callback"字串的URL或試圖使用"=?"轉換。在這種情況下，你也應該明確設定jsonpCallback設定。例如, { jsonp: false, jsonpCallback: "callbackName" }
jsonpCallback String, Function
為jsonp請求指定一個回呼函式名。這個值將用來取代jQuery自動生成的隨機函式名。這主要用來讓jQuery生成度獨特的函式名，這樣管理請求更容易，也能方便地提供回呼函式和錯誤處理。你也可以在想讓瀏覽器緩存GET請求的時候，指定這個回呼函式名。在jQuery 1.5，你也可以使用一個函式值該設定，在這種情況下jsonpCallback的值設定到該函式的回傳值。
mimeType (added 1.5.1) String
一個mime類型用來覆蓋XHR的 MIME類型。
password String
用於回應HTTP訪問認證請求的密碼
processData Boolean
預設: true
預設情況下，通過data選項傳遞進來的資料，如果是一個物件(技術上講只要不是字串)，都會處理轉化成一個查詢字串，以配合預設內容類型"application/x-www-form-urlencoded "。如果要傳送DOM樹資訊或其它不希望轉換的資訊，請設定為false。
scriptCharset String
只有當請求時dataType為"jsonp"或"script"，並且type是"GET"才會用於強制修改charset。通常只在本地和遠程的內容編碼不同時使用。
statusCode (1.5新增) Map
預設: {}
一組數值的HTTP程式碼和函式物件，當回應時呼叫了相應的程式碼。例如，如果回應狀態是404，將觸發以下警示：
$.ajax({
  statusCode: {404: function() {
    alert('page not found');
  }
});
如果請求成功，狀態程式碼函式作為回呼的成功相同的參數;如果在一個錯誤的結果，他們採取了相同的參數error回呼。
success(data, textStatus, jqXHR) Function, Array
請求成功後的回呼函式。這個函式傳遞3個參數：從伺服器回傳的資料，並根據dataType參數進行處理後的資料，一個描述狀態的字串;還有jqXHR（在jQuery 1.4.x的中，XMLHttpRequest）物件。在jQuery 1.5， 成功設定可以接受一個函式數組。每個函式將被依次呼叫。這是一個Ajax Event .
timeout Number
設定請求超時時間（毫秒）。如果一個設定有$.ajaxSetup()，此設定將覆蓋全局設定。例如，你可以使用這個屬性來提供一個單一的請求比所有你所設定時間在一秒鐘內的其他要求更長的超時。見$.ajaxSetup()全局超時。
traditional Boolean
如果你想要用傳統的方式來序列化資料，那麼就設定為true。請參考工具分類下面的jQuery.param方法.
type String
預設: 'GET'
請求方式("POST" 或"GET")， 預設為"GET"。注意：其它HTTP 請求方法，如PUT 和DELETE 也可以使用，但僅部分瀏覽器支援。
url String
預設:當前地址
傳送請求的地址。
username String
於回應HTTP訪問認證請求的使用者名
xhr Function
預設當可用的ActiveXObject（IE）中，否則為XMLHttpRequest
回呼創建XMLHttpRequest物件。當可用時預設為ActiveXObject（IE）中，否則為XMLHttpRequest。提供覆蓋你自己的執行的XMLHttpRequest或增強工廠。
xhrFields (added 1.5.1) Map
一對“文件名-文件值”在本機設定XHR物件。例如，如果需要的話，你可以用它來設定withCredentials為true的跨域請求。
$.ajax()函式所有的基礎jQuery的Ajax請求傳送。它往往不是必須的，直接呼叫這個函式，幾個高層次的替代品如$.get()和.load()可用，更容易使用，如果不常見的選項是必需的，不過，$.ajax( )可以使用更靈活。
在簡單地說，$.ajax()函式可以不帶參數呼叫：
$.ajax();
注意:所有的選項都可以通過$.ajaxSetup()函式來全局設定
這個例子中，不使用選項，加載當前頁面的內容，但其結果沒有。若要使用結果，我們可以實現的回呼功能之一。
jqXHR 物件
該jQuery的XMLHttpRequest（jqXHR）物件回傳$.ajax() 在jQuery 1.5是一個物件的超集瀏覽器的原生的XMLHttpRequest。例如，它包含responseText和responseXML性能，以及一個getResponseHeader()方法。當傳輸機制是XMLHttpRequest以外的東西（例如，一個一個JSONP請求腳本標籤）的jqXHR物件盡可能的模擬原生的XHR功能。
在jQuery 1.5.1，在jqXHR物件還包含了overrideMimeType方法。
$.ajax()回傳的jqXHR物件實現約定的接口，給他們的所有屬性，方法，和約定的行為（見Deferred object獲取更多資訊）。為了方便和一致性$.ajax()回呼函式名稱中使用。jqXHR也提供.error() .success()和.complete()方法。這些方法當$.ajax()請求終止時需要一個函式參數呼叫，這個函式接收$.ajax()回呼函式名相同的參數。在jQuery 1.5這允許你指定一個請求的多個回呼，甚至可能分配請求後已完成回呼。（如果請求已經完成，回呼立即觸發。）
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.ajax({ url: "example.php" })
    .success(function() { alert("success"); })
    .error(function() { alert("error"); })
    .complete(function() { alert("complete"); });

// perform other work here ...

// Set another completion function for the request above
jqxhr.complete(function(){ alert("second complete"); });
為了向後兼容XMLHttpRequest，一jqXHR物件將公開下列屬性和方法：
• readyState
• status
• statusText
• responseXML and/or responseText當底層的請求分別作出XML和/或文本回應
• setRequestHeader(name, value)這背離了換上了新一舊的價值，而不是串聯的新值與舊標準
• getAllResponseHeaders()
• getResponseHeader()
• abort()
假如沒有onreadystatechange機制，不管怎樣由於success，error，complete和statusCode覆蓋所有可能的要求。
回呼函式
如果要處理$.ajax()得到的資料，則需要使用回呼函式。beforeSend、error、dataFilter、success、complete。
在jQuery 1.5， error，success，和complete回呼鉤 子先入先出隊列管理。這意味著你可以為每個掛鉤分配多個回呼。見Deferred object methods，這是實現內部的$.ajax()回呼掛鉤。
在this回呼是在所有參考物件在context選項傳遞給$.ajax在設定;如果context沒有指定，this是他們自己的Ajax設定參考。
某些類型Ajax的請求，如JSONP形式和跨域的GET請求，請不要使用XHR;在這些情況 下XMLHttpRequest和textStatus參數傳遞給回呼是undefined。
這裡有$.ajax()提供的鉤子回呼：
1.  beforeSend在傳送請求之前呼叫，它接收jqXHR物件和settings作為參數物件。
2.  error在請求出錯時呼叫。如果請求失敗，在它們的順序依次登記。他們收到jqXHR，字串表示的錯誤類型，如果適用的異常物件。一些內定的錯誤，將提供作為例外物件的字串： "abort", "timeout", "No Transport"。
3.  dataFilter在請求成功之後呼叫。傳入回傳的資料以及dataType參數的值。並且必須回傳新的資料（可能是處理過的）傳遞給success回呼函式。
4.  success當請求之後呼叫。傳入回傳後的資料，以及包含成功程式碼的字串。他們收到回傳的資料，一個包含成功的程式碼和jqXHR物件。
5.  complete它們的順序依次登記回呼，請求完成時，無論是在失敗或成功。他們收到jqXHR物件，以及一個包含成功或錯誤程式碼。
For example,通過使用回傳的HTML，我們可以實現一個success事件處理器：
$.ajax({
  url: 'ajax/test.html',
  success: function(data) {
    $('.result').html(data);
    alert('Load was performed.');
  }
});
資料類型
$.ajax()函式依賴伺服器提供的資訊來處理回傳的資料。如果伺服器報告說回傳的資料是XML，那麼回傳的結果就可以用普通的XML方法或者jQuery的選擇器來遍歷。如果見得到其他類型，比如HTML，則資料就以文本形式來對待。
通過dataType選項還可以指定其他不同資料處理方式。除了單純的XML，還可以指定html、json、jsonp、script或者text。
其中，text和xml類型回傳的資料不會經過處理。這些資料僅僅是傳遞給處理程序的成功，無論是通過responseText或responseXML所有的jqXHR物件。
注意:我們必須確保網頁伺服器報告的MIME類型與我們選擇的dataType所匹配。比如說，XML的話，伺服器端就必須聲明text/xml或者application/xml來獲得一致的結果。
如果指定為html類型，任何內嵌的JavaScript都會在HTML作為一個字串回傳之前執行。類似的，指定script類型的話，也會先執行伺服器端生成JavaScript，然後再把腳本作為一個文本資料回傳。
如果指定為json類型，則會把獲取到的資料作為一個JavaScript物件來解析，並且把構建好的物件作為結果回傳。為了實現這個目的，他首先嘗試使用jQuery.parseJSON()。如果瀏覽器不支援，則使用一個Function來構建。JSON資料是一種能很方便通過JavaScript解析的結構化資料。如果獲取的資料文件存放在遠程伺服器上（域名不同，也就是跨域獲取資料），則需要使用jsonp類型。使用這種類型的話，會創建一個查詢字串參數callback=?，這個參數會加在請求的URL後面。伺服器端應當在JSON資料前加上回呼函式名，以便完成一個有效的JSONP請求。如果要指定回呼函式的參數名來取代預設的callback，可以通過設定$.ajax()的jsonp參數。
注意: JSONP是JSON格式的擴展。他要求一些伺服器端的程式碼來檢測並處理查詢字串參數。更多資訊可以參閱original post detailing its use .
如果指定了script或者jsonp類型，那麼當從伺服器接收到資料時，實際上是用了<script>標籤而不是XMLHttpRequest物件。這種情況下，$.ajax()不再回傳一個XMLHttpRequest物件，並且也不會傳遞事件處理函式，比如beforeSend。
傳送資料到伺服器
預設情況下，Ajax請求使用GET方法。如果要使用POST方法，可以設定type參數值。這個選項也會影響data選項中的內容如何傳送到伺服器。
data選項既可以包含一個查詢字串，比如key1=value1&key2=value2 ，也可以是一個映射，比如{key1: 'value1', key2: 'value2'} 。如果使用了後者的形式，則資料再傳送器會被轉換成查詢字串。這個處理過程也可以通過設定processData選項為false來迴避。如果我們希望傳送一個XML物件給伺服器時，這種處理可能並不合適。並且在這種情況下，我們也應當改變contentType選項的值，用其他合適的MIME類型來取代預設的application/x-www-form-urlencoded 。
高級選項
global選項用於阻止回應註冊的回呼函式，比如.ajaxSend，或者ajaxError，以及類似的方法。這在有些時候很有用，比如傳送的請求非常頻繁且簡短的時候，就可以在ajaxSend裡禁用這個。更多關於這些方法的詳細資訊，請參閱下面的內容。
如果伺服器需要HTTP認證，可以使用使用者名和密碼可以通過username和password選項來設定。
Ajax請求是限時的，所以錯誤警告被捕獲並處理後，可以用來提升使用者體驗。請求超時這個參數通常就保留其預設值，要不就通過jQuery.ajaxSetup來全局設定，很少為特定的請求重新設定timeout選項。
預設情況下，請求總會被發出去，但瀏覽器有可能從他的緩存中調取資料。要禁止使用緩存的結果，可以設定cache參數為false。如果希望判斷資料自從上次請求後沒有更改過就報告出錯的話，可以設定ifModified為true。
scriptCharset允許給<script>標籤的請求設定一個特定的字符集，用於script或者jsonp類似的資料。當腳本和頁面字符集不同時，這特別好用。
Ajax的第一個字母是asynchronous的開頭字母，這意味著所有的操作都是並行的，完成的順序沒有前後關係。$.ajax()的async參數總是設定成true，這標誌著在請求開始後，其他程式碼依然能夠執行。強烈不建議把這個選項設定成false，這意味著所有的請求都不再是非同步的了，這也會導致瀏覽器被鎖死。
$.ajax函式回傳他創建的XMLHttpRequest物件。通常jQuery只在內部處理並創建這個物件，但使用者也可以通過xhr選項來傳遞一個自己創建的xhr物件。回傳的物件通常已經被丟棄了，但依然提供一個底層接口來觀察和操控請求。比如說，呼叫物件上的.abort()可以在請求完成前掛起請求。
擴展的Ajax
在jQuery 1.5，，jQuery的Ajax實現包括預過濾器，轉換器和傳輸，讓您擴展了很大的靈活性Ajax。如需有關這些先進功能的資訊，請參閱Extending Ajax
其他注意事項：
• 由於瀏覽器的安全限制，大多數“Ajax”的要求，均採用同一起源的政策 ;該請求不能成功地檢索來自不同的域，子域或協議的資料。
• Script和JSONP形式請求不受同源策略的限制。
Examples:
Example: 加載並執行一個JS文件。
$.ajax({
   type: "GET",
   url: "test.js",
   dataType: "script"
 });
Example: 保存資料到伺服器，成功時顯示資訊。
$.ajax({
   type: "POST",
   url: "some.php",
   data: "name=John&location=Boston",
   success: function(msg){
     alert( "Data Saved: " + msg );
   }
 });
Example: 裝入一個HTML網頁最新版本。
$.ajax({
  url: "test.html",
  cache: false,
  success: function(html){
    $("#results").append(html);
  }
});
Example: 同步加載資料。傳送請求時鎖住瀏覽器。需要鎖定使用者交互操作時使用同步方式。
var html = $.ajax({
  url: "some.php",
  async: false
 }).responseText;
Example: 傳送XML資料至伺服器。設定processData選項為false，防止自動轉換資料格式。
var xmlDocument = [create xml document];
 $.ajax({
   url: "page.php",
   processData: false,
   data: xmlDocument,
   success: handleResponse
 });
Example: 作為傳送資料到伺服器的ID，保存一些資料到伺服器，並通知使用者一旦它的完成。請注意，此用法-回傳到一個變量的呼叫的結果-需要同步（阻塞）的要求！（非同步：假）
bodyContent = $.ajax({
      url: "script.php",
      global: false,
      type: "POST",
      data: ({id : this.getAttribute('id')}),
      dataType: "html",
      async:false,
      success: function(msg){
         alert(msg);
      }
   }
).responseText;

