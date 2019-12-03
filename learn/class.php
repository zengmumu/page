
<?php 

header('Content-type: application/json');
$c106=array(
array("url"=>"http://v.youku.com/v_show/id_XMTUxMTE0MzAxNg==.html?f=26944318&o=1?f=26944318&o=1","name"=>"jqueryMobile介绍"),
array("url"=>"http://v.youku.com/v_show/id_XMTUxMTE0MTM0NA==.html?f=26944318&o=1","name"=>"案例演示"),
array("url"=>"http://v.youku.com/v_show/id_XMTUxMTEzOTAxMg==.html?f=26944318&o=1","name"=>"第一个JqueryMobile手机页面"));

if ($_SERVER["REQUEST_METHOD"] == "GET"&&$_GET["id"]) {

	if($_GET["id"]=="106"){
		echo json_encode($c106);
	}
	 
} 
 ?>