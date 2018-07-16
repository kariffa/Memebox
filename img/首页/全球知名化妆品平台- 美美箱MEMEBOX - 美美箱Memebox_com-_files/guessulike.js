/*
* @Author: Derek Zhou
* @Date:   2017-02-09 14:32:53
* @Last Modified by:   Derek Zhou
* @Last Modified time: 2017-02-09 14:34:08
*/

jQuery(document).ready(function(jQuery) {
	var swiperTmp = Handlebars.compile(jQuery("#swiper-slide-template").html());
	jQuery('.swiper-wrapper').html(swiperTmp(hotProducts));
	var mySwiper = new Swiper ('.guess-slide', {
	    autoplay: 5000,//可选选项，自动滑动
	    slidesPerView : 4,
	    prevButton:'.swiper-button-prev',
	    nextButton:'.swiper-button-next'
	})
});
