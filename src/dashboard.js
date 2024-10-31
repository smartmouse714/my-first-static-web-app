// Define a function to get the current time in different cities
function getCityTimes() {
    const tzList = [
        "Pacific/Auckland",
        "Europe/London",
        "Europe/Helsinki",
        "Europe/Copenhagen",
        "Australia/Perth",
        "Australia/Brisbane",
        "Australia/Adelaide",
        "America/Vancouver",
        "America/Denver"
    ];

    const cityTimes = {};
    const timeInTimeZone = new Date();
    tzList.forEach(toTimeZone => {
        const city = toTimeZone.split('/')[1];
        cityTimes[city] = timeInTimeZone.toLocaleTimeString('en-US', { timeZone: toTimeZone, hour: '2-digit', minute: '2-digit' });
    });

    return cityTimes;
}

// Define a function to update the clock display
function updateTime() {
    const cityTimes = getCityTimes();
    // Update clock display for each city
    Object.keys(cityTimes).forEach(city => {
        const clockElement = document.getElementById(`${city}Clock`);
        if (clockElement) {
            clockElement.textContent = cityTimes[city];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const dateCaptionElement = document.getElementById("currentDate");
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateCaptionElement.textContent = formattedDate;
});
setInterval(updateTime, 1000*10); // Update every 10 seconds