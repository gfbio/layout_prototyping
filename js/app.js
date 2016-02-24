$(document).foundation();
//console.log(Foundation.version);

$('.title-bar').on('sticky.zf.stuckto:top', function () {
    $(this).addClass('nav-move');
    $('li#brand').addClass('brand-move');
    $('li#brand-placeholder').addClass('brand-placeholder-move');
    $('li#brand').removeClass('logo-top-nav');
    $('li#brand-placeholder').removeClass('logo-top-nav-no-img');

}).on('sticky.zf.unstuckfrom:top', function () {
    $(this).removeClass('nav-move');
    $('li#brand').removeClass('brand-move');
    $('li#brand-placeholder').removeClass('brand-placeholder-move');
    $('li#brand').addClass('logo-top-nav');
    $('li#brand-placeholder').addClass('logo-top-nav-no-img');
});

$('.is-hover a').on('mouseover', function () {
    var idx = $(this).parent().index() + 2;
    $('.info:nth-child(' + idx + ')').addClass('info-visible');
    $('.info:nth-child(' + idx + ')').siblings().removeClass('info-visible');
});
$('.dropdown').on('mouseout', function () {
    $('.info:nth-child(1)').addClass('info-visible').siblings().removeClass('info-visible');
});