export const fetchWeather = (lat, long) => dispatch =>
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=api_key`
  )
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch(changeWeather(json));
    });

export const changeWeather = response => {
  return {
    type: "CHANGE_WEATHER",
    payload: response
  };
};
