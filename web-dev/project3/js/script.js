var colorMode = "light";

function changeMode() {
    var bodyElement = document.getElementById("body");
    var modeButton = document.getElementById("modeButton");

    if (colorMode === "dark") {
        colorMode = "light";
        modeButton.textContent = "Dark";
    } else {
        colorMode = "dark";
        modeButton.textContent = "Light";
    }

    bodyElement.setAttribute("data-bs-theme", colorMode);
}