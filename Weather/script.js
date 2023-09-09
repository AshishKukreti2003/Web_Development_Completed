const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36e65ae8f5msh6b2c76df7c2faffp1ad728jsn99229d532abd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle',options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))