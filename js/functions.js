const temp_span = document.querySelector('#temp')
const speed_span = document.querySelector('#speed')
const direction_span = document.querySelector('#direction')
const description_span = document.querySelector('#description')
const icon_img = document.querySelector('img')

const url = 'https://api.openweathermap.org/data/2.5/weather?'
const icon_url = 'http://openweathermap.org/img/wh'
const api_key = '4ab61c1a5aedea79e5e6af4336322c37'

const getLocation = () =>{
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.querySelector('#lat').innerHTML = position.coords.latitude.toFixed(3) + ', '
            document.querySelector('#lng').innerHTML = position.coords.longitude.toFixed(3)
            getWeather(position.coords.latitude, position.coords.longitude)
        }),(error => {
            alert(error)
        })
    } else {
        alert("Your browser does not support geolocation!")
    }
}

const getWeather = (lat,lng) => {
    const address = url + 
    'lat=' + lat +
    '&lng=' + lng +
    '&units=metric' + 
    '&appid=' + api_key

    console.log(address)
    axios.get(address)
        .then(response => {
            const json = response.data
            temp_span.innerHTML = json.main.temp + '&#8451'
        }).catch(error => {
            alert(error)
        })
}

getLocation()