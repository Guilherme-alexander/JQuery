//Ajax com jquery

$('button').click(function(){
	
	$.ajax({
		//method:"POST",
		type:'GET',
		url:'https://pokeapi.co/api/v2/pokemon/',
		//url:'conteudo.html',
		data:{'name':'',
				'id':''}

	}).done(function(pokemon){
		
		var valor = $('input[type=number]').val()
		pokemon.id = valor
		pokemon.id.val = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
		
		$('.container').append('<li>'+'<h2>'+pokemon.id +'</h2>'+`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">`+'</li>')

		//
	//* $('.container').append('<li>'+'<h2>'+pokemon.id +'</h2>'+`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png">`+'</li>')*/
		

		$('input[type=submit]').click(function(){
			console.log(pokemon)
		})		
		
	})

});

$('#reset').click(function(){
	location.href="index.html"
})