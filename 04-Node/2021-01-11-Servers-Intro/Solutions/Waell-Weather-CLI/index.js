let axios = require("axios");
let API_key = "b483797261735421c60bde7e5eed3303";
let city = process.argv[2]
//console.log(city);
let option = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`,
    method: "get",
}

axios(option).then(respond => {
    //console.log(respond.data)
    let res = respond.data;
    let temp = (res.main.temp / 32).toFixed(2)
    console.log(`It is now ${temp}°C in ${city}, DE
    The current weather conditions are: ${res.weather[0].description}`)
}).catch(err => console.log(err));
