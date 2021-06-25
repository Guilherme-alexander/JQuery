$(function(){

// Função abrir e fechar Janela
	abrirJanela();
	validarClickExit();

// Função abrir janela
	function abrirJanela(){
		$('.btn').click(function(e){
			e.stopPropagation(); 
			$('.bg').fadeIn()
		});
	}

// Função fechar Janela
	function validarClickExit(){
		var el = $('body,.closeBtn');
			el.click(function(){
			$('.bg').fadeOut();
		});

		$('form').click(function(e){
			e.stopPropagation();
		});
	}

// Função resetar campos invalidos focado
	$('input[type=text]').focus(function(){
		resetarCampoInvalido($(this));
	});


// Validação de formularios
	$('form#form1').submit(function(e){
		//e.preventDefault();
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=email]').val();

		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
			return false;
		}else if(verificarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'));
			return false;
		}else if(verificarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'));
			return false;
		}else{
			alert('formulario Enviado Com sucesso!')
		}

	});

// aplicando campo invalido
	function aplicarCampoInvalido(el){
		el.css('color','#f00');
		el.css('border','2px solid #f00');
		//el.data('invalido','true');
		el.val('Campo Invalido!');
	}

// Função resetar campos invalidos
function resetarCampoInvalido(el){
	el.css('color','#000');
	el.css('border','1px solid #ccc');
	//el.data('invalido','true');
	el.val('');
}


// função verificar os campos
function verificarNome(nome){
	//contando valores dos caracteres
	if(nome == ''){
		return false;
	}
	var amount = nome.split(' ').length;
	var splitStr = nome.split(' ');
	if(amount >= 2){
		for(var i = 0; i < amount; i++){
			if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
				//console.log('condição ok')

			}else{
				return false;
			}
		}
	}else{
		return false;
	}
}	

	function verificarTelefone(telefone){
		//contando valores dos caracteres
		if(telefone == ''){
			return false;
		}
		if(telefone.match(/^[0-9]{2}[0-9]{4}[0-9]{4}$/) == null){
			return false;
		}
	}

	function verificarEmail(email){
		if(email = ''){
			return false;
		}
		if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.])$/) == null){
			return false;
		}
	}

	

});
