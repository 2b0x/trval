"use strict";
		var links =document.getElementById("sidebar").getElementsByTagName("li");
		var mask=document.getElementById("mask");
		for(var i=0;i<links.length;i++){
			links[i].index=i;
			links[i].onclick=function(){
				var x=parseInt(this.index/3+1); 
				var y=this.index%3+1; 
				var mask_content_site="mask_content_"+x+"_"+y;
				var mask_content=document.getElementById(mask_content_site);
				$("#mask").show(500);
				$(mask_content).show(500);
				mask.onclick=function(){
					$("#mask").hide(500);
					$(mask_content).hide(500);
				}
			}
		}
		