[{
      "answer": 64,
      "typeid": 158,
      "difficulty": 3,
      "explans": "答案:C",
      "id": 18755,
      "label": "7.1.1.9",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "optiona": "onmousedown：某个鼠标按键被按下",
      "optionb": "onkeypress：某个键盘的键被按下或按住",
      "optionc": "onblur：元素获得焦点",
      "optiond": "onchange：用户改变域的内容",
      "optionE": "",
      "optionF": "",
      "optionG": "",
      "optionH": "",
      "optiontype": 1,
      "question": "下面有关javascript常见事件的触发情况，描述错误的是？",
      "id": 910600,
      "falseCount": 1458798,
      "trueCount": 12655560,
      "wrongRate": 0.10335560427190525
    },
    {
      "answer": 32,
      "typeid":152,
      "difficulty": 3,
      "explans": "<p>答案：B</p><p>for 循环 过后 i的最终值 是9<br> 结果 hello+2X9+9=hello189</p> ",
      "id": 18756,
      "label": "7.1.1.10",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "optiona": "hello",
      "optionb": "hello189",
      "optionc": "hello30",
      "optiond": "hello27",
      "optionE": "",
      "optionF": "",
      "optionG": "",
      "optionH": "",
      "optiontype": 1,
      "question": "<p>最后一句alert的输出结果是？<p><pre class='brush:js; toolbar: false; auto-links: false;'>var msg='hello';\r\nfor (var i=0; i<10; i++){\r\n var msg='hello'+i*2+i;\r\n}\r\nalert(msg); </pre>", "id": 910700, "falseCount": 1942266, "trueCount": 12380142,
      "wrongRate": 0.13561029681601028
    },
     {
      "answer": 32,
      "typeid": 159,
      "difficulty": 1,
      "explans": "<p>答案：B</p> ",
      "id": 18756,
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "Array",
      "optionb": "Object",
      "optionc": "String",
      "optiond": "Function",      
      "optiontype": 1,
      "question": "JavaScript中document.getElementById的返回值的类型为?", 
      "id": 10001, 
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":48,
      "typeid": 141,
      "difficulty": 1,
      "explans": "<p>答案：AB</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "oStringObject instanceof String",
      "optionb": "typeof oStringObject == 'string'",
      "optionc": "oStringObject is String",
      "optiond": "以上答案都不正确",      
      "optiontype": 2,
      "question": "下面哪些语句可以在JS里判断一个对象oStringObject是否为String。", 
      "id": 10002, 
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":64,
      "typeid": 154,
      "difficulty": 2,
      "explans": "<p>答案：C</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "bar bar bar bar",
      "optionb": "bar bar bar undefined",
      "optionc": "bar bar undefined bar",
      "optiond": "undefined bar undefined bar",      
      "optiontype": 1,
      "question": "下面程序的输出是什么？<div> <pre class='brush:js; toolbar: false; auto-links: false;'>var myObject = {\r\n foo: 'bar',\r\n func: function() {\r\n var self = this;\r\n console.log(this.foo);\r\n console.log(self.foo);\r\n (function() {\r\n console.log(this.foo);\r\n console.log(self.foo);\r\n }());\r\n }\r\n };\r\n myObject.func();\r\n</pre></div>",
      "id": 10003,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":16,
      "typeid": 166,
      "difficulty": 2,
      "explans": "<p>答案：A</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "域名、端口相同,协议不同,属于相同的域",
      "optionb": "js可以使用jsonp进行跨域",
      "optionc": "通过修改document.domain来跨子域",
      "optiond": "使用window.name来进行跨域",      
      "optiontype": 1,
      "question": "下面有关浏览器中使用js跨域获取数据的描述，说法错误的是？",
      "id": 10004,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":16,
      "typeid": 154,
      "difficulty": 2,
      "explans": "<p>答案：A</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "0 1 0",
      "optionb": "0 1 2",
      "optionc": "0 0 0",
      "optiond": "0 0 2",      
      "optiontype": 1,
      "question": "下面这个JS程序的输出是什么：？<div><pre class='brush:js; toolbar: false; auto-links: false;'>function Foo() {\r\n \tvar i = 0;\r\n \treturn function() {\r\n \tconsole.log(i++);\r\n \t}\r\n }\r\n</pre></div>",
      "id": 10005,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":128,
      "typeid": 156,
      "difficulty": 1,
      "explans": "<p>答案：D</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "round(7.25)",
      "optionb": "rnd(7.25)",
      "optionc": "Math.rnd(7.25)",
      "optiond": "Math.round(7.25)",      
      "optiontype": 1,
      "question": "如何把 7.25 四舍五入为最接近的整数？",
      "id": 10006,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":16,
      "typeid": 154,
      "difficulty": 3,
      "explans": "<p>答案：A</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "undefined,undefined,3,3,undefined,3",
      "optionb": " undefined,undefined，3,3，undefined，undefined",
      "optionc": " 0,0,3,3,undefined，undefined",
      "optiond": "undefined,undefined,3,3,0,0",      
      "optiontype": 1,
      "question": "写出下面代码的运行结果 <div><pre class='brush:js; toolbar: false; auto-links: false;'>var a,b;\r\n (function(){\r\n \talert(a);\r\n \talert(b);\r\n \tvar a=b=3;\r\n \talert(a);\r\n \talert(b);\r\n })();\r\n alert(a);\r\n alert(b);\r\n</pre></div>", 
      "id": 10006,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":16,
      "typeid": 155,
      "difficulty": 3,
      "explans": "<p>答案：A</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "hi",
      "optionb": "  hi hello",
      "optionc": " hello",
      "optiond": "不显示",      
      "optiontype": 1,
      "question": "写出下面代码的运行结果 <div><pre class='brush:js; toolbar: false; auto-links: false;'>var x = new Boolean(false);\r\n if (x) {\r\n \talert('hi');\r\n }\r\n var y = Boolean(0);\r\n if (y) {\r\n \talert('hello'); \r\n }\r\n</div>",
      "id": 10007,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":96,
      "typeid": 154,
      "difficulty": 3,
      "explans": "<p>答案：BC</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "function=myFunction(){语句..}",
      "optionb": "function myFunction(){语句...}",
      "optionc": "myfunction = function(){语句..}",
      "optiond": "myFunction(){语句..}",      
      "optiontype": 2,
      "question": "下列哪两项可以创建函数？",
      "id": 10008,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":32,
      "typeid": 160,
      "difficulty": 1,
      "explans": "<p>答案：B</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "innerText IE支持，FIREFOX不支持",
      "optionb": "document.createElement FIREFOX支持，IE不支持",
      "optionc": "setAttribute('class'，'styleClass') FIREFOX支持，IE不支持",
      "optiond": "用setAttribute设置事件 FIREFOX不支持，IE支持",      
      "optiontype": 1,
      "question": "下面关于IE、FF下面脚本的区别描述错误的是？",
      "id": 10009,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":240,
      "typeid": 154,
      "difficulty": 2,
      "explans": "<p>答案：ABCD</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "回调函数",
      "optionb": "事件监听",
      "optionc": "发布/订阅",
      "optiond": " Promises对象",      
      "optiontype": 2,
      "question": "下面哪些方法可以用作javascript异步模式的编程？",
      "id": 1410,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":240,
      "typeid": 161,
      "difficulty": 1,
      "explans": "<p>答案：ABCD</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "History 对象包含用户（在浏览器窗口中）访问过的 URL",
      "optionb": "Location 对象包含有关当前 URL 的信息",
      "optionc": "Window 对象表示浏览器中打开的窗口",
      "optiond": "Navigator 对象包含有关浏览器的信息",      
      "optiontype": 2,
      "question": "下面有关javascript内部对象的描述，正确的有？",
      "id": 1411,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":240,
      "typeid": 151,
      "difficulty": 1,
      "explans": "<p>答案：ABCD</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "字符串",
      "optionb": "数字",
      "optionc": "null 和 undefined",
      "optiond": "布尔",      
      "optiontype": 2,
      "question": "下面属于javascript基本数据类型的有？",
      "id": 1412,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":240,
      "typeid": 167,
      "difficulty": 1,
      "explans": "<p>答案：ABCD</p><div>把js的代码放在body里面，最好是放在页面最后的位置，而不是放在head里面。这样整个页面加载结束的时候才会加载到js</div> <p>你可以使用js函数动态的修改页面</p><div><pre class='brush:js; toolbar: false; auto-links: false;'>function include_js(path) {\r\n \tvar sobj = document.createElement('script');\r\n \tsobj.type = \"text/javascript\";\r\n \tsobj.src = path;\r\n \tvar headobj = document.getElementsByTagName('head')[0];\r\n \theadobj.appendChild(sobj);\r\n }</pre></div>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " 通过ajax下载js脚本，动态添加script节点",
      "optionb": "把js的代码放在body里面，最好是放在页面最后的位置",
      "optionc": "你可以使用js函数动态的修改页面",
      "optiond": "使用sea.js之类库动态异步加载",      
      "optiontype": 2,
      "question": "下面哪些方式可以用于javascript延迟加载？",
      "id": 1413,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":240,
      "typeid": 167,
      "difficulty": 2,
      "explans": "<p>答案：ABCD</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " 可以通过命名规范，比如根据不同的开发人员实现的功能，在函数名加前缀",
      "optionb": "每个开发人员都把自己的函数封装到类中，然后调用的时候即使函数名相同，但是因为是要类.函数名来调用，所以也减少了重复的可能性",
      "optionc": "用seajs这类包管理工具解决命名冲突很常见啊，全都封装在匿名函数中就解决了",
      "optiond": "以上都对",      
      "optiontype": 2,
      "question": "如何规避javascript多人开发函数重名问题?",
      "id": 1414,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":208,
      "typeid": 167,
      "difficulty": 2,
      "explans": "<p>答案：ACD</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " module",
      "optionb": "context",
      "optionc": "require",
      "optiond": "exports",      
      "optiontype": 2,
      "question": "按照CommonJS规范，在任何模块代码的作用域下内置了以下哪些变量？",
      "id": 1415,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":240,
      "typeid": 167,
      "difficulty": 2,
      "explans": "<p>答案：ABCD</p> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "Ajax的优势在意在于可搜索性，开放性，易用性及易于开发",
      "optionb": "Flash的优势在于多媒体处理，可以更容易的调用浏览器以外的外部资源",
      "optionc": "Ajax最主要的批评就是它可能破坏浏览器的后退功能",
      "optiond": "flash 文件经常会很大，用户第一次使用的时候需要忍耐较长的等待时间",      
      "optiontype": 2,
      "question": "下列关于比较Ajax与Flash的优缺点，相关描述正确的是？",
      "id": 1419,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":224,
      "typeid": 164,
      "difficulty": 2,
      "explans": "<p>答案：BCD</p><div>application cache是HTML5的一种新技术，应用缓存，HTML5 使用ApplicationCache 接口解决了由离线带来的部分难题。前提是你需要访问的web页面至少被在线访问过一次<p>C:每次都会下载minifest</p><p>D://修改了不会重新下载</p></div> ",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "对于目标页面而言，可以通过来启用application cache。",
      "optionb": "对于启用了application cache的页面，该页面默认不会被缓存。",
      "optionc": "manifest文件仅在初次访问站点时才会被下载。",
      "optiond": "对于manifest中列出的资源文件，只要它们被修改，下次访问站点时就会被重新下载",      
      "optiontype": 2,
      "question": "以下关于application cache的说法，哪些是不正确的？",
      "id": 1510,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":240,
      "typeid": 164,
      "difficulty": 2,
      "explans": "<p>答案：ABCD</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "CSSSprite",
      "optionb": " SVGSprite",
      "optionc": "Iconfont",
      "optiond": "Base64",      
      "optiontype": 2,
      "question": "下面哪些技术可用于优化 CSS 图片加载 ?",
      "id": 1511,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":48,
      "typeid": 167,
      "difficulty": 2,
      "explans": "<p>答案：AB</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "非独立",
      "optionb": "效率低",
      "optionc": "独立",
      "optiond": "效率高性",      
      "optiontype": 2,
      "question": "解释语言的特性有什么？",
      "id": 1512,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":128,
      "typeid": 155,
      "difficulty": 2,
      "explans": "<p>答案：D</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "typeof(arr)",
      "optionb": "arr instanceof Array",
      "optionc": "arr.toString==='[object Array]'",
      "optiond": " Object.prototype.toString.call(arr) === '[object Array]'",      
      "optiontype": 1,
      "question": "如何判断一个js对象是否是Array,arr为要判断的对象，其中最准确的方法是？",
      "id": 1513,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":128,
      "typeid": 166,
      "difficulty": 1,
      "explans": "<p>答案：D</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "｛name:\"xiaoming\",age:\"student\"｝",
      "optionb": "｛\"name\":\"xiaoming\",\"age\":\"student\"｝",
      "optionc": "｛\"xiaoming\",\"student\"｝",
      "optiond": " [\"xiaoming\",\"student\"] ",      
      "optiontype": 1,
      "question": "下面哪一个是JSON数组？",
      "id": 1514,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":64,
      "typeid": 155,
      "difficulty": 1,
      "explans": "<p>答案：C</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "判断obj对象是否具有val属性",
      "optionb": "判断obj对象是否具有val的值",
      "optionc": "判断obj的原型对象是否具有val的属性",
      "optiond": "判断obj的原型对象是否具有val的值",      
      "optiontype": 1,
      "question": "hasOwnProperty的作用是？<div><pre class='brush:js; toolbar: false; auto-links: false;'>var obj={}\r\nobj.hasOwnProperty(\"val\")</pre></div>",
      "id": 1515,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":16,
      "typeid": 155,
      "difficulty": 1,
      "explans": "<p>答案：A</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " JohnDoe25",
      "optionb": " fname:\"John\",lname:\"Doe\",age:25",
      "optionc": "fname:John,lname:Doe,age:25",
      "optiond": "fnamelnameage",      
      "optiontype": 1,
      "question": "下列代码输出为？<div><pre class='brush:js; toolbar: false; auto-links: false;'>var person={fname:\"John\",lname:\"Doe\",age:25};\r\n var txt=\"\";\r\n for (x in person) {\r\n \ttxt=txt + person[x];\r\n }\r\nalert(txt);\r\n</pre></div>",
      "id": 1516,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
      {
      "answer":128,
      "typeid": 151,
      "difficulty": 1,
      "explans": "<p>答案：D</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String。",
      "optionb": "var sTemp = \"test string\";alert (typeof sTemp);结果为string",
      "optionc": "var oTemp;alert(oTemp == undefined);结果为true",
      "optiond": "alert(null == undefined);结果为false",      
      "optiontype": 1,
      "question": "关于javascript的原始类型（primitive type），错误的是",
      "id": 1517,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
  {
      "answer":32,
      "typeid": 151,
      "difficulty": 1,
      "explans": "<p>答案：B</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "一般使用var key=val的形式赋值",
      "optionb": "由于javascript的动态特性，常常直接采取key= val的形式赋值",
      "optionc": "若声明而未对变量赋值，该变量的值为undefined",
      "optiond": "var carname=\"Volvo\";var carname;顺序执行后，caranme的值依然为Volvo",      
      "optiontype": 1,
      "question": "关于对变量的说法，错误的是？",
      "id": 1518,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":128,
      "typeid": 154,
      "difficulty": 2,
      "explans": "<p>答案：D</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "number",
      "optionb": "undefined",
      "optionc": "function",
      "optiond": "Error",      
      "optiontype": 1,
      "question": "下列代码输出为？<div><pre class='brush:js; toolbar: false; auto-links: false;'>var f = function g() {\r\n \treturn 23;\r\n };\r\n typeof g();</pre></div>",
      "id": 1519,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":128,
      "typeid": 161,
      "difficulty": 1,
      "explans": "<p>答案：D</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "open.new(\"http://www.qingkt.com\",\"window2\")",
      "optionb": "new.window(\"http://www.qingkt.com\",\"window2\")",
      "optionc": "new(\"http://www.qingkt.com\",\"window2\")",
      "optiond": "window.open(\"http://www.qingkt.com\",\"window2\")",      
      "optiontype": 1,
      "question": "打开名为 \"window2\" 的新窗口的 JavaScript 语法是？",
      "id": 1520,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":128,
      "typeid": 160,
      "difficulty": 1,
      "explans": "<p>答案：D</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " (\"Hello World\")",
      "optionb": "\"Hello World\"",
      "optionc": "response.write(\"Hello World\")",
      "optiond": "document.write(\"Hello World\")",      
      "optiontype": 1,
      "question": "页面中写 \"Hello World\" 的正确 Javascript 语法是",
      "id": 1521,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":32,
      "typeid": 167,
      "difficulty": 1,
      "explans": "<p>答案：B</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " 2 Byte",
      "optionb": " 4 Byte",
      "optionc": " 8 Byte",
      "optiond": " 16Byte",      
      "optiontype": 1,
      "question": "javascirpt中的数字在计算机内存储为多少Byte？",
      "id": 1522,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
 {
      "answer":16,
      "typeid": 155,
      "difficulty": 1,
      "explans": "<p>答案：A</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " var txt = new Array(\"tim\",\"kim\",\"jim\")",
      "optionb": " var txt = new Array=\"tim\",\"kim\",\"jim\"",
      "optionc": " var txt = new Array:1=(\"tim\")2=(\"kim\")3=(\"jim\")",
      "optiond": " var txt = new Array(1:\"tim\",2:\"kim\",3:\"jim\")",      
      "optiontype": 1,
      "question": "哪一个是javascript中array的正确写法？",
      "id": 1523,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":32,
      "typeid": 161,
      "difficulty": 1,
      "explans": "<p>答案：B</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " window.setTimeout(checkState, 10);",
      "optionb": " window.setTimeout(checkState, 10000);",
      "optionc": " window.setTimeout(checkState(), 10000)",
      "optiond": " window.setTimeout(checkState(), 10000)",      
      "optiontype": 1,
      "question": "要在10秒后调用checkState，下列哪个是正确的",
      "id": 1524,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":64,
      "typeid": 141,
      "difficulty": 1,
      "explans": "<p>答案：C</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " &ltscript href=\"myScript.js\">",
      "optionb": " &ltscript name=\"myScript.js\">",
      "optionc": " &ltscript src=\"myScript.js\">",
      "optiond": " &ltscript root=\"myScript.js\">",      
      "optiontype": 1,
      "question": "下列哪个正确的引入了myScript.js？",
      "id": 1525,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":128,
      "typeid": 166,
      "difficulty": 1,
      "explans": "<p>答案：C</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "  制止脚本的运行",
      "optionb": "  防止区域脚本被js修改(例如aDiv.innerHTML = 'something' 将会不起作用)",
      "optionc": " 用来定义在脚本未被执行时的替代内容",
      "optiond": " NOSCRIPT 标签并不存在",      
      "optiontype": 1,
      "question": "NOSCRIPT标签是做什么用的？",
      "id": 1526,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":32,
      "typeid": 141,
      "difficulty": 1,
      "explans": "<p>答案：B</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "  prepare ()",
      "optionb": "  open ()",
      "optionc": "  init ()",
      "optiond": "  build ()",      
      "optiontype": 1,
      "question": "在准备XMLHttpRequest对象时，在send()前需要调用哪个方法？",
      "id": 1527,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
     {
      "answer":32,
      "typeid": 154,
      "difficulty": 1,
      "explans": "<p>答案：B</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "  true，true，true",
      "optionb": "  true，true，false",
      "optionc": "  false，false，true",
      "optiond": "  false，false，false",      
      "optiontype": 1,
      "question": "以下Js程序的输出是什么?<div><pre class='brush:js; toolbar: false; auto-links: false;'>var a=\"undefined\";\r\n var b=\"false\";\r\n var c=\"\";\r\n function assert(aVar){\r\n \tif(aVar){\r\n \talert(true);} else{\r\n \talert(false);}\r\n }\r\n assert(a);\r\n assert(b);\r\n assert(c);\r\n </pre></div>",
      "id": 1528,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },{
      "answer":64,
      "typeid": 154,
      "difficulty": 1,
      "explans": "<p>答案：C</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "  bar bar bar bar",
      "optionb": "  bar bar bar undefined",
      "optionc": "  bar bar undefined bar",
      "optiond": "  undefined bar undefined bar",      
      "optiontype": 1,
      "question": "以下Js程序的输出是什么?<div><pre class='brush:js; toolbar: false; auto-links: false;'>var myObject = {\r\n \tfoo: \"bar\",\r\n \tfunc: function() {\r\n \t\tvar self = this;\r\n \t\tconsole.log(this.foo);\r\n \t\tconsole.log(self.foo);\r\n \t\t(function() {\r\n \t\tconsole.log(this.foo);\r\n \t\tconsole.log(self.foo);\r\n \t\t }());\r\n \t} };\r\n myObject.func();\r\n</pre></div>",
      "id": 10040,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
   {
      "answer":32,
      "typeid": 155,
      "difficulty": 1,
      "explans": "<p>答案：B</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "<p style='margin-bottom:50px'>call与aplly都属于Function.prototype的一个方法，所以每个function实例都有call、apply属性</p>",
      "optionb": "两者传递的参数不同，call函数第一个参数都是要传入给当前对象的对象，apply不是",
      "optionc": "apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入",
      "optiond": "call传入的则是直接的参数列表。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。",      
      "optiontype": 1,
      "question": "下面有关JavaScript中 call和apply的描述，错误的是？",
      "id": 10041,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
 {
      "answer":64,
      "typeid": 158,
      "difficulty": 1,
      "explans": "<p>答案：C onblur:失去焦点</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " onmousedown：某个鼠标按键被按下",
      "optionb": " onkeypress：某个键盘的键被按下或按住",
      "optionc": " onblur：元素获得焦点",
      "optiond": " onchange：用户改变域的内容",      
      "optiontype": 1,
      "question": "下面有关javascript常见事件的触发情况，描述错误的是？",
      "id": 10042,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":32,
      "typeid": 161,
      "difficulty": 1,
      "explans": "<p>答案：B isNaN:检测非数字</p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " parseFloat方法：该方法将一个字符串转换成对应的小数",
      "optionb": "isNaN方法：该方法用于检测参数是否为数值型，如果是，返回true，否则，反回false。",
      "optionc": " eval方法：该方法将某个参数字符串作为一个JavaScript执行",
      "optiond": " escape方法： 该方法返回对一个字符串编码后的结果字符串",      
      "optiontype": 1,
      "question": "下面有关javascript系统方法的描述，错误的是？",
      "id": 10043,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":16,
      "typeid": 151,
      "difficulty": 1,
      "explans": "<p>答案：A </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " _$te$t2",
      "optionb": "with",
      "optionc": "a bc",
      "optiond": " 2a",      
      "optiontype": 1,
      "question": "下面符合一个有效的javascript变量定义规则的是？",
      "id": 10044,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
   {
      "answer":64,
      "typeid": 167,
      "difficulty": 1,
      "explans": "<p>答案：C </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "a+=b",
      "optionb": "a = a+b",
      "optionc": "Array.push()",
      "optiond": " 2a",      
      "optiontype": 1,
      "question": "js中字符串连接用那个比较高效？",
      "id": 10045,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
{
      "answer":64,
      "typeid": 167,
      "difficulty": 1,
      "explans": "<p>答案：C </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "1 1",
      "optionb": "1 2",
      "optionc": "2 1",
      "optiond": "2 2",      
      "optiontype": 1,
      "question": "给出这段代码的运行结果<div><pre class='brush:js; toolbar: false; auto-links: false;'>function aa(bb) {\r\n \tbb = 2;\r\n \talert(bb);\r\n };\r\n aa(bb);\r\n alert(bb);\r\n</pre></div>",
      "id": 10046,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },

{
      "answer":64,
      "typeid": 151,
      "difficulty": 2,
      "explans": "<p>答案：C </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "122 122 NaN NaN",
      "optionb": "122 32 NaN NaN2",
      "optionc": "122 32 NaN2 NaN",
      "optiond": "122 32 NaN2 NaN2",      
      "optiontype": 1,
      "question": "如下代码输出的结果是什么：<div><pre class='brush:js; toolbar: false; auto-links: false;'>console.log(1+ \"2\"+\"2\");\r\n console.log(1+ +\"2\"+\"2\");\r\n console.log(\"A\"- \"B\"+\"2\");\r\n console.log(\"A\"- \"B\"+2);\r\n</pre></div>", 
      "id": 10047,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
{
      "answer":16,
      "typeid": 166,
      "difficulty": 2,
      "explans": "<p>答案：A </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "域名、端口相同，协议不同，属于相同的域",
      "optionb": "js可以使用jsonp进行跨域",
      "optionc": "通过修改document.domain来跨子域",
      "optiond": "使用window.name来进行跨域",      
      "optiontype": 1,
      "question": "下面有关浏览器中使用js跨域获取数据的描述，说法错误的是？", 
      "id": 10048,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
{
      "answer":32,
      "typeid": 166,
      "difficulty": 2,
      "explans": "<p>答案：A </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " ExtensionContex",
      "optionb": " ExternalInterface",
      "optionc": " IInterpolator",
      "optiond": " FlexContentHolder",      
      "optiontype": 1,
      "question": "flash和js通过什么类如何交互? ", 
      "id": 10049,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
    {
      "answer":16,
      "typeid": 155,
      "difficulty": 1,
      "explans": "<p>答案：A </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " var obj=( );",
      "optionb": " var obj=[ ];",
      "optionc": " var obj={ };",
      "optiond": " var obj=/ /;",      
      "optiontype": 1,
      "question": "以下哪一条Javascript语句会产生运行错误？", 
      "id": 10050,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
  {
      "answer":64,
      "typeid": 151,
      "difficulty": 1,
      "explans": "<p>答案：C </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": "  PHP，Python",
      "optionb": "  JSP，servlet;",
      "optionc": "  Java，Javascript;",
      "optiond": "  C，C++",      
      "optiontype": 1,
      "question": "蔺相如，司马相如；魏无忌，长孙无忌。下列哪一组对应关系与此类似?", 
      "id": 10051,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
  {
      "answer":128,
      "typeid": 151,
      "difficulty": 2,
      "explans": "<p>答案：D </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " 依次弹出1，2，3，4",
      "optionb": " 依次弹出0，1，2，3",
      "optionc": " 依次弹出3，3，3，3",
      "optiond": " 依次弹出4，4，4，4",      
      "optiontype": 1,
      "question": "依次点击4个li标签，哪一个选项是正确的运行结果? <div><pre class='brush:js; toolbar: false; auto-links: false;'><ul>\r\n\t<li>click me a</li>\r\n\t<li>click me b</li>\r\n\t<li>click me c</li>\r\n\t<li>click me d</li>\r\n</ul></pre></div><p>运行如下代码：</p> <div><pre class='brush:js; toolbar: false; auto-links: false;'>var elements=document.getElementsByTagName('li');\r\nvar length=elements.length;\r\nfor(var i=0;i<length;i++){\r\n\t elements[i].onclick=function(){\r\n\talert(i);\r\n\t } \r\n }\r\n</pre></div>",
      "id": 10052,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
{
      "answer":16,
      "typeid": 162,
      "difficulty": 2,
      "explans": "<p>答案：A </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " inputElement.style.backgroundColor='red'",
      "optionb": " inputElement.backgroundColor= 'red';",
      "optionc": " inputElement.style.backgroundColor= '#0000'",
      "optiond": " inputElement.backgroundColor= '#0000'",      
      "optiontype": 1,
      "question": "下列js可以让一个input的背景颜色变成红色的是？",
      "id": 10053,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },

{
      "answer":16,
      "typeid": 151,
      "difficulty": 2,
      "explans": "<p>答案：A </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " 13   5",
      "optionb": " 5   13",
      "optionc": " true  false",
      "optiond": " false true",      
      "optiontype": 1,
      "question": "js中13|5=? 13&5=? 结果？",
      "id": 10054,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
    },
{
      "answer":64 ,
      "typeid": 151,
      "difficulty": 2,
      "explans": "<p>答案：C </p>",
      "id": "",
      "label": "",
      "mediaHeight": 0,
      "mediaType": 0,
      "mediaWidth": 0,
      "mediaURL": 0,
      "optiona": " undefined",
      "optionb": " null",
      "optionc": " true",
      "optiond": " false",      
      "optiontype": 1,
      "question": "alert(undefined==null)的输出结果是",
      "id": 10055,
      "falseCount": 0,
      "trueCount": 0,
      "wrongRate": 0
  }
    
     
     ]