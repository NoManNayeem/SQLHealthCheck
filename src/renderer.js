document.addEventListener('DOMContentLoaded', () => {
    // Fetch greeting message from the Flask app
    fetch('http://localhost:5000/')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML += `<p>${data}</p>`;
        })
        .catch(err => console.error('Error fetching from Flask:', err));

    // Fetch server information from the Flask app
    fetch('http://localhost:5000/server-info')
        .then(response => response.json())
        .then(data => {
            // Assuming there's an element with the ID 'server-info' to display this data
            const serverInfoDisplay = document.getElementById('server-info');
            if (serverInfoDisplay) {
                serverInfoDisplay.innerText = `Server Name: ${data.ServerName}\nEdition: ${data.Edition}\nVersion: ${data.Version}\nProduct Level: ${data.ProductLevel}`;
            } else {
                console.error('Server Info Display Element not found');
            }
        })
        .catch(err => console.error('Error fetching Server Information:', err));
});
