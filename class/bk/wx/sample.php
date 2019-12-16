 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
  <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body>
 

 

<script>
window.onload = function(){
    $.support.cors = true;
    var url = location.href.split('#')[0];
    $.ajax({
        url: "./index.php",
        type: "post",
        typeType: "json",
        data: {url:url},
        async: false,
        success: function(data) {
            var _data = data;
            var result = eval('('+ _data +')');
            appid = result.appId;
            timestamp = result.timestamp;
            nonceStr = result.nonceStr;
            signature = result.signature;
        },
    });
    wx.config({
        debug: false,
        appId: appid,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: [
            'onMenuShareAppMessage',
            'onMenuShareTimeline',
        ]
    });
    wx.ready(function() {
        wx.checkJsApi({
            jsApiList: [
                'onMenuShareAppMessage',
                'onMenuShareTimeline',
            ]
        })
        var shareData = {
            title: '项目的title',
            desc: '项目的描述',
            link: '项目网址',
            shareUrl: '分享网址',
            imgUrl: '分享的图标',
        };
        wx.onMenuShareAppMessage(shareData); //分享好友
        wx.onMenuShareTimeline(shareData);  //分享朋友圈
    });
} 
</script>
</body>
 
 </html>
