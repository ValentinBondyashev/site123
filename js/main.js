$(function(){
	$('.food_slide').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
	dots: false
	});

	$(".food_btn").click(function(){
		if (!$(".food_content").hasClass('clicked')) {
			$(".food_content").addClass('clicked'); 
		  } else { 
			$(".food_content").removeClass('clicked');
		  }
	});
});