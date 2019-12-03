<?php 

header('Referer: http://www.qq.com/');

    

?>

<script type="text/javascript">
        function showImg(url) {
            var frameid = 'frameimg' + Math.random();
            window.img = '<video id="img"  width="100%" src=\'' + url + '?' + Math.random() + '\' ><video><script>window.onload = function() { parent.document.getElementById(\'' + frameid + '\').height = document.getElementById(\'img\').height+\'px\'; }<' + '/script>';
            document.write('<iframe id="' + frameid + '" src="javascript:parent.img;" frameBorder="0" scrolling="no" width="100%"></iframe>');
        } 
        showImg("https://mp.weixin.qq.com/mp/readtemplate?t=pages/video_player_tmpl&action=mpvideo&auto=0&vid=wxv_880681843685834752")
    </script>

</script>