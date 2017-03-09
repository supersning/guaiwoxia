$(function(){
	var _index=0;
	$(".navs dl").tap(function(){
		 _index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$('.cuts').css({
		 	'transition':'all 0.2s linear',
			'left': -(_index)*100+'%'
		 })
		
		$('.navs span').css({
			'transition':'all 0.2s linear',
			'left': _index*20+'%'
		});
	})
	
	var aDiv=$('.cuts>div');
	var _length=aDiv.length-2;
	$('.cuts>div').swipeLeft(function(){				
		if(_index>_length){
			_index=_length;			
		}else{
			_index++;		
			 $('.cuts').css({
			 	'transition':'all 0.2s linear',
				'left': -_index*100+'%'
			 })
			  $(".navs dl").eq(_index).addClass("active").siblings().removeClass("active");
			  $('.navs span').css({
				'transition':'all 0.2s linear',
				'left': _index*20+'%'
			});
		}
	})
	$('.cuts>div').swipeRight(function(){				
		if(_index<=0){
			_index=0;			
		}else{
			_index--;		
			 $('.cuts').css({
			 	'transition':'all 0.2s linear',
				'left': -_index*100+'%'
			 })
			 $(".navs dl").eq(_index).addClass("active").siblings().removeClass("active");
			  $('.navs span').css({
				'transition':'all 0.2s linear',
				'left': _index*20+'%'
			});
		}
	})
})
