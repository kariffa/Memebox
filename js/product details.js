$(function(){	
	$(".mc").mousemove(function(evt){		
		var e=evt||window.event;
		var grayX=e.offsetX-$(".gray").width()/2;
		var grayY=e.offsetY-$(".gray").height()/2;	
//		检测上边界
		if(grayY<0){
			grayY=0
		}
//		检测下边界
		if(grayY > $(".mc").height()-$(".gray").height()){
			grayY = $(".mc").height()-$(".gray").height()
		}
//		检测左边界
		if(grayX<0){
			grayX=0
		}
		//检测右边界
		if(grayX > $(".mc").width()-$(".gray").width()){
			grayX = $(".mc").width()-$(".gray").width()
		}
		//设置小灰框的位置
		 $(".gray").css({
                 "top":grayY+"px",
                 "left":grayX+"px"
              })
		  //运动比例
        var b1=grayX/($(".mc").width()-$(".gray").width())
        var b2=grayY/($(".mc").height()-$(".gray").height())
        //设置大图的实时坐标
        $(".imgRight").css({
        	"top":-b2*($(".imgRight").height()-$(".bigImg").height())+"px",
            "left":-b1*($(".imgRight").width()-$(".bigImg").width())+"px"
        })
	})
	$(".mc").click(function(){
		$(".bigImg").css({
			"display":"block"
		})
	})
//	$(".mc").mouseleave(function(){
//		$(".bigImg").css({
//			"display":"none"
//		})
//	})
})
