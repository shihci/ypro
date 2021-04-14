// 浮動視窗關閉與打開按鈕
function Show_Hidden(obj) {
  if (obj.style.display == "none") {
    obj.style.display = 'block';
  }

}

function delbtn(del) {
  if (del.style.display == "block") {
    del.style.display = 'none';
  }
}
window.onload = function () {
  var olink = document.getElementById("link");
  var del_btn = document.getElementById("close");
  var odiv = document.getElementById("thediv");
  var delegate = document.getElementById("dg");//增加委託諮詢按鈕-按下顯示資訊框
  olink.onclick = function () {
    Show_Hidden(odiv);
    return false;
  }
  del_btn.onclick = function () {
    delbtn(odiv);
    return false;
  }
  //委託按鈕-顯示資訊框
  delegate.onclick = function () {
    Show_Hidden(odiv);
    return false;
  }
}

/*當滑動滾輪大於50，按鈕由下往上移出*/
$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".fixed-btn").addClass("show");
  } else {
    $(".fixed-btn").removeClass("show");
  }
});
/*慢慢划動至上方*/
$('.fixed-btn-group a').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000);
});

$('.title-btn a').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000);
});


//aos.js
AOS.init(

	{
	   duration: 700,
		once: 'true',
  }
);


//w06-dealer-pd
$(function(){
		  	$(".product_img_sm img").click(function(){
				var N =$(this).attr("src").substring(0);//String.substring( Start , End ),第二個參數是結尾字符，自動擷取至該字符的前一個字符，如果沒有填寫，一樣擷取至最後一個字符。
				$("#bigimg").attr("src",N);
		});
			$("#bigimg").click(function(){
				var bigimg = $("#bigimg").attr("src");
				$("#bigimg2").css("display","block");
				$("#bigimg2").html("<img src='"+ bigimg +"'/>");
			})
			$("#bigimg2").click(function(){
				$("#bigimg2").css("display","none");
			});
			
		  });
		
		$('.slider').slick({

			infinite: false,
			speed: 300,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 3,

	  responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,

		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 5,
			slidesToScroll: 5
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
    });

