$(document).ready(function(){

   $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };

  $('.plus').click(function(){
    $('.biografia').toggleClass('toggle-bio');
    $('body').toggleClass('block-body');
    $(this).toggleClass('toggle-plus');
    
  }).clickToggle(function() {   
    vague.blur();
},
function() {
    vague.unblur();
});


});

var vague = $('#contenedor').Vague({
	intensity:      3,      // Blur Intensity
	forceSVGUrl:    false,   // Force absolute path to the SVG filter,
	// default animation options
    animationOptions: {
      duration: 1000,
      easing: 'linear' // here you can use also custom jQuery easing functions
    }
});



   
