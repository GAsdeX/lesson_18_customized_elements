// $('.site-content input').change(function(){
// 	console.log($(this).val());
// });
//
$('.site-content .range .value').html($('.site-content input').val());

var rangeDowm = false;
$('.site-content input').mousedown(function(){
	rangeDowm = true;
}).mouseup(function(){
	rangeDowm = false;
	$('.site-content .range .value').html($('.site-content input').val());
});

$('.site-content input').mousemove(function(){
	if (rangeDowm) {
		$('.site-content .range .value').html($('.site-content input').val());
	}
});
