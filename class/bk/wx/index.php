<?php
	#导入微信分享调用库
 	include('./jssdk.php');
    $url =  $_POST["url"];
 	$appid = 'wxafb0b8f6c6cc41f6';
 	$appsecret = 'da6b0edac0ee67df56b42850ab7ed1b2';
	$jssdk = new JSSDK($appid, $appsecret, $url);
	$signPackage = $jssdk->GetSignPackage();
	$appId = $signPackage['appId'];
	$timestamp = $signPackage['timestamp'];
	$nonceStr = $signPackage['nonceStr'];
	$signature = $signPackage['signature'];
	$data = array("appId"=>$appId,"timestamp"=>$timestamp,"nonceStr"=>$nonceStr,"signature"=>$signature); //返回给前端的数据
    //var_dump($trans_data);
	echo json_encode($data,true);
?>
 