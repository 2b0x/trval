"use strict";
$(function(){
			var scroll_offset=$("#site").offset();
			$(window).scroll(function(){
				var scrolltop=$(this).scrollTop();		
				if(scrolltop>=scroll_offset.top){		
					$(".scrollSite").show();
				}else{
					$(".scrollSite").hide();
				}
			});
			$(".scrollSite_btn").click(function(){
				$("html,body").animate({scrollTop:scroll_offset.top},500);	
			});
		});
		
		
		$("#about_us_btn").click(function(){
			var about_us=$("#about_us").offset();
			$("html,body").animate({scrollTop:about_us.top},1000);
		})
		
		