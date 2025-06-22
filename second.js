let searchBar=document.getElementById("searchBox");
let SearchButton=document.getElementById("searchButton");
let city=document.getElementById("cityName");
let Temp=document.getElementById("temp");
let Sky=document.getElementById("sky");
let Wind=document.getElementById("wind");

SearchButton.addEventListener('click',()=>{
    let name=searchBar.value;
    searchWeather(name);
    
    
})

searchWeather=(Name)=>{

    console.log("Hi from search weather",Name);



    fetch("https://api.openweathermap.org/data/2.5/weather?q="+Name+"&appid=3f6a4d62290845ed952d1052f0f05efc&units=metric")
    .then((res)=>{
       
        return res.json()
    }).then ((data)=>{
        UpdatePage(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
let UpdatePage=(Data)=>{

    console.log(Data)
    let WeatherData=Data;
    let temperature=WeatherData.main.temp;
    let NameOfCity=WeatherData.name;
    let clouds=WeatherData.weather[0].description;
    let Speed=WeatherData.wind.speed;
    city.innerHTML=NameOfCity
    Temp.innerHTML=temperature
    Sky.innerHTML=clouds
    Wind.innerHTML="Wind Speed"+Speed+"m/s"


}
    
