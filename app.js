$('#submit').on("click",function(e){
	e.preventDefault();
	$("#content").html("<p>Loading...</p>")
	loadMovies(grabInfo());
});

$("#search").on("keyup",function(){
	$("#content").html("<p>Loading...</p>")
	loadMovies(grabInfo())
})

function loadMovies(url){
	$.ajax({
		url: url,
		dataType: 'json',
		success: function(data){
			var html;
			data.Search.map(function(result){
				html += "<li class='card'>"
				html+= "<a href='http://www.imdb.com/title/'"+result.imdbID + ">"
				html += "<img src =" + result.Poster + ">"
				html += "</a>"
				html += "<h3 class='title'>" + result.Title + "</h3>"
				html += "<p class='year'>"+result.Year+"</p>"
				return html
			});

			$("#content").html(html)
		}
	})
}

function grabInfo(){
	var url;
	var searchVal = $("#search").val();
	var req = searchVal.split(' ').join('+')
	url = "http://www.omdbapi.com/?s=" + req + "&y=&plot=full&r=json"
	return url
}