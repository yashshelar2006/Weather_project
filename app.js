// let apikey="f1201f5423af73e2dd13b4452c0fe4e2";
let api="https://api.openweathermap.org/data/2.5/weather?&appid=f1201f5423af73e2dd13b4452c0fe4e2&units=metric&q=";
let searchip=document.querySelector("#city");
let searchbtn=document.querySelector("#serchbtn");


async function weathercheck(city) {
    const response=await fetch(api + city);
    const data=await response.json();
    console.log(data);

    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/s";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".cityname").innerHTML=data.name;

    let weatherimg=document.querySelector(".weathershow");
    if(data.weather[0].main =="Clouds"){
        weatherimg.src="clouds.png";
    }
    if(data.weather[0].main =="Clear"){
        weatherimg.src="clear.png";
    }
    if(data.weather[0].main =="Rain"){
        weatherimg.src="rain.png";
    }
    if(data.weather[0].main =="Snow"){
        weatherimg.src="snow.png";
    }
    if(data.weather[0].main =="Drizzle"){
        weatherimg.src="drizzle.png";
    }
}
searchbtn.addEventListener("click", ()=>{
    weathercheck(searchip.value);
    searchip.value="";
})