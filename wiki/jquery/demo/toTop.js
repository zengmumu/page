;(function(){
	$.fn.extend({
		"toTop":function(){
			//插件调用的谁谁就是this
			this.each(function(index,elem){
				var dom=$(this);
				dom.hide();//默认隐藏
				//1dom超过一屏幕显示 低于一屏隐藏
				$(window).bind("scroll",check);
				function check(){
					var winH=$(window).height()/2;
					var scrollT=$(window).scrollTop();
					if(scrollT>winH){
						dom.fadeIn();						
					}else{
						dom.fadeOut();
					}
				}
					
				dom.bind("click",goTop);
				function goTop(){
					$("html,body").animate({"scrollTop":0},600);
				}
			})
		}
	})
})($)
