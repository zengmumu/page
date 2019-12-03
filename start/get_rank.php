<?php

require_once (dirname(__FILE__)."/../include/common.inc.php");

header("Content-Type: application/json; charset=utf-8");

// require_once(dirname(__FILE__)."/../include/wap.inc.php");


if(!isset($reid)){
	$reid=2;
}



$sql = "SELECT uname,scores FROM `#@__member` WHERE rank<100 order by scores desc limit 0,200";
	


$dsql->SetQuery($sql); 
$dsql->Execute(); 
 
$data=array();
while($row = $dsql->GetArray()){
	array_push($data,$row);
}
 
echo json_encode($data); 
 
die();

?>
