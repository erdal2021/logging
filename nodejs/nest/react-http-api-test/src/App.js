// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [logs, setLogs] = useState({});

  const callApi = async (route) => {
    try {
      const response = await fetch(route);
      const data = await response.text();
      setLogs({ ...logs, [route]: data });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>NESTJS REACT HTTP API Test</h1>
      <div className="buttons">
        <button onClick={() => callApi('http://localhost:3000/info')}>GET /info</button>
        <button onClick={() => callApi('http://localhost:3000/debug')}>GET /debug</button>
        <button onClick={() => callApi('http://localhost:3000/error')}>GET /error</button>
        <button onClick={() => callApi('http://localhost:3000/fatal')}>GET /fatal</button>
      </div>
      <div className="logs">
        {Object.entries(logs).map(([route, log], index) => (
          <div key={index} className="log">
            <h3>{route}</h3>
            <p>{log}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
