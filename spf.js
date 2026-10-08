const productButtons = document.querySelectorAll(".add-to-cart");
productButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Tuote on lisätty ostoskoriin!");
    });
});
const uvButton = document.querySelector("#uv-button");
const uvResult = document.querySelector("#spf-recommendation");

uvButton.addEventListener("click", async function() {
    uvResult.textContent = "Ladataan...";

    try {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=60.1699&longitude=24.9384&current=uv_index"
        );

        const data = await response.json();
       console.log(data);

const uvIndex = data.current.uv_index;

if (uvIndex < 3) {
    uvResult.textContent = "Helsingin UV-indeksi: " + uvIndex + " – suositus: SPF 15";
} else if (uvIndex < 6) {
    uvResult.textContent = "Helsingin UV-indeksi: " + uvIndex + " – suositus: SPF 30";
} else {
    uvResult.textContent = "Helsingin UV-indeksi: " + uvIndex + " – suositus: SPF 50";
}

} catch (error) {
    console.error(error);
    uvResult.textContent = "Tietojen lataaminen epäonnistui";
}
});