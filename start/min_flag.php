<?php
header("Access-Control-Allow-Origin: *");
header('content-type:application/json;charset=utf8');//输出为 json格式


$array = array(
    array(                       
    typeimg=>"/it/images/min/min-font.jpg",
    id=>420,    
    typename=>"前端面试真题",    
    ),
    array(                       
        typeimg=>"/it/images/min/min-py.jpg",
        id=>338,    
        typename=>"python面试题",    
     ),
 
    
);
$array2 = array(
  array(                       
        typeimg=>"/uploads/190723/1-1ZH3231600B9.png",
        id=>338,    
        typename=>"python面试题",    
     ),
   array(                       
        typeimg=>"/uploads/190727/1-1ZHG15624324.png",
        id=>345,    
        typename=>"面试宝典",    
     ),
    array(                       
    typeimg=>"/it/images/icon/html5.jpg",
    id=>420,    
    typename=>"前端",    
    ));
    
$arrayFlag = array(
    "gallery" => $array,
    "hot" => $array2,
);
echo json_encode($arrayFlag);
   
    // http_post($url2,$timeout = 60,$post_data);
?>