// JavaScript Document



window.onload=function(){
	
	
	
	/*倒计时*/
	fn2Time('xtime','2016','3','10','24','00','00');
	
	function fn2Time(id,a,b,c,d,e,f){;
		var oDiv=document.getElementById(id);
		var aSpan=oDiv.getElementsByTagName('span');
		setInterval(fnTime,1000)	
			
		fnTime()	
		function fnTime(){;	
			var iNow=new Date();	
			var iNew=new Date(a,b,c,d,e,f);
				
			var t=Math.floor((iNew-iNow)/1000);   
			if(t<0){t=0};
			
			aSpan[0].innerHTML=toTwo(Math.floor(t%86400/3600));
			aSpan[1].innerHTML=toTwo(Math.floor(t%86400%3600/60));
			aSpan[2].innerHTML=toTwo(t%60);
		};
		function toTwo(n){return n<10?'0'+n:n;};
	}
	

};	

		

