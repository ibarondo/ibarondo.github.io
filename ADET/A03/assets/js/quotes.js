// time
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function formatDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

function updateDateTime() {
    const now = new Date();
    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
}

updateDateTime();

setInterval(updateDateTime, 1000);

// quotes
var quoteText = document.getElementById("quoteText");

const loadQuotes = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/advice', {
        method: 'GET',
        headers: { 'X-Api-Key': 'pdgn+Debf+Okzmk4sBzbGw==DO1XNoojybD20FjL' }
    });
    const data = await response.json();

    quoteText.textContent = `${data.advice}.`;
};

window.onload = loadQuotes;

var copyButton = document.getElementById("copyBtn");
var quoteText = document.getElementById("quoteText");


// copy to clipboard
copyButton.onclick = function() {
    var text = quoteText.textContent;
    navigator.clipboard.writeText(text).then(function() {
        copyButton.textContent = "Copied!";
        
        setTimeout(function() {
            copyMessage.style.display = "Copy";
        }, 2000);
    });
};
