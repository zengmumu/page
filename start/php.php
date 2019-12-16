<?php
header("Access-Control-Allow-Origin: *");
header('content-type:application/json;charset=utf8');//输出为 json格式


$array = array(
   
    array(                       
        typeimg=>"/it/images/min/psql.jpg",
        id=>467,    
        typename=>"PHP+MySQL",    
     ),
     array(                       
    typeimg=>"/it/images/min/mphp.jpg",
    id=>433,    
    typename=>"PHP教程",    
    )
 
    
);
$array2 = array(
  array(                       
        typeimg=>"/it/images/icon/php.jpg",
        id=>433,    
        typename=>"php教程",    
     ),
   
    array(                       
    typeimg=>"/it/images/icon/psql.jpg",
    id=>474,    
    typename=>"PHP实战",    
    ),
    array(                       
        typeimg=>"/it/images/icon/mysql.jpg",
        id=>467,    
        typename=>"PHP+MySQL",    
     )
);
    
$arrayFlag = array(
    "gallery" => $array,
    "hot" => $array2,
);
echo json_encode($arrayFlag);
   
    // http_post($url2,$timeout = 60,$post_data);
?>