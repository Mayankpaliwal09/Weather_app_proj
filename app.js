const app = document.querySelector(".app");
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var cityName = document.querySelector("#name");
var cityTemp = document.querySelector("#temp");
var cityDesc = document.querySelector("#desc");


//sunny, rainy, cloudy, snow, clear, haze
const weatherPics = ['https://images.unsplash.com/photo-1581224463294-908316338239?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
'https://images.unsplash.com/photo-1533874516715-de40f802443a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',   'https://images.unsplash.com/photo-1523997596732-56d0ebb8eacf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1603883055407-968560f7522e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=552&q=80', 'https://images.unsplash.com/photo-1613908614131-77aed27b030b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80']
form.addEventListener("submit",function() {
// submit.addEventListener("click",function() {
  fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?q='+input.value+'&appid=65b54f053ad69d59507dc8b6a6ea14ae')
.then(response => response.json())
.then (data => {
    var name =  `City : ${data['name']} [${data.sys.country}]`;
    var temp = `Temperature : ${data['main']['temp']} K`;
    var desc = `Atmosphere : ${data['weather'][0]['description']}`;
    
    if(data['weather'][0]['main'] == "Clouds")
      {
      app.setAttribute("style", "background-image: url(" + weatherPics[2] + ")");
      } 
    else if(data['weather'][0]['main'] == "Rain") {
        app.setAttribute("style", "background-image: url(" + weatherPics[2] + ")");
      } else if(data['weather'][0]['main'] == "Snow") {
        app.setAttribute("style", "background-image: url(" + weatherPics[3] + ")");
      } else if(data['weather'][0]['main'] == "Clear") {
        app.setAttribute("style", "background-image: url(" + weatherPics[4] + ")");
      } else if(data['weather'][0]['main'] == "Haze") {
        app.setAttribute("style", "background-image: url(" + weatherPics[5] + ")");
      } else if(data['weather'][0]['main'] == "smoke") {
        app.setAttribute("style", "background-image: url(" + weatherPics[6] + ")");
      } 
    
    cityName.innerHTML = name;
    cityTemp.innerHTML = temp;
    cityDesc.innerHTML = desc;
    
    console.log(data);

    input.value = '';
  })

//if doesnt work ie error then catch
.catch(err => alert("error"))
});
//to change to metric => Include this in front of your api key  '&appid=YOUR_API_KEY&units=metric'


//  https://api.openweathermap.org/data/2.5/weather?q={sonipat}&appid={65b54f053ad69d59507dc8b6a6ea14ae}