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
        Melbourne: 11,
        Perth: 8,
        Brisbane: 10,
        Vancouver: -7
    };

    // Update the clock for each city
    for (const [city, offset] of Object.entries(cityOffsets)) {
        document.getElementById(`${city}Clock`).textContent = getCityTime(offset);
    }
}

// Call the function to update clocks
updateClocks();
  
setInterval(updateTime, 1000); // Update every second