$(function(){
	$.ajax({
			type:"get",
			url:"http://127.0.0.1/work/Meimei%20box/json/list.json",			
			success:function(res){
				/*console.log(res)*/
				var oC=res.content;
				var html="";
				for (var i=0;i<oC.length;i++) {
					var li=`<li class="item-m"><a href=""><img src="${oC[i].img}" alt="${oC[i].intro}" title="${oC[i].intro}" /></a><h2 class="text-m" style="font-size: 18px; margin-top: 8px;"><a href="" title="${oC[i].intro}"><span style="line-height:30px; font-size: 15px;">${oC[i].brand}</span><br />${oC[i].intro}</a></h2><div class="meme-price"><span class="meme-discount">美美箱优惠价</span><span style="color: #FF5073;">${oC[i].newPrice}</span><br /><button class="memebtn" title="加入购物车">加入购物车</button></div></li>`
					html+=li;
				}
				$(".safe-area").html(html);
			},
			error:function(err){
				console.log(err);
			}
		});
});
