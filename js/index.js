$(function () {
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
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$(".fixed-btn").addClass("show");
		} else {
			$(".fixed-btn").removeClass("show");
		}
	});
	/*慢慢划動 to 上方*/
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

	//w02-target

	$("#os_type3").click(function () {
		$("#vline3").toggleClass("d-none");
		$("#os_type3_list1").toggleClass("d-block");
		$("#os_tl3-1").toggleClass("d-block");
		$(this).find('.toggle_target img').toggle();
	});
	$("#os_type4").click(function () {
		$("#vline4").toggleClass("d-none");
		$("#os_type4_list1").toggleClass("d-block");
		$("#os_type4_list2").toggleClass("d-block");
		$(this).find('.toggle_target img').toggle();
	});
	$("#os_type5").click(function () {
		$("#vline5").toggleClass("d-none");
		$("#os_type5_list1").toggleClass("d-block");
		$(this).find('.toggle_target img').toggle();
	});
	$("#os_type6").click(function () {
		$("#vline6").toggleClass("d-none");
		$("#os_type6_list1").toggleClass("d-block");
		$("#os_tl6-1").toggleClass("d-block");
		$("#os_tl6-2").toggleClass("d-block");
		$(this).find('.toggle_target img').toggle();
	});


	//w06-dealer-pd

	$(".product_img_sm img").click(function () {
		var N = $(this).attr("src").substring(0);//String.substring( Start , End ),第二個參數是結尾字符，自動擷取 to 該字符的前一個字符，如果沒有填寫，一樣擷取 to 最後一個字符。
		$("#bigimg").attr("src", N);
	});
	$("#bigimg").click(function () {
		var bigimg = $("#bigimg").attr("src");
		$("#bigimg2").css("display", "block");
		$("#bigimg2").html("<img src='" + bigimg + "'/>");
		document.documentElement.style.overflow = 'hidden';//電腦端禁止滑動
		document.body.style.overflow = 'hidden';//手機端禁止滑動
	})
	$("#bigimg2").click(function () {
		$("#bigimg2").css("display", "none");
		document.documentElement.style.overflow = 'auto';//電腦端可以滑動
		document.body.style.overflow = 'auto';//手機端可以滑動
	});

	const Taichung=document.getElementById("Taichung");
	const Hsinchu=document.getElementById("Hsinchu");
	const Tainan=document.getElementById("Tainan");
	const Shanghai=document.getElementById("Shanghai");
	const Nanjing=document.getElementById("Nanjing");
	const address=document.getElementById("address");
	let html="";
	const addressData=[
		{
			name:"Taichung",
			iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77316.65410519177!2d120.57946969238691!3d24.28040035889247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693641c41e9947%3A0x71aba99e19a41d7f!2z6Iux5a-256eR5oqA6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1628651326810!5m2!1szh-TW!2stw"
			
		},{
			name:"Hsinchu",
			iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156183.8039466479!2d120.9528279708849!3d24.76839544731148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346837cc87f102d3%3A0x319305dcf98fab8d!2zMzEw5paw56u557ij56u55p2x6Y6u5ZOh5bGx6LevMTM05be3NDblvIQ56Jmf!5e0!3m2!1szh-TW!2stw!4v1628651218310!5m2!1szh-TW!2stw"
			
		},{
			name:"Tainan",
			iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239606.30655631333!2d120.13124693817603!3d23.13663391479062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7b8659459b0d%3A0xe8abaa1f5d4fef4e!2zNzQx5Y-w5Y2X5biC5ZaE5YyW5Y2A6Ieq55Sx6LevMTEw6Jmf!5e0!3m2!1szh-TW!2stw!4v1628651118586!5m2!1szh-TW!2stw"
			
		},{
			name:"Shanghai",
			iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5284753.399616812!2d118.503702579564!3d27.236056645646304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b2f1172bded3cf%3A0x5ebb996d1381e880!2z5Lit5ZyL5LiK5rW35biC5p2-5rGf5Yy65paH5Y2X6Lev!5e0!3m2!1szh-TW!2stw!4v1628649167290!5m2!1szh-TW!2stw"
			
			

		},{
			name:"Nanjing",
			iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1631584.316010079!2d118.48604591219758!3d31.775510870050287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35ca7a7306973c37%3A0x1a9a09b44f375a3b!2z5Lit5ZyL5rGf6IuP55yB5Y2X5Lqs5biC5rWm5Y-j5Yy65q2l5pyI6LevOeWPtyDpgq7mlL_nvJbnoIE6IDIxMTE2MQ!5e0!3m2!1szh-TW!2stw!4v1628650939247!5m2!1szh-TW!2stw"
			
		}

	]
	function area(value){//選擇地區變換地圖
		html="";
		addressData.forEach(function(obj){
			if(obj.name ===value){
				html+='<iframe style="border:0;height:100%;width:100%;" class="d-none d-md-block" src="'+obj.iframe+' allowfullscreen="" loading="lazy"></iframe>';
		address.innerHTML=html;
			}
		});
	}
	function areaclick(value){//增加或移除底線樣式
		let del = document.getElementsByClassName("disabledbtn")[0];
		del.classList.remove("disabledbtn", "font-weight-bold");
		value.classList.add("disabledbtn", "font-weight-bold");
	 }
	Taichung.addEventListener("click",function(){
		area(this.id);
		areaclick(this);
		
	});
	Hsinchu.addEventListener("click",function(){
		area(this.id);
		areaclick(this);
	});
	Tainan.addEventListener("click",function(){
		area(this.id);
		areaclick(this);
	});
	Shanghai.addEventListener("click",function(){
		area(this.id);
		areaclick(this);
	});
	Nanjing.addEventListener("click",function(){
		area(this.id);
		areaclick(this);
	});

//jquery會跟slick相衝,slick以下請不要放任何程式,會拒絕執行
	$(".slider").slick({

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

	



	
});