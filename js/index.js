$(function(){
	var timer;
	var index=0;   //定义变量下标
	var boxWidth=$(".pic-slide").width();	
	var imgLength = $(".item-slider").length; //定义变量存放图片的总张数
	var imgWidth = $(".picture-slider").width();//获取每一项的宽度
//	console.log(boxWidth)
	$(".rightSlider").click(function(){
		index++;
		changeImg()
	})
	$(".leftSlider").click(function(){
		index--;
		changeImg()
	})
	//封装换图的函数
	function changeImg(){
		//检测右边界
		if(index>=imgLength-4){			
			 $(".rightSlider").css({
                 "background":"rgba(0,0,0,.1)"                
             })			 
              index =imgLength-4
		}		
		if(index<=imgLength-5){			
			
			 $(".rightSlider").css({
                 "background":"rgba(0,0,0,.5)"                
             })             
		}
		//检测左边界
		if(index < 0){
			 $(".leftSlider").css({
                  "background":"rgba(0,0,0,.1)" 
              })
              index=0;
		}
		if(index > 0){
			 $(".leftSlider").css({
                  "background":"rgba(0,0,0,.5)" 
             })              
		}
		 $(".imgsBox").stop().animate({
              "left":- index * imgWidth+"px"
           },1000)
	}
	//调用自动播放的函数
	autoPlay()
	//封装自动播放的函数
	function autoPlay(){
		timer=setInterval(function(){
			index++;
			changeImg()
		},3000)
	}
	//鼠标移入停止、离开播放
	$(".pic-slide").hover(function(){           
           clearInterval(timer)
       },function(){          
           autoPlay()
       })	
})
