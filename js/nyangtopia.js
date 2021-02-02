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
        autoDirection: 'prev', // 자동 재생 시에 정순, 역순(prev) 방식 설정
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
        autoDirection: 'prev', // 자동 재생 시에 정순, 역순(prev) 방식 설정
        autoHover: true, // 슬라이드 오버시 재생 중단 여부 (false: 오버무시) 
        autoDelay: 0, // 자동 재생 전 대기 시간 설정
        pause: 4000, // 자동 재생 시 각 슬라이드 별 노출 시간
        keyboardEnabled : false, //키보드 조작 가능하게 할지 여부 -- 모바일에서 안좋음
        stopAutoOnClick : false // control 부분 (이전,다음,자동재생 등)과 상호작용시 자동작동 중지.
        
    });

    kakaotalkAlert();

    tabPage();

    drink();

    popup();

    accordionTab();

    IDcheck();
});


function kakaotalkAlert(){
    $("footer ul li a.kakao").click(function(){
        alert("준비중이니 기다려달라냥");
    });
}

function tabPage(){
    $(".tab ul li").click(function(){
        var activeMenu = $(this).attr("data-tabMenu");

        $(".tab ul li").removeClass("active");
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




function popup(){
    $("#catBakery button").click(function(e){
        e.preventDefault();
        $("#catBakeryPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#catBakeryPopup").fadeOut(400);
    });

    $("#catGirl button").click(function(e){
        e.preventDefault();
        $("#catGirlPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#catGirlPopup").fadeOut(400);
    });

    $("#catRemovable button").click(function(e){
        e.preventDefault();
        $("#catRemovablePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#catRemovablePopup").fadeOut(400);
    });

    $("#poundcat button").click(function(e){
        e.preventDefault();
        $("#poundcatPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#poundcatPopup").fadeOut(400);
    });
    
    $("#mindwave button").click(function(e){
        e.preventDefault();
        $("#mindwavePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#mindwavePopup").fadeOut(400);
    });

    $("#poundcatTape button").click(function(e){
        e.preventDefault();
        $("#poundcatTapePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#poundcatTapePopup").fadeOut(400);
    });

    $("#dagoTape button").click(function(e){
        e.preventDefault();
        $("#dagoTapePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#dagoTapePopup").fadeOut(400);
    });

    $("#mbhyTape button").click(function(e){
        e.preventDefault();
        $("#mbhyTapePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#mbhyTapePopup").fadeOut(400);
    });

    $("#catuncleTape button").click(function(e){
        e.preventDefault();
        $("#catuncleTapePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#catuncleTapePopup").fadeOut(400);
    });

    $("#cutecatTape button").click(function(e){
        e.preventDefault();
        $("#cutecatTapePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#cutecatTapePopup").fadeOut(400);
    });



    $("#merrynyang button").click(function(e){
        e.preventDefault();
        $("#merrynyangPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#merrynyangPopup").fadeOut(400);
    });

    $("#sokamono button").click(function(e){
        e.preventDefault();
        $("#sokamonoPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#sokamonoPopup").fadeOut(400);
    });

    $("#catcafe button").click(function(e){
        e.preventDefault();
        $("#catcafePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#catcafePopup").fadeOut(400);
    });

    $("#thanksToday button").click(function(e){
        e.preventDefault();
        $("#thanksTodayPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#thanksTodayPopup").fadeOut(400);
    });

    $("#springFlower button").click(function(e){
        e.preventDefault();
        $("#springFlowerPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#springFlowerPopup").fadeOut(400);
    });

    $("#dongju button").click(function(e){
        e.preventDefault();
        $("#dongjuPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#dongjuPopup").fadeOut(400);
    });

    $("#springDay button").click(function(e){
        e.preventDefault();
        $("#springDayPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#springDayPopup").fadeOut(400);
    });

    $("#checkList button").click(function(e){
        e.preventDefault();
        $("#checkListPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#checkListPopup").fadeOut(400);
    });



    $("#moon button").click(function(e){
        e.preventDefault();
        $("#embroideryBagPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#embroideryBagPopup").fadeOut(400);
    });
    
    $("#wonder button").click(function(e){
        e.preventDefault();
        $("#stripeBagPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#stripeBagPopup").fadeOut(400);
    });

    $("#loveSeason button").click(function(e){
        e.preventDefault();
        $("#flowerBagPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#flowerBagPopup").fadeOut(400);
    });

    $("#creamLong button").click(function(e){
        e.preventDefault();
        $("#creamLongPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#creamLongPopup").fadeOut(400);
    });

    $("#creamSmall button").click(function(e){
        e.preventDefault();
        $("#creamSmallPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#creamSmallPopup").fadeOut(400);
    });



    $("#fish button").click(function(e){
        e.preventDefault();
        $("#fishPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#fishPopup").fadeOut(400);
    });

    $("#duck button").click(function(e){
        e.preventDefault();
        $("#duckPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#duckPopup").fadeOut(400);
    });

    $("#chicken button").click(function(e){
        e.preventDefault();
        $("#chickenPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#chickenPopup").fadeOut(400);
    });

    $("#salmon button").click(function(e){
        e.preventDefault();
        $("#salmonPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#salmonPopup").fadeOut(400);
    });



    $("#fishingRod button").click(function(e){
        e.preventDefault();
        $("#fishingRodPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#fishingRodPopup").fadeOut(400);
    });

    $("#feathers button").click(function(e){
        e.preventDefault();
        $("#feathersPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#feathersPopup").fadeOut(400);
    });

    $("#woolBall button").click(function(e){
        e.preventDefault();
        $("#woolBallPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#woolBallPopup").fadeOut(400);
    });



    $("#chaos button").click(function(e){
        e.preventDefault();
        $("#chaosPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#chaosPopup").fadeOut(400);
    });

    $("#threeColor button").click(function(e){
        e.preventDefault();
        $("#threeColorPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#threeColorPopup").fadeOut(400);
    });

    $("#cheese button").click(function(e){
        e.preventDefault();
        $("#cheesePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#cheesePopup").fadeOut(400);
    });

    $("#milkCow button").click(function(e){
        e.preventDefault();
        $("#milkCowPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#milkCowPopup").fadeOut(400);
    });

    $("#tuxedo button").click(function(e){
        e.preventDefault();
        $("#tuxedoPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#tuxedoPopup").fadeOut(400);
    });

    $("#persian button").click(function(e){
        e.preventDefault();
        $("#persianPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#persianPopup").fadeOut(400);
    });


    $("#koreanCheese button").click(function(e){
        e.preventDefault();
        $("#koreanCheesePopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#koreanCheesePopup").fadeOut(400);
    });

    $("#koreanTuxedo button").click(function(e){
        e.preventDefault();
        $("#koreanTuxedoPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#koreanTuxedoPopup").fadeOut(400);
    });

    $("#scottishFold button").click(function(e){
        e.preventDefault();
        $("#scottishFoldPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#scottishFoldPopup").fadeOut(400);
    });

    $("#mackerel button").click(function(e){
        e.preventDefault();
        $("#mackerelPopup").fadeIn(400);
    });
    $(".btn_close").click(function(e){
        e.preventDefault();
        $("#mackerelPopup").fadeOut(400);
    });
}




function accordionTab(){
    $(".notice ul li h3").click(function() {
        if ( $(this).hasClass("active") ) {
            $(this).find(".notice ul li p").stop().slideUp(300);
            $(this).removeClass("active");
        }
        else {
            $(this).find(".notice ul li p").stop().slideDown(300);
            $(this).addClass("active");
        }
    });
}



function IDcheck(){
    $(".membership form fieldset ul li input:button").click(function(){
        alert("사용 가능한 아이디 입니다.");
    });
}

