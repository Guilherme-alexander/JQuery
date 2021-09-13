//Ajax com jquery

$('button').click(function(){
	
	$.ajax({
		//method:"POST",
		type:'GET',
		url:'https://pokeapi.co/api/v2/pokemon/',
		data:{
			'name':'',
			'results':'',
			'count':'',
			'id':''}

	}).done(function(pokemon){


		
		var valor = $('input[type=number]').val()

		pokemon.id = valor
		//pokemon.id.val = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
		
		

		if(pokemon.id == 0){
			alert('value undefined');

		}else{
			$('.container').append('<li>'+'<h2>'+ pokemon.id +'</h2>'+`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">`+'<h2>'+ pokemon.name +'</h2>'+'</li>');

			console.log(pokemon.results)

		}
	

	//* $('.container').append('<li>'+'<h2>'+pokemon.id +'</h2>'+`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png">`+'</li>')*/
		

		$('input[type=submit]').click(function(){
			console.log(pokemon)
		})		
		
	})

});

$('#reset').click(function(){
	location.href="index.html"
})