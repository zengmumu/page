window.onload=function(){
	var canNum = 6;
	var tqs = document.querySelectorAll(".tqm");
	console.log(tqs);
	var  secret = [];
	for(let i=0;i
<tqs.length;i++){
		let os = tqs[i].innerText;
		var index = os.indexOf('提取码:');
		
		let se= os.substring(index+4);
		s =os.substr(0,index)+'<button>提取码</button>';
		tqs[i].innerHTML = s;
		secret.push(se);
		tqs[i].onclick=function(){
			var num =parseInt(Cookies.get('booktimes'))||0;
			if(num<canNum){
			  	Cookies.set('booktimes', num+1, { expires: 1 })
			  	this.innerText = os;
			}else{
				alert("一天允许查看"+canNum+"个，明天再来吧");
				
			}
			
		}
	}
	var mask =document.querySelector(".drawNav .mask");
	var drawNav =document.querySelector(".drawNav");
	var menu =document.querySelector(".menu");
	mask.onclick= function(){
		drawNav.style.display="none"
	}
	menu.onclick=function(){
		drawNav.style.display="block"
	}
}