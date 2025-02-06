// ThingSpeak API details
const channelID = '2830994'; // Replace with your ThingSpeak channel ID
const readAPIKey = 'CN3YM8GM4OX5OZ8X'; // Replace with your ThingSpeak read API key
const fieldNumber = 1; // Replace with the field number you want to display

// URL for fetching data from ThingSpeak
const url = `https://api.thingspeak.com/channels/${channelID}/fields/${fieldNumber}/last.json?api_key=${readAPIKey}`;

// Fetch data from ThingSpeak
fetch(url)
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('data-container');
        if (data && data.field1) {
            dataContainer.innerHTML = `<p>Field ${fieldNumber} Data: ${data.field1}</p>`;
        } else {
            dataContainer.innerHTML = `<p>No data available.</p>`;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('data-container').innerHTML = `<p>Error loading data.</p>`;
    });