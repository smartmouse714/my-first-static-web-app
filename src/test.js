function getCityTime(offsetHours) {
    const now = new Date();
    // Calculate the local time in milliseconds based on the timezone offset
    return new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (offsetHours * 60 * 60 * 1000)).toLocaleTimeString();
}

function updateClocks() {
    // Define city time offsets in hours
    const cityOffsets = {
        Calgary: -6,
        Copenhagen: 2,
        Helsinki: 11,
        Perth: 8,
        Brisbane: 10,
        Vancouver: -7
    };

    // Update the clock for each city
    for (const [city, offset] of Object.entries(cityOffsets)) {
        document.getElementById(`${city}Clock`).textContent = getCityTime(offset);
    }
}

function updateDate() {
    // Get the element with the id "date-caption"
    const dateCaptionElement = document.getElementById("currentDate");

    // Create a new Date object to get today's date
    const today = new Date();

    // Format the date in a user-friendly format (e.g., YYYY-MM-DD)
    const formattedDate = today.toISOString().split('T')[0];

    // Set the content of the element to today's date
    dateCaptionElement.textContent = formattedDate;
}

document.addEventListener('DOMContentLoaded', () => {
    const dateCaptionElement = document.getElementById("currentDate");
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateCaptionElement.textContent = formattedDate;
  });

// Call the function to update clocks
updateClocks();

setInterval(updateTime, 1000); // Update every second
