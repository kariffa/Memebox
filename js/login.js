$(function(){
	$(".btn").click(function(){
		var nPhone = $(".phone").val();
		var nPsd  = $(".password").val();
		 console.log(nPsd)
		$.ajax({
			url:`https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=${nPhone}&passwd=${nPsd}`,
			type:"post",
			success:function(res){
				
				var code = res.code
//				console.log(res)
				if( code == 200 ){
					$(".tip").html( res.msg );
					$(".tip").css({
						"color":"green",
						"fontSize":"24px"
					});
					window.location.href="http://127.0.0.1/dateteacher180628/index.html?__hbt=1530176583227";
				}else if( code == 202 ){
					$(".tip").html( res.msg );
					$(".tip").css({
						"color":"red",
						"fontSize":"24px"
					});
				}
			},
			error:function(err){
				console.log(err)
			}

		})
	})
})