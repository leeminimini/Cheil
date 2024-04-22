$(function(){

    // $('.btn_all_menu').click(function(){
    //     $('header').toggleClass('active')
    //     $('.cover').fadeToggle('')
    // })

    $('.btn_all_manu').on('click',function(){
        console.log("클릭");
        $('header').toggleClass('active');
        $('.cover').fadeToggle()
    })

    //slick slider
    $('.slider').slick({
        autoplay: true,
        arrows:false,
        fade:true,
        dots:true
    })

// 해당 페이지가 열리지마자(load) haeder실행
$(window).on('load scroll',function(){
    $('header').addClass('on')
    $('.visu_text_wrap').addClass('on')
   

// header의 높이값을 알아낸다
// visual의 높이값도 알아낸다
// scroll bar의 위치도 알아낸다

// 스크롤바의 위치가 visual높이 - header 높이를 빼서 >=면 두번째 header로 바꾸고
//                                                작으면 첫번째 header로 바꾸기
// header높이값을 알기
let header = $('header')
console.log(header)
let headerHeight = header.outerHeight()  
console.log('header높이',headerHeight)                                                                               

// visual의 높이값 알기
let visualHeight = $('.visual').outerHeight()
console.log('visual높이',visualHeight)

// scroll bar의 위치알기
let scrollTop = $(window).scrollTop()
console.log('스크롤바',scrollTop)

if(scrollTop >= visualHeight-headerHeight){
    header.addClass('down')
}else{
    header.removeClass('down')
}

})
})



