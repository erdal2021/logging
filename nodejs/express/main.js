// Funktion zum Anzeigen von Logmeldungen unter dem zugehörigen Button
function displayLogMessageUnderButton(message, buttonElement, logContainerId) {
    const logMessage = document.createElement('div');
    logMessage.textContent = message;
    logMessage.className = 'logMessage'; // Hinzufügen einer Klasse für das Styling
    const logContainer = document.getElementById(logContainerId);
    logContainer.appendChild(logMessage); // Anzeigen der Logmeldung im entsprechenden Container
}

// Funktion zum Aufrufen der API-Routen
function callApi(route, buttonElement, logContainerId) {
    fetch(route)
        .then(response => response.text())
        .then(data => displayLogMessageUnderButton(data, buttonElement, logContainerId)) // Anzeigen der Logmeldung unter dem Button
        .catch(error => console.error('Error:', error));
}

// Funktion zum Hinzufügen von Eventlistenern zu den Buttons
function addButtonListeners() {
    document.getElementById('infoBtn').addEventListener('click', function(event) {
        callApi('http://localhost:3000/info', event.target, 'infoLogContainer'); // Übergabe des Container-IDs als Argument
    });

    document.getElementById('debugBtn').addEventListener('click', function(event) {
        callApi('http://localhost:3000/debug', event.target, 'debugLogContainer'); // Übergabe des Container-IDs als Argument
    });

    document.getElementById('errorBtn').addEventListener('click', function(event) {
        callApi('http://localhost:3000/error', event.target, 'errorLogContainer'); // Übergabe des Container-IDs als Argument
    });

    document.getElementById('fatalBtn').addEventListener('click', function(event) {
        callApi('http://localhost:3000/fatal', event.target, 'fatalLogContainer'); // Übergabe des Container-IDs als Argument
    });
}

// Initialisierungsfunktion
function init() {
    addButtonListeners();
}

// Aufrufen der Initialisierungsfunktion, sobald das DOM geladen ist
document.addEventListener('DOMContentLoaded', init);
