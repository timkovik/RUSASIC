$( document ).ready(function() {
	var slider = $('.banner');
	var i = 0;

	setInterval(start, 8000);
	function start(){
		console.log('hello' + i);
		$(slider.get(i)).addClass("fadeOut");
		$(slider.get(i)).removeClass("fadeIn");

		i++;

		$(slider.get(i)).removeClass("fadeOut");
		$(slider.get(i)).addClass("fadeIn");

		if(i==3){
			i=-1;
			start();
		}
}
});
