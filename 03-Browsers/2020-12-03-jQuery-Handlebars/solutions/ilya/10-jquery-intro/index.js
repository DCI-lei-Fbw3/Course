// Work on your tasks here

$('.submit').click(function(e){
    $('.modal').show();
    e.stopPropagation();
});

$('html').click(function(){
    $('.modal').hide();
});

$('.teapot').click(function(){
    $(this).toggleClass('teapot-rotate');
});

$('.tea-desc').mouseenter(function(){
    $(this).text(
    ["Great tea for a cold night", "Rich in flavours", "Too expensive !"]
    [Math.floor(Math.random() * 3)]);
});
/* other functionality
$('.tea-desc:eq(0)').mouseenter(function(){
    $(this).text("Great tea for a cold night");
});
$('.tea-desc:eq(0)').mouseleave(function(){
    $(this).text("Tea Option 1");
});

$('.tea-desc:eq(1)').mouseenter(function(){
    $(this).text("Rich in flavours");
});
$('.tea-desc:eq(1)').mouseleave(function(){
    $(this).text("Tea Option 2");
});

$('.tea-desc:eq(2)').mouseenter(function(){
    $(this).text("Too expensive !");
});
$('.tea-desc:eq(2)').mouseleave(function(){
    $(this).text("Tea Option 3");
}); 
*/
