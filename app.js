$('#submit').on("click",function(e){
	e.preventDefault();
	var searchVal = $("#search").val();
	var req = searchVal.split(' ').join('+')
	var url = "http://www.omdbapi.com/?s=" + req + "&y=&plot=full&r=json"
	// $("#content").html("<p>Loading...</p>")

	$.ajax({
		url: url,
		dataType: 'json',
		success: function(data){
			console.log(data.Search)
			var html;
			data.Search.map(function(result){
				html += "<li class='card'>"
				html+= "<a href='http://www.imdb.com/title/'"+ result.imdbID + ">"
				html += "<img src =" + result.Poster + ">"
				html += "</a>"
				html += "<h3 class='title'>" + result.Title + "</h3>"
				html += "<p class='year'>"+result.Year+"</p>"
				return html
			});

			$("#content").html(html)
		}
	})
});

