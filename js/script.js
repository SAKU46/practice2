$(function () {
  // アコーディオン
  $(".hide").hide();
  $(function () {
    $("#acMenu dt").on("click", function () {
      $(this).next().slideToggle();
    });
  });



  // 問い合わせフォームのチェック
  $(".contact__alert").hide();
  $("#submit-btn").click(function () {
    var sendFlag = true;

    // 名前項目のチェック
    if (!$("#name").val()) {
      $(".contact__form--top .contact__alert").show();
      sendFlag = false;
    } else {
      $(".contact__form--top .contact__alert").hide();
    }

    // メール項目のチェック
    if (!$("#mail").val()) {
      $(".contact__form--middle .contact__alert").show();
      sendFlag = false;
    } else {
      $(".contact__form--middle .contact__alert").hide();
    }

    // テキスト項目のチェック
    if (!$("#text").val()) {
      $(".contact__form--bottom .contact__alert").show();
      sendFlag = false;
    } else {
      $(".contact__form--bottom .contact__alert").hide();
    }

    // チェックボックスのチェック
    var checkboxChk = $('input[name="checkbox"]:checked').length;
    if (checkboxChk == 0) {
      $(".contact__submit .contact__alert").show();
      sendFlag = false;
    } else {
      $(".contact__submit .contact__alert").hide();
    }

    // ラストチェック
    if (sendFlag == false) {
      return false;
    }
  });


  // ハンバーガーメニュー
  var imgHeight = $('.top__bg-img').height();
  var bgHeight = $('.top__background').height();

  $(".hamburger-btn").click(function () {
    if ($(window).scrollTop() < bgHeight - 50) {
      $(".bar").toggleClass("cross");
      $('.hamburger-btn__musk').fadeToggle(300);
      $(".header-list").toggleClass("slide");
      $("body").toggleClass("stop");
    } else {
      $(".bar").toggleClass("black");
      $(".text").toggleClass("black");
      $(".bar").toggleClass("cross");
      $('.hamburger-btn__musk').fadeToggle(300);
      $(".header-nav").toggleClass("slide");
      $("body").toggleClass("stop");
    }
  });

  // スムーススクロール

  $(".nav").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -= 70;
    $("html, body").animate({ scrollTop: target }, 1000);
    return false;
  });
  $(".top-nav").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -= 120;
    $("html, body").animate({ scrollTop: target }, 1000);
    return false;
  });
});

// swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 56,
  allowTouchMove: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,

    },
    767: {
      slidesPerView: 2,

    }
  }
});

// AOS
AOS.init({
  duration: 700,
  once: false,
});