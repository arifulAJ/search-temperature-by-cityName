
const getWeatherData=city=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=909887c2fd6d9276c61214a0fb09d044`)
    .then(res=>res.json())
    .then(data=>{//uiInput(data)
        document.getElementById('show_city').innerText=data.name||'unknown name ';
    document.getElementById('show_temperature').innerText=data.main.temp;
    document.getElementById('weather_status').innerText=data.weather[0].main;
    document.getElementById('show_city').innerText=data.name
  
    console.log(data)})
    .catch(error =>console.log(error));
 
}

document.getElementById('search_button').addEventListener('click',()=>{
   const cityValue= document.getElementById('city').value;

getWeatherData(cityValue);
        
})

// const uiInput=data=>{
//     document.getElementById('show_city').innerText=data.name||'unknown name ';
//     document.getElementById('show_temperature').innerText=data.main.temp;
//     document.getElementById('weather_status').innerText=data.weather[0].main;
//     document.getElementById('show_city').innerText=data.name
  

// }
