
const apikey= "844774d741694d3581983113232712"
const body = document.querySelector("body");
let text;
const search=document.querySelector(".search-bar")
const btn=document.querySelector("button")
btn.addEventListener("click",textfun)

document.querySelector(".search-bar").addEventListener("keydown",function(event){
  if(event.key=="Enter"){
    textfun()
  }
})
 
function textfun(){
   text = search.value;
   weather.fetchweather(text);
}


let weather={
  fetchweather:function(city){
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=" + apikey + "&q=" + city
    )
      .then((res) => {
        try{
          return res.json();
        }
        catch(error){
          console.log(error)
        }
      })
      .then((data) => {
         try {
          this.savedisplayelement(data);
         } catch (error) {
           console.log(error);
         }
        
      })
      .catch((error) => {
        console.log("this", error);
      });
    
  },

    savedisplayelement:function(data){
      const name= data.location.name;
      const Humidity=data.current.humidity;
      const temp_c=data.current.temp_c;
      const icon=data.current.condition.icon;
      const desc=data.current.condition.text;
      const wind = data.current.wind_kph;
      const time=data.location.localtime;
      const imageback="https://source.unsplash.com/1600x900/?" + name;
      console.log(name,Humidity,temp_c,icon,desc,wind,time)
      
      body.setAttribute("background",imageback);
      document.querySelector(".city").innerText="Weather in "+name;
      document.querySelector(".temp").innerText = temp_c;
      document.querySelector(".icon").src=icon;
      console.log(icon)
      document.querySelector(".desc").innerText = desc;
      document.querySelector(".humidity").innerText ="Humidity:  "+Humidity+"%";
      document.querySelector(".wind").innerText = "Wind Speed:  "+wind+"Km/h";
      document.querySelector(".time").innerText = "Date And Time:  "+time;
    
 
  }
 
  
} 






