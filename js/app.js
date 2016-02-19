$(document).foundation();
console.log(Foundation.version);

$('.title-bar').on('sticky.zf.stuckto:top', function(){
    console.log('stuckto');
    $(this).addClass('nav-move');
    $('li#brand').removeClass('logo-top-nav');
    $('li#brand').addClass('brand-move');
    $('li#brand-placeholder').removeClass('logo-top-nav-no-img');
    $('li#brand-placeholder').addClass('brand-placeholder-move');
    // $(this).css('background-color', 'red');
    // TODO: switch to addClass / removeClass, add logo on move

}).on('sticky.zf.unstuckfrom:top', function(){
    console.log('unstuckto');
    $(this).removeClass('nav-move');
    $('li#brand').removeClass('brand-move');
    $('li#brand').addClass('logo-top-nav');
    $('li#brand-placeholder').removeClass('brand-placeholder-move');
    $('li#brand-placeholder').addClass('logo-top-nav-no-img');
    // $(this).css('background-color', 'lime');
})