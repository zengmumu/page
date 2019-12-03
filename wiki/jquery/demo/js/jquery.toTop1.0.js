;(function(){
	$.fn.extend({
		"toTop":function(opt){
			//插件调用的谁谁就是this
			this.each(function(index,elem){
				var DEFAULT={
					time:600,//		去顶部的时间   number
					mode:"fade"//	对象显示隐藏方式  "fade" | "slide"
					};
				
				var option=$.extend({},DEFAULT,opt);
				
				var dom=$(this); 
				dom.hide();//默认隐藏
				//1dom超过一屏幕显示 低于一屏隐藏
				$(window).bind("scroll",check);
				dom.bind("click",goTop);
				function check(){
					var winH=$(window).height()/2;
					var scrollT=$(window).scrollTop();
					if(scrollT>winH){
						if(option.mode=="fade"){
								dom.fadeIn();	
						}else{
							dom.slideDown();
						}
										
					}else{
						
						if(option.mode=="fade"){
								dom.fadeOut();	
						}else{
							dom.slideUp();
						}
					}
				}
				function goTop(){
					$("html,body").animate({"scrollTop":0},option.time);
				}
			})
		}
	})
})($)
