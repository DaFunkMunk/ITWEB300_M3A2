const apiKey = "feeb1e15933c3850daf212f6801a413c";

function getWeather(city = null) {
  const cityName = city || document.getElementById("cityInput").value;
  if (!cityName) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById("weatherDisplay").innerText = "City not found.";
        return;
      }

      const weatherHTML = `
        <h2>${data.name}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °F</p>
        <p><strong>Min Temp:</strong> ${data.main.temp_min} °F</p>
        <p><strong>Max Temp:</strong> ${data.main.temp_max} °F</p>
        <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
      `;
      document.getElementById("weatherDisplay").innerHTML = weatherHTML;
    })
    .catch(error => {
      document.getElementById("weatherDisplay").innerText = "Error fetching weather.";
      console.error(error);
    });
}

// Detect and fetch weather for user location
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const reverseGeoURL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

      fetch(reverseGeoURL)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0 && data[0].name) {
            const cityName = data[0].name;
            document.getElementById("locationDisplay").innerText = `Detected location: ${cityName}`;
            getWeather(cityName); // auto-fetch weather
          } else {
            document.getElementById("locationDisplay").innerText = "Could not determine city.";
          }
        })
        .catch(err => {
          document.getElementById("locationDisplay").innerText = "Error detecting location.";
          console.error(err);
        });
    },
    error => {
      document.getElementById("locationDisplay").innerText = "Could not detect location.";
    }
  );
}
