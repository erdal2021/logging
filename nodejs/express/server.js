const express = require('express');
const app = express();
const cors = require('cors');
// Setze die LOG_LEVEL Umgebungsvariable, Standardwert ist INFO
const LOG_LEVEL = process.env.LOG_LEVEL || 'INFO';
app.use(cors());
// Middleware für die Log-Ausgabe
function logMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

// Middleware für die Routen-Handler
function infoHandler(req, res, next) {
  if (LOG_LEVEL === 'INFO' || LOG_LEVEL === 'DEBUG' || LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
    console.log('Info-Logmessage');
  }
  res.send('Info route');
}

function debugHandler(req, res, next) {
  if (LOG_LEVEL === 'DEBUG' || LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
    console.log('Debug-Logmessage');
  }
  res.send('Debug route');
}

function errorHandler(req, res, next) {
  if (LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
    console.log('Error-Logmessage');
  }
  res.send('Error route');
}

function fatalHandler(req, res, next) {
  if (LOG_LEVEL === 'FATAL') {
    console.log('Fatal-Logmessage');
  }
  res.send('Fatal route');
}

// Middleware registrieren
app.use(logMiddleware);

// Routen registrieren
app.get('/info', infoHandler);
app.get('/debug', debugHandler);
app.get('/error', errorHandler);
app.get('/fatal', fatalHandler);

// Starte den Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
