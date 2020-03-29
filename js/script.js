$(document).ready(function() {
  $("#top").click(function() {
    $("html, body").animate({scrollTop:(0)}, 1000);
  });

  $(window).scroll(function() {
    if($(window).scrollTop() > $(".about").offset().top) {
      $("#top").show();
    }else {
      $("#top").hide();
    }
  });

  setInterval(function() {
    $("#cursor").toggleClass("showOff");
  }, 300);

  $(".btn-more").click(function() {
    var projects = {
      dahae : {
        func : "메인, 상품목록, 상품상세정보, 상품주문, 주문배송관리",
        details : ["신상품과 인기상품 및 각종 카테고리 별로 상품 확인이 가능합니다.",
                   "제품 상세페이지에서 장바구니에 담거나 주문할 수 있습니다.",
                   "관리자는 주문배송관리를 통해 주문 상세정보 확인 및 주문상황, 배송상황 등을 수정할 수 있습니다."],
        images: ["dahae.png", "dahae_00.png", "dahae_01.png", "dahae_02.png"],
        video: "dahae.mp4"
      },
      itshow : {
        func : "메인, 공연목록, 공연상세정보, 판매현황, 문의사항, 채팅",
        details : ["공연 카테고리별 등록순, 조회순, 별점순으로 공연 목록을 조회할 수 있습니다.",
                   "공연 상세정보에서 공연이 있는 날은 빨간색으로 표시 되며 해당 공연을 선택해 예매할 수 있습니다.",
                   "공연 상세정보에서 공연 상세정보, 공연장 안내(길찾기), 관람후기를 작성할 수 있습니다.",
                   "업체회원은 마이페이지에서 각 공연별 판매현황을 확인할 수 있습니다.",
                   "문의사항 게시판과 실시간 채팅으로 관리자와 소통이 가능합니다."],
        images: ["itshow.png", "itshow_00.png", "itshow_01.png", "itshow_03.png", "itshow_02.png", "itshow_04.png"],
        video: "itshow.mp4"
      },
      myfume : {
        func : "메인, 로그인, 회원가입, 향수목록, 향수리뷰정보, 마이페이지",
        details : ["원하는 향을 선택해 향수 검색을 할 수 있고 상세페이지로 이동시 리뷰를 작성할 수 있습니다.",
                   "리뷰 작성시 향수의 지속력, 전체평을 남겨 향수의 평균 지속력과 평점을 확인할 수 있습니다.",
                   "마이페이지에서 그동안 사용자가 남긴 리뷰를 확인할 수 있고 삭제가 가능합니다."],
        images: ["myfume.png", "myfume.png", "myfume.png", "myfume.png"],
        video: "myfume.mp4"
      }
    }

    var name = $(this).attr("id");
    var data, li = "", img = "", vid = "";
    if(name === "dahae") {
      data = projects.dahae;
    }else if(name === "itshow") {
      data = projects.itshow;
    }else if(name === "myfume") {
      data = projects.myfume;
    }

    $("body").css("overflow", "hidden");
    $("#func").text(data.func);

    $(data.details).each(function(key, value) {
      //li += `<li>${value}</li>\n`;
      li += "<li>" + value + "</li>\n";
    });
    $("#spec").html(li);

    $(data.images).each(function(key, value) {
      //img += `<img src='images/${value}'/>`;
      img += "<img src='images/" + value + "'/>";
    });
    $("#img").html(img);

    //vid = `<video controls poster="images/${name}.png"><source src="images/${name}.mp4" type="video/mp4"/></video>`;
    vid = "<video controls poster='images/" + name + ".png'><source src='images/" + name + ".mp4' type='video/mp4'/></video>";
    console.log(vid);
    $("#vid").html(vid);

    $(".modal").show();

    $(".close").click(function() {
      $("body").css("overflow", "scroll");
      $("#vid").html("");
      $(".tab-menu").removeClass("active");
      $("#tab-01").addClass("active");
      $(".tab-content").hide();
      $(".tab-01").show();
      $(".modal").hide();
    });
  });

  $(".tab-list li").click(function() {
    var tab = $(this).attr("id");
    $(".tab-menu").removeClass("active");
    //$(`#${tab}`).addClass("active");
    $("#" + tab).addClass("active");
    $(".tab-content").hide();
    //$(`.${tab}`).show();
    $("." + tab).show();
  });
});
