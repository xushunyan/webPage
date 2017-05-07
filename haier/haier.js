
$(function() {

//顶部


    //顶部
    $(".navbox2").css("display","none");
    $('.top_nav_box').css("display","none");
    $('.scoll_bottom').css("display","none");
    $('.scoll_right').css("display","none");
    $('.scoll_linebox').css("display","none");

    //顶部二级下拉导航效果

    $(".nav1a:eq(0)").mouseenter(function(){
        $(".navbox2_1").css("display","block")
        $('.top_nav_box').css("display","block");
        $('.scoll_bottom').css("display","block");
        $('.scoll_right').css("display","block");
        $('.scoll_linebox').css("display","block");

    }).mouseleave(function(){
        $(".navbox2_1").css("display","none")
        $('.top_nav_box').css("display","none");
        $('.scoll_bottom').css("display","none");
        $('.scoll_right').css("display","none");
        $('.scoll_linebox').css("display","none");
    })
    $(".nav1a:eq(1)").mouseenter(function(){
        $(".navbox2_2").css("display","block")
    }).mouseleave(function(){
        $(".navbox2_2").css("display","none")
    })
    $(".nav1a:eq(2)").mouseenter(function(){
        $(".navbox2_3").css("display","block")
    }).mouseleave(function(){
        $(".navbox2_3").css("display","none")
    })
    $(".nav1a:eq(4)").mouseenter(function(){
        $(".navbox2_4").css("display","block")
    }).mouseleave(function(){
        $(".navbox2_4").css("display","none")
    })


    $('.navbox2 li').mouseenter(function (){
        $('.navbox2 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');
    }).mouseleave(function () {
        $(this).removeClass('navbox2_li_active');
    })


    //顶部三级下拉导航效果

    $('.navbox2_1 li:eq(0)').mouseenter(function () {     //当鼠标经过二级导航栏1的时候
        $('.top_nav_box').scrollTop(0);                    //滚动框的滚动距离为0
        $('.top_nav_probox').find('a').css('color','#999999');          //滚动框内的三级导航导航栏颜色先全部还原为灰色
        $('.top_nav_probox').find('span').css('color','#999999');          //滚动框内的三级导航导航栏颜色先全部还原为灰色
        $('.top_nav_probox:eq(0)').find('a').css('color','#005aab');      //滚动框内的相对应得三级导航导航栏颜色高亮显示
        $('.top_nav_probox:eq(0)').find('span').css('color','#005aab');      //滚动框内的相对应得三级导航导航栏颜色高亮显示
        $('.scoll_line').css('top','0');          //设置相对应的右边滚动线条的滚动距离，此时滚动线条的滚动距离为0
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');

    });

    $('.navbox2_1 li:eq(1)').mouseenter(function () {
        $('.top_nav_box').scrollTop(94);
        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox:eq(1)').find('a').css('color','#005aab');
        $('.top_nav_probox:eq(1)').find('span').css('color','#005aab');
        $('.scoll_line').css('top','32px');
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');


    });

    $('.navbox2_1 li:eq(2)').mouseenter(function () {
        $('.top_nav_box').scrollTop(136);
        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox:eq(2)').find('a').css('color','#005aab');
        $('.top_nav_probox:eq(2)').find('span').css('color','#005aab');
        $('.scoll_line').css('top','64px');
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');

    });

    $('.navbox2_1 li:eq(3)').mouseenter(function () {
        $('.top_nav_box').scrollTop(202);
        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox:eq(3)').find('a').css('color','#005aab');
        $('.top_nav_probox:eq(3)').find('span').css('color','#005aab');
        $('.scoll_line').css('top','96px');
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');

    });

    $('.navbox2_1 li:eq(4)').mouseenter(function () {
        $('.top_nav_box').scrollTop(246);
        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox:eq(4)').find('a').css('color','#005aab');
        $('.top_nav_probox:eq(4)').find('span').css('color','#005aab');
        $('.scoll_line').css('top','128px');
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');

    });

    $('.navbox2_1 li:eq(5)').mouseenter(function () {
        $('.top_nav_box').scrollTop(286);
        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox:eq(5)').find('a').css('color','#005aab');
        $('.top_nav_probox:eq(5)').find('span').css('color','#005aab');
        $('.scoll_line').css('top','160px');
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');

    });

    $('.navbox2_1 li:eq(6)').mouseenter(function () {
        $('.top_nav_box').scrollTop(358);
        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox:eq(6)').find('a').css('color','#005aab');
        $('.top_nav_probox:eq(6)').find('span').css('color','#005aab');
        $('.scoll_line').css('top','192px');
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');

    });

    $('.navbox2_1 li:eq(7)').mouseenter(function () {
        $('.top_nav_box').scrollTop(420);
        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox:eq(7)').find('a').css('color','#005aab');
        $('.top_nav_probox:eq(7)').find('span').css('color','#005aab');
        $('.scoll_line').css('top','224px');
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');

    });

    $('.navbox2_1 li:eq(8)').mouseenter(function () {
        $('.top_nav_box').scrollTop(420);
        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox:eq(8)').find('a').css('color','#005aab');
        $('.top_nav_probox:eq(8)').find('span').css('color','#005aab');
        $('.scoll_line').css('top','256px');
        $('.navbox2_1 li').removeClass('navbox2_li_active');
        $(this).addClass('navbox2_li_active');

    });

    $(".top_nav_probox").mouseenter(function () {
        $(this).find('a').css('color','#005aab');
        $(this).find('span').css('color','#005aab');
    }).mouseleave(function () {
        $(this).find('a').css('color','#999999');
        $(this).find('span').css('color','#999999');
    })

    $(".top_nav_probox a").mouseenter(function () {
        $(this).parents('.top_nav_pro').children('a').css('color','#005aab');
        $(this).parents('.top_nav_pro').children('span').css('color','#005aab');
        $(this).css('color','#32beff');
    }).mouseleave(function () {
        $(this).css('color','#005aab');
    })



//   滚动事件
    $('.top_nav_box').scroll( function() {
        var  scTopmax=418;
        var  lineStep=32;
        var  nowTop=$('.top_nav_box').scrollTop();
        var  navNum=9;
        var aa =Math.ceil( nowTop/scTopmax*navNum)-1;
        if(aa<0){aa=0};
        var b=aa*lineStep+'px';
        $('.navbox2_1 li').removeClass('navbox2_li_active').eq(aa).addClass('navbox2_li_active');
        $('.scoll_line').css('top',b);

        $('.top_nav_probox').find('a').css('color','#999999');
        $('.top_nav_probox').find('span').css('color','#999999');
        $('.top_nav_probox').eq(aa).find('a').css('color','#005aab');
        $('.top_nav_probox').eq(aa).find('span').css('color','#005aab');
    });




//banner1
var n=0;
$(".img1").hide().first().show();
$(".banner1_right .tips").hide().first().show();
$(".btns1 li").mouseenter(function(){
    n=$(this).index();
    $(".img1").hide().eq(n).show();
    $(".banner1_right .tips").hide().eq(n).show();
    $(this).addClass("current1").siblings().removeClass("current1")
});
$(".banner1_box").mouseenter(function(){
    $(".left").fadeIn();$(".right").fadeIn();
})
$(".banner1_box").mouseleave(function(){
    $(".left").fadeOut();$(".right").fadeOut();
})
$(".left").click(function(){
    if(n>0){ n=n-1 }else{ n=3 }
    $(".img1").hide().eq(n).show();
    $(".btns1 li").eq(n).addClass("current1").siblings().removeClass("current1");
    $(".banner1_right .tips").hide().eq(n).show();
})
$(".right").click(function(){
    if(n<3){ n=n+1 }else{ n=0}
    $(".img1").hide().eq(n).show();
    $(".btns1 li").eq(n).addClass("current1").siblings().removeClass("current1");
    $(".banner1_right .tips").hide().eq(n).show();	})

//导航
$(".ban").hide().first().show();
$(".nav3").mouseenter(function(){
    n=$(this).index();
    $(this).addClass("current2").siblings().removeClass("current2");
});
$(".nav3").mouseleave(function(){
    n=$(this).index();
    $(this).removeClass("current2");
});
$(".nav3").mouseenter(function(){
    n=$(this).index();
    $(this).addClass("current2").siblings().removeClass("current2");
    $(".ban").hide().eq(n).show();
});

//banner2 洗衣机
$(".banner2_left img").hide().first().show();
$(".btns2 li").mouseenter(function(){
    n=$(this).index();
    $(".banner2_left img").hide().eq(n).show();
    $(this).addClass("current1").siblings().removeClass("current1")
});
//banner2 冰箱
$(".banner2bx_l img").hide().first().show();
$(".btns2bx li").mouseenter(function(){
    n=$(this).index();
    $(".banner2bx_l img").hide().eq(n).show();
    $(this).addClass("current1").siblings().removeClass("current1")
});
//banner2 空调
$(".banner2kt_l img").hide().first().show();
$(".btns2kt li").mouseenter(function(){
    n=$(this).index();
    $(".banner2kt_l img").hide().eq(n).show();
    $(this).addClass("current1").siblings().removeClass("current1")
});
//banner2 热水器
$(".banner2rsq_l2 img").hide().first().show();
$(".btns2rsq li").mouseenter(function(){
    n=$(this).index();
    $(".banner2rsq_l2 img").hide().eq(n).show();
    $(this).addClass("current1").siblings().removeClass("current1")
});
//banner2 厨电
$(".banner2cd_l img").hide().first().show();
$(".btns2cd li").mouseenter(function(){
    n=$(this).index();
    $(".banner2cd_l img").hide().eq(n).show();
    $(this).addClass("current1").siblings().removeClass("current1")
});
//banner3
$(".banner3 img").hide().first().show();
$(".picnav").mouseenter(function(){
    n=$(this).index();
    $(this).addClass("current3").siblings().removeClass("current3");
    $(".banner3 img").hide().eq(n).show();
});
$(".more img").hide().first().show()
$(".more").mouseenter(function(){
    $(".more img").hide().last().show()
    $(".more span").addClass("current4")
});
$(".more").mouseleave(function(){
    $(".more img").hide().first().show()
    $(".more span").removeClass("current4")
});

    


})