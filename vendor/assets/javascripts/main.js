jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#top', offset: 400});
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        console.log(target);
        
		$('body').scrollTo(target, 200, {offset: -80, 'axis':'y', easing:'linear'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});
	
    /* ======= Flexslider ======= */
    $('.flexslider').flexslider({
        touch: true,
        directionNav: false
    });

    /* ======= jQuery Placeholder ======= */
    $('input, textarea').placeholder();
    
    /* ======= jQuery FitVids - Responsive Video ======= */
    $("#video-container").fitVids();    

});