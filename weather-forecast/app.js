window.addEventListener('load', () => {
	let long;
	let lat;
	let temperatureDescription = document.querySelector('.temperature__description');
	let temperatureDegree = document.querySelector('.temperature__degree');
	let locationTimezone = document.querySelector('.location__timezone');
	let locationIcon = document.querySelector('.weather-icon');
	let degreeSection = document.querySelector('.degree-section');
	let degreeSpan = document.querySelector('.degree-section span');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=bf0f5928dd3997d23c6f24601cbad525`;

			fetch(api)
				.then(response => response.json())
				.then(data => {
					const { icon, description } = data.weather[0];
					const { temp } = data.main;

					// Set DOM Elements from the API
					temperatureDegree.textContent = Math.floor(temp);
					temperatureDescription.textContent = description;
					locationTimezone.textContent = data.name;
					locationIcon.innerHTML = `<img src="icons/${icon}.png">`;

					// Change temperature to Kelvin/Celsius
					let kelvin = temp + 273.15;
					degreeSection.addEventListener('click', () => {
						if (degreeSpan.textContent === 'C') {
							degreeSpan.textContent = 'K';
							temperatureDegree.textContent = Math.floor(kelvin);
						}
						else {
							degreeSpan.textContent = 'C';
							temperatureDegree.textContent = Math.floor(temp);
						}
					});
				});
		});
	}
	else {
		h1.textContent = 'Oops, Something Went Wrong!';
	}
});