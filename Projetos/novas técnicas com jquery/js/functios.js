$(function(){

	abrirJanela();
	validarClickExit();
	function abrirJanela(){
		$('.btn').click(function(e){
			e.stopPropagation(); 
			$('.bg').fadeIn()
		});
	}

	function validarClickExit(){
		var el = $('body,.closeBtn');
			el.click(function(){
			$('.bg').fadeOut();
		});

		$('form').click(function(e){
			e.stopPropagation()
		})
	}


});
