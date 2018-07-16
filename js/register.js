$(document).ready(function(){
	$(".btn").click(function(){		
		var nPhone = $(".phone").val();
		var nPsd  = $(".password").val();
		$.ajax({
			url:`https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=${nPhone}&passwd=${nPsd}`,
			type:"post",
			success:function(res){				
				var code = res.code
				 console.log(res)
				if( code == 200 ){
					$(".tip").html( res.msg );
					$(".tip").css({
						"display":"none"
					});
					window.location.href="http://127.0.0.1:8020/work/Meimei%20box/html/login.html?__hbt=1531398124047";
				}else if( code == 202 ){
					$(".tip").html( res.msg );
					$(".tip").css({
						"display":"block"
					});
				}
			},
			error:function(err){
				console.log(err)
			}

		})
	})	
})
