// Unfinished: problem in promise (get let/lon for a city)

const APIKey = "92472f27ec7943f06504982b1eb721c7";
const axios = require("axios");
const cityName = process.argv[2];
const flag = process.argv[3];

let measurement = "celcius";
let lat, lon;

function getLatLong(city) {}

async function getUrl(flag) {
  if (!flag) {
    return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;
  } else if (flag === "-f") {
    measurement = "fahrenheit";
    return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
  } else if (flag.includes("-5")) {
    const LatLongAPIKey = "618fd8b3a0754461bf9f09ba5fa69e20";
    const LatLongAPI = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${LatLongAPIKey}&no_annotations=1`;
    axios({ method: "get", url: LatLongAPI })
      .then((res) => {
        lat = res.data.results[0].bounds.northeast.lat;
        lon = res.data.results[0].bounds.northeast.lng;
        console.log(lat, lon);
      })
      .then(() => {
        if (flag === "-5") {
          return `http://api.openweathermap.org/data/2.5/forecast/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`;
        } else if (flag === "-5f") {
          return `http://api.openweathermap.org/data/2.5/forecast/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`;
        }
      })
      .catch((err) => console.log(err));
  } else {
    console.error("Invalid flag: please keep flag blank or use -5, -f, or -5f");
    process.exit();
  }
}

const options = {
  url: getUrl(flag),
  method: "get",
};

axios(options)
  .then((res) => {
    if (flag && flag.includes("-5")) {
      console.log(res);
      console.log(
        `
        The five-day forecast for ${res.data.city.name}, ${
          res.city.country
        } in ${measurement} is as follows:
        ${res.data.list.forEach(
          (day) => `${day.temp}
        `
        )}`
      );
    } else {
      console.log(res);
      console.log(
        `
      It is now ${res.data.main.temp} degrees ${measurement} in ${res.data.name}, ${res.data.sys.country}.
      The current weather conditions are: ${res.data.weather[0].description}.

      Type your command with -f for Fahrenheit, -5 for five-day forecase, or -5f for both.`
      );
    }
  })
  .catch((err) => {
    throw err;
  });
