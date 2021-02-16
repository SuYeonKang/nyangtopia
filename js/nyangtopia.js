$(document).ready(function(){

    $('.slider').bxSlider({
        mode: 'horizontal',
        
        adaptiveHeight: true, 
        adaptiveHeightSpeed: 500,
        
        speed: 500,
        easing: 'ease-out', 
        
        startSlide: 0,
        randomStart: false,
        
        infiniteLoop: true,
        hideControlOnEnd: false, 
        
        captions: false,
       
        ticker: false, 
        tickerHover: false,
        
        video: false,
        
        preloadImages: 'visible', 

        //responsive method
        responsive : true, //반응형 지원여부
        /*
            responsive 가 false일 경우, slider에 고정폭과 고정높이가 필요하다.
            위치는 jquery.bxslider.css .bx-wrapper class에 width 고정, height는 이미지 높이에 따라 자동 조정.
            고정형 display 사용시 false 사용 ex) 은행 태블릿 싸인

            pc 만 지원하는 반응형일 경우
            같은 class인 .bx-wrapper 에게 min-width를 1000px을 지정 하면 된다.
        */
        touchEnabled: false, //터치스와이프 기능 사용여부 //chrome 터치불가현상. -- 지금은 안쓰는게 좋음
        swipeThreshold: 0, //터치하여 스와이프 할때 변환 효과에 소모되는 시간 설정
        oneToOneTouch: false, // fade 효과가 아닌 슬라이드는 손가락의 접지상태에 따라 슬라이드를 움직일수있다.
        preventDefaultSwipeX: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 x축으로 움직일지에 대한 여부
        preventDefaultSwipeY: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 y축으로 움직일지에 대한 여부
    
        // pager method
        pager: true, //pager 인디케이터 출력여부
        // pagerType: 'short',  pager 타입 설정. full은 default, short 은 1/4 이런 형식의  출력(숫자로출력)
        //pagerShortSeparator: ' | ', short 타입 일 경우 카운트 사이 문자 설정(/ 이거 모양 바꾸는거)
        // pagerSelector: '.newPager',  // 기본 pager 를 대체
        pagerCustom: '.sliderPager',

        // control method
        controls: true, // 좌,우 컨트롤 버튼 출력 여부  -- 접근성 측면에서 되도록 true로 두기

        auto: true, // 자동 재생 활성화  -- 접근성 측면에서 안좋음
        autoControls: true, //자동재생 제어버튼 활성화  단, auto 모드가 활성화 되어있어야함.
        autoControlsCombine: true, // 재생시 중지버튼 활성화, 중지시 재생버튼 활성화
        
        autoControlsSelector: '.newAutoControl',  //기본 autoControl을 대체
        startText: '시작', // 재생 버튼에 text 삽입
        stopText: '중지', // 중지 버튼에 text 삽입
        // customizing 방법은 controler 와 동일
        
        autoStart: true, // 페이지 로드가 되면, 슬라이드의 자동시작 여부    -- auto와 같은 옵션(true/false)이어야함.
        autoHover: true, // 슬라이드 오버시 재생 중단 여부 (false: 오버무시) 
        autoDelay: 0, // 자동 재생 전 대기 시간 설정
        pause: 4000, // 자동 재생 시 각 슬라이드 별 노출 시간
        keyboardEnabled : false, //키보드 조작 가능하게 할지 여부 -- 모바일에서 안좋음
        stopAutoOnClick : false // control 부분 (이전,다음,자동재생 등)과 상호작용시 자동작동 중지.
        
    });

    $('.gallerySlider').bxSlider({
        mode: 'horizontal', // 'horizontal' : 좌,우 'vertical' : 상,하 'fade' : fade in, out
        
        adaptiveHeight: true, // 'mode : horizontal' 시에만 구동. 각 이미지의 높이에 따라 슬라이더 높이의 유동적 조절 여부
        adaptiveHeightSpeed: 500, //adaptiveHeight 동작속도
        
        speed: 500, // m/s ex > 1000 = 1s
        easing: 'ease-out', // 동작 가속도 css와 동일
        
        startSlide: 0, // 시작시 사용할 slide(0부터시작)
        randomStart: false, //  시작시 random slide 여부
        
        infiniteLoop: true, //마지막에 도달 했을시, 첫슬라이드로 갈 것인가 멈출것인가
        hideControlOnEnd: false, //첫번째 슬라이드 일경우 이전 버튼 삭제, 마지막 슬라이드 일 경우 다음 버튼 삭제 단, infiniteLoop: false 일 경우만 사용 가능.
        
        captions: false, // img 태그에 title 속성값을 사용할시, 그부분의 출력여부 단, css .bx-wrapper .bx-caption 부분 조절 필요
       
        ticker: false,  //ticker 모드 사용 (speed 조절필요)  -- 흘러가는 공간
        tickerHover: false, //ticker 모드 사용시 마우스 오버로 멈추기.
        
        video: true,//slide에 video 사용 및 활성화여부. 반응성 향상, 사용할 시에 plugins/jquery.fitvids.js include 필요
        
        preloadImages: 'visible', // "visible"은 현재 보여지는 슬라이드 이미지만 로드 이후 순차적 로드, "all"로 설정하면 이미지가 모두 로드되야 작동.
                                    // 우리나라는 인터넷 속도가 빨라서 확인안됨...

        //responsive method
        responsive : true, //반응형 지원여부
        /*
            responsive 가 false일 경우, slider에 고정폭과 고정높이가 필요하다.
            위치는 jquery.bxslider.css .bx-wrapper class에 width 고정, height는 이미지 높이에 따라 자동 조정.
            고정형 display 사용시 false 사용 ex) 은행 태블릿 싸인

            pc 만 지원하는 반응형일 경우
            같은 class인 .bx-wrapper 에게 min-width를 1000px을 지정 하면 된다.
        */
        touchEnabled: false, //터치스와이프 기능 사용여부 //chrome 터치불가현상. -- 지금은 안쓰는게 좋음
        swipeThreshold: 0, //터치하여 스와이프 할때 변환 효과에 소모되는 시간 설정
        oneToOneTouch: false, // fade 효과가 아닌 슬라이드는 손가락의 접지상태에 따라 슬라이드를 움직일수있다.
        preventDefaultSwipeX: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 x축으로 움직일지에 대한 여부
        preventDefaultSwipeY: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 y축으로 움직일지에 대한 여부
    
        // pager method
        pager: true, //pager 인디케이터 출력여부
        // pagerType: 'short',  pager 타입 설정. full은 default, short 은 1/4 이런 형식의  출력(숫자로출력)
        //pagerShortSeparator: ' | ', short 타입 일 경우 카운트 사이 문자 설정(/ 이거 모양 바꾸는거)
        // pagerSelector: '.newPager',  // 기본 pager 를 대체
        pagerCustom: '.sliderPager',

        // control method
        controls: true, // 좌,우 컨트롤 버튼 출력 여부  -- 접근성 측면에서 되도록 true로 두기

        auto: true, // 자동 재생 활성화  -- 접근성 측면에서 안좋음
        autoControls: true, //자동재생 제어버튼 활성화  단, auto 모드가 활성화 되어있어야함.
        autoControlsCombine: true, // 재생시 중지버튼 활성화, 중지시 재생버튼 활성화
        
        autoControlsSelector: '.newAutoControl',  //기본 autoControl을 대체
        startText: '시작', // 재생 버튼에 text 삽입
        stopText: '중지', // 중지 버튼에 text 삽입
        // customizing 방법은 controler 와 동일
        
        autoStart: true, // 페이지 로드가 되면, 슬라이드의 자동시작 여부    -- auto와 같은 옵션(true/false)이어야함.
        autoHover: true, // 슬라이드 오버시 재생 중단 여부 (false: 오버무시) 
        autoDelay: 0, // 자동 재생 전 대기 시간 설정
        pause: 4000, // 자동 재생 시 각 슬라이드 별 노출 시간
        keyboardEnabled : false, //키보드 조작 가능하게 할지 여부 -- 모바일에서 안좋음
        stopAutoOnClick : false // control 부분 (이전,다음,자동재생 등)과 상호작용시 자동작동 중지.
        
    });

    kakaotalkAlert();

    mui();

    tabPage();

    drink();

    popup('catBakery');
    popup('catGirl');
    popup('catRemovable');
    popup('poundcat');
    popup('mindwave');
    popup('poundcatTape');
    popup('dagoTape');
    popup('mbhyTape');
    popup('catuncleTape');
    popup('cutecatTape');

    popup('merrynyang');
    popup('sokamono');
    popup('catcafe');
    popup('thanksToday');
    popup('springFlower');
    popup('dongju');
    popup('springDay');
    popup('checkList');

    popup('moon');
    popup('wonder');
    popup('loveSeason');
    popup('creamLong');
    popup('creamSmall');

    popup('fish');
    popup('duck');
    popup('chicken');
    popup('salmon');

    popup('fishingRod');
    popup('feathers');
    popup('woolBall');

    popup('chaos');
    popup('threeColor');
    popup('cheese');
    popup('milkCow');
    popup('tuxedo');
    popup('persian');

    popup('koreanCheese');
    popup('koreanTuxedo');
    popup('scottishFold');
    popup('mackerel');

    accordionTab('notyOne');
    accordionTab('notyTwo');
    accordionTab('notyThree');
    accordionTab('notyFour');

    accordionTab('FAQone');
    accordionTab('FAQtwo');
    accordionTab('FAQthree');
    accordionTab('FAQfour');
    accordionTab('FAQfive');
    accordionTab('FAQsix');
    accordionTab('FAQseven');
    accordionTab('FAQeight');
    accordionTab('FAQnine');
    accordionTab('FAQten');

    cartAllCheck();

    IDcheck();
    countUpDown();
});


