
async function GetCall() {
    const input = document.querySelector('input');
    const a = input.value
    console.log(a)
    const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=915069c13d8f43d7a39144417251710&q=${a}&aqi=yes`)
    const advice = await responce.json();
    Show(advice);
}

function Show(advice) {
    const name = document.getElementById('id1')
    name.innerText =  advice.location.name+''

    const country = document.getElementById('id2')
    country.innerText = advice.location.country

    const region = document.getElementById('id3')
    region.innerText =  advice.location.region

    const temp = document.getElementById('id4')
    temp.innerText = advice.current.temp_c + '°C'

    const card = document.getElementById('card');
}




async function GetCalla() {
    const input = document.querySelector('input');
    const a = input.value
    console.log(a)
    const responce = await fetch( `http://api.weatherapi.com/v1/current.json?key=915069c13d8f43d7a39144417251710&q=mumbai&aqi=yes`)
    const advice = await responce.json();
    console.log(advice)

    const name = document.getElementById('id1')
    name.innerText =  advice.location.name

    const country = document.getElementById('id2')
    country.innerText = advice.location.country 

    const region = document.getElementById('id3')
    region.innerText =  advice.location.region

    const temp = document.getElementById('id4')
    temp.innerText = advice.current.temp_c + '°C'
}

GetCalla();
