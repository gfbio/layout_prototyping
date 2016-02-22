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
})