import './App.css';
import socket from './utilities/socketConnection'
import { useEffect, useState } from 'react';
import Widget from './Widget';

function App(props) {

  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    //update the state
    socket.on('data', data => {
      setPerformanceData(perf => {
        const perf2 = { ...perf }
        perf2[data.macA] = data;
        return perf2;
      })
    })

    return function cleanup() {
      socket.removeAllListeners("data")
    }
  })

  let widgets = Object.entries(performanceData).map(([key, value]) => <Widget key={key} data={value}></Widget>);

  return (
    <div className="App">
      <h1 className="display-1">
        Performance Monitor
      </h1>
      {widgets}
    </div>
  );
}

export default App;
