					var examApp=angular.module("examApp",["ionic",'ngAnimate'])
					.controller("mainCtrl",["$scope","$state","$ionicHistory","$stateParams","$http","$getUser","$ionicSideMenuDelegate","$rootScope",function($scope,$state,$ionicHistory,$stateParams,$http,$getUser, $ionicSideMenuDelegate,$rootScope){
					 // $scope.host="http://www.qikuedu.com:8000"
						 // $scope.host="http://192.168.0.105";
						 // $scope.host="http://127.0.0.1";
						 // $scope.host="http://192.168.20.103";
						  $scope.host="";
						 
						 $scope.goback=function(){
						 	if($ionicHistory.backView()){
												$ionicHistory.goBack()
												
											}else{
												// alert("back");
												// console.log($scope.data.course)
												if($rootScope.data.course){
													$state.go("main",{course:$rootScope.data.course.id})
												}else{
													$state.go("main",{course:2})
												}
												
							}
						 	
						 }
						$scope.data=$getUser;
						$scope.data.get();
						$rootScope.data=$getUser;
						


						//  $http.get($scope.host+"/member/ajax_login.php")
						// .success(function(data){
						// 	$scope.user=data;
							
						// })
						$scope.toggleLeft = function(e) {
							// console.log($ionicSideMenuDelegate._instances[0]);
							// console.log(e);
							$ionicSideMenuDelegate._instances[0]._handleDrag(e);
					    // $ionicSideMenuDelegate.toggleLeft();0
					    // $ionicSideMenuDelegate._handleDrag(e)
					  };
					  $scope.switchName=function(str){
						if(str){
							if(str.substring(0,3)=="未登录"){
							return "登录";
							}else{
								return "退出";
							}
						}else{
							return "登录";
						}
						
					}
					  $scope.loginOut=function(){
					  	// alert("out");
					  	$ionicSideMenuDelegate.toggleLeft();
						$getUser.out();
							
						}

						///////////////copy
						
						///////////////copy
						///
						$http.get($scope.host+"/get_course.php").success(function(data){
							$scope.data.courseList=data;



							
						})

					}])
					.controller("indexCtrl",["$scope","$state","$ionicHistory","$stateParams","$http","$getUser","$rootScope","$ionicScrollDelegate",function($scope,$state,$ionicHistory,$stateParams,$http,$getUser,$rootScope,$ionicScrollDelegate){
					    // console.log("c",$scope.course)
					    // $scope.course.id=$stateParams.course;
						$scope.data=$getUser;
						$scope.data.get();
						// $scope.data.course=$stateParams.course;
						// $scope.user=$getUser.user;
						function getCourse(){
							if($scope.data.courseList){
								for(var k in $scope.data.courseList){
									if( $scope.data.courseList[k].id==$stateParams.course){
										$scope.data.course=$scope.data.courseList[k];
										
											$scope.data.course=$scope.data.courseList[k];
										    $rootScope.data.course=$scope.data.courseList[k];
										break;
									}
								}
							}else{
								setTimeout(function(){
									getCourse()
								},20)
							}
						}
						getCourse()
							// 	for(var k in $scope.data.courseList ){
									
							// 	if($scope.data.courseList[k].id==$stateParams.course){
							// 		$scope.data.course=k;
							// 		break;
							// 	}
							// }

						$scope.loginOut=function(){
							$getUser.out();
							
						}
						$http.get($scope.host+"/get_chapters.php?reid="+$stateParams.course).success(function(data){
							$scope.chapters=data;


							if($scope.chapters[0]){

							$scope.chapters[0].delock=true;
							}
						function getunlock(){

								if($scope.data.user.M_ID!=undefined){
									
									$http.get($scope.host+"/get_unlock.php?user="+$scope.data.user.M_ID+"&type=3")
									.success(function(data){
										if(data.length){
											for(var i=0;i<$scope.chapters.length;i++){
												for(var k=0;k<data.length;k++){
													if($scope.chapters[i].id==data[k].unlock){
														
														$scope.chapters[i].unlock=true;									
														if($scope.chapters[i+1]){


															$scope.chapters[i+1].delock=true;	
														}
													}
												}
											}

										}

									})//get ed;
								}else{
									setTimeout(function(){ getunlock()},50)
								}
						    }//fun ed;
						    getunlock()
						     $rootScope.$on('$stateChangeSuccess', 
							function(event, toState, toParams, fromState, fromParams){ 
								

									getunlock();
							 })
						     $scope.sc={};
						     $scope.sc.t=0;
							 // 滚动动画
							 $scope.handelScroll=function(){
							 	var t=$ionicScrollDelegate.getScrollPosition().top;
							 	
							 	if(t<180&&t>0){
							 		  t=Math.abs(t);
							 		  $scope.$apply(function(){
							 		  	if(t>133){
							 		  	t=133;	
							 		  	}
							 		  	$scope.sc.t=t;
							 		  })
							 		  // console.log($scope.sc);
							 	}
							 }
						})

						$scope.changeState=function(item,index){
						
							$http.get($scope.host+"/permission.php?ptype=3&id="+item.id+"&typeid=2&user="+$scope.data.user.M_ID)
							.success(function(data){
								if(data.status){
									// if(index==1){
									// 	if(!$scope.data.user.M_LoginTime){
									// 			alert("请先登陆");
									// 			$state.go("login",{});
									// 			return;
									// 	}
									// }
									$state.go("units",{"typeid":item.id,typename:item.typename});
								}else{
									alert(data.msg);
								}

							})
						}


					     
						

					}])
					.controller("unitsCtrl",["$scope","$state","$ionicHistory","$stateParams","$http","$getUser","$rootScope",function($scope,$state,$ionicHistory,$stateParams,$http,$getUser,$rootScope){
						$rootScope.$on('$stateChangeSuccess', 
							function(event, toState, toParams, fromState, fromParams){ 
									getunlock();
							 })
						// $scope.goback=function(){	
						// 	$state.go("main");
						//  }
						$scope.data=$getUser;
						$scope.typename=$stateParams.typename;
						$http.get($scope.host+"/get_units.php?tid="+$stateParams.typeid).success(function(data){
							$scope.units=data;
							$scope.units[0].delock=true;
						})
						$scope.changeState=function(item){
						
							$http.get($scope.host+"/permission.php?ptype=2&id="+item.id+"&typeid="+$stateParams.typeid+"&user="+$scope.data.user.M_ID)
							.success(function(data){
								if(data.status){
									$state.go("home",{"typeid":item.typeid,"id":item.id,"unitname":item.title,"typename":$scope.typename});
								}else{
									alert(data.msg);
								}

							})
							

						}

						//unlock
						function getunlock(){
					   
								if($scope.data.user.M_ID!=undefined){
									
									$http.get($scope.host+"/get_unlock.php?user="+$scope.data.user.M_ID+"&type=2")
									.success(function(data){
										setTimeout(function(){
										if(data.length){
											for(var i=0;i<$scope.units.length;i++){
												for(var k=0;k<data.length;k++){
													if($scope.units[i].id==data[k].unlock){									
														$scope.units[i].unlock=true;									
														if($scope.units[i+1]){
															
															$scope.units[i+1].delock=true;	
														}
													}
												}
											}

										}
									},10)//timeout;

									})//get ed;
								}else{
									setTimeout(function(){ getunlock()},50)
								}
						    }//fun ed;
						    getunlock()
						//unlock
						

					}])
					 // $scope.host="http://www.qikuedu.com:8000"
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
							url:"/home/:typeid/:id/:unitname/:typename",
							templateUrl:"./templates/exam/home.html",
							
						})
						.state("units",{
							url:"/units/:typeid/:typename",
							templateUrl:"./templates/exam/units.html"
						})
						.state("testList",{
							url:"/testlist",
							templateUrl:"./templates/exam/testlist.html"
						})
						.state("login",{
							url:"/login",
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

						//地址栏路由服务
						$urlRouterProvider
						//将地址栏重定向到/tab
						.otherwise('/main/2')

					})
						.controller("homeCtrl",["$scope","$http","$ionicSlideBoxDelegate","$getUser","$state","$ionicPopover","$stateParams","$localData","$ionicHistory","$rootScope","$ionicScrollDelegate","$timeout","$rootScope","$ionicLoading","alertServer",function($scope,$http, $ionicSlideBoxDelegate,$getUser,$state,$ionicPopover,$stateParams,$localData,$ionicHistory,$rootScope,$ionicScrollDelegate,$timeout,$rootScope,$ionicLoading,alertServer){
							$scope.data=$getUser;
							$scope.data.get();
							$scope.unitname=$stateParams.unitname;
							$scope.current={}
							$scope.current.page=0;
							$scope.current.showAnswerSheet=false;
							$scope.current.testName=$stateParams.test_name;
							$scope.current.result=false;
							$scope.alertServer=alertServer;







							
					// $scope.goback=function(){
					// var re=$ionicHistory.goBack();
					// 	 	if(re==undefined){
					// 	 		alert("un");
					// 	 		$state.go("main");
					// 	 	}
						 	
					// 	 }
						
							
							$scope.popover = $ionicPopover.fromTemplate('<ion-popover-view></ion-content><div class="list"><div class="item" ng-click="logout()">退出</div></div></ion-content></ion-popover-view>', {
					        scope: $scope
					         });


							$scope.logout=function(){
								window.localStorage.removeItem("uid")
								window.localStorage.removeItem("username")
								$scope.popover.hide()
								$state.go("login");
							}

							$scope.slideHasChanged=function(){
								$scope.current.showbar=false;
								$scope.current.page= $ionicSlideBoxDelegate.currentIndex()
								$http.get($scope.host+"/get_coments_count.php?aid="+$scope.questions[$scope.current.page].id)
								.success(function(data){
									$scope.questions[$scope.current.page].comentCount=data;
								})

							}

							$http.get($scope.host+"/getIT.php?id="+$stateParams.id)
								.then(function(data) {

					                //optionA  optionB optionC optionD 交换顺序

									 for(var i=0;i<data.data.length;i++) {
					                     var optionData = [];
					                     var temparr = []
					                     if (data.data[i].optiona) {
					                         temparr.push({op: data.data[i].optiona, answer: "A"})
					                     }
					                     if (data.data[i].optionb) {
					                         temparr.push({op: data.data[i].optionb, answer: "B"})
					                     }
					                     if (data.data[i].optionc) {
					                         temparr.push({op: data.data[i].optionc, answer: "C"})
					                     }
					                     if (data.data[i].optiond) {
					                         temparr.push({op: data.data[i].optiond, answer: "D"})
					                     }

					                     var len = temparr.length;
					                     for (var k = 0; k < len; k++) {
					                         if (temparr.length <= 1) {
					                             optionData.push(temparr[0]);
					                             break;
					                         } else {
					                             var num = Math.floor(Math.random() * temparr.length);

					                             optionData.push(temparr[num]);
					                             temparr.splice(num, 1)

					                         }
					                     }
					                     data.data[i].optionData = optionData;
					                     data.data[i].currentSelect = "";
					                     data.data[i].userAnswer=[];
					                     data.data[i].page=1;

					                     if (data.data[i].subtitle&&data.data[i].channel==30) {
					                     	if(data.data[i].subtitle.indexOf("pre")==-1&&data.data[i].subtitle.indexOf("brush")==-1){
		                     	 				data.data[i].subtitle = data.data[i].subtitle.replace(/[\r]/g, "<br/>");
		                     				}
					                     	var n =  data.data[i].subtitle.match(/\[space\]/g)||[];
					                     		var temp=data.data[i].answer.split(",");
					                     		data.data[i].blank_len=[];
					                     		console.log(data.data[i].blank_len);
					                     		for(var z=0;z<temp.length;z++){
					                     				data.data[i].blank_len.push(temp[z].length);
					                     		}


											for(var j=0; j<n.length;j++){
												console.log( data.data[i]);
												 data.data[i].userAnswer[j]="";
												 console.log( data.data[i]);
												 data.data[i].subtitle = data.data[i].subtitle.replace(/\[space\]/, "<input type='text' id='q_"+i+"_"+j+"' myinput style=\"width:"+data.data[i].blank_len[j]*18+"px\" ng-keyup=\"keyup(question,"+i+","+j+")\"  ng-model=\"question.userAnswer["+j+"]\" maxlength='"+data.data[i].blank_len[j]+"' size='"+data.data[i].blank_len[j]+"' />");
												break;
											}

					                     }
					                 }
									 $scope.questions=data.data
									 $scope.questions[0].unlock=true;
									 $ionicSlideBoxDelegate.update()
									 $http.get($scope.host+"/get_coments_count.php?aid="+$scope.questions[0].id)
								.success(function(data){
									$scope.questions[0].comentCount=data;
					})

									 })
							$scope.selectHd=function(question,op,answer,index){
								question.currentSelect=op;
								question.currentAnswer=answer

								

								return;

								/*$scope.current.showAnswerSheet=false;
								 $http.post($scope.host+"/questions/detail/"+$stateParams.test_id+"/",{
										"answer": answer,
									    "qe_id":question.qe_id,
									     "id":question.id
								 }).success(function(data){

								 })*/
								// if(question.type==1){
								// 	 $ionicSlideBoxDelegate.next()

								// }
							}
							$scope.selectMulHd=function(question,op,answer,index){

									if(question.currentSelect instanceof Array){
										if(question.currentSelect.indexOf(op)!=-1){
											var id=question.currentSelect.indexOf(op);
											question.currentSelect.splice(id,1);
											var  aid=question.currentAnswer.indexOf(answer);
											question.currentAnswer.splice(aid,1);

										}else{
											question.currentSelect.push(op)
											question.currentAnswer.push(answer)
										}
									}else{
										question.currentSelect=[];
										question.currentAnswer=[];
										question.currentSelect.push(op)
										question.currentAnswer.push(answer)
									}
							}

							$scope.mulHdNext=function(question){
								$scope.current.showAnswerSheet=false;

								$http.post($scope.host+"/questions/detail/"+$stateParams.test_id+"/",{
										"answer": question.currentAnswer.sort().toString().replace(/,/g,""),
									    "qe_id":question.qe_id,
									     "id":question.id
								 }).success(function(data){

								 })
								$ionicSlideBoxDelegate.next()
							}
							$scope.QaHdNext=function(question){
								$scope.current.showAnswerSheet=false;

								$http.post($scope.host+"/questions/detail/1/",{
										"answer": question.currentAnswer,
									    "qe_id":question.qe_id,
									     "id":question.id
								 }).success(function(data){

								 })
								$ionicSlideBoxDelegate.next()
							}

							$scope.QaHdNext=function(question){
								$scope.current.showAnswerSheet=false;


								$http.post($scope.host+"/questions/detail/1/",{
										"answer": question.currentAnswer,
									    "qe_id":question.qe_id,
									     "id":question.id
								 }).success(function(data){

								 })
								$ionicSlideBoxDelegate.next()
							}
							$scope.BlHdNext=function(question){
								
								 $http.post($scope.host+"/questions/detail/1/",{
								 		"answer": question.userAnswer.toString().replace(/（/g,"(").replace(/）/g,")").replace(/；/g,";").replace(/。/g,".").replace(/”/g,"\"").replace(/”/g,"\"").replace(/？/g,"?").replace(/：/g,":"),
								    	"qe_id":question.qe_id,
									     "id":question.id
								  }).success(function(data){

							 	 })
								 $ionicSlideBoxDelegate.next()
							}

							$scope.checkMulSelect=function(question,op){
								if(question.currentSelect.indexOf(op)!=-1){
									return true
								}else{
									return false
								}
							}
							$scope.slideTo=function(index,question){
								 //先检查 该篇文章里面的文章，如果该文章的前一篇没有在一用户解锁范围那么就需要解锁
								
								 // $ionicSlideBoxDelegate.slide(index)
								 // $scope.current.showAnswerSheet=false;
								 
								 if(index==0){
								 	$ionicSlideBoxDelegate.slide(0);
								 	return;
								 }
								
								 $http.get($scope.host+"/permission.php?ptype=1&id="+ $scope.questions[index-1].id+"&typeid=3&uid="+$stateParams.id+"&user="+$scope.data.user.M_ID)
							.success(function(data){
								if(data.status){
									$scope.mixQuestion($scope.questions[index]);
									// console.log($scope.questions[index]);
									$ionicScrollDelegate.scrollTo(0,0);
									$ionicSlideBoxDelegate.slide(index)
									$scope.current.showAnswerSheet=false;
									
								}else{
									// alert(data.msg);
								}

							})
							}
							$scope.mixQuestion=function(question){
								 // 混淆
								
								var temparr=question.optionData;
						 		var len =temparr.length;
						 		question.optionData=[];
							    for (var k = 0; k < len; k++) {
							         if (temparr.length <= 1) {
							             question.optionData.push(temparr[0]);
							             break;
							         } else {
							             var num = Math.floor(Math.random() * temparr.length);

							              question.optionData.push(temparr[num]);
							              temparr.splice(num, 1)

							         }
				     			}
					          // console.log(question);
								 // 混淆
							}
							$scope.submitTest=function(){
								$scope.current.result=true;
								for(var i=0;i<$scope.questions.length;i++){
									if(!$scope.questions[i].currentAnswer){
									window.alert("您的题目还没有答完毕");
									$scope.slideTo(i+1);
									break;
									}
								}

							}
							

							$scope.keyup=function(question,i,j){
								
								if(question.userAnswer[j].length>=question.blank_len[j]){
									var elem=document.getElementById("q_"+i+"_"+(j+1));
									if(elem){
										elem.focus();
									}
									
								}
							}
							$scope.preSlide=function(question){
								question.showErr=false;
								$scope.mixQuestion(question);
								$ionicSlideBoxDelegate.previous()
							}

					$scope.nextSlide=function(question){
								 
								 $http.post($scope.host+"/set_unlock.php",{
										"unlock":question.id,
										"user":$scope.data.user.M_ID,
										"type":1,			  

								 	}).success(function(data){


								 	})
								$ionicSlideBoxDelegate.next()
							}
					$scope.setCommetPage=function(num){

						$scope.questions[$scope.current.page].page=num;
						// console.log($scope.current.page,$scope.questions[$scope.current.page])
						$scope.getComents($scope.questions[$scope.current.page],1);
					}
					$scope.getComents=function(question,flag){
							   // console.log(question,"guaiguai ")
								$http.get($scope.host+"/plus/get_comments.php?dopost=getlist&page="+question.page+"&aid="+question.id)
								.success(function(da){
									// alert(da);
										
										// $scope.$apply(function(){
											question.coments=da;
											if(flag){
												$ionicScrollDelegate.$getByHandle("ques").scrollTo(0,0);
											}
										// })
								})
								$scope.current.showbar=true;
					}
					$scope.checkAnswer=function(question){
						//"answer": question.userAnswer.toString().replace(/（/g,"(").replace(/）/g,")").replace(/；/g,";").replace(/。/g,".").replace(/”/g,"\"").replace(/”/g,"\"").replace(/？/g,"?").replace(/：/g,":"),
						
						if (question.answer==question.currentAnswer||question.answer==question.userAnswer.toString().replace(/（/g,"(").replace(/）/g,")").replace(/；/g,";").replace(/。/g,".").replace(/”/g,"\"").replace(/”/g,"\"").replace(/？/g,"?").replace(/：/g,":")) {
							 
							$http.post($scope.host+"/set_unlock.php",{
										"unlock":question.id,
										"user":$scope.data.user.M_ID,
										"type":1,
										"add":2,			  

								 	}).success(function(data){

								 		question.showErr=false;
								 		question.unlock=true;			 		
					                    $scope.alertServer.setMsg("+2");

								 	})
							var index=$scope.questions.indexOf(question);
							if($scope.questions[index+1]){
								$scope.questions[index+1].unlock=true;

							}


							if(index==$scope.questions.length-1){
								// alert("最后一个");
								$http.post($scope.host+"/set_unlock.php",{
										"unlock":$stateParams.id,
										"user":$scope.data.user.M_ID,
										"type":2,
										"typeid":$stateParams.typeid,			  

								 	}).success(function(data){
								 			if(data.chapter){
								 					$state.go("main",{"course":$rootScope.data.course.id})
								 					
								 					
								 			}else{
								 				
								 				$state.go("units",{"typeid":$stateParams.typeid,typename:$stateParams.typename});
					                           
								 			}
								 			$scope.data.get();

								 	})
								 	
								 	

							}else{

							
							
							$http.post($scope.host+"/set_unlock.php",{
										"unlock":$scope.questions[index+1].id,
										"user":$scope.data.user.M_ID,
										"type":1,			  

								 	}).success(function(data){


								 	})
						    }
						   

							$timeout(function(){
								$ionicScrollDelegate.scrollTo(0,0);
								$ionicSlideBoxDelegate.next()	
							},1000)
							

							}else{
									question.showErr=true;
						}
					}
					$scope.testAgain=function(question){
						question.showErr=false;
						question.currentAnswer="";
						question.currentSelect=null;
					     var temparr=question.optionData;
						 var len =temparr.length;
						 question.optionData=[];
					     for (var k = 0; k < len; k++) {
					         if (temparr.length <= 1) {
					             question.optionData.push(temparr[0]);
					             break;
					         } else {
					             var num = Math.floor(Math.random() * temparr.length);

					              question.optionData.push(temparr[num]);
					             temparr.splice(num, 1)

					         }
					     }
					                     

					}

					$scope.zan=function($event,good,id,fid){
					console.log((new Date().getTime()-$localData.fetchData("good"+fid+id)),1000*60)
						if((new Date().getTime()-$localData.fetchData("good"+fid+id))>1000*60||$localData.fetchData("good"+fid+id).length==0){
							$http.get($scope.host+"/plus/zan.php?action=goodfb&aid="+id+"&fid="+fid).success(function(data){
							
							$($event.target).parent().html(data+' <img src="./images/zan.png" width="20" vertical-align="middle" alt="">');
							$localData.saveData("good"+fid+id,new Date().getTime());
							})
					 	}else{
					 			alert("您刚刚赞过");
					 		}
					 				 	

					}
					$scope.comment=function(){
						// $scope.data.get();
						var str=$scope.data.user.M_UserName;
						if(str){
							if(str.substring(0,3)=="未登录"){
							alert("请先登陆");
							$state.go("login");
							return;
							}else{
								
							}
						}else{
							alert("请先登陆");
							$state.go("login");
							return;
						}
						
						if($scope.current.msg.length<2){ alert("评论不得少于两个字")}
							$http.post($scope.host+"/plus/feedback_ajax2.php",{
										"dopost":'send',
										"aid":$scope.questions[$scope.current.page].id,
										"user":$scope.data.user.M_ID,
										"fid":0,
										"face":6,
										"feedbacktype":"feedback",
										"msg":$scope.current.msg			  

								 	}).success(function(data){

								 		if(data.status==0){
								 			alert(data.msg);
								 		}else{
								 			$scope.current.msg="";
								 			$scope.questions[$scope.current.page].comentCount++;
								 			$http.get($scope.host+"/plus/get_comments.php?dopost=getlist&page=1&aid="+$scope.questions[$scope.current.page].id)
											.success(function(data){
													$scope.questions[$scope.current.page].coments=data;
													
													// $scope.questions[$scope.current.page].coments=data;
													
											})
								 		}
								 			

								 	})
					}

					//unlock
						
						function getunlock(){

								if($scope.data.user.M_ID!=undefined){
									
									$http.get($scope.host+"/get_unlock.php?user="+$scope.data.user.M_ID+"&type=1")
									.success(function(data){
										if(data.length&&$scope.questions&&$scope.questions.length){
											for(var i=0;i<$scope.questions.length;i++){
												for(var k=0;k<data.length;k++){
													if($scope.questions[i].id==data[k].unlock){									
														$scope.questions[i].unlock=true;									
														if($scope.questions[i+1]){
															$scope.questions[i+1].unlock=true;	
														}
													}
												}
											}

										}

									})//get ed;
								}else{
									setTimeout(function(){ getunlock()},50)
								}
						    }//fun ed;
						    getunlock()

						    $scope.$on("update",function($event,data){

						    	getunlock();
						    })
						//unlock
						
						$scope.unlockQuestion=function(question){
							var str=$scope.data.user.M_UserName;
							if(str){
								if(str.substring(0,3)=="未登录"){
									var comfirm=window.confirm("登陆用户才能解锁\n现在去登陆");
									if(comfirm){$state.go("login");	}				
									return;
								}
							}else{
								var comfirm=window.confirm("登陆用户才能解锁\n现在去登陆");
								if(comfirm){$state.go("login");}			
								return;
							}

							var confirm = window.confirm("解锁需要消耗10个积分\n您当前有"+$scope.data.user.M_Scores+"积分")
					        
					        if(confirm&&$scope.data.user.M_Scores>=10){
					        	

								$http.post($scope.host+"/set_unlock.php",{
										"unlock":question.id,
										"user":$scope.data.user.M_ID,
										"type":1,
										"reduce":10,			  

								 	}).success(function(data){
								 		question.showAnswer=true;
								 		question.showErr=false;
								 		question.unlock=true;
								 		var arr=question.answer.split(",");
								    	for(var i=0;i<arr.length;i++){
									    		question.userAnswer[i]=arr[i];
									    }
									    $scope.data.user.M_Scores-=10;
									    // otherCheck
									    var index=$scope.questions.indexOf(question);
										if($scope.questions[index+1]){
											$scope.questions[index+1].unlock=true;
											var time=1500;
											if(question.type!=1){
												time=2100;
											}
											$timeout(function(){
									 			for(var i=0;i<arr.length;i++){
										    		question.userAnswer[i]="";
										    	}				 	
									 			question.showAnswer=false;			 	
									 			$ionicSlideBoxDelegate.next();
											},time)
										}



								if(index==$scope.questions.length-1){						
									$http.post($scope.host+"/set_unlock.php",{
										"unlock":$stateParams.id,
										"user":$scope.data.user.M_ID,
										"type":2,
										"typeid":$stateParams.typeid,			  

									})
									.success(function(data){
							 			if(data.chapter){
							 					$state.go("main",{"course":$rootScope.data.course.id})
							 			}else{
							 				$state.go("units",{"typeid":$stateParams.typeid,typename:$stateParams.typename});  
							 			}
							 			$scope.data.get();
									})
									 	
								}//如果是最后一个
								// otherCheck		 		
							})//success结束	
								
					        }else{
					        	alert("积分不够");
					        }
					      // confirm ed

								

							

						}
					    // 解锁
					    $scope.getAnswer=function(q,item){
					    	

					    	var arr=q.answer.split(",");
					    	for(var i=0;i<arr.length;i++){
					    		if(arr[i]==item.answer){
					    			// alert("show");
					    			return "answer";
					    		}
					    	}
					    }
					    
						}])

						.controller("loginCtrl",["$scope","$http","$state","$ionicHistory","$getUser","$localData","$rootScope",function($scope,$http,$state,$ionicHistory,$getUser,$localData,$rootScope){
							 $scope.goState=function(name,params){
							 // 	if($ionicHistory.backView()){
								// 	$ionicHistory.goBack()

								// }else{
								// 	$state.go("main",{"course":$rootScope.data.course.id})
								// }
									$state.go(name,params);
							}
							    $scope.islogin=true
								$scope.login={username:"",password:"",help:""};
								$scope.loginHd=function(){
									$scope.islogin=false
									$scope.login.help="";
									if($scope.login.username==""||$scope.login.password==""){
										$scope.login.help="用户名和密码不能为空!"
										return
									}
									$http.post($scope.host+"/member/index_login.php",{
										"fmdo":"login",
										"dopost":"login",
										"userid":$scope.login.username,
									    "pwd":$scope.login.password,
									   "oldid":$localData.fetchData("user").substring(12,18)

								 	}).success(function(data){
								 		
					                    // localstorage.removeItem("user");
										if(data.status){
											$scope.islogin=true;						
											$getUser.get();
											console.log($getUser);
												// alert("成功，即将跳转")
											// userFactory.user=data.user;
											// window.localStorage.setItem("uid",data.user.id);
											// window.localStorage.setItem("username",data.user.username);
										$scope.login.help=data.msg;
											
											if($ionicHistory.backView()){
												$ionicHistory.goBack()
												
											}else{
												// $state.go("main")
												$scope.goback();
											}
											// window.history.back();
										}else{
											$scope.islogin=true;
											$scope.login.help=data.msg;
										}
									 })
										.error(function(err){
											$scope.islogin=true;
											$scope.login.help=err;
										})

								}

						}])
					.controller("regCtrl",["$scope","$http","$state","$ionicHistory","$getUser","$localData","$rootScope",function($scope,$http,$state,$ionicHistory,$getUser,$localData,$rootScope){
							 $scope.data=$getUser;
							 $scope.data.get();
							 $scope.goState=function(name,params){				 
								$state.go(name,params);
							 }
							 $scope.reg={};
								$scope.isreg=true;
								$scope.regHd=function(){
								
									$scope.reg.help="";
									if($scope.reg.username==""||$scope.reg.password==""||$scope.reg.email==""){
										$scope.login.help="邮箱或用户名和密码不能为空!"
										return
									}
									var oldid=$localData.fetchData("user");
									console.log(oldid);
									if(oldid[0]){
										oldid=oldid[0].substring(12,18)
									}else{
										oldid="";
									}
									$http.post($scope.host+"/member/reg_new2.php",{
										"userid":$scope.reg.username,
										"userpwd":$scope.reg.password,
										"email":$scope.reg.email,
										"oldid":oldid
									   

								 	}).success(function(data){
								 		

										if(data.status){
																	
											$getUser.get();
											
												// alert("成功，即将跳转")
											// userFactory.user=data.user;
											// window.localStorage.setItem("uid",data.user.id);
											// window.localStorage.setItem("username",data.user.username);
											$scope.reg.help=data.msg;
											// $scope.goback();
											// if($ionicHistory.backView()){
											// 	$ionicHistory.goBack()
												
											// }else{
											// 	$state.go("main")
											// }
											// window.history.back();
											if($rootScope.data.course){
													// console.log($rootScope.data.course);
													$state.go("main",{course:$rootScope.data.course.id})
												}else{
													$state.go("main",{course:2})
												}
											}else{
												$scope.isreg=true;
												$scope.reg.help=data.msg;
											}
									 })
										.error(function(err){
											$scope.isreg=true;
											$scope.reg.help=err;
										})

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
					.config(['$httpProvider', function($httpProvider) {
					    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
					    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
					}])
					   .controller("listCtrl",["$scope","$http",function($scope,$http){
					        $http.get($scope.host+"/questions/testlist/")
								.then(function(data) {
								    $scope.testlist=data.data;
								    
					            })
					    }])
					.filter(
					    'to_trusted', ['$sce', function ($sce) {
					        return function (text) {
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
						 .directive("shBlock",[function(){
						 	return{
						 		restrict:"ECMA",
						 		link: function(scope, element, attr) {
						 		
						 			window.setTimeout(function(){
						 			 SyntaxHighlighter.highlight();	
						 			 },50)
						 		

						 			
						 		}
						 	}
						 }])
						 .factory("$getUser",function($http,$state,$localData){
						 		return{
						 			get:function(){
						 				var that=this;
						 				 $http.get("/member/ajax_login.php")
											.success(function(data){							
												if(!data.M_ID){
													// console.log($localData.fetchData("user"));
													if($localData.fetchData("user").length<=0){
														
														that.user.M_UserName="未登录用户";
														that.user.M_UserName+=new Date().getTime();	
														$localData.saveData("user",that.user.M_UserName);														
														that.user.M_ID=that.user.M_UserName.substring(12,18);								
																					
													}else{
														that.user.M_UserName=$localData.fetchData("user");
														that.user.M_ID=that.user.M_UserName.substring(12,18);
													}
																				

												}else{
													that.user=data;
													var temp = $localData.fetchData("user");
													if(temp){
														that.user.oldid=temp
													}
													localStorage.removeItem('user');
													 // localStorage.removeItem('olduser');

												}
												// console.log(that.user);
													// $localData.saveData("user",that.user.M_UserName)
													
												// userFactory.user=$scope.user;
											})
										},
									user:{},
									course:null,
									courseList:null,
									out:function(){
										var that=this;
										$http.post("/member/index_login.php",{					
										"dopost":"exit",					

								 		})
										.success(function(data){
											if(data.status){
												that.user={};							
												that.user.M_ID="";
												// that.user.M_UserName="未登录用户";
												// // $localData.saveData("olduser",$localData.fetchData("user"));
												// localStorage.removeItem('user');
												// localStorage.removeItem('olduser');
												// that.get();
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
					          $httpProvider.defaults.headers.post={
					              'Content-Type':'application/x-www-form-urlencoded'
					          }

					          $httpProvider.interceptors.push(function ($rootScope, $injector) {
					      return {
					        request: function (config) {
					        	// console.log($rootScope);
					          if (true) {
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
											'<div class="alert slide-in-up" ng-show="msg">{{msg}}</div>',
										link:function(scope,elem,attr){
											scope.hideAlert=function(){
												scope.msg=null;
												
											}
											
											
										},
										scope:{msg:"="}
									}
								}])
								.factory("alertServer",["$timeout",function($timeout){
									
								return {
									msg:"",
									type:"",
									setMsg:function(msg){
										this.msg=msg;
										// this.type=type;
										var _self=this;
										$timeout(function(){

											_self.msg=null;
											// alert(_self.msg);
											// _self.type=null;
										},600)
									}
								}
							}])
									

					// 	.run(function ($http, $cookies) {
					//     $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
					// });
						


