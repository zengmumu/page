app.factory("$userData",["$http",function($http){
	return {
		getUser:function(callback){
			var that = this;
			$http.get("/member/ajax_login.php")
			.success(function(data){
				that.user = data;
				if(callback){callback()}//如果存在回掉函数就执行回掉函数
			})
		},

		user:{}
	}
}])
.factory("userFactory",function(){
							return{
								user:null,
								gerUser:function(){return this.user}
							}
						})
.factory("$localData",function(){
	return {
		fetchData:function(name){ return JSON.parse(window.localStorage.getItem(name)||"[]") },
		saveData:function(name,data){
			window.localStorage.setItem(name,JSON.stringify(data));
		}
	}
})
// .config(["$sceProvider",function($sceProvider){
// 	$sceProvider.enabled(false);
// }])

.config(['$httpProvider', function($httpProvider) {
					    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
					    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
					}])
.filter(
					    'to_trusted', ['$sce', function ($sce) {
					        return function (text) {
					        	var data = $sce.trustAsHtml(text);
					        	// console.log(data,"trust");
					            return $sce.trustAsHtml(text);
					        }
					    }]
					)
 .directive("dyCompile", ["$compile","$parse", function($compile,$parse) {

    return {
        replace: true,
        restrict: 'ECMA',
        scope:true,
        link: function(scope, element, attr) {
        	scope.$watch(attr.content, function() {
	
      element.html($parse(attr.content)(scope));
      $compile(element.contents())(scope);
    }, true);



        }
    };
}])
 .directive("dyArticle", ["$compile","$parse", function($compile,$parse) {

    return {
        replace: true,
        restrict: 'ECMA',
        scope:true,
        link: function(scope, element, attr) {
        	
  function runScript(script){
  	console.log("runscript");
    const newScript = document.createElement('script');
    // 获取 inline script
    newScript.innerHTML = script.innerHTML;
    console.log(newScript,script,"newScript");
    // 存在 src 属性的话
    const src = script.getAttribute('src');
    if (src) newScript.setAttribute('src', src);

    document.head.appendChild(newScript);
    document.head.removeChild(newScript);

}

function setHTMLWithScript(container, rawHTML){
  // container.innerHTML = rawHTML;
  var scripts = container.getElementsByTagName('script');
	// console.log(scripts,scripts.length,"scripts");
	for(var i=0;i<scripts.length;i++){
		runScript(scripts[i]);
	}

}


window.setTimeout(function(){
setHTMLWithScript(element[0], element[0].innerHTML)
},50)
	



        }
    };
}])
 .directive("shBlock",[function(){
 	return{
 		restrict:"ECMA",
 		link: function(scope, element, attr) {
 		
 			
 			window.setTimeout(function(){
 				/*if(!window.SyntaxHighlighter){
 				     	
        			downLoadJs("./sh/shCore.js")//      	
        			downLoadCss("sh/shCoreDefault.css");
        			setTimeout(function(){ SyntaxHighlighter.highlight();	},500)
 				}else{
 					 SyntaxHighlighter.highlight();	
 				}
 				*/
 			function path(){
    var args = arguments,
        result = [];
    for(var i = 0; i < args.length; i++)
        result.push(args[i].replace('@', './sh/'));//请替换成自己项目中SyntaxHighlighter的具体路径
    return result
};
 			SyntaxHighlighter.autoloader.apply(null, path(
'applescript        @shBrushAppleScript.js',
'actionscript3 as3      @shBrushAS3.js',
'bash shell     @shBrushBash.js',
'coldfusion cf      @shBrushColdFusion.js',
'cpp c          @shBrushCpp.js',
'c# c-sharp csharp      @shBrushCSharp.js',
'css            @shBrushCss.js',
'delphi pascal      @shBrushDelphi.js',
'diff patch pas     @shBrushDiff.js',
'erl erlang     @shBrushErlang.js',
'groovy         @shBrushGroovy.js',
'java           @shBrushJava.js',
'jfx javafx     @shBrushJavaFX.js',
'js jscript javascript  @shBrushJScript.js',
'perl pl            @shBrushPerl.js',
'php            @shBrushPhp.js',
'text plain     @shBrushPlain.js',
'py python          @shBrushPython.js',
'ruby rails ror rb      @shBrushRuby.js',
'sass scss          @shBrushSass.js',
'scala          @shBrushScala.js',
'sql            @shBrushSql.js',
'vb vbnet           @shBrushVb.js',
'xml xhtml xslt html        @shBrushXml.js'
));

 			setTimeout(function(){SyntaxHighlighter.highlight();},100) 

 			 },500)
 		

 			
 		}
 	}
 }])
 .factory("$getUser",function($http,$state,$localData){
 		return{
 			get:function(callback){
 				var that=this;
 				var host="";
 				 $http.get(host+"/member/ajax_login.php")
					.success(function(data){	
						if(callback){callback(data)}						
						if(!data.M_ID){
							if($localData.fetchData("user").length<=0){								
								// that.user.M_UserName="未登录用户";
								that.user.M_UserName=String(new Date().getTime()).substring(6);
								$localData.saveData("user",that.user.M_UserName);	
								// alert(that.user.M_UserName);											
								that.user.M_ID=that.user.M_UserName;			
															
							}else{
								that.user.M_UserName=$localData.fetchData("user");
								that.user.M_ID=that.user.M_UserName;
								// console.log(that.user.M_ID);
							}
														

						}else{
							that.user=data;
							var temp = $localData.fetchData("user");
							if(temp){that.user.oldid=temp}
//							localStorage.removeItem('user');
						}
						
					})
				},
			user:{},
			course:null,
			courseList:null,
			out:function(){
				var that=this;
				var host="";
				$http.post(host+"/member/index_login.php",{					
				"dopost":"exit",					

		 		})
				.success(function(data){
					if(data.status){
						that.user={};							
						that.user.M_ID="";						
						that.get();
						$state.go("login");
					}
				})
			}
 		}
 })
 .config(function($httpProvider){
       $httpProvider.defaults.transformRequest=function(obj){
           var str=[];
          for(var p in obj){
               str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
           }
           return str.join("&");
       };
     $httpProvider.defaults.withCredentials=true;
// 服务端允许跨域  但是本地cookie不会被发送过去，这句话的意思是 发生数据并带cookie（跨域）
  
					  $httpProvider.defaults.headers.post={
					      'Content-Type':'application/x-www-form-urlencoded'
	  }

      $httpProvider.interceptors.push(function ($rootScope, $injector) {
  return {
    request: function (config) {
    	// console.log($rootScope);
//  	console.log(config,config.url);
      if (
      	config.url.indexOf('permission.php')!=-1||
      	config.url.indexOf('get_unlock.php')!=-1||
      	config.url.indexOf('get_units.php')!=-1||
      	config.url.indexOf('getIT.php')!=-1||
      	config.url.indexOf('get_course.php')!=-1||
      	config.url.indexOf('get_chapters.php')!=-1) {
        // alert("show")
        $injector.get('$ionicLoading').show({
          template: '<div class="text-center"><ion-spinner class="spinner-positive" icon="spiral"></ion-spinner><br/>拼命加载中</div>'
        });
      }

      return config;
    },
    response: function (response) {
      if (true) {
        $injector.get('$ionicLoading').hide();
      }
      return response;
    }
  }
});
      
  })
 .directive("alert",[function(){
		return {
			restrict:"EA",
			template:
				'<div class="alert slide-in-up" ng-if="msg" ng-bind-html="msg"></div>',
			link:function(scope,elem,attr){
				scope.hideAlert=function(){
					scope.msg=null;
					
				}
				
				
			},
			scope:{msg:"="}
		}
	}])
	.factory("alertServer",["$timeout","$sce",function($timeout,$sce){
		
	return {
		msg:"",
		type:"",
		setMsg:function(msg){
			this.msg=$sce.trustAsHtml(msg);
			// this.type=type;
			var _self=this;
			$timeout(function(){

				_self.msg=null;
				// alert(_self.msg);
				// _self.type=null;
			},50)
		}
	}
}])
	.config(function($ionicConfigProvider,$urlRouterProvider,$stateProvider){
						$ionicConfigProvider.platform.android.tabs.style('standard');
						$ionicConfigProvider.platform.android.tabs.position('standard');
						//状态服务
						$stateProvider
						//配置一个状态
						// .state("home",{
						// 	url:"/home/:test_id/:test_name",
						// 	templateUrl:"./templates/exam/home.html"
						// })
						.state("home",{
							url:"/home/:typeid/:id/:unitname/:typename/:course",
							templateUrl:"./templates/exam/home.html",
							
						})
						.state("que",{
							url:"/que/:typeid/:id/:unitname/:typename/:course",
							templateUrl:"./templates/exam/que.html",
							
						})
						.state("units",{
							url:"/units/:typeid/:typename/:course",
							templateUrl:"./templates/exam/units.html"
						})	
						.state("cells",{
							url:"/cells/:typeid/:typename/:course",
							templateUrl:"./templates/exam/cells.html"
						})						
						.state("login",{
							url:"/login?redirect",
							templateUrl:"./templates/exam/login.html"
						})
						.state("reg",{
							url:"/reg",
							templateUrl:"./templates/exam/register.html"
						})
						.state("main",{
							url:"/main/:course",
							templateUrl:"./templates/exam/main.html",
							
						})
						.state("class",{
							url:"/class/:course",
							templateUrl:"./templates/exam/classs.html",
							
						})
						.state("book",{
							url:"/book",
							templateUrl:"./templates/exam/book.html",
							
						})
						.state("err2",{
							url:"/err2",
							templateUrl:"./templates/exam/err.html",
							
						})
						.state("tutorial",{
							url:"/tutorial/:typeid",
							templateUrl:"./templates/exam/tutorial.html",
							
						})
						.state("rank",{
							url:"/rank",
							templateUrl:"./templates/exam/rank.html",
							
						})
						.state("front",{
							url:"/front/:course",
							templateUrl:"./templates/exam/front.html",
							
						})

						//地址栏路由服务
						$urlRouterProvider
						//将地址栏重定向到/tab
						.otherwise('/main/2')

					})
