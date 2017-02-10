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

    // 业务产品
    (function () {
	 	var aMenu = $('.bank_item_menu1 a');
	 	var aUl = $('.bank_item_list1 ul');

	 	fnHover(aMenu,aUl);
	})();

	 // 投资理财
    (function () {
	 	var aMenu = $('.bank_item_menu2 a');
	 	var aUl = $('.bank_item_list2 ul');

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

    // ad 无缝向左滚动
 //    $(function() {
	//     var num = 0;
	//     function goLeft() {
	//         //750是根据你给的尺寸，可变的
	//         if (num == -858) {
	//             num = 0;
	//         }
	//         num -= 1;
	//         $(".ad .ad_img ul").css({
	//             left: num
	//         })
	//     }
	//     //设置滚动速度
	//     var timer = setInterval(goLeft, 20);
	//     //设置鼠标经过时滚动停止
	//     $(".ad .ad_img").hover(function() {
	//         clearInterval(timer);
	//     },
	//     function() {
	//         timer = setInterval(goLeft, 20);
	//     })
	// });
	
    // ad 左右切换
	(function(){
		var oBtn_l = $('.ad_btn_l');
		var oBtn_r = $('.ad_btn_r');
		var oCon = $('.ad_img ul');

		oBtn_l.click(function(){
			// alert(1);
			var posL = oCon.position().left;
			if (posL == 0) {
				oCon.animate({
					left:-(oCon.find('li').length/2)*289
				})							
			}else{
				posL += 289;
				oCon.animate({
					left:posL
				})
			}
		});
		oBtn_r.click(function(){
			var posL = oCon.position().left;
			var flag = -(oCon.find('li').length - 3)*289;
			if (posL == flag) {
				oCon.animate({
					left:0
				})
			}else{				
				posL -= 289;
				oCon.animate({
					left:posL
				})
			}
		});
	})();

})()





















