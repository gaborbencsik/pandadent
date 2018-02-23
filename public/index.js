$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['home', 'services', 'references', 'pricing', 'contact'],
    sectionsColor: ['#4BBFC3', '#7BAABE', '#4BBFC3', '#7BAABE', '#f2f2f2']
		// menu: '#myMenu'
	});

	$('.hamburger').click(function() {
		$('.navbar').slideToggle("fast", function() {});
	});

	$('.btn.hvr-grow').click(function() {
		$('.navbar').slideToggle("fast", function() {});
	});
});
