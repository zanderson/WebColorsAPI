var request = require('request');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
	var colors
	if (!error && response.statusCode == 200) {
		colors = JSON.parse(body)
	}

	var requestedColor = process.argv[2]
	requestedColor = requestedColor.toLowerCase()

	colors.forEach(function(item){
		if (item.name.toLowerCase() === requestedColor) {
			console.log(item.rgb.r + " " + item.rgb.g + " " + item.rgb.b)
		}
	})


})