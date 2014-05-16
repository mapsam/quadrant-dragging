$(document).ready(function() {
	var win = $(window);
	$( "#grab" ).draggable({ 
		addClasses: true,
		drag: function(event,ui){
			blocks(win.width(),win.height(),$('#grab').position());
		}
	});
	$(window).resize(function(){
		blocks(win.width(),win.height(),$('#grab').position());
	});
});

function blocks(w,h,p) {
	$('#one').css({
		'width': p.left/w*100+'%',
		'height': p.top/h*100+'%'
	});
	$('#two').css({
		'width': ((w-p.left)/w)*100+'%',
		'height': p.top/h*100+'%'
	});
	$('#three').css({
		'width': p.left/w*100+'%',
		'height': ((h-p.top)/h)*100+'%'
	});
	$('#four').css({
		'width': ((w-p.left)/w)*100+'%',
		'height': ((h-p.top)/h)*100+'%'
	});
}