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
$('a').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000);
});

//aos.js
AOS.init(

	{
	   duration: 700,
		once: true,
  }
);

