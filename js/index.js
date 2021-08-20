//更新資料請到data.js

$(function () {
	// 浮動視窗的聯絡視窗關閉與打開按鈕
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
	const olink = document.getElementById("link");
	const del_btn = document.getElementById("close");
	const odiv = document.getElementById("thediv");
	const delegate = document.getElementById("dg");
	//以下最外層if大部分是用來先判斷此頁面的id在該頁面存不存在，如果存在才執行,避免console出紅字
	if(olink){
		olink.addEventListener("click",()=>{
			Show_Hidden(odiv);
		});
		}
	if(del_btn){
		del_btn.addEventListener("click",()=>{
			delbtn(odiv);
		});
	}
	if(delegate){
		//委託按鈕-顯示資訊框
		delegate.addEventListener("click",()=>{
			Show_Hidden(odiv);
		});
	}

	/*當滑動滾輪大於50，按鈕由下往上移出*/
	$(window).scroll(function (event) {
		let scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$(".fixed-btn").addClass("show");
		} else {
			$(".fixed-btn").removeClass("show");
		}
	});
	/*當點擊id標籤時，會慢慢划動到上方*/
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


	//用於aos.js,動畫
	AOS.init(

		{
			duration: 700,
			once: 'true',
		}
	);
	//w01-選擇地區變換地圖
	const Taichung=document.getElementById("Taichung");
	const Hsinchu=document.getElementById("Hsinchu");
	const Tainan=document.getElementById("Tainan");
	const Shanghai=document.getElementById("Shanghai");
	const Nanjing=document.getElementById("Nanjing");
	const address=document.getElementById("address");
	let html="";

	function area(value){
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
		del.classList.remove("disabledbtn");
		value.classList.add("disabledbtn");
	}
	if(Taichung){
		Taichung.addEventListener("click",function(){
			area(this.id);
			areaclick(this);	
		});
	}
	if(Hsinchu){
		Hsinchu.addEventListener("click",function(){
			area(this.id);
			areaclick(this);
		});
	}
	if(Tainan){
		Tainan.addEventListener("click",function(){
			area(this.id);
			areaclick(this);
		});
	}
	if(Shanghai){
		Shanghai.addEventListener("click",function(){
			area(this.id);
			areaclick(this);
		});
	}
	if(Nanjing){
		Nanjing.addEventListener("click",function(){
			area(this.id);
			areaclick(this);
		});
	}

	//w01-組織架構
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


	//vue.js
	//w0-最新資訊
	if(document.getElementById("news")){
		var vm = new Vue({
			el: '#news',
			data: news
			});
	}
	//w04-客戶及夥伴資料
	if(document.getElementById("clients")){
		var vm2 = new Vue({
            el: '#clients',
			data: partners_tw
        });
		var vm3 = new Vue({
			el:"#partners",
			data: partners_tw
		});
	}
	//w04-案例實績
	if(document.getElementById("client-tsmc")){
		var vm_tsmc = new Vue({
			el: '#client-tsmc',
			data: client_factory1
			});
		var vm_factory2 = new Vue({
			el: '#client-fac2',
			data: client_factory2
			});
		var vm_factory3 = new Vue({
			el: '#client-fac3',
			data: client_factory3
			});
		var vm_factory4 = new Vue({
			el: '#client-fac4',
			data: client_factory4
			});
	}
	//w06-products裡的產品滑動

	if(document.getElementsByClassName("slider")[0]){
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
	}

	

	
});
