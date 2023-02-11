
// 인트로
$(document).on('click', '.intro_img', function(){
  var timer;
  $('.intro_img').toggleClass('hide');
  $('.load_wrap').css('opacity',(1));
  timer = setTimeout(function(){
    location.href = 'index.html';
  },3000);
});




let skhtml = $('.html')
let skcss = $('.css')
let skjs = $('.js')
let sk3d = $('.max')
let skpho = $('.photo')
let skillu = $('.ill')
let $win = $(window);
$win.scroll(function(){
  let top = $('.sec01').offset().top;
  let $h2 = $('.sec01 h2')
  // console.log(top);
  // 네비게이션,어바웃미제목
  if ($win.scrollTop() >= top ) {
    $('nav').css('opacity','1');
    $h2.css('opacity','1');

    $h2.css('animation','sec01 1s')
  } else {
    $('nav').css('opacity','0');
    $h2.css('opacity','0');
    $h2.css('transition','1s');

    $h2.css('animation','none');
  };
  // var section01 = $('.sec01').offset().top;
  // if ($win.scrollTop() >= section01){
  //   $('.menu01').css('color','#d251f2')
  // }else{
  //   $('.menu01').css('color','#fff')
  // }
  // let section02 = $('.sec02').offset().top;
  // if ($win.scrollTop() >= section02){
  //   $('.menu02').css('color','#d251f2')
  // }else{
  //   $('.menu02').css('color','inherit')
  // }


  // sec02
  let sec02 = $('.sec02').offset().top;
  let sec02h2 = $('.sec02 h2')
  let skill = $('.skill_bar span')


  // console.log(top);
  if ($win.scrollTop() >= sec02 ) {
    // 스킬 대제목
    sec02h2.css('animation','sec02 1s')

    // 스킬바  
    skill.css('animation','skill_bar 1s')

    // 스킬img  
    skhtml.css('animation','skill 1s')
    skcss.css('animation','skill 1s')
    skjs.css('animation','skill 1s')
    sk3d.css('animation','skill 1s')
    skpho.css('animation','skill 1s')
    skillu.css('animation','skill 1s')
    $('.skills div').css('opacity','1')
  } else {
    // 스킬 대제목
    sec02h2.css('animation','none')

    // 스킬바
    skill.css('animation','none')

    // 스킬wrap
    skhtml.css('animation','none')
    skcss.css('animation','none')
    skjs.css('animation','none')
    sk3d.css('animation','none')
    skpho.css('animation','none')
    skillu.css('animation','none')
    $('.skills div').css('opacity','0')
    $('.skills div').css('transition','1s')
  };







  //////////////////////////////////
});

// $(function(){
//   if ($('.html').click) {
//     let img = $('.html img')
//     img.animate({scale:'1.25'}, 300);
//   } else {

//   }
// });



// 섹션 이동시 메뉴 색상 변경
let $menu = $('.gnb li')
$(window).scroll(function(){
  // each():제이쿼리 객체에 포함된 각 요소에 개별적인 작업 실행

  // $('선택자').each(function(){
  //   $(this) 또는
  //   $('선택자').eq(index) 또는
  //   $('선택자:eq(index)')
  // })
  
  $('section').each(function(){
    if($(this).offset().top <= $(window).scrollTop()){
      let index = $(this).index()-1;
      $menu.removeClass('on')
      $menu.eq(index).addClass('on');
    }

  })
});

// 메뉴 클릭시 섹션 이동
$(document).on('click','.menu01',function(){
  var section01 = $('.sec01').offset().top;
  console.log(section01)
  $('html, body').animate({scrollTop:section01},500)

})
$('.menu02').click(function(){
  var section02 = $('.sec02').offset().top;
  $('html').animate({scrollTop:section02},500)
})
$('.menu03').click(function(){
  var section03 = $('.sec03').offset().top;
  $('html').animate({scrollTop:section03},500)
})
$('.menu04').click(function(){
  var section04 = $('.sec04').offset().top;
  $('html').animate({scrollTop:section04},500)
})


