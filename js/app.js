$(document).foundation();
console.log(Foundation.version);

$('.title-bar').on('sticky.zf.stuckto:top', function(){
    console.log('stuckto');
    // $(this).css('background-color', 'red');
    // TODO: switch to addClass / removeClass, add logo on move

}).on('sticky.zf.unstuckfrom:top', function(){
    console.log('unstuckto');
    // $(this).css('background-color', 'lime');
})