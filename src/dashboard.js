// Define a function to update the clock display
function updateTime() {
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

    const timeObj = new Date();
    tzList.forEach(tz => {
        const city = tz.split('/')[1];
        const clockElement = document.getElementById(`${city}Clock`);
        if (clockElement) {
            clockElement.textContent = timeObj.toLocaleTimeString('en-US', {
                timeZone: tz,
                // hour: '2-digit', minute: '2-digit',
            });
        }

    });
}

document.addEventListener('DOMContentLoaded', () => {
    const dateCaptionElement = document.getElementById("currentDate");
    const today = new Date();
    dateCaptionElement.textContent = today.toISOString().split('T')[0];
});
setInterval(updateTime, 1000); // Update every second