function kakaotalkAlert(){
    $("footer ul li a.kakao").click(function(){
        alert("준비중이니 기다려달라냥");
    });
}

function mui(){
    $(".mui").click(function(){
        $(".muiContainer").toggleClass("active");
    });
}

function tabPage(){
    $(".tab > .tabMenu > li").click(function(){
        var activeMenu = $(this).attr("data-tabMenu");

        $(".tab > .tabMenu > li").removeClass("active");
        $(this).addClass("active");

        $(".tabPage").removeClass("active");
        $("#"+activeMenu).addClass("active");
    });
}


function drink(){
    var detailBtn = $('.drink .btn_detail');
    var closeBtn = $('.drink .btn_close');
    $(detailBtn).click(function(){
        var detailPage = $(this).attr('data-detailName');
        $('#' + detailPage).addClass('activated');
        $(closeBtn).click(function(){
            $('#' + detailPage).removeClass('activated');
        });
    });
}




function popup(btnPopupName){
    $('#'+btnPopupName).click(function(){
        $("#"+btnPopupName+'Popup').fadeIn(400);
    });
    $(".btn_close").click(function(){
        $(".popup").fadeOut(400);
    });
}


function countUpDown(){
    var count = 1;
    var countContainer, countField, priceBase;

    $(".plus").click(function(){
        countContainer = $("#" + $(this).parents("div").attr("id"));
        countField = countContainer.find(".count");
        priceBase = countContainer.find(".price").attr("value");
        if(count < 99){
            ++count;
        }else if(count == 99){
            alert('최대수량 99');
            count = 99;
        }
        countOutput(count, countField);
        price(count, countContainer, priceBase);
    });
    $(".minus").click(function(){
        countContainer = $("#" + $(this).parents("div").attr("id"));
        countField = countContainer.find(".count");
        priceBase = countContainer.find(".price").attr("value");
        if(count > 1){
            count--;
        }else if(count == 1){
            alert('최소수량 1');
            count = 1;
        }
        countOutput(count, countField);
        price(count, countContainer, priceBase);
    });
    $(".btn_Reset").click(function(){
        count = 1;
        countField.val(count);
        countContainer.find(".price").val(priceBase);
    });
}
function countOutput(count, countField){
    $(countField).val(count);
}
function price(count, countContainer, priceBase){
    priceField = countContainer.find(".price");
    $(priceField).val(priceBase * count);
}


function accordionTab(accOpen){
    $('#'+accOpen).click(function(){
        $('#'+accOpen).toggleClass('open');
    });
}


function cartAllCheck(){
    $('#checkAll').click(function(){
        if($('#checkAll').prop('checked')){
            $('input[type=checkbox]').prop('checked',true);
        }else{
            $('input[type=checkbox]').prop('checked',false);
        }
    });
}



function IDcheck(){
    $(".membership fieldset ul li input:button").click(function(){
        alert("사용 가능한 아이디 입니다.");
    });
}

