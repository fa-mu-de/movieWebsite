let API = 'http://www.omdbapi.com/?i=tt3896198&apikey=b0e38366'

$('#searchBtn').click(()=>{

	let searchText = $('#search_input').val()
	search(searchText)
})

function search(searchText){
	axios.get('https://api.themoviedb.org/3/search/multi?api_key=b98a68ff48aabb2835fe4aae0dfb665e&language=en-US&query='+searchText+'&page=1&include_adult=false')
	.then((res)=>{
		
		let data = res.data.results;
		let output = '';

		$.each(data, (index, res)=>{
			output += `

			<div class="item m-3">
				<img src="https://image.tmdb.org/t/p/w220_and_h330_face/${res.poster_path}" width="100%" alt="poster">
				<div class="intro text-center p-3">
					<h4>${res.title||res.name} (${res.media_type.toUpperCase()})</h4>
					<p class="m-0 p-0">
						${res.overview.substr(0,190)}
					</p>
					<a href="#" class="btn btn-link text-warning">Go Info</a>
				</div>
			</div>

			`;
		});

		$('.list').html(output)

	})
	.catch((err)=>{
		console.log(err);
	})
}