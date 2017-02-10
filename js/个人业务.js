$(function () {
	// 优惠活动 新品推荐
	(function () {
		var oTitle = $('.info_hover_title strong');
		var aDiv = $('.info_hover');	

		aDiv.hide().eq(0).show();
		oTitle.each(function (index) {					
			$(this).mouseover(function () {
				if (index == 1) {
					$('.info_hover_title a').hide();
				}else{
					$('.info_hover_title a').show();
				}
				oTitle.removeClass('active');
				$(this).addClass('active');
				aDiv.hide().eq(index).show();
			});
		});
	})();


	// 理财交易
    (function () {
	 	var aMenu = $('.bank_item_menu1 a');
	 	var aUl = $('.bank_item_list1 ul');

	 	fnHover(aMenu,aUl);
	})();

	function fnHover(oTitle,oCon){
		oCon.hide().eq(0).show();    	
    	oTitle.each(function (index) {		
			$(this).mouseover(function () {
				oTitle.removeClass('active');
				$(this).addClass('active');
				oCon.hide().eq(index).show();
			});
		});
    }
})();