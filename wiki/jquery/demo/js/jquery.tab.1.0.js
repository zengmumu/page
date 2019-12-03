;(function(){
	$.fn.extend({
		"tab":function(opt){
			this.each(function(index,elem){
				var DEFAULT={
					"effect":"toggle" ,  		//effect 效果    toggle  | fade |  slide
					"default":0,				//默认显示第几个
					"titleName":".tab_title", 	// 控制器名称  .tab_title
					"contentName":".tab_con",	 // 内容名称  .tab_con
					"speed":"normal"			// 动画的速度   "normal" | "fast" |"slow" | 毫秒
				};
				var option=$.extend({},DEFAULT,opt);
					
				var dom=$(this);
				//1,控制块
				var titles=dom.children(".tab_title");
				var contents=dom.children(".tab_con");
				
				if(option.default<0){option.default=0}
				if(option.default>=contents.length){option.default=contents.length-1}
				
				init();
				
				function init(){
					$(titles[option.default]).addClass("active");
					contents.hide();
					$(contents[option.default]).show();
				}
				//titles 单击对应的 contents 显示
				titles.bind("click",change);
				function change(){
					var num=titles.index($(this));//找出是第几个被单击
					dom.children(".active").removeClass("active");
					$(this).addClass("active");
					if(option.effect=="toggle"){
					dom.children(".tab_con:visible").hide();
					$(contents[num]).show();
					}else if(option.effect=="fade"){
						dom.children(".tab_con:visible").fadeOut(option.speed);
						$(contents[num]).fadeIn(option.speed);
					}else if(option.effect=="slide"){
						dom.children(".tab_con:visible").slideUp(option.speed);
						$(contents[num]).slideDown(option.speed.);
					}
				}
				
				
			})
		}
		
	})
	
	
})($)
