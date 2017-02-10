$(function () {
	// nav 头部导航条
	(function () {
		var oLi = $('.nav_menu').find('.menu_li');
		oLi.each(function (index) {
			var oDiv = oLi.eq(index).find('div');
			$(this).hover(function () {
				if (oDiv.length != 0) {
					oDiv.fadeIn();
				}				
			}, function () {
				oDiv.fadeOut();
			})
		})
	})();

	// bannar 轮播图
    (function(){
    	$(document).ready(function(){
	        $('.flexslider').flexslider({
	            directionNav: true,
	            pauseOnAction: false
	        });
	    });

        $('.flexslider').flexslider({
            namespace: 'flex-',    //控件的命名空间，会影响样式前缀 
            animation: "slide", //String: Select your animation type, "fade" or "slide"图片变换方式：淡入淡出或者滑动
            slideDirection: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"图片设置为滑动式时的滑动方向：左右或者上下
             
            selector: '.thumbnails .thumbnail',
            slideshowSpeed: 2000, // 自动播放速度毫秒
            animationSpeed: 600, //滚动效果播放时长
            pausePlay: false,//是否显示播放暂停按钮
     //       minItems: common.globals.SCREEN.ITEM,//最少显示多少项
            itemWidth: 220,//一个滚动项目的宽度
            itemMargin: 20,//滚动项目之间的间距
            slideshow: true, //Boolean: Animate slider automatically 载入页面时，是否自动播放
            animationDuration: 600, //Integer: S动画淡入淡出效果延时
            directionNav: true, //Boolean:  (true/false)是否显示左右控制按钮
            controlNav: true, //Boolean:  usage是否显示控制菜单//什么是控制菜单？
            keyboardNav: true, //Boolean:left/right keys键盘左右方向键控制图片滑动
            mousewheel: false, //Boolean: mousewheel鼠标滚轮控制制图片滑动
            prevText: "Previous", //String: 上一项的文字
            nextText: "Next", //String: 下一项的文字
            pauseText: 'Pause', //String: 暂停文字
            playText: 'Play', //String: 播放文字
            randomize: false, //Boolean: Randomize slide order 是否随机幻灯片
            slideToStart: 0, //Integer:  (0 = first slide)初始化第一次显示图片位置
            animationLoop: true, //  "disable" classes at either end 是否循环滚动 循环播放
            pauseOnAction: true, //Boolean:  highly recommended.
            pauseOnHover: false, //Boolean: ng
            controlsContainer: "", //Selector:  be taken.
            manualControls: ".js-slidernav i", //Selector: .自定义控制导航// 小圆点活数字标示 css 选择器        
            manualControlEvent: "", //String:自定义导航控制触发事件:默认是click,可以设定hover
            start: function() {}, //Callback: function(slider) - 当第一张幻灯片加载时引发的回调
            before: function() {}, //Callback: function(slider) - 每张幻灯片切换动画之前的回调
            after: function() {}, //Callback: function(slider) -  每张幻灯片切换动画完成后的回调
            end: function() {} //Callback: function(slider) -  到达最后一张幻灯片引发的回调         
        });
    })();
	

	// bannar 个人网上银行
	(function () {
		$('.bannar_web_bank').hover(function(){
			$(this).find('.bannar_gr_hover').fadeIn();
		},function(){
			$(this).find('.bannar_gr_hover').hide();
		});
	})();

	// 侧边栏 客服 
	(function () {
		// fnHover1('.fuwu','.fuwu_hover');
		var posL = $('.fuwu').position().left;
		$('.fuwu').hover(function(){		
			$(this).animate({
				left:posL-220
			})
		},function(){
			$(this).animate({
				left:posL
			})
		});
	})();	

	// 个人网上银行 快捷服务 金融信息
	 (function () {
	 	var oMenu = $('.web_bank .wb_menu');
	 	var aA = oMenu.find('a');
		var aUl = $('.wb_list ul');

		fnHover(aA,aUl);
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





















