	jQuery.ajax({
      url: '/web/account/gradeIndex',
      type: 'get',
      async: false,
      dataType: 'json',
      success:function(data){
        if (data.code == '2') {
    		customerId = '';
    		customerName = '';
    		vip = 0;
    		userlevel = 0;
        }
        else{
    		customerId = data.data.customerId;
    		customerName = data.data.customerName;
    		vip = 0;
    		userlevel = parseInt(data.data.currentGradeId);
        }
        NTKF_PARAM = {
            siteid:"kf_9366",                   //企业ID，为固定值，必填
            settingid:"kf_9366_1469771719610",  //接待组ID，为固定值，必填
            uid:customerId,                        //用户ID，未登录可以为空，但不能给null，uid赋予的值显示到小能客户端上
            uname:customerName,            //用户名，未登录可以为空，但不能给null，uname赋予的值显示到小能客户端上
            isvip:vip,                          //是否为vip用户，0代表非会员，1代表会员，取值显示到小能客户端上
            userlevel:userlevel,                      //网站自定义会员级别，0-N，可根据选择判断，取值显示到小能客户端上
            } 
    	}
    })

