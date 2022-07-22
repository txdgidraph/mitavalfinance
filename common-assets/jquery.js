jQuery(document).ready(function(){
								
jQuery(".menu-trigger").click(function(){
				jQuery(".top-navigation-ul").slideToggle(400, function(){
					jQuery(this).toggleClass("nav-expanded").css('display', '')
																});
});		





jQuery(".about-us-H2-mobile").click(function(){
				jQuery(".side-nav-control-div").slideToggle(400, function(){
					jQuery(this).toggleClass("nav-expanded").css('display', '')
																});
});		







});