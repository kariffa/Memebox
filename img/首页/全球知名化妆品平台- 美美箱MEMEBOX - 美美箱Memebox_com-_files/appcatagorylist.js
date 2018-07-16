/*
* @Author: Derek Zhou
* @Date:   2017-01-19 11:10:53
* @Last Modified by:   Derek Zhou
* @Last Modified time: 2017-02-09 14:37:17
*/

jQuery(document).ready(function(jQuery) {
	var appBannerTmp = Handlebars.compile(jQuery("#app-banner-template").html());
	var appBannerList = [];
	var originBanner = {
		"image": "/skin/frontend/ultimo/default/images/originBanner.jpg"
	}
	for(var i = 0; i < appCategoryList.length; i++ ){
		if(appCategoryList[i].status == 2){
			appBannerList.push(appCategoryList[i]);
		}
	}
	console.log(appBannerList);
	if(appBannerList.length >= 8){
		appBannerList = appBannerList.slice(0,8);
		console.log(appBannerList);
	}
	else{
		if((appBannerList.length)%2 != 0){
			appBannerList.push(originBanner);
		}
	}
	console.log(appBannerList);
	jQuery('.app-banner').html(appBannerTmp(appBannerList));


	var banners = jQuery('.app-banner .make-qr');
	banners.each(function(){
		if(jQuery(this).find('.bannerImg').data('link')){
			var qrcode = new QRCode(this);
			qrcode.makeCode(jQuery(this).find('.bannerImg').data('link'));
		}
	})

	jQuery('.app-banner').on('mouseenter','.make-qr',function(){
		if(jQuery(this).find('.bannerImg').data('link')){
			jQuery(this).find('.wa').css('display', 'block');
			jQuery(this).find('img:not(.bannerImg)').css('z-index', '3');
		}
	})
	jQuery('.app-banner').on('mouseleave','.make-qr',function(){
		if(jQuery(this).find('.bannerImg').data('link')){
			jQuery(this).find('.wa').css('display', 'none');
			jQuery(this).find('img:not(.bannerImg)').css('z-index', '-1');
		}
	})

});
