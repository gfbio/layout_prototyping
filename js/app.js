$(document).foundation();
//console.log(Foundation.version);

$('.title-bar').on('sticky.zf.stuckto:top', function () {
    $(this).addClass('nav-move');
    $('#brand').addClass('brand-move');
    $('#brand-placeholder').addClass('brand-placeholder-move');
    $('#brand').removeClass('logo-top-nav');
    $('#brand-placeholder').removeClass('logo-top-nav-no-img');

}).on('sticky.zf.unstuckfrom:top', function () {
    $(this).removeClass('nav-move');
    $('#brand').removeClass('brand-move');
    $('#brand-placeholder').removeClass('brand-placeholder-move');
    $('#brand').addClass('logo-top-nav');
    $('#brand-placeholder').addClass('logo-top-nav-no-img');
});

$('.is-hover a').on('mouseover', function () {
    var idx = $(this).parent().index() + 2;
    $('.info:nth-child(' + idx + ')').addClass('info-visible');
    $('.info:nth-child(' + idx + ')').siblings().removeClass('info-visible');
});
$('.dropdown').on('mouseout', function () {
    $('.info:nth-child(1)').addClass('info-visible').siblings().removeClass('info-visible');
});

//$(function() {
//// OPACITY OF BUTTON SET TO 0%
//    $(".roll").css("opacity","0");
//
//// ON MOUSE OVER
//    $(".roll").hover(function () {
//
//// SET OPACITY TO 70%
//            $(this).stop().animate({
//                opacity: .7
//            }, "fast");
//        },
//
//
//// ON MOUSE OUT
//        function () {
//
//// SET OPACITY BACK TO 50%
//            $(this).stop().animate({
//                opacity: 0
//            }, "slow");
//        });
//});