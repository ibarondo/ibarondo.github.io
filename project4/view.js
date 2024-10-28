var nameElement = document.getElementById("country");
var codeElement = document.getElementById("code");
var imgElement = document.getElementById("img");

const loadCountry = async (countryName) => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
    const flagData = await response.json();
    const countries = flagData.data;

    const country = countries.find(country => country.name.toLowerCase() === countryName.toLowerCase());

    if (country) {
        nameElement.innerHTML = country.name;
        codeElement.innerHTML = country.iso2;

        imgElement.src = country.flag || "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_the_Vatican_City.svg";
        document.title = `${country.name}`;

    } else {
        nameElement.innerHTML = "Country not found";
    }
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


if (urlParams.has('countryname')) {
    loadCountry(urlParams.get('countryname'));
} else {
    nameElement.innerHTML = "No country specified";
}