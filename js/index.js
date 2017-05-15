"use strict";
var video_mask=document.getElementById("video_mask");
		video_mask.onclick=function(){
			$("#video_mask").hide(500);
			$("#default_video").hide(500);
			$("#mask_play").trigger("pause");
		}
		
setTimeout(Videohidden,19000);
		function Videohidden(){
			$("#video_mask").hide(1000);
			$("#default_video").hide(1000);
		}