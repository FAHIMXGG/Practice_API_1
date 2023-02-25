const all = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
    
}

const loadCountries = (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const region = () => {
    const regionSearch = document.getElementById('region').value;
    console.log(regionSearch)
    loadCountries(regionSearch);
      
}
const button = document.getElementById('asia')
    button.addEventListener('click', function(){
        regionSearch = button.innerText
        console.log(regionSearch);
        loadCountries(regionSearch);
    })
const europe = document.getElementById('europe')
    europe.addEventListener('click', function(){
        regionSearch = europe.innerText
        console.log(regionSearch);
        loadCountries(regionSearch);
    })
const africa = document.getElementById('africa')
    africa.addEventListener('click', function(){
        regionSearch = africa.innerText
        console.log(regionSearch);
        loadCountries(regionSearch);
    })
const americas = document.getElementById('americas')
    americas.addEventListener('click', function(){
        regionSearch = 'ame'
        console.log(regionSearch);
        loadCountries(regionSearch);
    })
const oceania = document.getElementById('oceania')
    oceania.addEventListener('click', function(){
        regionSearch = 'oce'
        console.log(regionSearch);
        loadCountries(regionSearch);
    })
const allC = document.getElementById('all')
    allC.addEventListener('click', function(){
        //regionSearch = 'oce'
        console.log(regionSearch);
        all(regionSearch);
    })


const displayCountries = countries => {
    const countryCon = document.getElementById('all-countries')
    countryCon.innerHTML = '';
    //console.log(countries);
    // for (const country of countries){
    //     console.log(country)
    // }
    countries.forEach(country => {
        //console.log(country)
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3> name: ${country.name.common}</h3>
            <img src="${country.flags.png}">
            <p> cap: ${country.capital ? country.capital[0] : 'no capital'}</p>
            <button onclick="displayCountryDetails('${country.cca2}')">details</button>
        `;
        countryCon.appendChild(countryDiv)
    });
}




const displayCountryDetails = code =>{
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    //console.log(url)
    fetch(url)
    .then (res => res.json())
    .then (data => showCountryDetail(data[0]))
}

const showCountryDetail = country => {
    const detailContainer = document.getElementById('country-detail');
    detailContainer.innerHTML= `
        <h3>Name: ${country.name.common} </h3>
        <img src="${country.flags.png}">
    `;
}

all();
//loadCountries();