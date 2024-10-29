// Define a function to get the current time in different cities
function getCityTimes() {
    const now = new Date();
    const timezoneOffset = now.getTimezoneOffset() * 60000;
  
    // Define city time offsets in hours
    const cityOffsets = {
      Calgary: -6,
      Copenhagen: 2,
      //Melbourne: 11,
      Perth: 8,
      Brisbane: 10,
      Vancouver: -7,
    };
  
    // Calculate city times
    const cityTimes = {};
    Object.keys(cityOffsets).forEach((city) => {
      const offset = cityOffsets[city] * 60 * 60 * 1000;
      cityTimes[city] = now.getTime() + timezoneOffset + offset;
    });
  
    return cityTimes;
  }
  
  // Define a function to update the clock display
  function updateTime() {
    const cityTimes = getCityTimes();
  
    // Update clock display for each city
    Object.keys(cityTimes).forEach((city) => {
      const clockElement = document.getElementById(`${city}Clock`);
      clockElement.textContent = new Date(cityTimes[city]).toLocaleTimeString();
    });
  }
  
setInterval(updateTime, 1000); // Update every second
