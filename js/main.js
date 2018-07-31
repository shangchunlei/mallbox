//警告弹框js
function tank(txt){
	$("body").append("<span class='tankBox'>"+txt+"</span>");
	var tkWidth=$('.tankBox').width()/2;
	var tkHeight=$('.tankBox').height()/2;
	$('.tankBox').css({
		marginLeft:-tkWidth,
		marginTop:-tkHeight
	});
	$('.tankBox').fadeIn("slow");
	setTimeout(function(){
		$('.tankBox').fadeOut("slow");
	},2000);
	setTimeout(function(){
		$('.tankBox').remove();
	},2500)
}

//显示隐藏回到顶部按钮
$('body').append("<span class='goTop'>&uarr;</span>");
gotop();
function gotop(){
	if($(window).scrollTop()>100){
	    $(".goTop").animate({opacity:1},10);
	  }else{
	    $(".goTop").animate({opacity:0},50);
	  }
}
$(window).scroll(function(){
  gotop();
  //回到顶部
   $(".goTop").click(function(event) {
      $(window).scrollTop(0)
   });
})


//弹框背景
function tkBac(){
	$('body').append("<div class='tkBac'></div>");
}

//规格选择
$('.speciLi li').click(function(){
	$(this).addClass('activeNav').siblings().removeClass('activeNav');
})

//规格选数量
var num=1;
console.log(num);
$('.reduceBtn').click(function(){  //减数量
	num=num-1;
	if(num<1){
		num=1;
	}
	$('.numShow').html(num);
});
$('.addBtn').click(function(){ //加数量
	num=num+1;
	$('.numShow').html(num);
})

//底部居中
var footV=$('.footNav').width();
var footB=$('.payBottomBox').width();
$('.footNav').css({
	marginLeft:-footV/2+'px'
});

$('.payBottomBox,.goBottomBox').css({
	marginLeft:-footB/2+'px'
})
