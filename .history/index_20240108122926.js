<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="src/styles.css" />
    <title>My weather application</title>
  </head>
  <body>
    <div class="weather-app">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            class="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </header>
      <main>
        <div class="current-weather">
          <div>
            <h1 class="current-city" id="current-city">Paris</h1>
            <p class="current-details">
              <span id="current-date"></span>, moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div class="current-temperature">
            <span class="current-temperature-icon">☀️</span
            ><span class="current-temperature-value">24</span
            ><span class="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="#" target="_blank">Matt Delac</a> and is
          <a href="#" target="_blank"> on GitHub</a> and
          <a href="#" target="_blank">hosted on Netlify</a>
        </p>
      </footer>
    </div>
  </body>
  <script src="src/index.js"></script>
</html>
