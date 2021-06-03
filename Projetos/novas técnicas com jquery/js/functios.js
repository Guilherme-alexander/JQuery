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
			e.stopPropagation();
		})
	}

	$('form#form1').submit(function(e){
		e.preventDefalt()
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=email]').val();

		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'))
		}else{
			alert("formulário enviado com sucesso!")
		}

	});

	function verificarNome(nome){
		//validando Name
		if(nome == ''){
			return false;
		}
		var amount = nome.split(' ').length;
		var splitStr = nome.split(' ');
		if(amount >= 2){
			for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
				}else{
					return false;
				}
			}
		}else{
			return false;
		}
	}

	function aplicarCampoInvalido(el){
		el.css('border','2px solid red');
		el.css('color','red');
		//el.data('invalido','true');
		el.val('campo invalido!')
	}

	function reaetarCampoInvalido(el){
		el.css('border','1px solid #ccc');
		el.css('color','black');
		//el.data('invalido','true');
		el.val('')
	}

	$('input[type=text]').focus(function(){
		reaetarCampoInvalido($(this))
	})

});
