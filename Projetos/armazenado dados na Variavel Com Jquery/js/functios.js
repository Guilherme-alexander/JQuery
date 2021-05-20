//função jquery .submit();
// +  --> quebra de linha e concatenar.
// <hr/>  -->cria uma linha antes do elemento jogando para baixo.
// return false  --> para não retorna nada não atualizar a pagina. 

$('form').submit(function(){
	var container = $('.container');
	var content = 'nome: '+ $('input[name=nome]').val() +
	'<hr/>e-mail: '+ $('input[name=email]').val() +
	'<hr/>telesfone: '+ $('input[name=telefone]').val();

	container.html(content);
	return false;
})
