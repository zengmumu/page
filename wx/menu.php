<?php
header("Content-type: text/html; charset=utf-8");
define("ACCESS_TOKEN", "22_ia3CyDTL-9crvhs45-l4ouKYIymseBqA2ZFV8ShRa1uQMxtbDXsbT-22tK-c84j3Z_kib7PUwASwfclpsV8LAbqDdAPjBhhysj_iBOmBw5aMW5FXueufpPe9rfqGEppZa4ycITSYuGFP_4IsCLEiACAXGZ");
//创建菜单
function createMenu($data){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".ACCESS_TOKEN);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
 
if (ini_get('open_basedir') == '' && ini_get('safe_mode' == 'Off')) {

    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);

}
curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$tmpInfo = curl_exec($ch);
if (curl_errno($ch)) {
 return curl_error($ch);
}
curl_close($ch);
return $tmpInfo;
}
//获取菜单
function getMenu(){
return file_get_contents("https://api.weixin.qq.com/cgi-bin/menu/get?access_token=".ACCESS_TOKEN);
}
//删除菜单
function deleteMenu(){
return file_get_contents("https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=".ACCESS_TOKEN);
}
$data = '{
  "button":[
  {
   "type":"click",
   "name":"首页",
   "key":"home"
  },
  {
   "type":"click",
   "name":"简介",
   "key":"introduct"
  },
  {
   "name":"菜单",
   "sub_button":[
   {
    "type":"click",
    "name":"hello word",
    "key":"V1001_HELLO_WORLD"
   },
   {
    "type":"click",
    "name":"赞一下我们",
    "key":"V1001_GOOD"
   }]
  }]
}';
echo createMenu($data);