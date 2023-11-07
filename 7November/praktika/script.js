const inputCity = document.getElementById("inputCity");
const celci=document.querySelector("select .celci")
const far=document.querySelector("select .far")
const select=document.querySelector("select ")


// const cityValue=inputCity.value
// console.log(cityValue);
fetch(
  `https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=baku`
)
  .then(res => res.json())
  .then(data =>createElement(data.location.name,data.location.country,data.current.temp_c));

function createElement(name, country, temp_c,temp_f) {
//   const cityName = querySelector(".city");
//   const countryName = querySelector(".country");
//   const temp = querySelector(".temp");
let temp
const container=document.querySelector(".container");   
if (select.value===temp_c) {
    temp=temp_c
  }else{
      temp=temp_f
  }
  container.innerHTML=`
  <p class="city">City:${name} </p>
  <p class="country">Country:${country} </p>
  <p class="temp">Weather Forecast:${temp_c} </p>

  `
//   cityName.textContext += name;
//   countryName.textContext += country;
  //   temp_c.textContext = temp_c;
  //   temp_f.textContext = temp_f;



//   document.body.append(name, country, temp);
}
