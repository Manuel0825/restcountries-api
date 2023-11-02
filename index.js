const cardTemplate = function (COUNTRY) {
  return `<div class="card">
              <img id="flag-image" src="${COUNTRY.flags.png}" alt="${COUNTRY.name.common} flag" />
              <h1 class="center">A${COUNTRY.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");
function fetchData () {
fetch('https://restcountries.com/v3.1/all')
  .then( (response) => response.json() )
  .then(data => { 
    data.forEach(COUNTRY => {
      const COUNTRYCARD = cardTemplate(COUNTRY);
      countriesNode.innerHTML += COUNTRYCARD;
    });

    })
    
  }
  fetchData();
