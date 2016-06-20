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
				html += "<li>" + result.Title + "</li>"
				return html
			});

			$("#content").html(html)
		}
	})
});
$("#h1").css();
