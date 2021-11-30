const countries = ["Afghanistan","India","Angola","Bangladesh","China","Australia","Pakistan","Nepal","Japan","Germany","Russia"];
let randomNumbers = Math.floor(Math.random()*countries.length);
let randomCountries = countries[randomNumbers];
console.log(randomCountries);

fetch(`https://disease.sh/v3/covid-19/countries/${randomCountries}`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country").innerHTML = data.country;
  document.getElementById("active").innerHTML = data.active.toLocaleString();
  document.getElementById("cases").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical").innerHTML = data.critical.toLocaleString();
  document.getElementById("death").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag").src = data.countryInfo.flag;
});