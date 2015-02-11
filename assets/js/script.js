function Redirect()
{
    window.location="main.html";
}

$(document).ready(function(){
	$('.btn').on('click',function(e){
		e.preventDefault();
		var animationName = 'animated slideOutRight';
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
		$('.btn').addClass(animationName).one(animationEnd, function(){
			$(this).removeClass(animationName);	
			$('*').fadeOut('slow').delay(300).fadeIn(Redirect);
		});
	});
});


