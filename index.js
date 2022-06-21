async function getPopulation(){
    let response= await fetch("worldpopulation.json")
    let data= await response.json()
    return data
}

function getCountriesHTML(aCountry){
    return`
    <div class="world-stat">
    <div id="a-country-id">${aCountry.Rank}</div>
    <div id="a-country-name">${aCountry.country}</div>
    <div id="a-country-population">${aCountry.population}</div>
    <div id="a-country-world">${aCountry.World}</div>
    </div>
    `
}

function diasplayAllCountries(allCountries){
        console.log(allCountries)
        document.body.innerHTML=
        allCountries.map(aCountry=>getCountriesHTML(aCountry))
}

getPopulation().then(diasplayAllCountries)

