var cardContainer = document.getElementById("cardContainer");

const loadCountries = async (searchTerm = '') => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
    const flagData = await response.json();
    const countries = flagData.data;

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.iso2.toLowerCase() === searchTerm.toLowerCase()
    );

    cardContainer.innerHTML = "";

    if (filteredCountries.length > 0) {
        filteredCountries.forEach(country => {
            const flagUrl = country.flag || `assets/Flag_of_Vatican_City.svg`; // Fallback if flag URL is missing
            cardContainer.innerHTML += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="card rounded-5 my-2">
                <a href="view.html?countryname=${country.name}" target="_blank" style="text-decoration: none; color: inherit;">
                    <div class="imgcontainer">
                        <img src="${flagUrl}" alt="${country.name}" onerror="this.onerror=null;this.src='assets/Flag_of_Vatican_City.svg';">
                    </div>
                    <div class="countryname">${country.name}</div>
                    <div class="countrycode">${country.iso2}</div>
                </a>
            </div>
        </div>`;
        });
    } else {
        cardContainer.innerHTML = `<div class="col-12"><p>No results found for "${searchTerm}".</p></div>`;
    }

};

loadCountries();

function searchCountry() {
    var searchTerm = document.getElementById("searchTerm").value;
    loadCountries(searchTerm);
}